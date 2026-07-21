#!/usr/bin/env python3
"""
Inserisce link esterni markdown [label](url) alle PRIME menzioni significative
di aziende/istituzioni nei file dati degli articoli.

Regole:
- opera solo nella regione testuale renderizzata (summary → body → faqs),
  escludendo le righe h2 (titoli di paragrafo, renderizzati plain);
- max 1 link per entità (deduplicato per URL) per articolo;
- pattern case-sensitive con confini di parola per evitare falsi positivi
  (es. UNI non matcha UNICMI, ANCE non matcha parole minuscole).

URL verificati con curl il 2026-07-21:
- cmb.coop irraggiungibile → usato cmb.it (200, sito ufficiale CMB Carpi)
- rizzani-deeccher.com irraggiungibile → nessun link (testo semplice)
- schueco.com/it-it 404 → usato schueco.com/it (200)
- internorm.com/it_IT 404 → usato internorm.com/it-it/ (200)
- saie.bolognafiere.it 404/500 da bot → mantenuto (dominio ufficiale, WAF)
- rehau.com/it e panasonic.it 403 (bot-block) → mantenuti
"""
import re
import sys
from pathlib import Path

BASE = Path(__file__).resolve().parent.parent / "src" / "data" / "fullArticles"

# (pattern, url) — ordine: varianti più lunghe/specifiche prima
ENTITIES = [
    ("Agenzia delle Entrate", "https://www.agenziaentrate.gov.it"),
    ("Mitsubishi Electric", "https://www.mitsubishielectric.it"),
    ("Impresa Pizzarotti", "https://www.pizzarotti.it"),
    ("ME Made Expo", "https://www.madeexpo.it"),
    ("Trevi Group", "https://www.trevigroup.com"),
    ("Made Expo", "https://www.madeexpo.it"),
    ("Kömmerling", "https://www.kommerling.it"),
    ("Pizzarotti", "https://www.pizzarotti.it"),
    ("Klimahouse", "https://www.klimahouse.it"),
    ("Mitsubishi", "https://www.mitsubishielectric.it"),
    ("Oknoplast", "https://www.oknoplast.it"),
    ("Viessmann", "https://www.viessmann.it"),
    ("Panasonic", "https://www.panasonic.it"),
    ("Internorm", "https://www.internorm.com/it-it/"),
    ("Finstral", "https://www.finstral.com/it"),
    ("Schüco", "https://www.schueco.com/it"),
    ("Vaillant", "https://www.vaillant.it"),
    ("Itinera", "https://www.itinera-spa.it"),
    ("Webuild", "https://www.webuildgroup.com"),
    ("CRESME", "https://www.cresme.it"),
    ("Cresme", "https://www.cresme.it"),
    ("Salcef", "https://www.salcef.com"),
    ("Daikin", "https://www.daikin.it"),
    ("Rehau", "https://www.rehau.com/it"),
    ("Trevi", "https://www.trevigroup.com"),
    ("Veka", "https://www.veka.it"),
    ("VEKA", "https://www.veka.it"),
    ("ICMQ", "https://www.icmq.it"),
    ("ENEA", "https://www.enea.it"),
    ("ANCE", "https://www.ance.it"),
    ("UNICMI", "https://www.unicmi.it"),
    ("SAIE", "https://saie.bolognafiere.it"),
    ("ANIT", "https://www.anit.it"),
    ("UNI", "https://www.uni.com"),
    ("GSE", "https://www.gse.it"),
    ("CMB", "https://www.cmb.it"),
]

BOUNDARY_L = r"(?<![A-Za-z0-9À-ÿ_\[\]/])"
BOUNDARY_R = r"(?![A-Za-z0-9À-ÿ_])"

def link_article(chunk: str) -> tuple[str, list[str]]:
    """Inserisce i link in un singolo articolo. Ritorna (chunk, report)."""
    lines = chunk.split("\n")
    # regione testuale: da summary: [ a tags: [ (escluso)
    start = next((i for i, l in enumerate(lines) if re.match(r"\s*summary:\s*\[", l)), None)
    end = next((i for i, l in enumerate(lines) if re.match(r"\s*tags:\s*\[", l)), None)
    if start is None or end is None:
        return chunk, []
    linked_urls: set[str] = set()
    report: list[str] = []
    for name, url in ENTITIES:
        if url in linked_urls:
            continue
        pat = re.compile(BOUNDARY_L + re.escape(name) + BOUNDARY_R)
        for i in range(start, end):
            line = lines[i]
            if 'type: "h2"' in line:
                continue
            m = pat.search(line)
            if m:
                # non linkare se già dentro un link markdown
                prefix = line[: m.start()]
                if prefix.count("[") > prefix.count("]"):
                    continue
                lines[i] = line[: m.start()] + f"[{name}]({url})" + line[m.end():]
                linked_urls.add(url)
                report.append(f"{name} → {url}")
                break
    return "\n".join(lines), report

def process_file(path: Path) -> None:
    text = path.read_text(encoding="utf-8")
    # split per articolo: ogni articolo inizia con '    slug: "'
    parts = re.split(r'(?=^    slug: ")', text, flags=re.M)
    out = []
    for part in parts:
        if part.startswith('    slug: "'):
            slug = re.match(r'    slug: "([^"]+)"', part).group(1)
            new_part, report = link_article(part)
            print(f"  {slug}: {len(report)} link")
            for r in report:
                print(f"    - {r}")
            out.append(new_part)
        else:
            out.append(part)
    path.write_text("".join(out), encoding="utf-8")

if __name__ == "__main__":
    for f in ["articles-01-10.ts", "articles-11-20.ts"]:
        p = BASE / f
        print(f"=== {f} ===")
        process_file(p)
    print("Fatto.")
