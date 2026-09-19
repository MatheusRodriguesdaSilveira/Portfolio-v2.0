import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";
import EmbeddedMessaging from "@/components/EmbeddedMessaging";
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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="icon" type="image/png" href="/favicon.png" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-zinc-900 font-thin top-0 z-50`}
      >
        <LanguageProvider>
          {children}
          <EmbeddedMessaging />
        </LanguageProvider>
      </body>
    </html>
  );
}
