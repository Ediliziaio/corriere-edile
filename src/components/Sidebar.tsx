"use client";

import Link from "next/link";
import { Mail } from "lucide-react";
import { getLatestArticles } from "@/data/fullArticles";
import { articleUrl } from "@/components/ArticleCard";

/** "Più Letti" — lista numerata editoriale (5 articoli reali più recenti) */
export function MostRead() {
  const items = getLatestArticles(5);
  return (
    <section aria-labelledby="piu-letti" className="rounded-lg border border-border bg-white p-4">
      <h2 id="piu-letti" className="mb-3 border-b-2 border-gold-500 pb-2 font-serif text-lg font-bold text-navy-800">
        Più Letti
      </h2>
      <ol className="space-y-3">
        {items.map((a, i) => (
          <li key={a.slug} className="flex gap-3">
            <span
              aria-hidden="true"
              className="font-serif text-2xl font-bold leading-none text-gold-500"
            >
              {i + 1}
            </span>
            <Link
              href={articleUrl(a.slug)}
              className="text-sm font-medium leading-snug text-navy-800 hover:underline"
            >
              {a.title}
            </Link>
          </li>
        ))}
      </ol>
    </section>
  );
}

/** Box iscrizione newsletter per sidebar */
/**
 * Box redazione.
 * Sostituisce il precedente form newsletter: prometteva un "briefing delle
 * 7:00" e raccoglieva indirizzi email senza alcun servizio dietro. Meglio un
 * canale che funziona davvero.
 */
export function NewsletterBox() {
  return (
    <section
      id="newsletter"
      aria-labelledby="newsletter-title"
      className="rounded-lg bg-navy p-5 text-white"
    >
      <div className="mb-2 flex items-center gap-2">
        <Mail className="h-5 w-5 text-gold-500" aria-hidden="true" />
        <h2 id="newsletter-title" className="font-serif text-lg font-bold">
          Scrivi alla redazione
        </h2>
      </div>
      <p className="mb-3 text-sm text-navy-100">
        Hai una segnalazione su una norma, una correzione da proporre o un tema tecnico che
        vorresti approfondito? La redazione legge tutto.
      </p>
      <a
        href="mailto:redazione@corrieredile.it"
        className="inline-block rounded-md bg-gold-500 px-4 py-2 text-sm font-bold text-navy-900 hover:bg-gold-600"
      >
        redazione@corrieredile.it
      </a>
    </section>
  );
}
