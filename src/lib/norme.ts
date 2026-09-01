import { ALL_ARTICLES } from "@/data/fullArticles";
import type { FullArticle } from "@/data/fullArticles/types";

/**
 * Indice delle norme tecniche citate dalla testata.
 *
 * E' l'asset piu' distintivo del sito: nessuna delle altre testate del
 * comparto pubblica un indice normativo. Serve tre scopi insieme:
 * - risponde a query molto specifiche e a intento chiarissimo ("UNI 11673
 *   cos'e'", "EN 12372"), dove chi cerca e' un professionista;
 * - crea una struttura hub-and-spoke: ogni norma rimanda agli articoli che
 *   la trattano, dando percorsi di scansione aggiuntivi verso le pagine
 *   profonde;
 * - e' contenuto definitorio, quindi facilmente citabile dai motori
 *   generativi.
 *
 * REGOLA: si elencano solo norme effettivamente citate negli articoli, con
 * una descrizione di cio' che disciplinano. Nessun riferimento inventato e
 * nessuna pretesa di riportarne il contenuto integrale: il testo delle norme
 * e' degli enti normatori e va acquistato da loro.
 */

export type AmbitoNorma =
  | "Serramenti e involucro"
  | "Sicurezza in cantiere"
  | "Materiali da costruzione"
  | "Digitalizzazione e appalti"
  | "Acustica"
  | "Energia"
  | "Urbanistica ed edilizia";

export interface Norma {
  /** Sigla usata come ancora e come chiave di ricerca */
  code: string;
  /** Cosa disciplina, in una frase */
  oggetto: string;
  ambito: AmbitoNorma;
  /** Ente o fonte */
  fonte: string;
}

export const NORME: Norma[] = [
  // ── Urbanistica, appalti, sicurezza
  {
    code: "DPR 380/2001",
    oggetto:
      "Testo Unico dell'edilizia: titoli abilitativi (CILA, SCIA, permesso di costruire), vigilanza sull'attività urbanistico-edilizia e sanzioni.",
    ambito: "Urbanistica ed edilizia",
    fonte: "Normativa nazionale",
  },
  {
    code: "D.Lgs 81/2008",
    oggetto:
      "Testo Unico su salute e sicurezza nei luoghi di lavoro: obblighi del datore di lavoro, cantieri temporanei o mobili, figure del coordinatore e opere provvisionali.",
    ambito: "Sicurezza in cantiere",
    fonte: "Normativa nazionale",
  },
  {
    code: "D.Lgs 36/2023",
    oggetto:
      "Codice dei contratti pubblici: procedure di affidamento, requisiti di partecipazione ed esecuzione degli appalti di lavori.",
    ambito: "Digitalizzazione e appalti",
    fonte: "Normativa nazionale",
  },
  {
    code: "D.Lgs 192/2005",
    oggetto:
      "Rendimento energetico nell'edilizia: requisiti minimi delle prestazioni energetiche degli edifici e attestazione della prestazione.",
    ambito: "Energia",
    fonte: "Normativa nazionale",
  },
  {
    code: "DPCM 5/12/1997",
    oggetto:
      "Requisiti acustici passivi degli edifici: valori limite di isolamento di facciata, divisori, calpestio e impianti.",
    ambito: "Acustica",
    fonte: "Normativa nazionale",
  },
  {
    code: "Regolamento (UE) 305/2011",
    oggetto:
      "Regolamento prodotti da costruzione (CPR): marcatura CE e Dichiarazione di Prestazione per i prodotti destinati a essere incorporati stabilmente nelle opere.",
    ambito: "Materiali da costruzione",
    fonte: "Unione europea",
  },

  // ── Serramenti e involucro
  {
    code: "UNI 11673",
    oggetto:
      "Posa in opera dei serramenti: progettazione del giunto primario e secondario, criteri di verifica e requisiti del processo di posa.",
    ambito: "Serramenti e involucro",
    fonte: "UNI",
  },
  {
    code: "UNI 11673-2",
    oggetto:
      "Conoscenze, abilità e competenze richieste al posatore di serramenti, ai fini della qualificazione professionale.",
    ambito: "Serramenti e involucro",
    fonte: "UNI",
  },
  {
    code: "UNI EN 14351-1",
    oggetto:
      "Norma di prodotto per finestre e porte pedonali esterne: caratteristiche prestazionali dichiarabili in marcatura CE.",
    ambito: "Serramenti e involucro",
    fonte: "CEN / UNI",
  },
  {
    code: "UNI EN 12207",
    oggetto:
      "Permeabilità all'aria di finestre e porte: metodo di classificazione delle prestazioni.",
    ambito: "Serramenti e involucro",
    fonte: "CEN / UNI",
  },
  {
    code: "UNI EN ISO 10077-1",
    oggetto:
      "Calcolo della trasmittanza termica di finestre, porte e chiusure oscuranti: metodo semplificato.",
    ambito: "Serramenti e involucro",
    fonte: "ISO / CEN / UNI",
  },

  // ── Materiali
  {
    code: "EN 1469",
    oggetto:
      "Prodotti di pietra naturale: lastre per rivestimento murale, requisiti e caratteristiche dichiarabili.",
    ambito: "Materiali da costruzione",
    fonte: "CEN",
  },
  {
    code: "EN 12058",
    oggetto:
      "Prodotti di pietra naturale: lastre per pavimentazioni e scale, requisiti e caratteristiche dichiarabili.",
    ambito: "Materiali da costruzione",
    fonte: "CEN",
  },
  {
    code: "EN 12057",
    oggetto:
      "Prodotti di pietra naturale: marmette modulari di spessore ridotto, requisiti per l'impiego in pavimentazione.",
    ambito: "Materiali da costruzione",
    fonte: "CEN",
  },
  {
    code: "EN 12059",
    oggetto:
      "Prodotti di pietra naturale: elementi lavorati su misura, come davanzali, soglie e cornici.",
    ambito: "Materiali da costruzione",
    fonte: "CEN",
  },
  {
    code: "EN 12326",
    oggetto:
      "Ardesia e altre pietre naturali per coperture discontinue e rivestimenti murali esterni.",
    ambito: "Materiali da costruzione",
    fonte: "CEN",
  },
  {
    code: "EN 12372",
    oggetto:
      "Metodo di prova della pietra naturale: determinazione della resistenza a flessione sotto carico concentrato. È il valore che governa lo spessore delle lastre in facciata.",
    ambito: "Materiali da costruzione",
    fonte: "CEN",
  },
  {
    code: "EN 13755",
    oggetto:
      "Metodo di prova della pietra naturale: determinazione dell'assorbimento d'acqua a pressione atmosferica.",
    ambito: "Materiali da costruzione",
    fonte: "CEN",
  },
  {
    code: "EN 1936",
    oggetto:
      "Metodo di prova della pietra naturale: determinazione della massa volumica reale e apparente e della porosità.",
    ambito: "Materiali da costruzione",
    fonte: "CEN",
  },
  {
    code: "EN 12371",
    oggetto:
      "Metodo di prova della pietra naturale: determinazione della resistenza al gelo, rilevante per gli impieghi esterni.",
    ambito: "Materiali da costruzione",
    fonte: "CEN",
  },
  {
    code: "EN 13163",
    oggetto:
      "Isolanti termici per edilizia: prodotti di polistirene espanso (EPS) ottenuti in fabbrica, specifica e caratteristiche dichiarate.",
    ambito: "Materiali da costruzione",
    fonte: "CEN",
  },
  {
    code: "EN 14080",
    oggetto:
      "Strutture di legno: legno lamellare incollato e legno massiccio incollato, requisiti di prodotto.",
    ambito: "Materiali da costruzione",
    fonte: "CEN",
  },

  // ── Cantiere, BIM, acustica
  {
    code: "UNI EN 12810",
    oggetto:
      "Ponteggi di facciata costituiti da componenti prefabbricati: specifiche di prodotto e configurazioni tipo.",
    ambito: "Sicurezza in cantiere",
    fonte: "CEN / UNI",
  },
  {
    code: "UNI 11337",
    oggetto:
      "Gestione digitale dei processi informativi delle costruzioni: modelli, elaborati e oggetti del processo BIM.",
    ambito: "Digitalizzazione e appalti",
    fonte: "UNI",
  },
  {
    code: "UNI 11337-7",
    oggetto:
      "Requisiti di conoscenza, abilità e competenza delle figure professionali coinvolte nella gestione informativa digitale.",
    ambito: "Digitalizzazione e appalti",
    fonte: "UNI",
  },
  {
    code: "ISO 16283",
    oggetto:
      "Misurazione in opera dell'isolamento acustico di edifici e di elementi di edificio.",
    ambito: "Acustica",
    fonte: "ISO",
  },
];

/** Articoli che citano una norma, cercando la sigla nel testo serializzato. */
export function articoliPerNorma(code: string): FullArticle[] {
  const needle = code.toLowerCase().replace(/\s+/g, " ");
  return ALL_ARTICLES.filter((a) => {
    const hay = JSON.stringify(a).toLowerCase().replace(/\s+/g, " ");
    return hay.includes(needle);
  });
}

/** Ancora stabile per il collegamento diretto alla singola norma. */
export function normaAnchor(code: string): string {
  return code
    .toLowerCase()
    .replace(/[().\/]/g, "")
    .replace(/\s+/g, "-");
}

export const AMBITI: AmbitoNorma[] = [
  "Urbanistica ed edilizia",
  "Sicurezza in cantiere",
  "Serramenti e involucro",
  "Materiali da costruzione",
  "Digitalizzazione e appalti",
  "Energia",
  "Acustica",
];
