import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
// import EmbeddedMessaging from "@/components/EmbeddedMessaging"; // see note below, temporarily disabled
import { LanguageProvider } from "@/contexts/LanguageContext";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const siteUrl = "https://portfolio-matheussilveira.vercel.app";
const siteDescription =
  "Matheus Rodrigues da Silveira — Analista Agentforce Jr | Desenvolvedor Salesforce & Agentforce | 2x Salesforce Certified. Agentes autônomos de IA, Data Cloud e automação.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Matheus Silveira | Analista Agentforce Jr",
  description: siteDescription,
  icons: {
    icon: "/favicon.png",
  },
  openGraph: {
    title: "Matheus Silveira | Analista Agentforce Jr",
    description: siteDescription,
    url: siteUrl,
    siteName: "Matheus Silveira — Portfólio",
    images: ["/matheus.png"],
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Matheus Silveira | Analista Agentforce Jr",
    description: siteDescription,
    images: ["/matheus.png"],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  minimumScale: 1,
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Matheus Rodrigues da Silveira",
  jobTitle: "Analista Agentforce Jr",
  description: siteDescription,
  url: siteUrl,
  image: `${siteUrl}/matheus.png`,
  worksFor: {
    "@type": "Organization",
    name: "Gentrop",
  },
  alumniOf: [
    {
      "@type": "CollegeOrUniversity",
      name: "UMESP - Universidade Metodista de São Paulo",
    },
    {
      "@type": "EducationalOrganization",
      name: "Etec Lauro Gomes",
    },
  ],
  knowsAbout: [
    "Agentforce",
    "Salesforce",
    "Data Cloud",
    "Flow Builder",
    "Apex",
    "Lightning Web Components",
  ],
  sameAs: [
    "https://github.com/MatheusRodriguesdaSilveira",
    "https://www.linkedin.com/in/matheus-rodrigues-da-silveira/",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <head>
        <link rel="icon" type="image/png" href="/favicon.png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-zinc-900 font-thin top-0 z-50`}
        suppressHydrationWarning
      >
        <LanguageProvider>
          {children}
          {/* Widget temporarily disabled: the Salesforce Embedded Service
              deployment is stuck in a login redirect loop (ERR_TOO_MANY_REDIRECTS),
              firing on every page load for every visitor with no working chat
              in return. Re-enable once the guest login issue is fixed on the
              Salesforce side. */}
          {/* <EmbeddedMessaging /> */}
        </LanguageProvider>
        <Analytics />
      </body>
    </html>
  );
}
