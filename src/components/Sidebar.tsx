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
          Newsletter del cantiere
        </h2>
      </div>
      <p className="mb-3 text-sm text-navy-100">
        Norme, bonus e appalti: il briefing delle 7:00 per imprese e professionisti.
      </p>
      <form className="space-y-2" aria-label="Iscrizione newsletter" onSubmit={(e) => e.preventDefault()}>
        <label htmlFor="sidebar-email" className="sr-only">Indirizzo email</label>
        <input
          id="sidebar-email"
          type="email"
          required
          placeholder="La tua email"
          className="w-full rounded-md border border-navy-600 bg-navy-800 px-3 py-2 text-sm placeholder:text-navy-200/60 focus:border-gold-500 focus:outline-none"
        />
        <button
          type="submit"
          className="w-full rounded-md bg-gold-500 px-4 py-2 text-sm font-bold text-navy-900 hover:bg-gold-600"
        >
          Iscriviti gratis
        </button>
      </form>
      <p className="mt-2 text-[11px] text-navy-200">
        Gratuita, ogni giorno feriale. Disiscrizione con un click.
      </p>
    </section>
  );
}
