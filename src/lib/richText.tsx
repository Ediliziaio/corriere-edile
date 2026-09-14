/**
 * richText.tsx — rendering del mini-markdown dei contenuti editoriali.
 *
 * Sintassi supportata nei campi testo degli articoli: [label](url)
 * - url esterni (https://…) → <a target="_blank" rel="noopener">
 *   con rel noopener per sicurezza e stile navy + underline (E-E-A-T:
 *   link uscenti verso fonti ufficiali rafforzano la credibilità).
 * - url interni (/…) → <Link> di Next.js.
 *
 * extractExternalLinks: raccoglie i domini linkati per il box
 * "Fonti e aziende citate" (E-E-A-T + citabilità GEO).
 */
import Link from "next/link";
import type { ReactNode } from "react";

// [label](url) oppure [label](url "sponsored") per i link a pagamento
const MD_LINK = /\[([^\]]+)\]\(([^)\s]+)(?:\s+"([^"]*)")?\)/g;
const MD_BOLD = /\*\*(.+?)\*\*/g;

/** Testo semplice con **grassetto**. */
function renderBold(text: string, keyBase: string): ReactNode[] {
  const out: ReactNode[] = [];
  let last = 0;
  let k = 0;
  for (const m of text.matchAll(MD_BOLD)) {
    if (m.index > last) out.push(text.slice(last, m.index));
    out.push(<strong key={`${keyBase}-b${k++}`}>{m[1]}</strong>);
    last = m.index + m[0].length;
  }
  if (last < text.length) out.push(text.slice(last));
  return out;
}

const EXTERNAL_CLS =
  "font-medium text-navy underline decoration-gold-500 decoration-2 underline-offset-2 hover:text-gold-600";
const INTERNAL_CLS =
  "font-medium text-navy underline decoration-gold-500 decoration-2 underline-offset-2 hover:text-gold-600";

export function renderRichText(text: string): ReactNode {
  const parts: ReactNode[] = [];
  let last = 0;
  let key = 0;
  for (const m of text.matchAll(MD_LINK)) {
    const idx = m.index;
    if (idx > last) parts.push(...renderBold(text.slice(last, idx), `t${key}`));
    const [, label, url, title] = m;
    if (url.startsWith("/")) {
      parts.push(
        <Link key={key++} href={url} className={INTERNAL_CLS}>
          {label}
        </Link>
      );
    } else {
      parts.push(
        <a key={key++} href={url} target="_blank" rel={title === "sponsored" ? "sponsored noopener" : "noopener"} className={EXTERNAL_CLS}>
          {label}
        </a>
      );
    }
    last = idx + m[0].length;
  }
  if (last < text.length) parts.push(...renderBold(text.slice(last), `t${key}`));
  return parts;
}

export interface ExternalRef {
  url: string;
  label: string;
  domain: string;
}

/** Estrae link esterni unici (per URL) da un insieme di testi markdown. */
export function extractExternalLinks(texts: string[]): ExternalRef[] {
  const seen = new Map<string, ExternalRef>();
  for (const t of texts) {
    for (const m of t.matchAll(MD_LINK)) {
      const [, label, url, title] = m;
      // i link a pagamento non entrano nel box delle fonti
      if (url.startsWith("/") || seen.has(url) || title === "sponsored") continue;
      let domain = url;
      try {
        domain = new URL(url).hostname.replace(/^www\./, "");
      } catch {
        /* url non valido: mostra l'url grezzo */
      }
      seen.set(url, { url, label, domain });
    }
  }
  return [...seen.values()];
}

/** Rimuove la sintassi markdown link lasciando solo il testo (per conteggi/alt). */
export function stripMarkdown(text: string): string {
  return text.replace(MD_LINK, "$1");
}
