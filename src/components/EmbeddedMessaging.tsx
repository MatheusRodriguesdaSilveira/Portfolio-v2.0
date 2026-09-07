"use client";

import Script from "next/script";

declare global {
  interface Window {
    initEmbeddedMessaging?: () => void;
    embeddedservice_bootstrap?: {
      settings: { language: string };
      init: (
        orgId: string,
        deploymentName: string,
        siteUrl: string,
        options: { scrt2URL: string },
      ) => void;
    };
  }
}

export default function EmbeddedMessaging() {
  return (
    <>
      <Script id="embedded-messaging-init" strategy="afterInteractive">
        {`
          function initEmbeddedMessaging() {
            try {
              embeddedservice_bootstrap.settings.language = 'pt_BR';

              embeddedservice_bootstrap.init(
                '00DHr00000MBn8m',
                'Agentforce_Guigo',
                'https://ge1743008106359.my.site.com/ESWAgentforceGuigo1778522582243',
                {
                  scrt2URL: 'https://ge1743008106359.my.salesforce-scrt.com'
                }
              );
            } catch (err) {
              console.error('Error loading Embedded Messaging: ', err);
            }
          }
        `}
      </Script>
      <Script
        src="https://ge1743008106359.my.site.com/ESWAgentforceGuigo1778522582243/assets/js/bootstrap.min.js"
        strategy="afterInteractive"
        onLoad={() => {
          window.initEmbeddedMessaging?.();
        }}
      />
    </>
  );
}
