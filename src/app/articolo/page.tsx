import { redirect } from "next/navigation";
import { FEATURED_ARTICLE } from "@/data/fullArticles";

// /articolo senza slug → articolo in evidenza (in static export: meta-refresh)
export default function ArticoloIndex() {
  redirect(`/articolo/${FEATURED_ARTICLE.slug}`);
}
