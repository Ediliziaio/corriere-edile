"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { Facebook, Linkedin, Instagram, Twitter, Search, Menu, X, Zap } from "lucide-react";
import { useState } from "react";
import { CATEGORIES } from "@/data/articles";
import { FEATURED_ARTICLE } from "@/data/fullArticles";
import { articleUrl } from "@/components/ArticleCard";
import { categoryUrl } from "@/lib/categories";

const SOCIALS = [
  { Icon: Facebook, label: "Facebook" },
  { Icon: Linkedin, label: "LinkedIn" },
  { Icon: Instagram, label: "Instagram" },
  { Icon: Twitter, label: "X / Twitter" },
];

function italianDate() {
  return new Intl.DateTimeFormat("it-IT", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date());
}

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [query, setQuery] = useState("");
  const router = useRouter();

  const submitSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const q = query.trim();
    if (q) {
      router.push(`/cerca?q=${encodeURIComponent(q)}`);
      setMenuOpen(false);
    }
  };

  return (
    <header className="w-full">
      {/* Utility bar: data edizione + link servizio */}
      <div className="bg-navy-900 text-navy-100">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-1.5 text-xs">
          <p className="capitalize">
            <span className="sr-only">Data di oggi: </span>
            {italianDate()} <span className="mx-2 hidden sm:inline">·</span>
            <span className="hidden text-gold-500 sm:inline">Edizione di oggi</span>
          </p>
          <nav aria-label="Servizi utente" className="flex items-center gap-4">
            <a href="#newsletter" className="hover:text-gold-500">Newsletter</a>
            <a href="#" className="rounded bg-gold-500 px-2.5 py-0.5 font-semibold text-navy-900 hover:bg-gold-600">
              Accedi
            </a>
          </nav>
        </div>
      </div>

      {/* Masthead: logo + ricerca + social */}
      <div className="border-b border-border bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-4 py-4">
          <Link href="/" aria-label="Corriere Edile — Torna alla homepage" className="shrink-0">
            <img
              src="/logo.png"
              alt="Corriere Edile — il portale delle costruzioni"
              className="h-12 w-auto sm:h-16"
              width={240}
              height={80}
            />
          </Link>

          <form
            role="search"
            aria-label="Cerca nel sito"
            className="hidden w-full max-w-md items-center md:flex"
            onSubmit={submitSearch}
          >
            <label htmlFor="site-search" className="sr-only">Cerca notizie, bonus, norme</label>
            <div className="relative w-full">
              <input
                id="site-search"
                type="search"
                name="q"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Cerca notizie, bonus, norme…"
                className="w-full rounded-full border border-border bg-muted py-2 pl-4 pr-10 text-sm outline-none focus:border-navy focus:ring-1 focus:ring-navy"
              />
              <button
                type="submit"
                aria-label="Avvia ricerca"
                className="absolute right-1 top-1/2 -translate-y-1/2 rounded-full bg-navy p-1.5 text-white hover:bg-navy-600"
              >
                <Search className="h-4 w-4" />
              </button>
            </div>
          </form>

          <nav aria-label="Canali social" className="hidden items-center gap-3 lg:flex">
            {SOCIALS.map(({ Icon, label }) => (
              <a
                key={label}
                href="#"
                aria-label={`Corriere Edile su ${label}`}
                className="text-navy-700 transition-colors hover:text-gold-600"
              >
                <Icon className="h-5 w-5" />
              </a>
            ))}
          </nav>

          <button
            className="md:hidden text-navy"
            aria-label={menuOpen ? "Chiudi menu" : "Apri menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Nav categorie sticky — anche landmark di navigazione principale */}
      <nav aria-label="Sezioni" className="sticky top-0 z-40 border-b border-navy-800 bg-navy shadow-sm">
        <div className="mx-auto max-w-7xl px-4">
          <ul className="hidden items-center gap-1 overflow-x-auto md:flex">
            {CATEGORIES.map((c) => (
              <li key={c}>
                <Link
                  href={categoryUrl(c)}
                  className="block whitespace-nowrap px-3 py-3 text-sm font-semibold text-white transition-colors hover:bg-navy-600 hover:text-gold-500"
                >
                  {c}
                </Link>
              </li>
            ))}
          </ul>
          {menuOpen && (
            <div className="md:hidden">
              {/* Ricerca mobile */}
              <form role="search" aria-label="Cerca nel sito" onSubmit={submitSearch} className="border-t border-navy-800 px-2 py-3">
                <label htmlFor="site-search-mobile" className="sr-only">Cerca notizie, bonus, norme</label>
                <div className="relative">
                  <input
                    id="site-search-mobile"
                    type="search"
                    name="q"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Cerca notizie, bonus, norme…"
                    className="w-full rounded-full border border-navy-700 bg-navy-800 py-2 pl-4 pr-10 text-sm text-white placeholder:text-navy-200/60 focus:border-gold-500 focus:outline-none"
                  />
                  <button
                    type="submit"
                    aria-label="Avvia ricerca"
                    className="absolute right-1 top-1/2 -translate-y-1/2 rounded-full bg-gold-500 p-1.5 text-navy-900"
                  >
                    <Search className="h-4 w-4" />
                  </button>
                </div>
              </form>
              <ul>
                {CATEGORIES.map((c) => (
                  <li key={c}>
                    <Link
                      href={categoryUrl(c)}
                      className="block border-t border-navy-800 px-2 py-2.5 text-sm font-semibold text-white"
                      onClick={() => setMenuOpen(false)}
                    >
                      {c}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </nav>

      {/* Ticker Ultim'ora */}
      <div className="border-b border-border bg-gold-50" role="marquee" aria-label="Notizie di ultim'ora">
        <div className="mx-auto flex max-w-7xl items-center gap-3 overflow-x-auto px-4 py-1.5 text-sm">
          <span className="flex shrink-0 items-center gap-1 rounded bg-gold-500 px-2 py-0.5 text-xs font-bold uppercase tracking-wide text-navy-900">
            <Zap className="h-3 w-3" /> Ultim'ora
          </span>
          <Link href={articleUrl(FEATURED_ARTICLE.slug)} className="whitespace-nowrap font-medium text-navy-800 hover:underline">
            {FEATURED_ARTICLE.title}
          </Link>
          <span className="hidden text-muted-foreground md:inline">·</span>
          <Link href={articleUrl(FEATURED_ARTICLE.slug)} className="hidden whitespace-nowrap font-medium text-navy-800 hover:underline md:inline">
            ANCE: a giugno +2,1% la produzione nelle costruzioni
          </Link>
        </div>
      </div>
    </header>
  );
}
