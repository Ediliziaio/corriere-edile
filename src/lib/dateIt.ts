/** Data estesa in italiano, es. "martedì 1 settembre 2026". */
export function italianDate(d: Date = new Date()): string {
  return new Intl.DateTimeFormat("it-IT", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(d);
}
