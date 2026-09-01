import type { Metadata } from "next";
import { Playfair_Display, Source_Sans_3 } from "next/font/google";
import "./globals.css";
import { SITE, GLOBAL_JSONLD, jsonLd } from "@/lib/site";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import CookieBanner from "@/components/CookieBanner";
import ScrollToTop from "@/components/ScrollToTop";

// Font editoriali via next/font (self-hosted, zero layout shift)
const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  style: ["normal", "italic"],
  variable: "--font-serif",
});
const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: "Corriere Edile | Normativa, adempimenti e tecnica di cantiere",
    template: "%s | Corriere Edile",
  },
  description: SITE.description,
  robots: { index: true, follow: true, "max-image-preview": "large" },
  alternates: {
    canonical: "/",
    types: { "application/rss+xml": `${SITE.url}/feed.xml` },
    languages: { it: "/", "x-default": "/" },
  },
  openGraph: {
    type: "website",
    siteName: SITE.name,
    locale: "it_IT",
    title: "Corriere Edile | Normativa, adempimenti e tecnica di cantiere",
    description:
      "Come si applicano le norme in cantiere: adempimenti, posa a regola d'arte, prezzi dei materiali, gare d'appalto e fiere di settore.",
    url: SITE.url,
    images: [{ url: "/images/og-default.jpg", width: 1200, height: 630, alt: "Corriere Edile — il portale delle costruzioni" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Corriere Edile | La tecnica del cantiere",
    description: "Normativa applicata, adempimenti e posa a regola d'arte per imprese edili, serramentisti e progettisti.",
    images: ["/images/og-default.jpg"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "16x16 32x32 48x48" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },
  manifest: "/manifest.webmanifest",
  other: { "theme-color": "#16345C" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="it" className={`${playfair.variable} ${sourceSans.variable}`}>
      <body className="flex min-h-screen flex-col bg-white font-sans text-foreground antialiased">
        {/* JSON-LD globale: Organization + WebSite su tutte le pagine */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(GLOBAL_JSONLD) }} />
        {/* Skip link per accessibilità da tastiera */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:bg-gold-500 focus:px-4 focus:py-2 focus:text-sm focus:font-bold focus:text-navy-900"
        >
          Salta al contenuto principale
        </a>
        <ScrollToTop />
        <Header />
        <main id="main-content" className="flex-1">{children}</main>
        <Footer />
        {/* Banner consenso cookie GDPR — globale, persistito in localStorage */}
        <CookieBanner />
      </body>
    </html>
  );
}
