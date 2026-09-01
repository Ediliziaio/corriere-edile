/**
 * AdSlot — punto di innesto pubblicitario.
 *
 * IMPORTANTE (SEO/qualita' percepita): finche' non esiste una creativita'
 * reale o un ad server collegato, in produzione lo slot NON renderizza nulla.
 * Mostrare riquadri tratteggiati con dentro l'ID tecnico dello slot
 * ("Billboard IAB 970x250 · slot: home_billboard_top") fa leggere il sito
 * come incompleto/template sia agli utenti sia ai sistemi di qualita' di
 * Google — esattamente il segnale da evitare su un dominio che sta ancora
 * lottando per essere indicizzato.
 *
 * In sviluppo il placeholder resta visibile per lavorare sul layout.
 * Per attivare la pubblicita': impostare `creative` (immagine + link) oppure
 * collegare l'ad server nel punto indicato piu' sotto.
 */

export type AdFormat = "billboard" | "leaderboard" | "mpu" | "halfpage" | "infeed";

const FORMATS: Record<AdFormat, { label: string; size: string; box: string; w: number; h: number }> = {
  billboard: { label: "Billboard", size: "970×250", box: "h-[250px] max-w-[970px]", w: 970, h: 250 },
  leaderboard: { label: "Leaderboard", size: "728×90", box: "h-[90px] max-w-[728px]", w: 728, h: 90 },
  mpu: { label: "MPU", size: "300×250", box: "h-[250px] max-w-[300px]", w: 300, h: 250 },
  halfpage: { label: "Half Page", size: "300×600", box: "h-[600px] max-w-[300px]", w: 300, h: 600 },
  infeed: { label: "In-Feed", size: "fluid", box: "h-[220px]", w: 640, h: 220 },
};

export interface AdCreative {
  /** Immagine della creativita' in /public (es. "/images/adv/campagna.jpg") */
  src: string;
  /** URL di destinazione */
  href: string;
  /** Testo alternativo: descrive l'inserzionista, non "pubblicita'" */
  alt: string;
}

export default function AdSlot({
  format,
  id,
  className = "",
  creative,
}: {
  format: AdFormat;
  /** Identificativo slot per l'ad server, es. "home_billboard_top" */
  id: string;
  className?: string;
  /** Creativita' diretta (venduta in proprio). Se assente lo slot resta vuoto. */
  creative?: AdCreative;
}) {
  const f = FORMATS[format];
  const isDev = process.env.NODE_ENV !== "production";

  // Creativita' reale: viene mostrata con spazio riservato (niente CLS)
  if (creative) {
    return (
      <aside aria-label="Pubblicità" data-ad-slot={id} className={`mx-auto w-full ${className}`}>
        <p className="mb-1 text-center text-[10px] uppercase tracking-widest text-muted-foreground">
          Pubblicità
        </p>
        <a
          href={creative.href}
          target="_blank"
          rel="sponsored noopener"
          className={`mx-auto block ${f.box} ${format === "billboard" || format === "leaderboard" ? "hidden sm:block" : ""}`}
        >
          <img
            src={creative.src}
            alt={creative.alt}
            width={f.w}
            height={f.h}
            loading="lazy"
            decoding="async"
            className="h-full w-full rounded-md object-cover"
          />
        </a>
      </aside>
    );
  }

  // TODO ad server: qui va inserito lo script di Google Ad Manager / altro
  // network, mantenendo l'altezza riservata di FORMATS[format] per il CLS.

  // Produzione senza creativita': nessun ingombro, nessun placeholder.
  if (!isDev) return null;

  return (
    <aside aria-label="Spazio pubblicitario (anteprima sviluppo)" data-ad-slot={id} className={`mx-auto w-full ${className}`}>
      <div
        className={`mx-auto flex w-full flex-col items-center justify-center gap-1 rounded-md border-2 border-dashed border-navy-200 bg-navy-50/60 text-navy-700 ${f.box} ${
          format === "billboard" || format === "leaderboard" ? "hidden sm:flex" : ""
        }`}
      >
        <span className="text-sm font-semibold">{f.label}</span>
        <span className="text-xs text-muted-foreground">
          IAB {f.size} · slot: <code className="text-[11px]">{id}</code> · solo in dev
        </span>
      </div>
    </aside>
  );
}
