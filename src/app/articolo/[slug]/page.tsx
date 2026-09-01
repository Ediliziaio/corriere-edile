import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ArticleView from "@/components/ArticleView";
import { SITE, jsonLd, absUrl } from "@/lib/site";
import { getAuthorByName, authorUrl, authorId } from "@/lib/authors";
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

  const authorProfile = getAuthorByName(article.author.name);
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
      /*
        speakable: indica le porzioni pensate per essere lette ad alta voce
        dagli assistenti vocali. Puntiamo al titolo, al box "In sintesi"
        (risposta diretta) e alle FAQ: sono i blocchi answer-first, gia'
        autoconsistenti, che un motore generativo puo' citare senza contesto.
      */
      speakable: {
        "@type": "SpeakableSpecification",
        cssSelector: ["h1", "#in-sintesi-box", "#faq-articolo"],
      },
      /*
        author come entità con @id e url verso /autore/<slug>/: è ciò che
        permette a Google di consolidare la firma su una persona reale e
        verificabile invece che su una stringa di testo. Requisito di fatto
        per i contenuti YMYL (fisco, detrazioni, normativa).
      */
      author: authorProfile
        ? {
            "@type": "Person",
            "@id": authorId(authorProfile.slug),
            name: authorProfile.name,
            url: absUrl(authorUrl(authorProfile.slug)),
            jobTitle: authorProfile.role,
            description: authorProfile.bio,
            knowsAbout: authorProfile.expertise,
          }
        : {
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
