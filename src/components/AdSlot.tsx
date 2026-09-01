import type { Creative } from "@/lib/adv";

/**
 * AdSlot — spazio pubblicitario.
 *
 * Regole applicate:
 * 1. Nessun placeholder in produzione. Senza creativita' lo slot non
 *    renderizza nulla: i riquadri finti con dentro l'ID tecnico facevano
 *    leggere il sito come incompleto.
 * 2. Lo spazio e' riservato con il rapporto d'aspetto NATIVO della
 *    creativita' (aspect-ratio + width/height), quindi zero layout shift
 *    e zero ritagli sul testo del banner.
 * 3. Il link e' sempre rel="sponsored noopener": obbligatorio per Google sui
 *    link pubblicitari, altrimenti un link commerciale ripetuto su tutte le
 *    pagine viene letto come schema di link.
 * 4. `creativeMobile` permette di servire una creativita' diversa sotto i
 *    768px: le strisce ultra-larghe sono illeggibili su telefono.
 */

export type AdFormat = "billboard" | "leaderboard" | "mpu" | "halfpage" | "infeed";

/** Larghezza massima resa a schermo per formato (lo spazio resta riservato). */
const MAXW: Record<AdFormat, string> = {
  billboard: "max-w-[970px]",
  leaderboard: "max-w-[1200px]",
  mpu: "max-w-[300px]",
  halfpage: "max-w-[300px]",
  infeed: "max-w-[640px]",
};

function Banner({ c, className = "" }: { c: Creative; className?: string }) {
  return (
    <a
      href={c.href}
      target="_blank"
      rel="sponsored noopener"
      className={`block overflow-hidden rounded-md ${className}`}
    >
      <picture>
        <source srcSet={`/images/adv/${c.base}.webp`} type="image/webp" />
        <img
          src={`/images/adv/${c.base}.jpg`}
          alt={c.alt}
          width={c.width}
          height={c.height}
          loading="lazy"
          decoding="async"
          className="h-auto w-full"
          style={{ aspectRatio: `${c.width} / ${c.height}` }}
        />
      </picture>
    </a>
  );
}

export default function AdSlot({
  format,
  id,
  className = "",
  creative,
  creativeMobile,
}: {
  format: AdFormat;
  /** Identificativo slot per l'ad server, es. "home_billboard_top" */
  id: string;
  className?: string;
  /** Creativita' desktop. Se assente lo slot resta vuoto. */
  creative?: Creative;
  /** Creativita' alternativa sotto i 768px (per le strisce ultra-larghe). */
  creativeMobile?: Creative;
}) {
  const isDev = process.env.NODE_ENV !== "production";

  if (creative) {
    return (
      <aside aria-label="Pubblicità" data-ad-slot={id} className={`mx-auto w-full ${className}`}>
        <p className="mb-1 text-center text-[10px] uppercase tracking-widest text-muted-foreground">
          Pubblicità
        </p>
        <div className={`mx-auto ${MAXW[format]}`}>
          {creativeMobile ? (
            <>
              <Banner c={creativeMobile} className="md:hidden" />
              <Banner c={creative} className="hidden md:block" />
            </>
          ) : (
            <Banner c={creative} />
          )}
        </div>
      </aside>
    );
  }

  // TODO ad server: innesto per Google Ad Manager, mantenendo lo spazio riservato.

  if (!isDev) return null;

  return (
    <aside
      aria-label="Spazio pubblicitario (anteprima sviluppo)"
      data-ad-slot={id}
      className={`mx-auto w-full ${className}`}
    >
      <div className={`mx-auto flex h-24 items-center justify-center rounded-md border-2 border-dashed border-navy-200 bg-navy-50/60 text-xs text-navy-700 ${MAXW[format]}`}>
        slot libero: <code className="ml-1">{id}</code> · solo in dev
      </div>
    </aside>
  );
}
