import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight, Archive } from "lucide-react";
import { SITE, jsonLd, absUrl } from "@/lib/site";
import { ALL_ARTICLES } from "@/data/fullArticles";
import { CATEGORY_LIST, categoryUrl } from "@/lib/categories";
import { AUTHORS, authorUrl, getAuthorByName } from "@/lib/authors";

/**
 * Archivio completo — pagina di crawl.
 *
 * Obiettivo indicizzazione: rendere OGNI url del sito raggiungibile con un
 * solo click dalla home, con anchor text descrittivo e data visibile.
 * Su un sito nuovo il crawler segue i link molto piu' volentieri della
 * sitemap: un indice unico e denso di link interni aumenta le probabilita'
 * che le pagine profonde vengano scansionate e valutate.
 */

export const metadata: Metadata = {
  title: "Archivio completo degli articoli",
  description:
    "Tutti gli articoli di Corriere Edile in un unico indice: normativa, bonus e fisco, mercato, prodotti, cantieri, progetti ed eventi del settore costruzioni.",
  alternates: { canonical: "/archivio" },
  openGraph: {
    type: "website",
    url: absUrl("/archivio"),
    title: "Archivio completo | Corriere Edile",
    description: "Tutti gli articoli pubblicati, per sezione e per data.",
    images: [{ url: "/images/og-default.jpg", width: 1200, height: 630 }],
  },
};

const fmt = (d: string) =>
  new Intl.DateTimeFormat("it-IT", { day: "numeric", month: "long", year: "numeric" }).format(
    new Date(d),
  );

export default function Archivio() {
  const sorted = [...ALL_ARTICLES].sort((a, b) => +new Date(b.published) - +new Date(a.published));

  const blocks = [
    {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      name: "Archivio completo — Corriere Edile",
      description: "Indice di tutti gli articoli pubblicati da Corriere Edile.",
      url: absUrl("/archivio"),
      inLanguage: "it-IT",
      isPartOf: { "@id": `${SITE.url}/#website` },
    },
    {
      "@context": "https://schema.org",
      "@type": "ItemList",
      name: "Tutti gli articoli",
      numberOfItems: sorted.length,
      itemListElement: sorted.map((a, i) => ({
        "@type": "ListItem",
        position: i + 1,
        url: absUrl(`/articolo/${a.slug}`),
        name: a.title,
      })),
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: absUrl("/") },
        { "@type": "ListItem", position: 2, name: "Archivio", item: absUrl("/archivio") },
      ],
    },
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(blocks) }} />

      <div className="mx-auto max-w-5xl px-4 py-6">
        <nav aria-label="Breadcrumb" className="mb-4">
          <ol className="flex items-center gap-1 text-xs text-muted-foreground">
            <li><Link href="/" className="hover:text-navy hover:underline">Home</Link></li>
            <li aria-hidden="true"><ChevronRight className="h-3 w-3" /></li>
            <li aria-current="page" className="font-semibold text-navy-800">Archivio</li>
          </ol>
        </nav>

        <header className="mb-8">
          <h1 className="flex items-center gap-3 font-serif text-3xl font-bold text-navy-900 sm:text-4xl">
            <Archive className="h-8 w-8 text-gold-500" aria-hidden="true" />
            Archivio completo
          </h1>
          <p className="mt-3 max-w-3xl leading-relaxed text-muted-foreground">
            Tutti i {ALL_ARTICLES.length} articoli pubblicati da Corriere Edile, organizzati per
            sezione. Guide su normativa e bonus edilizi, analisi di mercato, schede prodotto e
            approfondimenti di cantiere per imprese, artigiani e professionisti delle costruzioni.
          </p>
        </header>

        {/* Sezioni */}
        <section aria-labelledby="per-sezione" className="mb-10">
          <h2 id="per-sezione" className="mb-3 border-b-2 border-navy pb-2 font-serif text-xl font-bold text-navy-800">
            Le sezioni
          </h2>
          <ul className="flex flex-wrap gap-2">
            <li>
              <Link
                href="/fiere-edilizia"
                className="inline-block rounded-full border border-gold-500 bg-gold-50 px-4 py-1.5 text-sm font-bold text-navy-800 hover:bg-gold-100"
              >
                📅 Calendario fiere
              </Link>
            </li>
            {CATEGORY_LIST.map((c) => (
              <li key={c.slug}>
                <Link
                  href={categoryUrl(c.slug)}
                  className="inline-block rounded-full border border-navy-200 bg-navy-50 px-4 py-1.5 text-sm font-semibold text-navy-700 hover:border-gold-500 hover:text-gold-600"
                >
                  {c.name}
                </Link>
              </li>
            ))}
          </ul>
        </section>

        {/* Articoli per categoria */}
        {CATEGORY_LIST.map((c) => {
          const items = sorted.filter((a) => a.category === c.name);
          if (!items.length) return null;
          return (
            <section key={c.slug} aria-labelledby={`sez-${c.slug}`} className="mb-9">
              <h2
                id={`sez-${c.slug}`}
                className="mb-3 flex items-baseline justify-between border-b-2 border-gold-500 pb-2 font-serif text-xl font-bold text-navy-800"
              >
                <Link href={categoryUrl(c.slug)} className="hover:text-gold-600">{c.name}</Link>
                <span className="text-sm font-semibold text-muted-foreground">
                  {items.length} {items.length === 1 ? "articolo" : "articoli"}
                </span>
              </h2>
              <ul className="divide-y divide-border">
                {items.map((a) => {
                  const au = getAuthorByName(a.author.name);
                  return (
                    <li key={a.slug} className="py-2.5">
                      <Link
                        href={`/articolo/${a.slug}/`}
                        className="font-semibold leading-snug text-navy-800 hover:text-gold-600 hover:underline"
                      >
                        {a.title}
                      </Link>
                      <p className="mt-0.5 text-xs text-muted-foreground">
                        <time dateTime={a.published}>{fmt(a.published)}</time>
                        {" · "}
                        {au ? (
                          <Link href={authorUrl(au.slug)} className="hover:text-gold-600 hover:underline">
                            {a.author.name}
                          </Link>
                        ) : (
                          a.author.name
                        )}
                        {" · "}
                        {a.readingTime} min di lettura
                      </p>
                    </li>
                  );
                })}
              </ul>
            </section>
          );
        })}

        {/* Redazione */}
        <section aria-labelledby="firme" className="mt-12">
          <h2 id="firme" className="mb-3 border-b-2 border-navy pb-2 font-serif text-xl font-bold text-navy-800">
            Le firme della redazione
          </h2>
          <ul className="flex flex-wrap gap-2">
            {AUTHORS.map((a) => (
              <li key={a.slug}>
                <Link
                  href={authorUrl(a.slug)}
                  className="inline-block rounded-full border border-navy-200 bg-white px-4 py-1.5 text-sm font-semibold text-navy-700 hover:border-gold-500 hover:text-gold-600"
                >
                  {a.name} — {a.role}
                </Link>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </>
  );
}
