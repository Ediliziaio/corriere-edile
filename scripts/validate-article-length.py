#!/usr/bin/env python3
"""
Validazione lunghezza articoli — requisito: body + summary + faqs ≥ 4000 caratteri.
Conta i caratteri di tutte le stringhe testuali nelle regioni summary/body/faqs
di ogni articolo, rimuovendo la sintassi markdown link [label](url) → label.
"""
import re
from pathlib import Path

BASE = Path(__file__).resolve().parent.parent / "src" / "data" / "fullArticles"
MD_LINK = re.compile(r"\[([^\]]+)\]\(([^)\s]+)\)")
STRING_LITERAL = re.compile(r'"((?:[^"\\]|\\.)*)"')

def text_len(region: str) -> int:
    total = 0
    for m in STRING_LITERAL.finditer(region):
        s = m.group(1)
        s = MD_LINK.sub(r"\1", s)  # strip markdown
        total += len(s)
    return total

results = []
for f in ["articles-01-10.ts", "articles-11-20.ts", "articles-21-26.ts", "articles-27-32.ts"]:
    text = (BASE / f).read_text(encoding="utf-8")
    for block in re.split(r'(?=^    slug: ")', text, flags=re.M):
        if not block.startswith('    slug: "'):
            continue
        slug = re.match(r'    slug: "([^"]+)"', block).group(1)
        m_start = re.search(r"^\s*summary:\s*\[", block, re.M)
        m_end = re.search(r"^\s*tags:\s*\[", block, re.M)
        region = block[m_start.start(): m_end.start()]
        # escludi le chiavi dei campi dal conteggio: le stringhe-letterale includono
        # anche id degli h2 e type; li sottraiamo in modo conservativo
        ids = re.findall(r'id: "([^"]+)"', region)
        types = re.findall(r'type: "([^"]+)"', region)
        keys = re.findall(r'(?:^|[\s{,])(?:q|a|text|caption|head|rows|items|author):', region)
        n = text_len(region) - sum(len(i) for i in ids) - sum(len(t) for t in types) - sum(len(k) for k in keys) - len(re.findall(r'author: "', region)) * len('author')
        results.append((slug, n))

results.sort(key=lambda x: x[1])
print(f"{'SLUG':<48} {'CHARS':>6}  OK?")
below = 0
for slug, n in results:
    ok = n >= 4000
    if not ok:
        below += 1
    print(f"{slug:<48} {n:>6}  {'✓' if ok else '✗ SOTTO SOGLIA'}")
print()
print(f"Articoli: {len(results)} | min: {results[0][1]} ({results[0][0]}) | max: {results[-1][1]} ({results[-1][0]})")
print(f"Sotto soglia 4000: {below}")
