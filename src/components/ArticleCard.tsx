import Link from "next/link";
import { Clock } from "lucide-react";
import type { FullArticle } from "@/data/fullArticles";

export function formatDateIT(iso: string) {
  return new Intl.DateTimeFormat("it-IT", { day: "numeric", month: "long", year: "numeric" }).format(
    new Date(iso)
  );
}

export function CategoryChip({ label }: { label: string }) {
  return (
    <span className="inline-block rounded-sm bg-navy px-2 py-0.5 text-[11px] font-bold uppercase tracking-wide text-white">
      {label}
    </span>
  );
}

export function ArticleMeta({ date, readingTime, light = false }: { date: string; readingTime: number; light?: boolean }) {
  return (
    <p className={`flex items-center gap-2 text-xs ${light ? "text-navy-100" : "text-muted-foreground"}`}>
      {/* <time datetime> = data machine-readable per crawler e rich results */}
      <time dateTime={date}>{formatDateIT(date)}</time>
      <span aria-hidden="true">·</span>
      <span className="inline-flex items-center gap-1">
        <Clock className="h-3 w-3" aria-hidden="true" /> {readingTime} min di lettura
      </span>
    </p>
  );
}

export function articleUrl(slug: string) {
  return `/articolo/${slug}`;
}

/** Path WebP corrispondente a una cover JPG (generata da scripts) */
export function webpSrc(jpgPath: string) {
  return jpgPath.replace(/\.jpg$/, ".webp");
}

/** Card articolo standard per le griglie news */
export default function ArticleCard({ article, priority = false }: { article: FullArticle; priority?: boolean }) {
  const url = articleUrl(article.slug);
  return (
    <article className="group flex flex-col overflow-hidden rounded-lg border border-border bg-white shadow-xs transition-shadow hover:shadow-md">
      <Link href={url} className="block overflow-hidden" tabIndex={-1} aria-hidden="true">
        {/* <picture>: WebP con fallback JPG per compatibilità */}
        <picture>
          <source srcSet={webpSrc(article.image)} type="image/webp" />
          <img
            src={article.image}
            alt={article.imageAlt}
            loading={priority ? "eager" : "lazy"} // lazy-loading sotto la piega
            decoding="async"
            width={600}
            height={338}
            className="aspect-[16/9] w-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </picture>
      </Link>
      <div className="flex flex-1 flex-col gap-2 p-4">
        <CategoryChip label={article.category} />
        <h3 className="font-serif text-lg font-bold leading-snug text-navy-800 group-hover:text-navy">
          <Link href={url} className="hover:underline">
            {article.title}
          </Link>
        </h3>
        <p className="line-clamp-2 text-sm leading-relaxed text-muted-foreground">{article.excerpt}</p>
        <div className="mt-auto pt-2">
          <ArticleMeta date={article.published} readingTime={article.readingTime} />
        </div>
      </div>
    </article>
  );
}
