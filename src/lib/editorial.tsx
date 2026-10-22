import { readFileSync, readdirSync } from "node:fs";
import { join } from "node:path";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

type Section = "guide-pratiche" | "speciali-aziende";
const root = join(process.cwd(), "editorial/site");
export function editorialSlugs(section: Section) {
  return readdirSync(join(root, section), { withFileTypes: true })
    .filter(entry => entry.isDirectory()).map(entry => entry.name);
}
function source(section: Section, slug?: string) {
  if (slug && !editorialSlugs(section).includes(slug)) notFound();
  return readFileSync(join(root, section, ...(slug ? [slug] : []), "index.html"), "utf8");
}
function graph(html: string) {
  const value = html.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/)?.[1];
  if (!value) throw new Error("Missing editorial schema");
  return JSON.parse(value) as { headline?: string; name?: string; url: string; description?: string; image?: string[] };
}
export function editorialMetadata(section: Section, slug?: string): Metadata {
  const data = graph(source(section, slug));
  const title = data.headline || data.name || "Guide e speciali";
  return {
    title: { absolute: `${title} | Corriere Edile` },
    description: data.description,
    alternates: { canonical: data.url },
    robots: { index: true, follow: true },
    openGraph: { title, description: data.description, url: data.url, images: data.image, type: slug ? "article" : "website" },
  };
}
export function renderEditorial(section: Section, slug?: string) {
  const html = source(section, slug);
  const content = html.match(/<main>([\s\S]*?)<\/main>/)?.[1];
  if (!content) throw new Error("Missing editorial content");
  const css = readFileSync(join(process.cwd(), "editorial/scoped.css"), "utf8");
  return <div className="editorial-document"><style dangerouslySetInnerHTML={{ __html: css }} />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(graph(html)).replace(/</g, "\\u003c") }} />
    <div className="shell" dangerouslySetInnerHTML={{ __html: content }} />
  </div>;
}
