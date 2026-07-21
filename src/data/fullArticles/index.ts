/**
 * Indice dati articoli completi — Corriere Edile
 * Unisce le quattro raccolte in ALL_ARTICLES (ordinati per data pubblicazione desc)
 * ed espone helper di lookup usati da homepage, articolo e sidebar.
 */
import type { FullArticle } from "./types";
import { ARTICLES_01_10 } from "./articles-01-10";
import { ARTICLES_11_20 } from "./articles-11-20";
import { ARTICLES_21_26 } from "./articles-21-26";
import { ARTICLES_27_32 } from "./articles-27-32";

export * from "./types";

/** Tutti gli articoli, dal più recente al più vecchio (per `published`). */
export const ALL_ARTICLES: FullArticle[] = [
  ...ARTICLES_01_10,
  ...ARTICLES_11_20,
  ...ARTICLES_21_26,
  ...ARTICLES_27_32,
].sort((a, b) => new Date(b.published).getTime() - new Date(a.published).getTime());

/** Articolo in evidenza: il più recente in assoluto. */
export const FEATURED_ARTICLE: FullArticle = ALL_ARTICLES[0];

export function getArticleBySlug(slug: string): FullArticle | undefined {
  return ALL_ARTICLES.find((a) => a.slug === slug);
}

export function getArticlesByCategory(category: string): FullArticle[] {
  return ALL_ARTICLES.filter((a) => a.category === category);
}

/** Gli N articoli più recenti, opzionalmente escludendo slug (es. quello corrente). */
export function getLatestArticles(count: number, excludeSlug?: string): FullArticle[] {
  return ALL_ARTICLES.filter((a) => a.slug !== excludeSlug).slice(0, count);
}

/** Correlati risolti da slug a oggetti articolo (ignora slug mancanti). */
export function getRelatedArticles(slugs: string[]): FullArticle[] {
  return slugs
    .map((s) => getArticleBySlug(s))
    .filter((a): a is FullArticle => Boolean(a));
}
