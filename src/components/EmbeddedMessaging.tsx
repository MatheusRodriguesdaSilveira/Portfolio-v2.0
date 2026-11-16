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
const BUTTON_FALLBACK_MS = 3000;
const CLEAR_SESSION_TIMEOUT_MS = 4000;

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
      utilAPI?: {
        launchChat: () => Promise<unknown>;
      };
      userVerificationAPI?: {
        clearSession: (shouldEndConversation?: boolean) => Promise<unknown>;
      };
      prechatAPI?: {
        setHiddenPrechatFields: (fields: Record<string, string>) => void;
      };
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

    // launchChat() silently does nothing if called before the widget has
    // created its button, so wait for that (with a short fallback after Ready).
    const done = () => {
      window.clearTimeout(timer);
      resolve();
    };
    window.addEventListener("onEmbeddedMessagingButtonCreated", done, {
      once: true,
    });
    window.addEventListener(
      "onEmbeddedMessagingReady",
      () => window.setTimeout(done, BUTTON_FALLBACK_MS),
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

/**
 * Which demo agent should answer. Each card has its own Agentforce agent; the
 * value travels as the hidden pre-chat field "Cenario" -> channel parameter ->
 * Omni-Channel flow, which routes the conversation to that agent. Without a
 * scenario the flow routes to the general "Portfolio Demo" agent.
 */
export type AgentScenario =
  | "consorcio"
  | "credito"
  | "sdr"
  | "ti"
  | "evento"
  | "food";

// A conversation is bound to the agent it was routed to, and the widget
// resumes the last conversation on every page load. We remember which agent
// the current conversation belongs to and, when the visitor picks another card
// (or ended the chat), end it with clearSession() so a new one is routed.
const CONVERSATION_AGENT_KEY = "portfolio-chat-agent";

function storageGet(key: string): string | null {
  try {
    return window.localStorage.getItem(key);
  } catch {
    return null;
  }
}

function storageSet(key: string, value: string | null) {
  try {
    if (value === null) window.localStorage.removeItem(key);
    else window.localStorage.setItem(key, value);
  } catch {
    // Storage blocked (private mode etc.): every click then starts fresh.
  }
}

let endListenerAttached = false;
function forgetAgentWhenConversationEnds() {
  if (endListenerAttached) return;
  endListenerAttached = true;
  window.addEventListener("onEmbeddedMessagingConversationClosed", () =>
    storageSet(CONVERSATION_AGENT_KEY, null),
  );
}

const sleep = (ms: number) =>
  new Promise<void>((resolve) => window.setTimeout(resolve, ms));

/**
 * Ends whatever conversation the widget would resume (no-op if there is none).
 * clearSession() can hang while the widget is still restoring a conversation
 * right after page load, so each attempt is time-boxed and retried.
 */
async function endCurrentConversation() {
  const api = window.embeddedservice_bootstrap?.userVerificationAPI;
  if (!api) return;
  for (let attempt = 0; attempt < 3; attempt++) {
    const finished = await Promise.race([
      api.clearSession(true).then(
        () => true,
        () => true,
      ),
      sleep(CLEAR_SESSION_TIMEOUT_MS).then(() => false),
    ]);
    if (finished) return;
  }
}

/** Loads the widget if needed and opens the chat with the card's agent. */
export async function openAgentChat(
  lang: "pt" | "en",
  scenario?: AgentScenario,
): Promise<void> {
  const wantedAgent = scenario ?? "geral";
  await loadAgentChat(lang === "pt" ? "pt_BR" : "en_US");
  forgetAgentWhenConversationEnds();

  const bootstrap = window.embeddedservice_bootstrap;
  if (storageGet(CONVERSATION_AGENT_KEY) !== wantedAgent) {
    await endCurrentConversation();
    storageSet(CONVERSATION_AGENT_KEY, wantedAgent);
  }
  bootstrap?.prechatAPI?.setHiddenPrechatFields({ Cenario: scenario ?? "" });
  await bootstrap?.utilAPI?.launchChat();
}
