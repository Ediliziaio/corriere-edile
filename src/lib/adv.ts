/**
 * Registro creativita' pubblicitarie vendute in diretta.
 *
 * Principio: lo slot si adatta alla creativita', non il contrario.
 * Le creativita' EdiliziaInCloud contengono testo e una CTA: ritagliarle per
 * forzarle in un formato IAB rigido (object-cover) renderebbe illeggibile il
 * messaggio. Qui ogni creativita' dichiara le proprie dimensioni native e
 * AdSlot riserva lo spazio con quel rapporto d'aspetto — nessun ritaglio e
 * nessun layout shift (CLS).
 *
 * Ogni link e' rel="sponsored" (requisito Google per i link pubblicitari:
 * senza, un link commerciale in tutte le pagine e' considerato uno schema di
 * link) e porta UTM per la misurazione lato inserzionista.
 */

export interface Creative {
  /** Base del file in /images/adv (esistono <base>.webp e <base>.jpg) */
  base: string;
  /** Dimensioni native: servono a riservare lo spazio esatto */
  width: number;
  height: number;
  /** Alt descrittivo dell'inserzionista, non "pubblicita'" */
  alt: string;
  href: string;
}

const EIC_BASE = "https://www.ediliziaincloud.com/";

/** Aggiunge gli UTM al link dell'inserzionista in base alla posizione. */
function eicHref(slot: string): string {
  const u = new URL(EIC_BASE);
  u.searchParams.set("utm_source", "corrieredile");
  u.searchParams.set("utm_medium", "banner");
  u.searchParams.set("utm_campaign", "ediliziaincloud");
  u.searchParams.set("utm_content", slot);
  return u.toString();
}

const ALT =
  "EdiliziaInCloud — gestionale con AI per imprese edili: margini di cantiere, fatturazione e CRM. Prova gratuita di 31 giorni";

/** Striscia orizzontale larghissima — solo desktop (su mobile diventa illeggibile). */
export const EIC_STRIP = (slot: string): Creative => ({
  base: "eic-strip",
  width: 1600,
  height: 148,
  alt: ALT,
  href: eicHref(slot),
});

/** Formato orizzontale grande, per il billboard sotto l'hero. */
export const EIC_WIDE = (slot: string): Creative => ({
  base: "eic-wide",
  width: 1400,
  height: 581,
  alt: ALT,
  href: eicHref(slot),
});

/** Formato box, per la sidebar (rapporto vicino all'MPU 300x250). */
export const EIC_BOX = (slot: string): Creative => ({
  base: "eic-box",
  width: 800,
  height: 666,
  alt: ALT,
  href: eicHref(slot),
});

/** Half Page IAB 300x600 verticale — sidebar. Gia' a dimensione di resa. */
export const EIC_HALFPAGE = (slot: string): Creative => ({
  base: "eic-halfpage",
  width: 300,
  height: 600,
  alt: ALT,
  href: eicHref(slot),
});

/** Formato in-feed, per l'inserimento a meta' articolo. */
export const EIC_INFEED = (slot: string): Creative => ({
  base: "eic-infeed",
  width: 900,
  height: 654,
  alt: ALT,
  href: eicHref(slot),
});
