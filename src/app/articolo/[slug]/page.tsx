import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ArticleView from "@/components/ArticleView";
import { SITE, jsonLd, absUrl } from "@/lib/site";
import { categoryUrl } from "@/lib/categories";
import { ALL_ARTICLES, getArticleBySlug } from "@/data/fullArticles";

// SSG: tutte le 20 pagine articolo pre-renderizzate a build time
export const dynamicParams = false;

export function generateStaticParams() {
  return ALL_ARTICLES.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) return { title: "Articolo non trovato" };
  const url = `/articolo/${article.slug}`;
  return {
    title: article.metaTitle,
    description: article.metaDescription,
    keywords: article.keywords,
    alternates: { canonical: url },
    openGraph: {
      type: "article",
      url: absUrl(url),
      title: article.metaTitle,
      description: article.metaDescription,
      publishedTime: article.published,
      modifiedTime: article.updated,
      section: article.category,
      tags: article.tags,
      authors: [article.author.name],
      images: [{ url: article.image, width: 1200, height: 630, alt: article.imageAlt }],
    },
    twitter: {
      card: "summary_large_image",
      title: article.metaTitle,
      description: article.metaDescription,
      images: [article.image],
    },
  };
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) notFound();

  // Sempre con trailing slash: deve combaciare esattamente con il rel=canonical
  const url = absUrl(`/articolo/${article.slug}`);
  const imageAbs = `${SITE.url}${article.image}`;

  /*
    NewsArticle: rich result (Top Stories, Google News) + contesto entità per AI (GEO).
    BreadcrumbList: breadcrumb visibili nella SERP.
    FAQPage: risposte estraibili dagli answer engine (AEO).
  */
  const jsonLdBlocks = [
    {
      "@context": "https://schema.org",
      "@type": "NewsArticle",
      headline: article.title,
      description: article.metaDescription,
      image: [imageAbs],
      datePublished: article.published,
      dateModified: article.updated,
      inLanguage: "it-IT",
      articleSection: article.category,
      keywords: article.keywords.join(", "),
      mainEntityOfPage: { "@type": "WebPage", "@id": url },
      author: {
        "@type": "Person",
        name: article.author.name,
        jobTitle: article.author.role,
        description: article.author.bio,
      },
      // Riferimento all'entità Organization globale (@id) invece di ridichiararla:
      // consolida i segnali dell'editore su un'unica entità nel knowledge graph.
      publisher: { "@id": `${SITE.url}/#organization` },
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: absUrl("/") },
        {
          "@type": "ListItem",
          position: 2,
          name: article.category,
          item: absUrl(categoryUrl(article.category)),
        },
        { "@type": "ListItem", position: 3, name: article.title, item: url },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: article.faqs.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(jsonLdBlocks) }} />
      <ArticleView article={article} />
    </>
  );
}
