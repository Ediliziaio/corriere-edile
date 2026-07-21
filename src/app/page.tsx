import Link from "next/link";
import { HelpCircle } from "lucide-react";
import AdSlot from "@/components/AdSlot";
import ArticleCard, { CategoryChip, ArticleMeta, articleUrl, webpSrc } from "@/components/ArticleCard";
import { MostRead, NewsletterBox } from "@/components/Sidebar";
import FaqItem from "@/components/FaqAccordion";
import { jsonLd } from "@/lib/site";
import { categoryUrl } from "@/lib/categories";
import { HOME_FAQS } from "@/data/articles";
import {
  ALL_ARTICLES,
  FEATURED_ARTICLE,
  getArticlesByCategory,
} from "@/data/fullArticles";

/*
  FAQPage JSON-LD: le risposte dirette qui sotto diventano eleggibili
  per rich results e per l'estrazione da parte di answer engine / AI Overview (AEO/GEO).
  Title/description/canonical della home ereditati dal layout (metadata default).
*/
const FAQ_JSONLD = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: HOME_FAQS.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export default function Home() {
  const featured = FEATURED_ARTICLE;
  // 4 secondari: i più recenti dopo l'articolo in evidenza
  const secondary = ALL_ARTICLES.slice(1, 5);
  // Ultime Notizie: tutti i 20 articoli reali
  const latest = ALL_ARTICLES;
  // Focus Normativa & Bonus: articoli reali delle due categorie fiscali/normative
  const focus = [...getArticlesByCategory("Normativa"), ...getArticlesByCategory("Bonus & Fisco")].slice(0, 4);
  // Guide & Approfondimenti: contenuti evergreen (Progetti + Prodotti & Materiali)
  const guides = [
    ...getArticlesByCategory("Progetti"),
    ...getArticlesByCategory("Prodotti & Materiali"),
  ].slice(0, 3);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(FAQ_JSONLD) }} />

      {/* ============ HERO: In Evidenza ============ */}
      <section aria-labelledby="in-evidenza" className="mx-auto max-w-7xl px-4 pt-6">
        <h1 id="in-evidenza" className="sr-only">
          Corriere Edile — le notizie in evidenza sul mondo delle costruzioni
        </h1>
        <div className="grid gap-6 lg:grid-cols-3">
          {/* Articolo principale */}
          <article className="group relative overflow-hidden rounded-lg lg:col-span-2">
            <Link href={articleUrl(featured.slug)} aria-label={featured.title}>
              <picture>
                <source srcSet={webpSrc(featured.image)} type="image/webp" />
                <img
                  src={featured.image}
                  alt={featured.imageAlt}
                  width={1200}
                  height={675}
                  fetchPriority="high" // LCP: l'immagine hero non va mai lazy-loadata
                  className="aspect-[16/9] w-full object-cover transition-transform duration-500 group-hover:scale-105 lg:aspect-auto lg:h-full"
                />
              </picture>
              <div className="absolute inset-0 bg-gradient-to-t from-navy-900/95 via-navy-900/40 to-transparent" />
              <div className="absolute bottom-0 space-y-2 p-6">
                <CategoryChip label={featured.category} />
                <h2 className="font-serif text-2xl font-bold leading-tight text-white sm:text-3xl lg:text-4xl">
                  {featured.title}
                </h2>
                <p className="hidden max-w-2xl text-sm text-navy-100 sm:block">{featured.excerpt}</p>
                <ArticleMeta date={featured.published} readingTime={featured.readingTime} light />
              </div>
            </Link>
          </article>

          {/* Secondarie */}
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
            {secondary.map((a) => (
              <article key={a.slug} className="group flex gap-3 overflow-hidden rounded-lg border border-border bg-white p-2 shadow-xs">
                <Link href={articleUrl(a.slug)} className="shrink-0" tabIndex={-1} aria-hidden="true">
                  <img
                    src={a.image}
                    alt={a.imageAlt}
                    loading="lazy"
                    decoding="async"
                    width={160}
                    height={110}
                    className="h-24 w-32 rounded object-cover sm:h-full sm:w-36"
                  />
                </Link>
                <div className="flex flex-col gap-1 py-1 pr-2">
                  <CategoryChip label={a.category} />
                  <h3 className="font-serif text-sm font-bold leading-snug text-navy-800 group-hover:text-navy">
                    <Link href={articleUrl(a.slug)} className="line-clamp-3 hover:underline">{a.title}</Link>
                  </h3>
                  <div className="mt-auto">
                    <ArticleMeta date={a.published} readingTime={a.readingTime} />
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* AD: billboard dopo l'hero */}
      <AdSlot format="billboard" id="home_billboard_top" className="my-8 px-4" />

      {/* ============ Ultime Notizie + Sidebar ============ */}
      <section aria-labelledby="ultime-notizie" className="mx-auto max-w-7xl px-4 py-4">
        <div className="grid gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <div className="mb-5 flex items-center justify-between border-b-2 border-navy pb-2">
              <h2 id="ultime-notizie" className="font-serif text-2xl font-bold text-navy-800">
                Ultime Notizie
              </h2>
              <span className="text-sm font-semibold text-muted-foreground">
                {latest.length} articoli
              </span>
            </div>
            <div className="grid gap-6 sm:grid-cols-2">
              {latest.map((a, i) => (
                <ArticleCard key={a.slug} article={a} priority={i < 2} />
              ))}
            </div>
          </div>

          <aside aria-label="Contenuti correlati" className="space-y-6">
            <AdSlot format="mpu" id="home_mpu_sidebar" />
            <MostRead />
            <NewsletterBox />
            <AdSlot format="halfpage" id="home_halfpage_sidebar" />
          </aside>
        </div>
      </section>

      {/* ============ Focus Normativa & Bonus — articoli reali delle due categorie ============ */}
      <section aria-labelledby="focus-normativa" className="bg-navy-50 py-10">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mb-6 flex flex-wrap items-end justify-between gap-2 border-b-2 border-gold-500 pb-2">
            <div>
              <h2 id="focus-normativa" className="font-serif text-2xl font-bold text-navy-800">
                Focus Normativa &amp; Bonus
              </h2>
              <p className="mt-1 text-sm text-muted-foreground">
                Norme, aliquote e adempimenti: le guide aggiornate per imprese e professionisti.
              </p>
            </div>
            <p className="flex gap-3 text-sm font-semibold">
              <Link href={categoryUrl("Normativa")} className="text-gold-600 hover:underline">
                Tutta la Normativa →
              </Link>
              <Link href={categoryUrl("Bonus & Fisco")} className="text-gold-600 hover:underline">
                Bonus &amp; Fisco →
              </Link>
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {focus.map((a) => (
              <article key={a.slug} className="group flex flex-col overflow-hidden rounded-lg border border-border bg-white shadow-xs">
                <Link href={articleUrl(a.slug)} tabIndex={-1} aria-hidden="true">
                  <img
                    src={a.image}
                    alt={a.imageAlt}
                    loading="lazy"
                    decoding="async"
                    width={400}
                    height={225}
                    className="aspect-[16/9] w-full object-cover"
                  />
                </Link>
                <div className="flex flex-1 flex-col p-4">
                  <CategoryChip label={a.category} />
                  <h3 className="mt-3 font-serif text-base font-bold leading-snug text-navy-800">
                    <Link href={articleUrl(a.slug)} className="line-clamp-3 hover:underline">
                      {a.title}
                    </Link>
                  </h3>
                  <p className="mt-2 line-clamp-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {a.excerpt}
                  </p>
                  <div className="mt-3">
                    <ArticleMeta date={a.published} readingTime={a.readingTime} />
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ============ Guide & Approfondimenti — evergreen (GEO) ============ */}
      <section aria-labelledby="guide" className="mx-auto max-w-7xl px-4 py-10">
        <div className="mb-6 flex flex-wrap items-end justify-between gap-2 border-b-2 border-navy pb-2">
          <div>
            <h2 id="guide" className="font-serif text-2xl font-bold text-navy-800">
              Guide &amp; Approfondimenti
            </h2>
            <p className="mt-1 text-sm text-muted-foreground">
              Contenuti evergreen: guide complete e autorevoli sui temi tecnici del settore.
            </p>
          </div>
          <Link href={categoryUrl("Progetti")} className="text-sm font-semibold text-gold-600 hover:underline">
            Tutti i Progetti →
          </Link>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {guides.map((a) => (
            <ArticleCard key={a.slug} article={a} />
          ))}
        </div>
      </section>

      {/* ============ FAQ homepage ============ */}
      <section aria-labelledby="faq-home" className="mx-auto max-w-4xl px-4 pb-10">
        <div className="mb-6 flex items-center gap-2 border-b-2 border-gold-500 pb-2">
          <HelpCircle className="h-6 w-6 text-gold-600" aria-hidden="true" />
          <h2 id="faq-home" className="font-serif text-2xl font-bold text-navy-800">
            Domande frequenti sul mondo dell'edilizia
          </h2>
        </div>
        <div className="space-y-3">
          {HOME_FAQS.map((f, i) => (
            <FaqItem key={i} q={f.q} a={f.a} />
          ))}
        </div>
      </section>

      {/* AD: leaderboard prima del footer */}
      <AdSlot format="leaderboard" id="home_leaderboard_footer" className="mb-8 px-4" />
    </>
  );
}
