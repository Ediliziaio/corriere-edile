/** Costanti globali del sito — usate da metadata API, JSON-LD, sitemap, feed. */
export const SITE = {
  name: "Corriere Edile",
  url: "https://www.corrieredile.it",
  logo: "https://www.corrieredile.it/logo.png",
  description:
    "Il portale di informazione per imprese edili, artigiani, serramentisti e professionisti delle costruzioni.",
};

/**
 * URL assoluto canonico. Garantisce SEMPRE il trailing slash, coerente con
 * `trailingSlash: true` in next.config e con il rel=canonical delle pagine.
 * Va usato in ogni JSON-LD/og:url: emettere la variante senza slash fa
 * scoprire a Google URL duplicati che poi rispondono 308 (crawl budget sprecato
 * e segnali di canonicalizzazione contraddittori).
 */
export function absUrl(path = "/"): string {
  const p = path.startsWith("/") ? path : `/${path}`;
  return `${SITE.url}${p.endsWith("/") ? p : `${p}/`}`;
}

/** Serializza un blocco JSON-LD per l'inline in una server page. */
export function jsonLd(data: Record<string, unknown> | Record<string, unknown>[]): string {
  return JSON.stringify(data);
}

/** JSON-LD globale: NewsMediaOrganization + WebSite con SearchAction (layout). */
export const GLOBAL_JSONLD = [
  {
    "@context": "https://schema.org",
    "@type": "NewsMediaOrganization",
    "@id": `${SITE.url}/#organization`,
    name: SITE.name,
    url: absUrl("/"),
    logo: { "@type": "ImageObject", url: SITE.logo },
    description: SITE.description,
    /*
      sameAs: elencare SOLO profili realmente esistenti e di proprietà della testata.
      Verificato il 2026-07-28: linkedin.com/company/corrieredile e x.com/corrieredile
      rispondevano 404 → dichiararli è un segnale di entità contraddittorio per Google
      (ostacola il knowledge panel invece di aiutarlo). Riattivare gli URL man mano
      che i profili vengono creati e verificati.
    */
  },
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE.url}/#website`,
    name: SITE.name,
    url: absUrl("/"),
    inLanguage: "it-IT",
    publisher: { "@id": `${SITE.url}/#organization` },
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
