import type { MetadataRoute } from "next";
import { SITE } from "@/lib/site";

export const dynamic = "force-static";

/*
  Crawler AI dichiarati esplicitamente: senza un gruppo dedicato seguirebbero
  comunque "*", ma l'allow esplicito rende inequivocabile che i contenuti sono
  citabili dai motori generativi (GEO) e previene blocchi introdotti per errore.
  NB: un bot con un proprio gruppo IGNORA il gruppo "*", quindi le regole vanno
  ripetute qui dentro.
*/
const AI_CRAWLERS = [
  "GPTBot",
  "OAI-SearchBot",
  "ChatGPT-User",
  "ClaudeBot",
  "Claude-User",
  "anthropic-ai",
  "PerplexityBot",
  "Perplexity-User",
  "Google-Extended",
  "Applebot-Extended",
  "CCBot",
  "Meta-ExternalAgent",
  "Bytespider",
  "cohere-ai",
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/cerca"],
      },
      ...AI_CRAWLERS.map((userAgent) => ({
        userAgent,
        allow: "/",
        disallow: ["/cerca"],
      })),
    ],
    sitemap: `${SITE.url}/sitemap.xml`,
    host: SITE.url,
  };
}
