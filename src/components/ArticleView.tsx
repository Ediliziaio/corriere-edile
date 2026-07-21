import Link from "next/link";
import {
  ChevronRight,
  Clock,
  Share2,
  Facebook,
  Linkedin,
  Twitter,
  List,
  CheckCircle2,
  Quote,
  ExternalLink,
  ArrowLeft,
  ArrowRight,
} from "lucide-react";
import AdSlot from "@/components/AdSlot";
import { MostRead } from "@/components/Sidebar";
import ReadingProgress from "@/components/ReadingProgress";
import FaqItem from "@/components/FaqAccordion";
import { SITE } from "@/lib/site";
import { renderRichText, extractExternalLinks } from "@/lib/richText";
import { categoryUrl } from "@/lib/categories";
import {
  ALL_ARTICLES,
  getRelatedArticles,
  type Block,
  type FullArticle,
} from "@/data/fullArticles";
import ArticleCard, { webpSrc } from "@/components/ArticleCard";

const fmt = (iso: string) =>
  new Intl.DateTimeFormat("it-IT", {
    day: "numeric",
    month: "long",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  }).format(new Date(iso));

/**
 * Renderer dei blocchi del corpo articolo.
 * - AdSlot in-article dopo la fine della 2ª sezione h2 (posizione IAB in-article).
 * - Box "Leggi anche" dopo la fine della 3ª sezione h2: internal linking
 *   dentro il corpo del testo verso il primo articolo correlato.
 */
function ArticleBody({ blocks, promo }: { blocks: Block[]; promo?: { slug: string; title: string } }) {
  const out: React.ReactNode[] = [];
  let h2Seen = 0;
  let adInserted = false;
  let promoInserted = false;

  blocks.forEach((b, i) => {
    if (b.type === "h2") {
      h2Seen += 1;
      if (h2Seen === 3 && !adInserted) {
        adInserted = true;
        out.push(<AdSlot key="ad-inarticle" format="infeed" id="article_infeed_1" className="my-8" />);
      }
      if (h2Seen === 4 && !promoInserted && promo) {
        promoInserted = true;
        out.push(
          <aside
            key="leggi-anche"
            aria-label="Leggi anche"
            className="my-8 rounded-r-lg border-l-4 border-gold-500 bg-navy-50/70 p-5"
          >
            <p className="text-xs font-bold uppercase tracking-widest text-gold-600">Leggi anche</p>
            <Link
              href={`/articolo/${promo.slug}`}
              className="mt-1.5 block font-serif text-lg font-bold leading-snug text-navy-800 hover:text-gold-600 hover:underline"
            >
              {promo.title}
            </Link>
          </aside>
        );
      }
      out.push(
        <h2
          key={i}
          id={b.id}
          className="scroll-mt-24 pt-4 font-serif text-2xl font-bold text-navy-900"
        >
          {b.text}
        </h2>
      );
      return;
    }
    switch (b.type) {
      case "p":
        out.push(
          <p key={i} className="leading-relaxed">
            {renderRichText(b.text)}
          </p>
        );
        break;
      case "h3":
        out.push(
          <h3 key={i} className="pt-2 font-serif text-xl font-bold text-navy-800">
            {renderRichText(b.text)}
          </h3>
        );
        break;
      case "list":
        out.push(
          <ul key={i} className="list-disc space-y-2 pl-6 marker:text-gold-600">
            {b.items.map((item, j) => (
              <li key={j} className="leading-relaxed">
                {renderRichText(item)}
              </li>
            ))}
          </ul>
        );
        break;
      case "quote":
        out.push(
          <blockquote key={i} className="my-8 border-l-4 border-navy bg-navy-50 p-6">
            <Quote className="mb-2 h-6 w-6 text-gold-600" aria-hidden="true" />
            <p className="font-serif text-xl italic leading-relaxed text-navy-900">{renderRichText(b.text)}</p>
            {b.author && (
              <cite className="mt-2 block text-sm not-italic text-muted-foreground">— {b.author}</cite>
            )}
          </blockquote>
        );
        break;
      case "table":
        // Tabelle strutturate: dati facilmente estratti da AI Overview / featured snippet
        out.push(
          <div key={i} className="my-6 overflow-x-auto rounded-lg border border-border">
            <table className="w-full border-collapse text-sm">
              {b.caption && (
                <caption className="bg-muted px-4 py-2 text-left text-xs text-muted-foreground">
                  {renderRichText(b.caption)}
                </caption>
              )}
              <thead>
                <tr className="bg-navy text-left text-white">
                  {b.head.map((h, j) => (
                    <th key={j} scope="col" className="px-4 py-2.5 font-semibold">
                      {renderRichText(h)}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-border bg-white">
                {b.rows.map((row, j) => (
                  <tr key={j} className="odd:bg-white even:bg-navy-50/40">
                    {row.map((cell, k) =>
                      k === 0 ? (
                        <th key={k} scope="row" className="px-4 py-2.5 font-medium text-navy-800">
                          {renderRichText(cell)}
                        </th>
                      ) : (
                        <td key={k} className="px-4 py-2.5">
                          {renderRichText(cell)}
                        </td>
                      )
                    )}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        );
        break;
    }
  });

  // Fallback: se l'articolo ha meno di 3 h2, l'annuncio va a metà corpo
  if (!adInserted) {
    const mid = Math.max(1, Math.floor(out.length / 2));
    out.splice(mid, 0, <AdSlot key="ad-inarticle" format="infeed" id="article_infeed_1" className="my-8" />);
  }

  return <div className="mt-8 space-y-6 text-[17px] leading-relaxed text-foreground">{out}</div>;
}

/** Iniziali per l'avatar dell'autore */
function initials(name: string) {
  return name
    .split(/\s+/)
    .map((w) => w[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

/**
 * Vista articolo completa (server component — nessun hook: FaqItem e
 * ReadingProgress sono client component isolati). Metadata e JSON-LD
 * vivono nella route server app/articolo/[slug]/page.tsx.
 */
export default function ArticleView({ article }: { article: FullArticle }) {
  const toc = article.body.filter((b): b is Extract<Block, { type: "h2" }> => b.type === "h2");
  const related = getRelatedArticles(article.related);

  // Fonti e aziende citate: domini esterni linkati nel contenuto (E-E-A-T + GEO)
  const bodyTexts: string[] = article.body.flatMap((b) => {
    switch (b.type) {
      case "p":
      case "h3":
      case "quote":
        return [b.text];
      case "list":
        return b.items;
      case "table":
        return [b.caption ?? "", ...b.head, ...b.rows.flat()];
      default:
        return [];
    }
  });
  const sources = extractExternalLinks([
    ...article.summary,
    ...bodyTexts,
    ...article.faqs.flatMap((f) => [f.q, f.a]),
  ]);

  // Navigazione precedente/successivo per data di pubblicazione (internal linking flow)
  const idx = ALL_ARTICLES.findIndex((a) => a.slug === article.slug);
  const prevArticle = idx >= 0 ? ALL_ARTICLES[idx + 1] : undefined; // più vecchio
  const nextArticle = idx > 0 ? ALL_ARTICLES[idx - 1] : undefined; // più recente

  return (
    <>
      {/* Barra progresso lettura + torna su (solo pagine articolo) */}
      <ReadingProgress />

      <div className="mx-auto max-w-7xl px-4 py-6">
        <div className="grid gap-10 lg:grid-cols-3">
          {/* ============ Corpo articolo ============ */}
          <article className="lg:col-span-2" itemScope itemType="https://schema.org/NewsArticle">
            {/* Breadcrumb semantico + aria */}
            <nav aria-label="Breadcrumb" className="mb-4">
              <ol className="flex flex-wrap items-center gap-1 text-xs text-muted-foreground">
                <li>
                  <Link href="/" className="hover:text-navy hover:underline">Home</Link>
                </li>
                <li aria-hidden="true"><ChevronRight className="h-3 w-3" /></li>
                <li>
                  <Link href={categoryUrl(article.category)} className="hover:text-navy hover:underline">
                    {article.category}
                  </Link>
                </li>
                <li aria-hidden="true"><ChevronRight className="h-3 w-3" /></li>
                <li aria-current="page" className="line-clamp-1 font-medium text-navy-700">
                  {article.title}
                </li>
              </ol>
            </nav>

            <span className="inline-block rounded-sm bg-gold-500 px-2 py-0.5 text-[11px] font-bold uppercase tracking-wide text-navy-900">
              {article.category}
            </span>

            <h1 itemProp="headline" className="mt-3 font-serif text-3xl font-bold leading-tight text-navy-900 sm:text-4xl">
              {article.title}
            </h1>
            <p className="mt-3 text-lg leading-relaxed text-muted-foreground">{article.subtitle}</p>

            {/* Byline: E-E-A-T (autore reale, ruolo, date machine-readable) */}
            <div className="mt-5 flex flex-wrap items-center justify-between gap-4 border-y border-border py-3">
              <div className="flex items-center gap-3">
                <div
                  aria-hidden="true"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-navy font-serif text-lg font-bold text-white"
                >
                  {initials(article.author.name)}
                </div>
                <div className="text-sm">
                  <p className="font-semibold text-navy-800">
                    di <span itemProp="author">{article.author.name}</span>
                  </p>
                  <p className="text-xs text-muted-foreground">{article.author.role}</p>
                  <p className="flex flex-wrap items-center gap-2 text-xs text-muted-foreground">
                    <time dateTime={article.published} itemProp="datePublished">
                      Pubblicato: {fmt(article.published)}
                    </time>
                    <span aria-hidden="true">·</span>
                    <time dateTime={article.updated} itemProp="dateModified">
                      Aggiornato: {fmt(article.updated)}
                    </time>
                    <span aria-hidden="true">·</span>
                    <span className="inline-flex items-center gap-1">
                      <Clock className="h-3 w-3" aria-hidden="true" /> {article.readingTime} min
                    </span>
                  </p>
                </div>
              </div>
              {/* Condivisione social */}
              <div className="flex items-center gap-2" aria-label="Condividi l'articolo">
                <Share2 className="h-4 w-4 text-muted-foreground" aria-hidden="true" />
                {[
                  { Icon: Facebook, label: "Condividi su Facebook" },
                  { Icon: Linkedin, label: "Condividi su LinkedIn" },
                  { Icon: Twitter, label: "Condividi su X" },
                ].map(({ Icon, label }) => (
                  <a
                    key={label}
                    href="#"
                    aria-label={label}
                    className="rounded-full border border-border p-2 text-navy-700 hover:border-gold-500 hover:text-gold-600"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                ))}
              </div>
            </div>

            {/* Immagine principale con figcaption/credit — semantica <figure>, WebP + fallback */}
            <figure className="mt-6">
              <picture>
                <source srcSet={webpSrc(article.image)} type="image/webp" />
                <img
                  src={article.image}
                  alt={article.imageAlt}
                  width={1200}
                  height={675}
                  fetchPriority="high"
                  itemProp="image"
                  className="aspect-[16/9] w-full rounded-lg object-cover"
                />
              </picture>
              <figcaption className="mt-2 text-xs text-muted-foreground">
                {article.imageCaption} <span className="italic">Grafica: Corriere Edile</span>
              </figcaption>
            </figure>

            {/*
              Box "In sintesi" — pattern answer-first (AEO):
              le key takeaway in apertura danno una risposta completa e citabile
              anche a chi (umano o AI) legge solo l'inizio del contenuto.
            */}
            <section
              aria-labelledby="in-sintesi"
              className="mt-6 rounded-lg border-l-4 border-gold-500 bg-gold-50 p-5"
            >
              <h2 id="in-sintesi" className="font-serif text-lg font-bold text-navy-800">
                In sintesi
              </h2>
              <ul className="mt-3 space-y-2">
                {article.summary.map((s, i) => (
                  <li key={i} className="flex gap-2 text-sm leading-relaxed text-navy-900">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-gold-600" aria-hidden="true" />
                    {renderRichText(s)}
                  </li>
                ))}
              </ul>
            </section>

            {/* Indice con anchor link — UX + jump links in SERP */}
            <nav aria-labelledby="indice" className="mt-6 rounded-lg border border-border bg-muted p-5">
              <h2 id="indice" className="flex items-center gap-2 font-serif text-base font-bold text-navy-800">
                <List className="h-4 w-4" aria-hidden="true" /> Indice dell'articolo
              </h2>
              <ol className="mt-3 list-decimal space-y-1.5 pl-5 text-sm">
                {toc.map((t) => (
                  <li key={t.id}>
                    <a href={`#${t.id}`} className="text-navy-700 hover:text-gold-600 hover:underline">
                      {t.text}
                    </a>
                  </li>
                ))}
              </ol>
            </nav>

            {/* Corpo del testo: renderer blocchi con gerarchia H2/H3 pulita */}
            <ArticleBody
              blocks={article.body}
              promo={related[0] ? { slug: related[0].slug, title: related[0].title } : undefined}
            />

            {/*
              Box "Fonti e aziende citate" — generato automaticamente dai link
              esterni presenti nel contenuto. E-E-A-T (fonti verificabili) e GEO
              (entità citabili dai motori generativi). Nascosto se zero link.
            */}
            {sources.length > 0 && (
              <section
                aria-labelledby="fonti-aziende"
                className="mt-10 rounded-lg border border-navy-200 bg-navy-50/60 p-5"
              >
                <h2 id="fonti-aziende" className="flex items-center gap-2 font-serif text-lg font-bold text-navy-800">
                  <ExternalLink className="h-4 w-4 text-gold-600" aria-hidden="true" />
                  Fonti e aziende citate
                </h2>
                <p className="mt-1 text-xs text-muted-foreground">
                  Riferimenti ufficiali citati in questo articolo (link esterni):
                </p>
                <ul className="mt-3 flex flex-wrap gap-2">
                  {sources.map((s) => (
                    <li key={s.url}>
                      <a
                        href={s.url}
                        target="_blank"
                        rel="noopener"
                        className="inline-flex items-center gap-1.5 rounded-full border border-border bg-white px-3 py-1.5 text-xs font-semibold text-navy-700 hover:border-gold-500 hover:text-gold-600"
                      >
                        {s.label}
                        <span className="text-muted-foreground">· {s.domain}</span>
                        <ExternalLink className="h-3 w-3" aria-hidden="true" />
                      </a>
                    </li>
                  ))}
                </ul>
              </section>
            )}

            {/* FAQ articolo con FAQPage schema */}
            <section id="faq-articolo" aria-labelledby="faq-articolo-title" className="mt-10 scroll-mt-24">
              <h2 id="faq-articolo-title" className="font-serif text-2xl font-bold text-navy-900">
                Domande frequenti
              </h2>
              <div className="mt-4 space-y-3">
                {article.faqs.map((f, i) => (
                  <FaqItem key={i} q={f.q} a={f.a} rich />
                ))}
              </div>
            </section>

            {/* Tag */}
            <div className="mt-10 flex flex-wrap gap-2" aria-label="Tag dell'articolo">
              {article.tags.map((tag) => (
                <Link
                  key={tag}
                  href="/"
                  className="rounded-full border border-navy-200 bg-navy-50 px-3 py-1 text-xs font-semibold text-navy-700 hover:border-gold-500 hover:text-gold-600"
                >
                  #{tag}
                </Link>
              ))}
            </div>

            {/* Author box — E-E-A-T: competenza e autorevolezza dichiarate */}
            <aside
              aria-label="Informazioni sull'autore"
              className="mt-8 flex flex-col gap-4 rounded-lg border border-border bg-muted p-6 sm:flex-row"
            >
              <div
                aria-hidden="true"
                className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-navy font-serif text-2xl font-bold text-white"
              >
                {initials(article.author.name)}
              </div>
              <div>
                <p className="font-serif text-lg font-bold text-navy-800">{article.author.name}</p>
                <p className="text-sm font-semibold text-gold-600">{article.author.role}</p>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{article.author.bio}</p>
              </div>
            </aside>

            {/* Articoli correlati (slug reali risolti) */}
            {related.length > 0 && (
              <section aria-labelledby="correlati" className="mt-10">
                <h2 id="correlati" className="mb-5 border-b-2 border-gold-500 pb-2 font-serif text-2xl font-bold text-navy-800">
                  Articoli correlati
                </h2>
                <div className="grid gap-6 sm:grid-cols-3">
                  {related.map((a) => (
                    <ArticleCard key={a.slug} article={a} />
                  ))}
                </div>
              </section>
            )}

            {/* Navigazione precedente/successivo — rafforza il flusso di internal linking */}
            <nav aria-label="Navigazione tra articoli" className="mt-10 grid gap-4 border-t-2 border-navy pt-6 sm:grid-cols-2">
              {prevArticle ? (
                <Link
                  href={`/articolo/${prevArticle.slug}`}
                  className="group flex flex-col rounded-lg border border-border bg-white p-4 hover:border-gold-500"
                >
                  <span className="flex items-center gap-1 text-xs font-bold uppercase tracking-wide text-muted-foreground">
                    <ArrowLeft className="h-3.5 w-3.5 text-gold-600" aria-hidden="true" /> Articolo precedente
                  </span>
                  <span className="mt-2 font-serif text-base font-bold leading-snug text-navy-800 group-hover:text-gold-600">
                    {prevArticle.title}
                  </span>
                </Link>
              ) : (
                <span aria-hidden="true" />
              )}
              {nextArticle ? (
                <Link
                  href={`/articolo/${nextArticle.slug}`}
                  className="group flex flex-col rounded-lg border border-border bg-white p-4 text-right hover:border-gold-500"
                >
                  <span className="flex items-center justify-end gap-1 text-xs font-bold uppercase tracking-wide text-muted-foreground">
                    Articolo successivo <ArrowRight className="h-3.5 w-3.5 text-gold-600" aria-hidden="true" />
                  </span>
                  <span className="mt-2 font-serif text-base font-bold leading-snug text-navy-800 group-hover:text-gold-600">
                    {nextArticle.title}
                  </span>
                </Link>
              ) : (
                <span aria-hidden="true" />
              )}
            </nav>
          </article>

          {/* ============ Sidebar sticky ============ */}
          <aside aria-label="Contenuti correlati" className="space-y-6 lg:sticky lg:top-20 lg:self-start">
            <AdSlot format="mpu" id="article_mpu_sidebar" />
            <MostRead />
          </aside>
        </div>
      </div>
    </>
  );
}
