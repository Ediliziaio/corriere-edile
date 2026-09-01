/**
 * Registro redazione — base E-E-A-T del sito.
 *
 * Su contenuti YMYL (fisco, detrazioni, normativa tecnica) Google valuta
 * *chi* firma prima ancora di *cosa* è scritto. Una firma non cliccabile e
 * priva di entità verificabile è il punto debole tipico dei siti editoriali
 * che restano in "scansionata ma non indicizzata": il contenuto è buono ma
 * non è attribuibile a nessuno.
 *
 * Ogni autore qui diventa: una pagina /autore/<slug>/ indicizzabile, un
 * Person JSON-LD con @id stabile riferito da ogni articolo, e un archivio
 * delle firme che dà profondità di crawl al sito.
 */
import { SITE } from "@/lib/site";
import { ALL_ARTICLES } from "@/data/fullArticles";
import type { FullArticle } from "@/data/fullArticles/types";

export interface AuthorProfile {
  slug: string;
  name: string;
  role: string;
  bio: string;
  /** Aree di competenza — alimentano knowsAbout nel Person schema */
  expertise: string[];
  /** Titoli/qualifiche verificabili — alimentano hasCredential */
  credentials?: string[];
  /** Profili esterni verificati. Lasciare vuoto finché non esistono davvero:
   *  un sameAs verso un URL inesistente indebolisce l'entità invece di rafforzarla. */
  sameAs?: string[];
}

export const AUTHORS: AuthorProfile[] = [
  {
    slug: "alberto-rinaldi",
    name: "Alberto Rinaldi",
    role: "Caporedattore Normativa & Fisco",
    bio: "Giornalista edile con oltre quindici anni di esperienza, segue fisco agevolato e normativa tecnica per le principali testate di settore. Ha curato guide operative su detrazioni, adempimenti e Testo Unico dell'edilizia, con particolare attenzione all'applicazione pratica delle norme in cantiere.",
    expertise: [
      "Bonus edilizi e detrazioni fiscali",
      "Testo Unico dell'edilizia",
      "Pratiche edilizie (CILA, SCIA, permesso di costruire)",
      "Adempimenti fiscali per imprese di costruzione",
    ],
    credentials: ["Giornalista pubblicista"],
  },
  {
    slug: "chiara-bonomi",
    name: "Chiara Bonomi",
    role: "Redattrice Mercato & Imprese",
    bio: "Si occupa di analisi di mercato, congiuntura delle costruzioni e dinamiche delle imprese edili. Collabora con centri studi e associazioni di categoria per la lettura dei dati su investimenti, compravendite e prezzi dei materiali.",
    expertise: [
      "Congiuntura del mercato delle costruzioni",
      "Prezzi dei materiali da costruzione",
      "Mercato immobiliare e compravendite",
      "Analisi economica delle imprese edili",
    ],
  },
  {
    slug: "federico-salvetti",
    name: "Federico Salvetti",
    role: "Redattore Prodotti & Materiali tecnici",
    bio: "Ingegnere dei materiali, scrive di serramenti, involucro edilizio e tecnologie per l'efficienza energetica. Ha lavorato in laboratori di prova e uffici tecnici, e valuta i prodotti sulla base di prestazioni dichiarate, certificazioni e comportamento reale in opera.",
    expertise: [
      "Serramenti e posa in opera (UNI 11673)",
      "Materiali isolanti e involucro edilizio",
      "Efficienza energetica degli edifici",
      "Certificazioni e marcatura CE dei prodotti da costruzione",
    ],
    credentials: ["Ingegneria dei materiali"],
  },
  {
    slug: "sara-colombo",
    name: "Sara Colombo",
    role: "Redattrice Cantieri & Progetti",
    bio: "Architetto, segue cantieri, sicurezza e processi digitali di progettazione. Ha esperienza in direzione lavori e coordinamento della sicurezza in fase di progettazione ed esecuzione, e segue l'adozione del BIM nelle imprese e negli appalti pubblici.",
    expertise: [
      "Sicurezza nei cantieri (D.Lgs. 81/2008)",
      "Direzione lavori e coordinamento sicurezza",
      "BIM e digitalizzazione del cantiere",
      "Rigenerazione urbana e riqualificazione",
    ],
    credentials: ["Architetto"],
  },
];

/** URL canonico della pagina autore (sempre con trailing slash). */
export function authorUrl(slug: string): string {
  return `/autore/${slug}/`;
}

/** @id stabile dell'entità Person: riferito dagli articoli via author: { "@id": ... }. */
export function authorId(slug: string): string {
  return `${SITE.url}/autore/${slug}/#person`;
}

export function getAuthorBySlug(slug: string): AuthorProfile | undefined {
  return AUTHORS.find((a) => a.slug === slug);
}

/** Risolve la firma testuale presente nei dati articolo verso il profilo redazione. */
export function getAuthorByName(name: string): AuthorProfile | undefined {
  return AUTHORS.find((a) => a.name === name);
}

/** Articoli firmati da un autore, dal più recente. */
export function getArticlesByAuthor(name: string): FullArticle[] {
  return ALL_ARTICLES.filter((a) => a.author.name === name).sort(
    (x, y) => +new Date(y.published) - +new Date(x.published),
  );
}

/** Person JSON-LD completo — usato nella pagina autore. */
export function personJsonLd(a: AuthorProfile) {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": authorId(a.slug),
    name: a.name,
    url: `${SITE.url}${authorUrl(a.slug)}`,
    jobTitle: a.role,
    description: a.bio,
    knowsAbout: a.expertise,
    ...(a.credentials?.length
      ? {
          hasCredential: a.credentials.map((c) => ({
            "@type": "EducationalOccupationalCredential",
            name: c,
          })),
        }
      : {}),
    ...(a.sameAs?.length ? { sameAs: a.sameAs } : {}),
    worksFor: { "@id": `${SITE.url}/#organization` },
  };
}
