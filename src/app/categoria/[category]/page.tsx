import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ChevronRight } from "lucide-react";
import ArticleCard, { articleUrl } from "@/components/ArticleCard";
import { SITE, jsonLd, absUrl } from "@/lib/site";
import { getArticlesByCategory } from "@/data/fullArticles";
import { CATEGORY_LIST, categoryUrl, getCategoryBySlug } from "@/lib/categories";

/**
 * Pagina categoria — hub editoriale per il crawl flow:
 * CollectionPage + ItemList JSON-LD, canonical, intro SEO, griglia articoli.
 * SSG: le 8 categorie sono pre-renderizzate a build time.
 */
export const dynamicParams = false;

export function generateStaticParams() {
  return CATEGORY_LIST.map((c) => ({ category: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ category: string }>;
}): Promise<Metadata> {
  const { category: slug } = await params;
  const category = getCategoryBySlug(slug);
  if (!category) return { title: "Categoria non trovata" };
  return {
    title: category.name,
    description: category.description,
    alternates: { canonical: categoryUrl(category.slug) },
    openGraph: {
      type: "website",
      url: absUrl(categoryUrl(category.slug)),
      title: `${category.name} | Corriere Edile`,
      description: category.description,
      images: [
        {
          url: `/images/og/categoria-${category.slug}.jpg`,
          width: 1200,
          height: 630,
          alt: `${category.name} — Corriere Edile`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${category.name} | Corriere Edile`,
      description: category.description,
      images: [`/images/og/categoria-${category.slug}.jpg`],
    },
  };
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category: slug } = await params;
  const category = getCategoryBySlug(slug);
  if (!category) notFound();

  const articles = getArticlesByCategory(category.name);
  // Con trailing slash: identico al rel=canonical emesso dai metadata
  const canonical = absUrl(categoryUrl(category.slug));

  // CollectionPage + ItemList: la griglia diventa eleggibile per caroselli/sitelinks in SERP
  const jsonLdBlocks = [
    {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      name: `${category.name} — Corriere Edile`,
      description: category.description,
      url: canonical,
      inLanguage: "it-IT",
      isPartOf: { "@id": `${SITE.url}/#website` },
    },
    {
      "@context": "https://schema.org",
      "@type": "ItemList",
      itemListElement: articles.map((a, i) => ({
        "@type": "ListItem",
        position: i + 1,
        url: absUrl(articleUrl(a.slug)),
        name: a.title,
      })),
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: absUrl("/") },
        { "@type": "ListItem", position: 2, name: category.name, item: canonical },
      ],
    },
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(jsonLdBlocks) }} />

      <div className="mx-auto max-w-7xl px-4 py-6">
        <nav aria-label="Breadcrumb" className="mb-4">
          <ol className="flex flex-wrap items-center gap-1 text-xs text-muted-foreground">
            <li>
              <Link href="/" className="hover:text-navy hover:underline">Home</Link>
            </li>
            <li aria-hidden="true"><ChevronRight className="h-3 w-3" /></li>
            <li aria-current="page" className="font-medium text-navy-700">{category.name}</li>
          </ol>
        </nav>

        <header className="mb-8 border-b-2 border-gold-500 pb-4">
          <h1 className="font-serif text-3xl font-bold text-navy-900 sm:text-4xl">{category.name}</h1>
          <p className="mt-3 max-w-3xl leading-relaxed text-muted-foreground">{category.description}</p>
          <p className="mt-2 text-sm font-semibold text-gold-600">
            {articles.length} {articles.length === 1 ? "articolo" : "articoli"} in questa sezione
          </p>
        </header>

        {category.slug === "normativa" && (
          <section aria-labelledby="percorso-documenti" className="mb-8 border-b border-border pb-6">
            <h2 id="percorso-documenti" className="font-serif text-2xl font-bold text-navy-900">Dal rilievo ai documenti di cantiere</h2>
            <p className="mt-3 max-w-3xl leading-relaxed text-muted-foreground">Le domande cambiano durante un lavoro: che cosa c’è nell’immobile, quali prodotti sono previsti e come registrare una modifica. Scegli il punto da chiarire e porta i riferimenti al tecnico o all’interlocutore competente.</p>
            <ol className="mt-4 list-decimal space-y-3 pl-5 text-sm leading-relaxed">
              <li><strong>Leggere l’esistente.</strong> La guida alla <Link href={articleUrl("risega-muro-significato-rilievo-ristrutturazione")} className="underline">risega del muro</Link> aiuta a descrivere un cambio di spessore; quella alle <Link href={articleUrl("tavole-progetto-revisioni-quote-sopralluogo")} className="underline">tavole di progetto</Link> collega la domanda a piante, sezioni e revisioni.</li>
              <li><strong>Confrontare i prodotti.</strong> Parti da <Link href={articleUrl("marcatura-ce-prodotti-costruzione-dop")} className="underline">marcatura CE e Dichiarazione di Prestazione</Link>, poi collega i documenti alla <Link href={articleUrl("richiesta-offerta-fornitori-edili-documenti")} className="underline">richiesta di offerta al fornitore</Link>.</li>
              <li><strong>Seguire le modifiche.</strong> Distingui i punti ancora aperti nel <Link href={articleUrl("registro-chiarimenti-progetto-edile")} className="underline">registro dei chiarimenti</Link> e approfondisci la documentazione delle <Link href={articleUrl("varianti-corso-opera-riserve")} className="underline">varianti in corso d’opera nell’appalto privato</Link>.</li>
            </ol>
          </section>
        )}

        {category.slug === "mercato" && (
          <section aria-labelledby="percorso-commesse" className="mb-8 border-b border-border pb-6">
            <h2 id="percorso-commesse" className="font-serif text-2xl font-bold text-navy-900">Dalla ricerca di una commessa alla presentazione dell’impresa</h2>
            <p className="mt-3 max-w-3xl leading-relaxed text-muted-foreground">La guida agli <Link href={articleUrl("appalti-privati-intercettare-commesse")} className="underline">appalti privati</Link> affronta la ricerca delle opportunità e degli interlocutori. Il <Link href={articleUrl("portfolio-lavori-impresa-edile-2027")} className="underline">portfolio dei lavori</Link> serve invece a presentare esperienze documentate. Quando il confronto entra nel merito di una fornitura, prepara una <Link href={articleUrl("richiesta-offerta-fornitori-edili-documenti")} className="underline">richiesta di offerta con un perimetro chiaro</Link>.</p>
          </section>
        )}

        {category.slug === "cantieri" && (
          <section aria-labelledby="percorso-cantiere-digitale" className="mb-8 rounded-xl border border-border bg-muted/40 p-6">
            <h2 id="percorso-cantiere-digitale" className="font-serif text-2xl font-bold">Dal dato alla decisione in cantiere</h2>
            <p className="mt-3 leading-relaxed">Prima di scegliere strumenti, chiarisci quali informazioni servono e chi deve verificarle. Queste guide collegano raccolta dei dati, richieste di chiarimento e confronto delle forniture, mantenendo riconoscibili riferimenti e responsabilità.</p>
            <ul className="mt-4 list-disc space-y-2 pl-5">
              <li><Link className="underline" href="/articolo/cantiere-digitale-droni-sensori-monitoraggio/">Cantiere digitale: impostare una prova con dati, droni e sensori</Link></li>
              <li><Link className="underline" href="/articolo/registro-chiarimenti-progetto-edile/">Registro dei chiarimenti: collegare domande, revisioni e risposte</Link></li>
              <li><Link className="underline" href="/articolo/richiesta-offerta-fornitori-edili-documenti/">Richiesta di offerta: rendere confrontabili documenti e risposte</Link></li>
            </ul>
          </section>
        )}

        {articles.length > 0 ? (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {articles.map((a, i) => (
              <ArticleCard key={a.slug} article={a} priority={i < 3} />
            ))}
          </div>
        ) : (
          <p className="rounded-lg border border-border bg-muted p-8 text-center text-muted-foreground">
            Nessun articolo pubblicato in questa sezione al momento. Torna presto a trovarci.
          </p>
        )}
      </div>
    </>
  );
}
