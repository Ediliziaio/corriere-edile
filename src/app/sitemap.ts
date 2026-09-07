import type { MetadataRoute } from "next";
import { SITE } from "@/lib/site";
import { ALL_ARTICLES } from "@/data/fullArticles";
import { CATEGORY_LIST } from "@/lib/categories";
import { AUTHORS } from "@/lib/authors";

export const dynamic = "force-static";

/*
  lastmod DEVE essere veritiero.
  Google usa il lastmod solo se lo giudica affidabile: se trova date che
  cambiano a ogni build senza che il contenuto sia cambiato (il classico
  `new Date()`), smette di fidarsi e ignora il lastmod dell'INTERA sitemap.
  Qui ogni data e' derivata dal contenuto reale:
  - articolo   -> data di ultimo aggiornamento dell'articolo
  - categoria  -> articolo piu' recente di quella categoria
  - autore     -> articolo piu' recente firmato da quell'autore
  - home       -> articolo piu' recente del sito
  - pagine fisse -> data reale dell'ultima revisione redazionale
*/

/** Data di revisione delle pagine istituzionali/legali. Aggiornare a mano quando cambiano. */
const LEGAL_LAST_REVIEW = "2026-07-21";

function newest(dates: string[]): Date {
  const t = dates.map((d) => +new Date(d)).filter((n) => !Number.isNaN(n));
  return new Date(t.length ? Math.max(...t) : Date.parse(LEGAL_LAST_REVIEW));
}

export default function sitemap(): MetadataRoute.Sitemap {
  const siteNewest = newest(ALL_ARTICLES.map((a) => a.updated));

  const articles: MetadataRoute.Sitemap = ALL_ARTICLES.map((a) => ({
    url: `${SITE.url}/articolo/${a.slug}/`,
    lastModified: new Date(a.updated),
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  const categories: MetadataRoute.Sitemap = CATEGORY_LIST.map((c) => {
    const inCat = ALL_ARTICLES.filter((a) => a.category === c.name);
    return {
      url: `${SITE.url}/categoria/${c.slug}/`,
      lastModified: newest(inCat.map((a) => a.updated)),
      changeFrequency: "weekly" as const,
      priority: 0.7,
    };
  });

  const authors: MetadataRoute.Sitemap = AUTHORS.map((au) => {
    const byAuthor = ALL_ARTICLES.filter((a) => a.author.name === au.name);
    return {
      url: `${SITE.url}/autore/${au.slug}/`,
      lastModified: newest(byAuthor.map((a) => a.updated)),
      changeFrequency: "weekly" as const,
      priority: 0.6,
    };
  });

  const staticPages: MetadataRoute.Sitemap = [
    { path: "norme-tecniche", priority: 0.8, last: siteNewest },
    { path: "quale-titolo-edilizio", priority: 0.8, last: siteNewest },
    { path: "fiere-edilizia", priority: 0.7, last: siteNewest },
    { path: "archivio", priority: 0.6, last: siteNewest },
    { path: "chi-siamo", priority: 0.5, last: new Date(LEGAL_LAST_REVIEW) },
    { path: "contatti", priority: 0.5, last: new Date(LEGAL_LAST_REVIEW) },
  ].map((p) => ({
    url: `${SITE.url}/${p.path}/`,
    lastModified: p.last,
    changeFrequency: "monthly" as const,
    priority: p.priority,
  }));

  return [
    {
      url: `${SITE.url}/`,
      lastModified: siteNewest,
      changeFrequency: "daily",
      priority: 1,
    },
    ...categories,
    ...articles,
    ...authors,
    ...staticPages,
  ];
}
