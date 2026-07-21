"use client";

import { useMemo } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { SearchX, Search } from "lucide-react";
import ArticleCard from "@/components/ArticleCard";
import { ALL_ARTICLES, type Block, type FullArticle } from "@/data/fullArticles";
import { stripMarkdown } from "@/lib/richText";

/** Testo piatto del corpo articolo per la ricerca full-text */
function bodyText(article: FullArticle): string {
  const parts: string[] = [];
  for (const b of article.body as Block[]) {
    switch (b.type) {
      case "p":
      case "h2":
      case "h3":
      case "quote":
        parts.push(b.text);
        break;
      case "list":
        parts.push(...b.items);
        break;
      case "table":
        parts.push(b.caption ?? "", ...b.head, ...b.rows.flat());
        break;
    }
  }
  return stripMarkdown(parts.join(" ")).toLowerCase();
}

/**
 * Ricerca client-side su titolo, sottotitolo, excerpt, tag, categoria e corpo.
 * Punteggio semplice: match nel titolo pesa di più, poi campi brevi, poi corpo.
 */
function searchArticles(query: string): FullArticle[] {
  const q = query.trim().toLowerCase();
  if (!q) return [];
  const terms = q.split(/\s+/).filter(Boolean);
  const scored = ALL_ARTICLES.map((a) => {
    const hay = {
      title: a.title.toLowerCase(),
      subtitle: a.subtitle.toLowerCase(),
      excerpt: a.excerpt.toLowerCase(),
      tags: a.tags.join(" ").toLowerCase(),
      category: a.category.toLowerCase(),
      body: bodyText(a),
    };
    let score = 0;
    for (const t of terms) {
      if (hay.title.includes(t)) score += 5;
      if (hay.subtitle.includes(t)) score += 3;
      if (hay.excerpt.includes(t)) score += 3;
      if (hay.tags.includes(t)) score += 2;
      if (hay.category.includes(t)) score += 2;
      if (hay.body.includes(t)) score += 1;
    }
    // frase intera nel titolo: bonus
    if (hay.title.includes(q)) score += 4;
    return { a, score };
  }).filter((r) => r.score > 0);
  scored.sort((x, y) => y.score - x.score);
  return scored.map((r) => r.a);
}

export default function CercaClient() {
  const params = useSearchParams();
  const query = params.get("q") ?? "";
  const results = useMemo(() => searchArticles(query), [query]);

  return (
    <div className="mx-auto max-w-7xl px-4 py-8">
      <header className="mb-8 border-b-2 border-gold-500 pb-4">
        <h1 className="flex items-center gap-3 font-serif text-3xl font-bold text-navy-900 sm:text-4xl">
          <Search className="h-8 w-8 text-gold-600" aria-hidden="true" />
          {query ? (
            <>
              {results.length} {results.length === 1 ? "risultato" : "risultati"} per{" "}
              <span className="text-gold-600">"{query}"</span>
            </>
          ) : (
            "Cerca nel sito"
          )}
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Cerca tra {ALL_ARTICLES.length} articoli: titoli, guide, tag e testo completo.
        </p>
      </header>

      {query && results.length === 0 && (
        <div className="flex flex-col items-center rounded-lg border border-border bg-muted px-6 py-16 text-center">
          <SearchX className="h-12 w-12 text-gold-500" aria-hidden="true" />
          <p className="mt-4 font-serif text-xl font-bold text-navy-800">
            Nessun risultato per "{query}"
          </p>
          <p className="mt-2 max-w-md text-sm text-muted-foreground">
            Prova con termini più generici (es. "bonus", "serramenti", "cantiere") oppure esplora
            le sezioni del sito.
          </p>
          <Link
            href="/"
            className="mt-6 rounded-md bg-navy px-5 py-2.5 text-sm font-bold text-white hover:bg-navy-600"
          >
            Torna alla homepage
          </Link>
        </div>
      )}

      {!query && (
        <p className="rounded-lg border border-border bg-muted p-8 text-center text-muted-foreground">
          Digita un termine nella casella di ricerca in alto per trovare articoli, guide e bonus.
        </p>
      )}

      {results.length > 0 && (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {results.map((a, i) => (
            <ArticleCard key={a.slug} article={a} priority={i < 3} />
          ))}
        </div>
      )}
    </div>
  );
}
