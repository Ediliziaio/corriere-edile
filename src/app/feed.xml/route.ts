import { SITE } from "@/lib/site";
import { ALL_ARTICLES } from "@/data/fullArticles";
import { stripMarkdown } from "@/lib/richText";

// Feed RSS 2.0 statico, rigenerato a ogni build
export const dynamic = "force-static";

function escapeXml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

export function GET() {
  const items = ALL_ARTICLES.map((a) => {
    const link = `${SITE.url}/articolo/${a.slug}/`;
    return `    <item>
      <title>${escapeXml(a.metaTitle)}</title>
      <link>${link}</link>
      <guid isPermaLink="true">${link}</guid>
      <description>${escapeXml(stripMarkdown(a.metaDescription))}</description>
      <pubDate>${new Date(a.published).toUTCString()}</pubDate>
      <category>${escapeXml(a.category)}</category>
      <author>redazione@corriereadile.it (${escapeXml(a.author.name)})</author>
      <enclosure url="${SITE.url}${a.image}" type="image/jpeg" />
    </item>`;
  }).join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${escapeXml(SITE.name)}</title>
    <link>${SITE.url}/</link>
    <description>${escapeXml(SITE.description)}</description>
    <language>it-it</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="${SITE.url}/feed.xml" rel="self" type="application/rss+xml" />
${items}
  </channel>
</rss>
`;

  return new Response(xml, {
    headers: { "Content-Type": "application/rss+xml; charset=utf-8" },
  });
}
