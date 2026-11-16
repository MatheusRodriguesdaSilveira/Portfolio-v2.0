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
  "Matheus Rodrigues da Silveira — Salesforce Partner FDE (Forward Deployed Engineer) | Desenvolvedor & Consultor Agentforce | 2x Salesforce Certified. Agentes de IA em produção com Apex, Flows, LWC, Data Cloud e WhatsApp.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Matheus Silveira | Agentforce Engineer · Salesforce Partner FDE",
  description: siteDescription,
  keywords: [
    "Matheus Rodrigues da Silveira",
    "Agentforce",
    "Salesforce",
    "Agentforce Specialist",
    "Salesforce Partner FDE",
    "Forward Deployed Engineer",
    "Agentforce Consultant",
    "Data Cloud",
    "Data 360 Consultant",
    "Flow Builder",
    "Apex",
    "Lightning Web Components",
    "Desenvolvedor Salesforce",
    "Agentes de IA",
    "WhatsApp Business API",
    "Marketing Cloud",
    "Gentrop",
  ],
  authors: [{ name: "Matheus Rodrigues da Silveira", url: siteUrl }],
  alternates: {
    canonical: siteUrl,
  },
  icons: {
    icon: "/favicon.png",
  },
  openGraph: {
    title: "Matheus Silveira | Agentforce Engineer · Salesforce Partner FDE",
    description: siteDescription,
    url: siteUrl,
    siteName: "Matheus Silveira — Portfólio",
    images: [{ url: "/matheus.webp", width: 800, height: 800 }],
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Matheus Silveira | Agentforce Engineer · Salesforce Partner FDE",
    description: siteDescription,
    images: ["/matheus.webp"],
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
  jobTitle: "Agentforce Engineer · Salesforce Partner FDE",
  description: siteDescription,
  url: siteUrl,
  image: `${siteUrl}/matheus.webp`,
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
    "WhatsApp Business Platform",
    "Marketing Cloud",
    "Forward Deployed Engineering",
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
