import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight, CalendarDays, MapPin } from "lucide-react";
import { SITE, jsonLd, absUrl } from "@/lib/site";
import { FIERE, isPast, eventJsonLd } from "@/lib/fiere";
import { ALL_ARTICLES } from "@/data/fullArticles";

/**
 * Hub calendario fiere — il verticale distintivo della testata.
 * Aggrega gli approfondimenti gia' pubblicati in un unico calendario con
 * schema Event, formato che nessun portale concorrente del comparto offre.
 */

export const metadata: Metadata = {
  title: "Fiere edilizia 2026-2027: il calendario completo",
  description:
    "Calendario delle fiere delle costruzioni in Italia: SAIE Bologna, Marmomac Verona, MADE Expo Milano e Klimahouse Bolzano. Date, sedi, temi e anteprime per imprese edili e progettisti.",
  alternates: { canonical: "/fiere-edilizia" },
  openGraph: {
    type: "website",
    url: absUrl("/fiere-edilizia"),
    title: "Fiere edilizia 2026-2027: calendario | Corriere Edile",
    description: "Date, sedi e temi delle fiere italiane delle costruzioni.",
    images: [{ url: "/images/og-default.jpg", width: 1200, height: 630 }],
  },
};

export default function FiereEdilizia() {
  const now = new Date();
  const prossime = FIERE.filter((f) => !isPast(f, now));
  const passate = FIERE.filter((f) => isPast(f, now));
  const art = (slug: string) => ALL_ARTICLES.find((a) => a.slug === slug);

  // type guard: filter(Boolean) non restringe il tipo, e i blocchi senza data
  // documentata devono essere esclusi davvero dal JSON-LD
  const events = FIERE.map(eventJsonLd).filter(
    (e): e is NonNullable<ReturnType<typeof eventJsonLd>> => e !== null,
  );

  const blocks = [
    {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      name: "Fiere edilizia 2026-2027 — calendario",
      description:
        "Calendario delle principali fiere italiane del settore costruzioni con date, sedi e temi.",
      url: absUrl("/fiere-edilizia"),
      inLanguage: "it-IT",
      isPartOf: { "@id": `${SITE.url}/#website` },
    },
    ...events,
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: absUrl("/") },
        { "@type": "ListItem", position: 2, name: "Fiere edilizia", item: absUrl("/fiere-edilizia") },
      ],
    },
  ];

  const Card = ({ f, past }: { f: (typeof FIERE)[number]; past?: boolean }) => {
    const a = art(f.articleSlug);
    return (
      <article
        className={`flex flex-col gap-3 rounded-lg border p-5 sm:flex-row sm:items-start ${
          past ? "border-border bg-muted/40" : "border-navy-200 bg-white shadow-xs"
        }`}
      >
        <div
          aria-hidden="true"
          className={`flex h-14 w-14 shrink-0 flex-col items-center justify-center rounded-md text-white ${
            past ? "bg-navy-200" : "bg-navy"
          }`}
        >
          <CalendarDays className="h-6 w-6" />
        </div>
        <div className="flex-1">
          <h3 className="font-serif text-xl font-bold text-navy-900">
            <Link href={`/articolo/${f.articleSlug}/`} className="hover:text-gold-600 hover:underline">
              {f.name}
            </Link>
          </h3>
          <p className="mt-1 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm">
            <span className={`font-semibold ${past ? "text-muted-foreground" : "text-gold-600"}`}>
              {f.dateLabel}
            </span>
            <span className="flex items-center gap-1 text-muted-foreground">
              <MapPin className="h-3.5 w-3.5" aria-hidden="true" />
              {f.venue}, {f.city}
            </span>
          </p>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{f.focus}</p>
          {a && (
            <p className="mt-3 text-sm">
              <Link
                href={`/articolo/${f.articleSlug}/`}
                className="font-semibold text-navy underline decoration-gold-500 underline-offset-2 hover:text-gold-600"
              >
                Leggi l'anteprima completa →
              </Link>
            </p>
          )}
          {f.guideSlug && (
            <p className="mt-2 rounded-md border-l-4 border-gold-500 bg-gold-50 px-3 py-2 text-sm">
              <Link
                href={`/articolo/${f.guideSlug}/`}
                className="font-semibold text-navy-900 hover:text-gold-600 hover:underline"
              >
                {f.guideLabel ?? "Approfondimento tecnico"} →
              </Link>
            </p>
          )}
        </div>
      </article>
    );
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(blocks) }} />

      <div className="mx-auto max-w-4xl px-4 py-6">
        <nav aria-label="Breadcrumb" className="mb-4">
          <ol className="flex items-center gap-1 text-xs text-muted-foreground">
            <li><Link href="/" className="hover:text-navy hover:underline">Home</Link></li>
            <li aria-hidden="true"><ChevronRight className="h-3 w-3" /></li>
            <li aria-current="page" className="font-semibold text-navy-800">Fiere edilizia</li>
          </ol>
        </nav>

        <header className="mb-8">
          <h1 className="font-serif text-3xl font-bold text-navy-900 sm:text-4xl">
            Fiere edilizia 2026-2027: il calendario
          </h1>
          <p className="mt-3 max-w-3xl leading-relaxed text-muted-foreground">
            Le principali fiere italiane delle costruzioni: date, sedi e temi di ogni edizione.
            Per ciascun appuntamento trovi l'anteprima con i settori espositivi, le tendenze
            attese e cosa conviene vedere se lavori in cantiere, in ufficio tecnico o in
            progettazione.
          </p>
          {/* Risposta diretta answer-first (AEO) */}
          <div
            id="in-sintesi-fiere"
            className="mt-5 rounded-lg border-l-4 border-gold-500 bg-gold-50 p-5"
          >
            <h2 className="font-serif text-lg font-bold text-navy-800">In sintesi</h2>
            <p className="mt-2 text-sm leading-relaxed text-navy-900">
              Le fiere di riferimento per l'edilizia italiana sono <strong>SAIE</strong> a
              BolognaFiere (cantiere digitale e industrializzazione), <strong>Marmomac</strong> a
              Veronafiere dal 22 al 25 settembre 2026 (pietra naturale),{" "}
              <strong>MADE Expo</strong> a Fiera Milano Rho nell'ottobre 2027 (involucro,
              serramenti e architettura) e <strong>Klimahouse</strong> a Fiera Bolzano
              (riqualificazione energetica), la cui edizione 2026 si è tenuta a gennaio.
            </p>
          </div>
        </header>

        {prossime.length > 0 && (
          <section aria-labelledby="prossime" className="mb-10">
            <h2 id="prossime" className="mb-4 border-b-2 border-navy pb-2 font-serif text-2xl font-bold text-navy-800">
              Prossimi appuntamenti
            </h2>
            <div className="space-y-4">
              {prossime.map((f) => <Card key={f.articleSlug} f={f} />)}
            </div>
          </section>
        )}

        {passate.length > 0 && (
          <section aria-labelledby="passate" className="mb-10">
            <h2 id="passate" className="mb-4 border-b-2 border-border pb-2 font-serif text-xl font-bold text-muted-foreground">
              Edizioni concluse
            </h2>
            <div className="space-y-4">
              {passate.map((f) => <Card key={f.articleSlug} f={f} past />)}
            </div>
          </section>
        )}

        <section aria-labelledby="nota" className="rounded-lg border border-border bg-muted p-5">
          <h2 id="nota" className="font-serif text-lg font-bold text-navy-800">
            Come usiamo le date
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
            Pubblichiamo solo le date confermate dagli enti fieristici. Quando il calendario
            ufficiale non è ancora uscito lo segnaliamo come <em>in via di conferma</em> invece di
            indicare una data presunta: su un calendario di settore un errore di date fa perdere
            un viaggio, non solo un clic.
          </p>
        </section>
      </div>
    </>
  );
}
