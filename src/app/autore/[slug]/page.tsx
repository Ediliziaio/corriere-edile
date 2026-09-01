import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ChevronRight, BadgeCheck, Mail } from "lucide-react";
import ArticleCard from "@/components/ArticleCard";
import { SITE, jsonLd, absUrl } from "@/lib/site";
import {
  AUTHORS,
  authorUrl,
  authorId,
  getAuthorBySlug,
  getArticlesByAuthor,
  personJsonLd,
} from "@/lib/authors";

/**
 * Pagina autore — infrastruttura E-E-A-T.
 * Rende la firma un'entità verificabile e indicizzabile: senza questa pagina
 * il Person dell'articolo è un nome senza URL, quindi non consolidabile da
 * Google. SSG: una pagina per ogni firma della redazione.
 */
export const dynamicParams = false;

export function generateStaticParams() {
  return AUTHORS.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const author = getAuthorBySlug(slug);
  if (!author) return { title: "Autore non trovato" };
  const n = getArticlesByAuthor(author.name).length;
  return {
    title: `${author.name} — ${author.role}`,
    description: `${author.name}, ${author.role} di Corriere Edile. ${author.bio.slice(0, 110)}… Tutti gli articoli firmati (${n}).`,
    alternates: { canonical: authorUrl(author.slug) },
    openGraph: {
      type: "profile",
      url: absUrl(authorUrl(author.slug)),
      title: `${author.name} — ${author.role} | Corriere Edile`,
      description: author.bio.slice(0, 200),
      images: [
        {
          url: `/images/og/autore-${author.slug}.jpg`,
          width: 1200,
          height: 630,
          alt: `${author.name} — ${author.role}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${author.name} — ${author.role}`,
      description: author.bio.slice(0, 200),
      images: [`/images/og/autore-${author.slug}.jpg`],
    },
  };
}

function initials(name: string) {
  return name
    .split(" ")
    .map((p) => p[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

export default async function AuthorPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const author = getAuthorBySlug(slug);
  if (!author) notFound();

  const articles = getArticlesByAuthor(author.name);
  const canonical = absUrl(authorUrl(author.slug));

  const blocks = [
    {
      "@context": "https://schema.org",
      "@type": "ProfilePage",
      url: canonical,
      inLanguage: "it-IT",
      isPartOf: { "@id": `${SITE.url}/#website` },
      mainEntity: { "@id": authorId(author.slug) },
    },
    personJsonLd(author),
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: absUrl("/") },
        { "@type": "ListItem", position: 2, name: "Redazione", item: absUrl("/chi-siamo") },
        { "@type": "ListItem", position: 3, name: author.name, item: canonical },
      ],
    },
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(blocks) }} />

      <div className="mx-auto max-w-7xl px-4 py-6">
        <nav aria-label="Breadcrumb" className="mb-4">
          <ol className="flex flex-wrap items-center gap-1 text-xs text-muted-foreground">
            <li><Link href="/" className="hover:text-navy hover:underline">Home</Link></li>
            <li aria-hidden="true"><ChevronRight className="h-3 w-3" /></li>
            <li><Link href="/chi-siamo" className="hover:text-navy hover:underline">Redazione</Link></li>
            <li aria-hidden="true"><ChevronRight className="h-3 w-3" /></li>
            <li aria-current="page" className="font-semibold text-navy-800">{author.name}</li>
          </ol>
        </nav>

        {/* Scheda autore */}
        <header className="rounded-lg border border-border bg-white p-6 shadow-xs sm:p-8">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-start">
            <div
              aria-hidden="true"
              className="flex h-20 w-20 shrink-0 items-center justify-center rounded-full bg-navy font-serif text-2xl font-bold text-white"
            >
              {initials(author.name)}
            </div>
            <div className="flex-1">
              <h1 className="font-serif text-3xl font-bold text-navy-900 sm:text-4xl">
                {author.name}
              </h1>
              <p className="mt-1 flex items-center gap-1.5 text-sm font-bold text-gold-600">
                <BadgeCheck className="h-4 w-4" aria-hidden="true" />
                {author.role}
              </p>
              <p className="mt-3 leading-relaxed text-muted-foreground">{author.bio}</p>

              {author.credentials?.length ? (
                <p className="mt-3 text-sm text-muted-foreground">
                  <span className="font-semibold text-navy-800">Formazione e titoli:</span>{" "}
                  {author.credentials.join(" · ")}
                </p>
              ) : null}

              <p className="mt-3 text-sm">
                <a
                  href="mailto:redazione@corrieredile.it"
                  className="inline-flex items-center gap-1.5 font-medium text-navy underline decoration-gold-500 underline-offset-2 hover:text-gold-600"
                >
                  <Mail className="h-4 w-4" aria-hidden="true" /> Contatta la redazione
                </a>
              </p>
            </div>
          </div>

          {/* Aree di competenza: rendono esplicito il perimetro di expertise (E-E-A-T) */}
          <div className="mt-6 border-t border-border pt-5">
            <h2 className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
              Aree di competenza
            </h2>
            <ul className="mt-3 flex flex-wrap gap-2">
              {author.expertise.map((e) => (
                <li
                  key={e}
                  className="rounded-full border border-navy-200 bg-navy-50 px-3 py-1 text-xs font-semibold text-navy-700"
                >
                  {e}
                </li>
              ))}
            </ul>
          </div>
        </header>

        {/* Archivio firme */}
        <section aria-labelledby="articoli-autore" className="mt-10">
          <div className="mb-5 flex items-center justify-between border-b-2 border-navy pb-2">
            <h2 id="articoli-autore" className="font-serif text-2xl font-bold text-navy-800">
              Articoli di {author.name.split(" ")[0]}
            </h2>
            <span className="text-sm font-semibold text-muted-foreground">
              {articles.length} {articles.length === 1 ? "articolo" : "articoli"}
            </span>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {articles.map((a, i) => (
              <ArticleCard key={a.slug} article={a} priority={i < 3} />
            ))}
          </div>
        </section>

        {/* Altre firme: distribuisce crawl equity tra le pagine autore */}
        <section aria-labelledby="altre-firme" className="mt-12">
          <h2 id="altre-firme" className="mb-4 border-b-2 border-gold-500 pb-2 font-serif text-xl font-bold text-navy-800">
            Le altre firme della redazione
          </h2>
          <ul className="grid gap-3 sm:grid-cols-3">
            {AUTHORS.filter((x) => x.slug !== author.slug).map((x) => (
              <li key={x.slug}>
                <Link
                  href={authorUrl(x.slug)}
                  className="flex items-center gap-3 rounded-lg border border-border bg-white p-3 transition-shadow hover:shadow-md"
                >
                  <span
                    aria-hidden="true"
                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-navy-100 text-sm font-bold text-navy-800"
                  >
                    {initials(x.name)}
                  </span>
                  <span>
                    <span className="block font-serif font-bold text-navy-800">{x.name}</span>
                    <span className="block text-xs text-muted-foreground">{x.role}</span>
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </>
  );
}
