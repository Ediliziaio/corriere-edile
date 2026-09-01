import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight, BookOpen, FileText } from "lucide-react";
import { SITE, jsonLd, absUrl } from "@/lib/site";
import { NORME, AMBITI, articoliPerNorma, normaAnchor } from "@/lib/norme";

/**
 * Indice delle norme tecniche — l'asset piu' distintivo della testata.
 * Hub-and-spoke: ogni norma rimanda agli articoli che la trattano, creando
 * percorsi di scansione supplementari verso le pagine profonde e
 * intercettando query a intento professionale molto specifico.
 */

export const metadata: Metadata = {
  title: "Norme tecniche per l'edilizia: indice ragionato",
  description:
    "Indice delle norme che regolano il cantiere: DPR 380/2001, D.Lgs 81/2008, UNI 11673 sulla posa dei serramenti, CPR 305/2011 e norme EN sui materiali. Cosa disciplina ciascuna e dove approfondirla.",
  alternates: { canonical: "/norme-tecniche" },
  openGraph: {
    type: "website",
    url: absUrl("/norme-tecniche"),
    title: "Norme tecniche per l'edilizia: indice | Corriere Edile",
    description:
      "Le norme citate nelle nostre guide, ordinate per ambito: cosa disciplina ciascuna e in quali articoli è spiegata.",
    images: [{ url: "/images/og-default.jpg", width: 1200, height: 630 }],
  },
};

export default function NormeTecniche() {
  const conArticoli = NORME.map((n) => ({ n, arts: articoliPerNorma(n.code) }));

  const blocks = [
    {
      "@context": "https://schema.org",
      "@type": "DefinedTermSet",
      "@id": `${SITE.url}/norme-tecniche/#normeset`,
      name: "Norme tecniche per l'edilizia — indice Corriere Edile",
      description:
        "Raccolta ragionata delle norme tecniche e legislative citate nelle guide di Corriere Edile, con l'indicazione di cosa disciplina ciascuna.",
      url: absUrl("/norme-tecniche"),
      inLanguage: "it-IT",
      hasDefinedTerm: NORME.map((n) => ({
        "@type": "DefinedTerm",
        "@id": `${SITE.url}/norme-tecniche/#${normaAnchor(n.code)}`,
        name: n.code,
        description: n.oggetto,
        inDefinedTermSet: { "@id": `${SITE.url}/norme-tecniche/#normeset` },
      })),
    },
    {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      url: absUrl("/norme-tecniche"),
      inLanguage: "it-IT",
      isPartOf: { "@id": `${SITE.url}/#website` },
      about: { "@id": `${SITE.url}/norme-tecniche/#normeset` },
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: absUrl("/") },
        { "@type": "ListItem", position: 2, name: "Norme tecniche", item: absUrl("/norme-tecniche") },
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
            <li aria-current="page" className="font-semibold text-navy-800">Norme tecniche</li>
          </ol>
        </nav>

        <header className="mb-8">
          <h1 className="flex items-center gap-3 font-serif text-3xl font-bold text-navy-900 sm:text-4xl">
            <BookOpen className="h-8 w-8 text-gold-500" aria-hidden="true" />
            Norme tecniche per l'edilizia
          </h1>
          <p className="mt-3 max-w-3xl leading-relaxed text-muted-foreground">
            Le norme che citiamo nelle guide, raccolte in un unico indice e ordinate per ambito.
            Per ciascuna trovi cosa disciplina e in quali articoli l'abbiamo spiegata applicata al
            cantiere.
          </p>

          <div id="in-sintesi-norme" className="mt-5 rounded-lg border-l-4 border-gold-500 bg-gold-50 p-5">
            <h2 className="font-serif text-lg font-bold text-navy-800">In sintesi</h2>
            <p className="mt-2 text-sm leading-relaxed text-navy-900">
              In edilizia convivono due famiglie di regole. Le <strong>norme di legge</strong> —
              come il <strong>DPR 380/2001</strong> per i titoli abilitativi, il{" "}
              <strong>D.Lgs 81/2008</strong> per la sicurezza o il <strong>D.Lgs 36/2023</strong>{" "}
              per gli appalti — sono cogenti. Le <strong>norme tecniche</strong> UNI, EN e ISO
              definiscono invece come si progetta, si prova e si posa: diventano vincolanti quando
              richiamate da una legge, da un capitolato o da un contratto. Il{" "}
              <strong>Regolamento (UE) 305/2011</strong> collega le due famiglie, imponendo
              marcatura CE e Dichiarazione di Prestazione ai prodotti da costruzione.
            </p>
          </div>

          <nav aria-label="Ambiti" className="mt-6">
            <ul className="flex flex-wrap gap-2">
              {AMBITI.map((a) => (
                <li key={a}>
                  <a
                    href={`#${a.toLowerCase().replace(/[^a-z]+/g, "-")}`}
                    className="inline-block rounded-full border border-navy-200 bg-navy-50 px-3 py-1 text-xs font-semibold text-navy-700 hover:border-gold-500 hover:text-gold-600"
                  >
                    {a}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </header>

        {AMBITI.map((ambito) => {
          const items = conArticoli.filter((x) => x.n.ambito === ambito);
          if (!items.length) return null;
          return (
            <section
              key={ambito}
              id={ambito.toLowerCase().replace(/[^a-z]+/g, "-")}
              aria-labelledby={`t-${ambito.toLowerCase().replace(/[^a-z]+/g, "-")}`}
              className="mb-10 scroll-mt-24"
            >
              <h2
                id={`t-${ambito.toLowerCase().replace(/[^a-z]+/g, "-")}`}
                className="mb-4 border-b-2 border-navy pb-2 font-serif text-2xl font-bold text-navy-800"
              >
                {ambito}
              </h2>
              <div className="space-y-4">
                {items.map(({ n, arts }) => (
                  <article
                    key={n.code}
                    id={normaAnchor(n.code)}
                    className="scroll-mt-24 rounded-lg border border-border bg-white p-5 shadow-xs"
                  >
                    <div className="flex flex-wrap items-baseline justify-between gap-2">
                      <h3 className="font-mono text-lg font-bold text-navy-900">{n.code}</h3>
                      <span className="rounded bg-navy-50 px-2 py-0.5 text-xs font-semibold text-navy-700">
                        {n.fonte}
                      </span>
                    </div>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{n.oggetto}</p>
                    {arts.length > 0 && (
                      <div className="mt-3 border-t border-border pt-3">
                        <p className="mb-1.5 flex items-center gap-1.5 text-xs font-bold uppercase tracking-wide text-muted-foreground">
                          <FileText className="h-3.5 w-3.5" aria-hidden="true" />
                          Dove la spieghiamo
                        </p>
                        <ul className="space-y-1">
                          {arts.slice(0, 4).map((a) => (
                            <li key={a.slug}>
                              <Link
                                href={`/articolo/${a.slug}/`}
                                className="text-sm font-medium text-navy underline decoration-gold-500 underline-offset-2 hover:text-gold-600"
                              >
                                {a.title}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </article>
                ))}
              </div>
            </section>
          );
        })}

        <section aria-labelledby="nota-norme" className="rounded-lg border border-border bg-muted p-5">
          <h2 id="nota-norme" className="font-serif text-lg font-bold text-navy-800">
            Come leggere questo indice
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
            Qui trovi cosa disciplina ogni norma e come si applica in cantiere, non il suo testo:
            le norme UNI, EN e ISO sono opere protette e vanno acquistate dagli enti normatori
            (UNI, CEN, ISO). Le fonti di legge sono invece consultabili gratuitamente in Gazzetta
            Ufficiale e su Normattiva. Indichiamo la versione vigente al momento della revisione
            dell'articolo: prima di usarla in capitolato verifica sempre che non sia stata
            sostituita.
          </p>
        </section>
      </div>
    </>
  );
}
