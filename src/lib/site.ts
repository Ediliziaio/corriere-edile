/** Costanti globali del sito — usate da metadata API, JSON-LD, sitemap, feed. */
export const SITE = {
  name: "Corriere Edile",
  url: "https://www.corriereadile.it",
  logo: "https://www.corriereadile.it/logo.png",
  description:
    "Il portale di informazione per imprese edili, artigiani, serramentisti e professionisti delle costruzioni.",
};

/** Serializza un blocco JSON-LD per l'inline in una server page. */
export function jsonLd(data: Record<string, unknown> | Record<string, unknown>[]): string {
  return JSON.stringify(data);
}

/** JSON-LD globale: NewsMediaOrganization + WebSite con SearchAction (layout). */
export const GLOBAL_JSONLD = [
  {
    "@context": "https://schema.org",
    "@type": "NewsMediaOrganization",
    name: SITE.name,
    url: SITE.url,
    logo: { "@type": "ImageObject", url: SITE.logo },
    description: SITE.description,
    sameAs: [
      "https://www.facebook.com/corriereadile",
      "https://www.linkedin.com/company/corriereadile",
      "https://www.instagram.com/corriereadile",
      "https://x.com/corriereadile",
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE.name,
    url: SITE.url,
    inLanguage: "it-IT",
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${SITE.url}/cerca?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  },
];
