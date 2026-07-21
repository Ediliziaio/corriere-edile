/**
 * AdSlot — Placeholder pubblicitario riutilizzabile.
 *
 * Ogni slot riporta nome e formato IAB per mappare 1:1 l'inventario
 * verso l'ad server (es. Google Ad Manager) in produzione.
 * I formati wide (billboard/leaderboard) collassano su mobile per
 * preservare CLS e Core Web Vitals.
 */

export type AdFormat = "billboard" | "leaderboard" | "mpu" | "halfpage" | "infeed";

const FORMATS: Record<AdFormat, { label: string; size: string; box: string }> = {
  billboard: { label: "Billboard", size: "970×250", box: "h-[250px] max-w-[970px]" },
  leaderboard: { label: "Leaderboard", size: "728×90", box: "h-[90px] max-w-[728px]" },
  mpu: { label: "MPU", size: "300×250", box: "h-[250px] max-w-[300px]" },
  halfpage: { label: "Half Page", size: "300×600", box: "h-[600px] max-w-[300px]" },
  infeed: { label: "In-Feed", size: "fluid", box: "h-[220px]" },
};

export default function AdSlot({
  format,
  id,
  className = "",
}: {
  format: AdFormat;
  /** Identificativo slot per l'ad server, es. "home_billboard_top" */
  id: string;
  className?: string;
}) {
  const f = FORMATS[format];
  return (
    <aside
      aria-label="Pubblicità"
      data-ad-slot={id}
      className={`mx-auto w-full ${className}`}
    >
      <p className="mb-1 text-center text-[10px] uppercase tracking-widest text-muted-foreground">
        Pubblicità
      </p>
      <div
        className={`mx-auto flex w-full flex-col items-center justify-center gap-1 rounded-md border-2 border-dashed border-navy-200 bg-navy-50/60 text-navy-700 ${f.box} ${
          // Su mobile i formati desktop-only (billboard/leaderboard) collassano a box compatto
          format === "billboard" || format === "leaderboard" ? "hidden sm:flex" : ""
        }`}
      >
        <span className="text-sm font-semibold">{f.label}</span>
        <span className="text-xs text-muted-foreground">
          IAB {f.size} · slot: <code className="text-[11px]">{id}</code>
        </span>
      </div>
    </aside>
  );
}
