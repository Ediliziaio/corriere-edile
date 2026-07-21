/**
 * Modello dati articolo completo — Corriere Edile
 * In produzione questi dati arriverebbero dal CMS headless.
 *
 * Ogni articolo è progettato per SEO/GEO/AEO:
 * - metaTitle ≤ 60 caratteri, metaDescription ≤ 155 caratteri (SERP)
 * - summary = box answer-first (featured snippet / AI Overview)
 * - body con h2[id] per l'indice e gerarchia semantica pulita
 * - faqs → schema FAQPage
 */

export interface Faq {
  q: string;
  a: string;
}

export type Block =
  | { type: "p"; text: string }
  | { type: "h2"; text: string; id: string }
  | { type: "h3"; text: string }
  | { type: "list"; items: string[] }
  | { type: "quote"; text: string; author?: string }
  | { type: "table"; caption?: string; head: string[]; rows: string[][] };

export interface ArticleAuthor {
  name: string;
  role: string;
  bio: string;
}

export interface FullArticle {
  slug: string;
  /** Una delle categorie di CATEGORIES in src/data/articles.ts */
  category: string;
  title: string;
  /** SEO: max 60 caratteri */
  metaTitle: string;
  /** SEO: max 155 caratteri */
  metaDescription: string;
  keywords: string[];
  subtitle: string;
  /** Estratto breve per le card (1-2 frasi) */
  excerpt: string;
  /** ISO 8601 con timezone, es. "2026-07-15T08:30:00+02:00" */
  published: string;
  updated: string;
  readingTime: number;
  author: ArticleAuthor;
  /** Sempre "/images/articoli/<slug>.jpg" */
  image: string;
  imageAlt: string;
  imageCaption: string;
  /** Box "In sintesi" answer-first: 4-5 punti concreti */
  summary: string[];
  /**
   * Corpo dell'articolo. Deve contenere almeno 4 blocchi h2 con id
   * (usati per il TOC), almeno un blocco table o list, e un quote.
   * Testo complessivo (body + summary + faqs): MINIMO 4000 caratteri.
   */
  body: Block[];
  /** 3-4 domande/risposte → schema FAQPage */
  faqs: Faq[];
  tags: string[];
  /** 3 slug di articoli correlati */
  related: string[];
}
