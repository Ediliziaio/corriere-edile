import type { MetadataRoute } from "next";
import { SITE } from "@/lib/site";
import { ALL_ARTICLES } from "@/data/fullArticles";
import { CATEGORY_LIST } from "@/lib/categories";
import { AUTHORS } from "@/lib/authors";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const articles: MetadataRoute.Sitemap = ALL_ARTICLES.map((a) => ({
    url: `${SITE.url}/articolo/${a.slug}/`,
    lastModified: new Date(a.updated),
    changeFrequency: "weekly",
    priority: 0.8,
  }));

  const categories: MetadataRoute.Sitemap = CATEGORY_LIST.map((c) => ({
    url: `${SITE.url}/categoria/${c.slug}/`,
    lastModified: new Date(),
    changeFrequency: "daily",
    priority: 0.7,
  }));

  // Pagine autore: archivio firme, base E-E-A-T e profondita' di crawl
  const authors: MetadataRoute.Sitemap = AUTHORS.map((a) => ({
    url: `${SITE.url}/autore/${a.slug}/`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 0.6,
  }));

  const staticPages: MetadataRoute.Sitemap = [
    { path: "chi-siamo", priority: 0.5 },
    { path: "contatti", priority: 0.5 },
    { path: "privacy-policy", priority: 0.3 },
    { path: "cookie-policy", priority: 0.3 },
    { path: "termini", priority: 0.3 },
  ].map((p) => ({
    url: `${SITE.url}/${p.path}/`,
    lastModified: new Date("2026-07-21"),
    changeFrequency: "monthly" as const,
    priority: p.priority,
  }));

  return [
    {
      url: `${SITE.url}/`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1,
    },
    ...categories,
    ...articles,
    ...authors,
    ...staticPages,
  ];
}
