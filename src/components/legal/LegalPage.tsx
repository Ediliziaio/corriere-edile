import Link from "next/link";
import { ChevronRight } from "lucide-react";
import type { ReactNode } from "react";

/**
 * Layout condiviso per le pagine legali/istituzionali:
 * breadcrumb, H1, nota aggiornamento, prose leggibile (max-w-3xl).
 * La metadata SEO vive nei page.tsx server (export const metadata).
 */
export default function LegalPage({
  title,
  updated,
  children,
}: {
  title: string;
  updated?: string;
  children: ReactNode;
}) {
  return (
      <div className="mx-auto max-w-3xl px-4 py-8">
        <nav aria-label="Breadcrumb" className="mb-4">
          <ol className="flex flex-wrap items-center gap-1 text-xs text-muted-foreground">
            <li>
              <Link href="/" className="hover:text-navy hover:underline">Home</Link>
            </li>
            <li aria-hidden="true"><ChevronRight className="h-3 w-3" /></li>
            <li aria-current="page" className="font-medium text-navy-700">{title}</li>
          </ol>
        </nav>
        <article className="legal-prose">
          <h1 className="font-serif text-3xl font-bold text-navy-900 sm:text-4xl">{title}</h1>
          {updated && (
            <p className="mt-2 text-sm text-muted-foreground">
              Ultimo aggiornamento: <time dateTime="2026-07-21">{updated}</time>
            </p>
          )}
          <div className="mt-6 space-y-6 leading-relaxed text-foreground">{children}</div>
        </article>
      </div>
  );
}

/** Sezione H2 coerente per le pagine legali */
export function LegalSection({ id, title, children }: { id?: string; title: string; children: ReactNode }) {
  return (
    <section aria-labelledby={id}>
      <h2 id={id} className="border-l-4 border-gold-500 pl-3 font-serif text-xl font-bold text-navy-800">
        {title}
      </h2>
      <div className="mt-3 space-y-3 text-[15px] leading-relaxed">{children}</div>
    </section>
  );
}

/** Box placeholder da personalizzare prima della messa online */
export function PlaceholderNote({ children }: { children: ReactNode }) {
  return (
    <p className="rounded-md border border-dashed border-gold-600 bg-gold-50 px-3 py-2 text-sm text-navy-800">
      <strong className="font-semibold">Placeholder da personalizzare:</strong> {children}
    </p>
  );
}
