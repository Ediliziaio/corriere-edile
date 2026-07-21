/**
 * Mappa categorie editoriali → slug URL e intro SEO.
 * Usata da Header, Footer, CategoryPage, breadcrumb articolo e sitemap.
 */
import { CATEGORIES } from "@/data/articles";

export interface CategoryInfo {
  name: string; // nome editoriale (come in FullArticle.category)
  slug: string; // slug URL
  description: string; // intro SEO 2-3 frasi per la pagina categoria
}

export const CATEGORY_LIST: CategoryInfo[] = [
  {
    name: "Attualità",
    slug: "attualita",
    description:
      "Notizie e tendenze dal mondo delle costruzioni: innovazione, tecnologia e scenari che cambiano il lavoro di imprese edili, artigiani e professionisti. Aggiornamenti quotidiani dalla redazione di Corriere Edile.",
  },
  {
    name: "Normativa",
    slug: "normativa",
    description:
      "Norme, decreti e direttive che regolano l'edilizia italiana: dal Codice dei contratti ai requisiti tecnici degli edifici. Guide chiare e operative per lavorare in regola, senza sorprese in cantiere.",
  },
  {
    name: "Bonus & Fisco",
    slug: "bonus-fisco",
    description:
      "Detrazioni, incentivi e agevolazioni fiscali per la casa e il cantiere: bonus ristrutturazioni, ecobonus, Conto termico e adempimenti. Aliquote, massimali e scadenze spiegati per imprese e committenti.",
  },
  {
    name: "Mercato",
    slug: "mercato",
    description:
      "Numeri, previsioni e analisi sul mercato delle costruzioni: prezzi dei materiali, investimenti, classifiche delle imprese e scenari congiunturali. I dati che servono per decidere.",
  },
  {
    name: "Prodotti & Materiali",
    slug: "prodotti-materiali",
    description:
      "Serramenti, isolanti, impianti e materiali da costruzione: prove, confronti e guide alla scelta per serramentisti, progettisti e imprese. Prestazioni, certificazioni e prezzi reali.",
  },
  {
    name: "Progetti",
    slug: "progetti",
    description:
      "Progettazione e riqualificazione: ristrutturazioni, efficienza energetica, bioedilizia e nuove costruzioni. Casi studio, costi al metro quadro e soluzioni tecniche per progettisti e imprese.",
  },
  {
    name: "Cantieri",
    slug: "cantieri",
    description:
      "La vita del cantiere: sicurezza, posa in opera, organizzazione del lavoro e grandi opere. Procedure, norme tecniche e buone pratiche per imprese esecutrici e direzioni lavori.",
  },
  {
    name: "Eventi & Fiere",
    slug: "eventi-fiere",
    description:
      "Fiere, convegni e appuntamenti del settore costruzioni in Italia e in Europa: anteprime sui prodotti, reportage dai padiglioni e occasioni di business per la filiera edile.",
  },
];

export function categoryUrl(nameOrSlug: string): string {
  const c = CATEGORY_LIST.find((c) => c.name === nameOrSlug || c.slug === nameOrSlug);
  return `/categoria/${c ? c.slug : nameOrSlug}`;
}

export function getCategoryBySlug(slug: string): CategoryInfo | undefined {
  return CATEGORY_LIST.find((c) => c.slug === slug);
}

export function getCategoryByName(name: string): CategoryInfo | undefined {
  return CATEGORY_LIST.find((c) => c.name === name);
}

/** Verifica coerenza: tutte le categorie editoriali devono avere uno slug. */
if (process.env.NODE_ENV !== "production") {
  for (const c of CATEGORIES) {
    if (!getCategoryByName(c)) console.warn(`Categoria senza slug: ${c}`);
  }
}
