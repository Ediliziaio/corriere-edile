import { SITE } from "@/lib/site";

/**
 * Calendario fiere ed eventi del settore costruzioni.
 *
 * Perche' esiste: e' il verticale piu' distintivo della testata. Verificato
 * sui portali concorrenti dello stesso comparto, la copertura di fiere ed
 * eventi e' quasi assente (3 URL su 275 censiti), mentre qui i contenuti
 * dedicati sono gia' quattro. Un hub-calendario e' quindi contenuto che
 * nessun altro offre, intercetta query stagionali con intento preciso
 * ("date SAIE 2026", "quando si tiene Marmomac") e si aggiorna nel tempo,
 * dando al sito un motivo ricorrente per essere ri-scansionato.
 *
 * REGOLA SUI DATI: lo schema Event viene emesso SOLO quando la data e'
 * documentata nell'articolo di riferimento. Un markup Event con date
 * inventate e' un errore che Google sanziona: meglio nessun markup.
 */

export type DatePrecision = "day" | "month" | "unknown";

export interface Fiera {
  name: string;
  /** Articolo di approfondimento gia' pubblicato */
  articleSlug: string;
  venue: string;
  city: string;
  region: string;
  /** ISO 8601. Precisione giorno "2026-09-22" o mese "2027-10". Vuoto se ignota. */
  startDate?: string;
  endDate?: string;
  precision: DatePrecision;
  /** Testo mostrato all'utente quando la data non e' al giorno */
  dateLabel: string;
  focus: string;
}

export const FIERE: Fiera[] = [
  {
    name: "Marmomac 2026",
    articleSlug: "marmomac-2026-verona-pietra-naturale",
    venue: "Veronafiere",
    city: "Verona",
    region: "Veneto",
    startDate: "2026-09-22",
    endDate: "2026-09-25",
    precision: "day",
    dateLabel: "22–25 settembre 2026",
    focus: "Pietra naturale, lavorazione e applicazioni in architettura ed edilizia.",
  },
  {
    name: "SAIE 2026",
    articleSlug: "saie-2026-bologna-anteprima",
    venue: "BolognaFiere",
    city: "Bologna",
    region: "Emilia-Romagna",
    precision: "unknown",
    dateLabel: "Date in via di conferma",
    focus: "Cantiere digitale, BIM, robotica di cantiere ed economia circolare.",
  },
  {
    name: "MADE Expo 2027",
    articleSlug: "made-expo-2027-milano-anteprima",
    venue: "Fiera Milano Rho",
    city: "Milano",
    region: "Lombardia",
    startDate: "2027-10",
    precision: "month",
    dateLabel: "Ottobre 2027",
    focus: "Involucro, serramenti, costruzioni e architettura: la biennale della filiera.",
  },
  {
    name: "Klimahouse 2026",
    articleSlug: "klimahouse-2026-bolzano-anteprima",
    venue: "Fiera Bolzano",
    city: "Bolzano",
    region: "Trentino-Alto Adige",
    startDate: "2026-01",
    precision: "month",
    dateLabel: "Gennaio 2026 — edizione conclusa",
    focus: "Riqualificazione energetica, rinnovabili e materiali per il costruire sostenibile.",
  },
];

/** Una fiera e' passata se la sua data documentata precede oggi. */
export function isPast(f: Fiera, today = new Date()): boolean {
  if (!f.startDate) return false;
  const ref = f.endDate ?? f.startDate;
  // "2027-10" -> fine mese; "2026-09-25" -> quel giorno
  const d =
    ref.length === 7 ? new Date(`${ref}-01T00:00:00Z`) : new Date(`${ref}T00:00:00Z`);
  if (ref.length === 7) d.setUTCMonth(d.getUTCMonth() + 1);
  return d < today;
}

/**
 * Event JSON-LD. Emesso solo con data documentata: senza startDate lo schema
 * non e' valido e un Event con date inventate danneggia piu' di quanto aiuti.
 */
export function eventJsonLd(f: Fiera) {
  if (!f.startDate) return null;
  return {
    "@context": "https://schema.org",
    "@type": "Event",
    name: f.name,
    startDate: f.startDate,
    ...(f.endDate ? { endDate: f.endDate } : {}),
    eventStatus: "https://schema.org/EventScheduled",
    eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
    description: f.focus,
    location: {
      "@type": "Place",
      name: f.venue,
      address: {
        "@type": "PostalAddress",
        addressLocality: f.city,
        addressRegion: f.region,
        addressCountry: "IT",
      },
    },
    url: `${SITE.url}/articolo/${f.articleSlug}/`,
    inLanguage: "it-IT",
  };
}
