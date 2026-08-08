import type { Metadata } from "next";
import Link from "next/link";
import { Mail } from "lucide-react";
import LegalPage, { LegalSection, PlaceholderNote } from "@/components/legal/LegalPage";
import { SITE, jsonLd, absUrl } from "@/lib/site";
import { AUTHORS, authorUrl } from "@/lib/authors";
import { ALL_ARTICLES, type ArticleAuthor } from "@/data/fullArticles";

export const metadata: Metadata = {
  title: "Chi siamo",
  description:
    "Corriere Edile: la redazione, la mission e la linea editoriale del portale di informazione per imprese edili, artigiani, serramentisti e professionisti delle costruzioni.",
  alternates: { canonical: "/chi-siamo" },
};

/* Redazione: autori reali ricavati dagli articoli pubblicati (deduplicati per nome) */
function getAuthors(): ArticleAuthor[] {
  const seen = new Map<string, ArticleAuthor>();
  for (const a of ALL_ARTICLES) {
    if (!seen.has(a.author.name)) seen.set(a.author.name, a.author);
  }
  return [...seen.values()];
}

function initials(name: string) {
  return name.split(/\s+/).map((w) => w[0]).slice(0, 2).join("").toUpperCase();
}

// AboutPage: presenta la testata come entità verificabile (E-E-A-T/GEO)
const ABOUT_JSONLD = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  name: "Chi siamo — Corriere Edile",
  url: absUrl("/chi-siamo"),
  inLanguage: "it-IT",
  mainEntity: {
    "@type": "NewsMediaOrganization",
    name: SITE.name,
    "@id": `${SITE.url}/#organization`,
    url: absUrl("/"),
    logo: { "@type": "ImageObject", url: SITE.logo },
  },
};

export default function ChiSiamo() {
  const authors = getAuthors();
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(ABOUT_JSONLD) }} />
      <LegalPage title="Chi siamo">
        <LegalSection id="mission" title="La nostra mission">
          <p>
            <strong>Corriere Edile</strong> è il portale di informazione tecnica dedicato al mondo
            delle costruzioni: notizie, normativa, bonus, mercato e prodotti spiegati con linguaggio
            chiaro e verificabile, pensato per chi il cantiere lo vive ogni giorno.
          </p>
          <p>
            Ci rivolgiamo a <strong>imprese edili, artigiani, serramentisti, progettisti e
            professionisti della filiera</strong>: il nostro obiettivo è trasformare decreti, norme
            UNI e andamenti di mercato in informazione operativa, utile a decidere e a lavorare in
            regola.
          </p>
        </LegalSection>

        <LegalSection id="redazione" title="La redazione">
          <div className="grid gap-4 sm:grid-cols-2">
            {AUTHORS.map((a) => (
              <article key={a.name} className="flex gap-4 rounded-lg border border-border bg-white p-5">
                <div
                  aria-hidden="true"
                  className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-navy font-serif text-xl font-bold text-white"
                >
                  {initials(a.name)}
                </div>
                <div>
                  <h3 className="font-serif text-base font-bold text-navy-800">
                    <Link href={authorUrl(a.slug)} className="hover:text-gold-600 hover:underline">
                      {a.name}
                    </Link>
                  </h3>
                  <p className="text-sm font-semibold text-gold-600">{a.role}</p>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{a.bio}</p>
                  <p className="mt-2 text-sm">
                    <Link
                      href={authorUrl(a.slug)}
                      className="font-semibold text-navy underline decoration-gold-500 underline-offset-2 hover:text-gold-600"
                    >
                      Profilo e articoli →
                    </Link>
                  </p>
                </div>
              </article>
            ))}
          </div>
        </LegalSection>

        <LegalSection id="linea-editoriale" title="Linea editoriale">
          <ul className="list-disc space-y-1.5 pl-6 marker:text-gold-600">
            <li>
              <strong>Verifica prima della pubblicazione:</strong> ogni articolo di normativa e fisco
              cita le fonti ufficiali (Agenzia delle Entrate, ENEA, GSE, norme UNI) e viene aggiornato
              quando la norma cambia — la data di revisione è sempre visibile.
            </li>
            <li>
              <strong>Risposte prima di tutto:</strong> i nostri articoli aprono con una sintesi
              operativa e chiudono con risposte alle domande più frequenti dei lettori.
            </li>
            <li>
              <strong>Indipendenza:</strong> prove e confronti di prodotto sono realizzati dalla
              redazione senza condizionamenti dei produttori; eventuali contenuti sponsorizzati sono
              sempre contrassegnati.
            </li>
            <li>
              <strong>Trasparenza pubblicitaria:</strong> gli spazi dedicati agli annunci sono sempre
              riconoscibili con l'etichetta "Pubblicità".
            </li>
          </ul>
        </LegalSection>

        <LegalSection id="contatti-redazione" title="Contatti della redazione">
          <p>
            Per segnalazioni, comunicati stampa e proposte di collaborazione:{" "}
            <a href="mailto:redazione@corrieredile.it" className="font-medium text-navy underline decoration-gold-500 underline-offset-2 hover:text-gold-600">
              redazione@corrieredile.it
            </a>
            . Per tutti gli altri contatti usa la{" "}
            <Link href="/contatti" className="font-medium text-navy underline decoration-gold-500 underline-offset-2 hover:text-gold-600">
              pagina contatti
            </Link>
            .
          </p>
          <PlaceholderNote>
            indirizzi email e recapiti della redazione sono dimostrativi e vanno sostituiti con quelli
            reali prima della pubblicazione.
          </PlaceholderNote>
          <p className="flex items-center gap-2 text-sm text-muted-foreground">
            <Mail className="h-4 w-4 text-gold-600" aria-hidden="true" />
            Domus Group S.r.l. — Via Aurelio Saffi 29, 20123 Milano
          </p>
        </LegalSection>
      </LegalPage>
    </>
  );
}
