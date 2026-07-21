import type { Metadata } from "next";
import { Suspense } from "react";
import CercaClient from "@/components/CercaClient";

export const metadata: Metadata = {
  title: "Cerca",
  description:
    "Cerca tra gli articoli di Corriere Edile: normativa, bonus edilizi, mercato, prodotti e cantieri.",
  alternates: { canonical: "/cerca" },
  robots: { index: false, follow: true },
};

// useSearchParams richiede un boundary Suspense in static export
export default function CercaPage() {
  return (
    <Suspense
      fallback={
        <div className="mx-auto max-w-7xl px-4 py-8">
          <p className="text-muted-foreground">Caricamento ricerca…</p>
        </div>
      }
    >
      <CercaClient />
    </Suspense>
  );
}
