"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { renderRichText } from "@/lib/richText";

/** FAQ item espandibile — accessibile (button + aria-expanded). Usato in home e articoli. */
export default function FaqItem({ q, a, rich = false }: { q: string; a: string; rich?: boolean }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="rounded-lg border border-border bg-white">
      <h3>
        <button
          aria-expanded={open}
          onClick={() => setOpen(!open)}
          className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left font-semibold text-navy-800"
        >
          {q}
          <ChevronDown
            aria-hidden="true"
            className={`h-5 w-5 shrink-0 text-gold-600 transition-transform ${open ? "rotate-180" : ""}`}
          />
        </button>
      </h3>
      {open && (
        <p className="border-t border-border px-5 py-4 text-sm leading-relaxed text-muted-foreground">
          {rich ? renderRichText(a) : a}
        </p>
      )}
    </div>
  );
}
