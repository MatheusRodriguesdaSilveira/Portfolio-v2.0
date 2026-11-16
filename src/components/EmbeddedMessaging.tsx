"use client";

/**
 * On-demand loader for the "Portfolio Demo" Agentforce agent (Salesforce
 * Enhanced Chat / Messaging for In-App and Web).
 *
 * Nothing is fetched until a visitor clicks a "talk to the agent" button:
 * the previous site-wide widget loaded on every page view and kept firing
 * failed requests whenever the Salesforce side was down. Here the bootstrap
 * script is injected on the first click only, and a failure just surfaces an
 * error state on the button instead of affecting the rest of the page.
 *
 * Values come from Setup > Embedded Service Deployments > Portfolio_Web >
 * Install Code Snippet in Matheus's personal Developer Edition org. They are
 * public by design (the same snippet is meant to be served on the website).
 */

const ORG_ID = "00DgK00000fQjQ5";
const DEPLOYMENT_NAME = "Portfolio_Web";
const SITE_URL =
  "https://orgfarm-72b4ae14b8-dev-ed.develop.my.site.com/ESWPortfolioWeb1794793460717";
const SCRT2_URL =
  "https://orgfarm-72b4ae14b8-dev-ed.develop.my.salesforce-scrt.com";
const READY_TIMEOUT_MS = 20000;

declare global {
  interface Window {
    embeddedservice_bootstrap?: {
      settings: { language: string };
      init: (
        orgId: string,
        deploymentName: string,
        siteUrl: string,
        options: { scrt2URL: string },
      ) => void;
      utilAPI?: { launchChat: () => Promise<unknown> };
    };
  }
}

let readyPromise: Promise<void> | null = null;

function loadAgentChat(language: string): Promise<void> {
  if (readyPromise) return readyPromise;

  readyPromise = new Promise<void>((resolve, reject) => {
    const timer = window.setTimeout(
      () => reject(new Error("Agent chat did not become ready in time")),
      READY_TIMEOUT_MS,
    );

    window.addEventListener(
      "onEmbeddedMessagingReady",
      () => {
        window.clearTimeout(timer);
        resolve();
      },
      { once: true },
    );

    const script = document.createElement("script");
    script.src = `${SITE_URL}/assets/js/bootstrap.min.js`;
    script.async = true;
    script.onload = () => {
      try {
        const bootstrap = window.embeddedservice_bootstrap;
        if (!bootstrap) throw new Error("embeddedservice_bootstrap missing");
        bootstrap.settings.language = language;
        bootstrap.init(ORG_ID, DEPLOYMENT_NAME, SITE_URL, {
          scrt2URL: SCRT2_URL,
        });
      } catch (err) {
        window.clearTimeout(timer);
        reject(err);
      }
    };
    script.onerror = () => {
      window.clearTimeout(timer);
      reject(new Error("Failed to load the agent chat script"));
    };
    document.body.appendChild(script);
  }).catch((err) => {
    // Allow a later click to retry from scratch.
    readyPromise = null;
    throw err;
  });

  return readyPromise;
}

/** Loads the widget (first call only) and opens the chat window. */
export async function openAgentChat(lang: "pt" | "en"): Promise<void> {
  await loadAgentChat(lang === "pt" ? "pt_BR" : "en_US");
  await window.embeddedservice_bootstrap?.utilAPI?.launchChat();
}
