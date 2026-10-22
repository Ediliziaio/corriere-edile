import { redirect } from "next/navigation";
import type { Metadata } from "next";
import { FEATURED_ARTICLE } from "@/data/fullArticles";

// Static export uses a meta refresh: this navigation-only document is not
// an indexable article and must not inherit the home page's canonical.
export const metadata: Metadata = {
  robots: { index: false, follow: true },
  alternates: { canonical: `/articolo/${FEATURED_ARTICLE.slug}/` },
};

// /articolo senza slug → articolo in evidenza (in static export: meta-refresh)
export default function ArticoloIndex() {
  redirect(`/articolo/${FEATURED_ARTICLE.slug}`);
}
