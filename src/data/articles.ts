/**
 * Dati editoriali statici — Corriere Edile
 * Le news/card ora derivano dai 20 articoli reali in ./fullArticles.
 * Qui restano categorie di navigazione e le FAQ istituzionali della homepage.
 */

export const CATEGORIES = [
  "Attualità",
  "Normativa",
  "Bonus & Fisco",
  "Mercato",
  "Prodotti & Materiali",
  "Progetti",
  "Cantieri",
  "Eventi & Fiere",
];

/** FAQ homepage — con markup FAQPage JSON-LD (AEO: risposte dirette estraibili dagli answer engine) */
export const HOME_FAQS = [
  {
    q: "Quali bonus edilizi sono attivi nel 2026?",
    a: "Nel 2026 restano attivi il bonus ristrutturazioni al 50% sulla prima casa (36% sulle seconde case) con tetto di 96.000 euro, l'ecobonus per interventi di efficienza energetica e il bonus mobili. La cessione del credito è consentita solo per casi specifici previsti dalla normativa vigente.",
  },
  {
    q: "Chi può accedere al bonus ristrutturazioni?",
    a: "Possono accedere persone fisiche proprietarie o titolari di diritti reali sull'immobile, condomini per le parti comuni, e in alcuni casi imprese per immobili strumentali. È necessario che l'intervento rientri tra quelli ammessi dall'art. 16-bis del TUIR.",
  },
  {
    q: "Cosa serve per aprire un cantiere edile a norma?",
    a: "Servono titolo abilitativo (CILA, SCIA o permesso di costruire a seconda dell'intervento), notifica preliminare alla ASL per cantieri con più imprese, piano di sicurezza (POS/PSC dove previsto), DURC in corso di validità e rispetto delle norme del D.Lgs. 81/2008.",
  },
  {
    q: "Qual è la differenza tra CILA e SCIA edilizia?",
    a: "La CILA è una comunicazione per interventi di manutenzione straordinaria leggera senza opere strutturali. La SCIA è richiesta per interventi più incisivi (modifiche strutturali, cambi di destinazione d'uso) e consente l'inizio immediato dei lavori salvo divieti dell'autorità.",
  },
];
