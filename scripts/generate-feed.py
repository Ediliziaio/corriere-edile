#!/usr/bin/env python3
"""
Genera public/feed.xml (RSS 2.0) dai dati articoli TypeScript.
Estrae slug, metaTitle, metaDescription, published dai file dati
(campi single-line) e produce un feed valido it-it con 20 item.
"""
import re
from datetime import datetime, timezone, timedelta
from email.utils import format_datetime
from pathlib import Path
from xml.sax.saxutils import escape

BASE = Path(__file__).resolve().parent.parent
DATA = BASE / "src" / "data" / "fullArticles"
OUT = BASE / "public" / "feed.xml"

SITE = "https://corriereadile.it"

def field(block: str, name: str) -> str:
    m = re.search(rf'^\s*{name}: "((?:[^"\\]|\\.)*)",?\s*$', block, re.M)
    return m.group(1).replace('\\"', '"') if m else ""

articles = []
for f in ["articles-01-10.ts", "articles-11-20.ts"]:
    text = (DATA / f).read_text(encoding="utf-8")
    for block in re.split(r'(?=^    slug: ")', text, flags=re.M):
        if not block.startswith('    slug: "'):
            continue
        articles.append(
            dict(
                slug=field(block, "slug"),
                title=field(block, "metaTitle"),
                description=field(block, "metaDescription"),
                published=field(block, "published"),
            )
        )

def rfc822(iso: str) -> str:
    dt = datetime.fromisoformat(iso)
    return format_datetime(dt)

# ordina per data desc
articles.sort(key=lambda a: a["published"], reverse=True)
build_date = format_datetime(datetime.now(timezone(timedelta(hours=2))))

items = []
for a in articles:
    link = f"{SITE}/articolo/{a['slug']}"
    items.append(
        f"""    <item>
      <title>{escape(a['title'])}</title>
      <link>{link}</link>
      <description>{escape(a['description'])}</description>
      <pubDate>{rfc822(a['published'])}</pubDate>
      <guid isPermaLink="true">{link}</guid>
    </item>"""
    )

xml = f"""<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Corriere Edile</title>
    <link>{SITE}/</link>
    <description>Notizie, normativa e bonus per il mondo delle costruzioni: attualità, mercato, prodotti e cantieri per imprese edili e professionisti.</description>
    <language>it-it</language>
    <lastBuildDate>{build_date}</lastBuildDate>
    <atom:link href="{SITE}/feed.xml" rel="self" type="application/rss+xml" />
{chr(10).join(items)}
  </channel>
</rss>
"""

OUT.write_text(xml, encoding="utf-8")
print(f"feed.xml generato: {len(articles)} item → {OUT}")
