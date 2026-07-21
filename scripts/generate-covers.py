#!/usr/bin/env python3
"""
Generatore cover editoriali brandizzate — Corriere Edile
Output: public/images/articoli/<slug>.jpg (1200x675) + public/images/og-default.jpg (1200x630)

Sistema visivo: navy #16345C con gradiente, silhouette edifici + travi diagonali
(motivo costruzioni), barra accento oro #F0A81C, etichetta categoria in maiuscoletto,
titolo serif bianco grande, wordmark CORRIERE EDILE in basso.
Ogni categoria ha variante di layout (posizione accento / orientamento motivo / tonalità navy).
"""
import math
import os
from PIL import Image, ImageDraw, ImageFont

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
OUT_DIR = os.path.join(ROOT, "public", "images", "articoli")
os.makedirs(OUT_DIR, exist_ok=True)

NAVY = (22, 52, 92)        # #16345C
GOLD = (240, 168, 28)      # #F0A81C
WHITE = (255, 255, 255)

W, H = 1200, 675

# ---------------------------------------------------------------- font
FONT_CANDIDATES = {
    "serif_bold": [
        "/System/Library/Fonts/Supplemental/Georgia Bold.ttf",
        "/System/Library/Fonts/Georgia Bold.ttf",
        "/System/Library/Fonts/Supplemental/Times New Roman Bold.ttf",
    ],
    "serif": [
        "/System/Library/Fonts/Supplemental/Georgia.ttf",
        "/System/Library/Fonts/Georgia.ttf",
    ],
    "sans_bold": [
        "/System/Library/Fonts/Helvetica.ttc",
        "/System/Library/Fonts/Supplemental/Arial Bold.ttf",
    ],
    "sans": [
        "/System/Library/Fonts/Helvetica.ttc",
        "/System/Library/Fonts/Supplemental/Arial.ttf",
    ],
}

def load_font(kind, size):
    for path in FONT_CANDIDATES[kind]:
        if os.path.exists(path):
            try:
                return ImageFont.truetype(path, size)
            except Exception:
                continue
    return ImageFont.load_default()

F_TITLE = load_font("serif_bold", 64)
F_TITLE_SMALL = load_font("serif_bold", 54)
F_CAT = load_font("sans_bold", 26)
F_WORD = load_font("sans_bold", 30)
F_WORD2 = load_font("sans", 22)

# ---------------------------------------------------------------- helpers
def lerp(c1, c2, t):
    return tuple(int(c1[i] + (c2[i] - c1[i]) * t) for i in range(3))

def vertical_gradient(draw, w, h, top, bottom):
    for y in range(h):
        draw.line([(0, y), (w, y)], fill=lerp(top, bottom, y / h))

def draw_skyline(draw, base_y, x0, x1, color, seed=0, flip=False):
    """Silhouette stilizzata di edifici in costruzione con gru."""
    import random
    rng = random.Random(seed)
    x = x0
    while x < x1:
        bw = rng.randint(70, 150)
        bh = rng.randint(60, 260)
        draw.rectangle([x, base_y - bh, x + bw, base_y], fill=color)
        # finestre
        for wy in range(base_y - bh + 14, base_y - 10, 26):
            for wx in range(x + 10, x + bw - 12, 24):
                if rng.random() < 0.55:
                    draw.rectangle([wx, wy, wx + 9, wy + 12], fill=lerp(color, WHITE, 0.10))
        # gru a torre occasionale
        if rng.random() < 0.35 and bw > 90:
            cx = x + bw // 2
            top = base_y - bh - rng.randint(60, 110)
            draw.line([(cx, base_y - bh), (cx, top)], fill=color, width=6)
            jib = 90 if not flip else -90
            draw.line([(cx, top), (cx + jib, top)], fill=color, width=5)
            draw.line([(cx + jib, top), (cx + jib, top + 26)], fill=color, width=3)
        x += bw + rng.randint(8, 26)

def draw_grid(draw, w, h, color, step=60):
    for gx in range(0, w, step):
        draw.line([(gx, 0), (gx, h)], fill=color, width=1)
    for gy in range(0, h, step):
        draw.line([(0, gy), (w, gy)], fill=color, width=1)

def draw_beams(draw, w, h, color, count=5, angle_deg=24):
    """Travi diagonali stile ponteggio."""
    a = math.radians(angle_deg)
    dx = int(h / math.tan(a))
    for i in range(count):
        x0 = -dx + i * (w + 2 * dx) // count
        draw.line([(x0, h), (x0 + dx, 0)], fill=color, width=10)

def wrap_text(draw, text, font, max_w):
    words = text.split()
    lines, cur = [], ""
    for w_ in words:
        trial = (cur + " " + w_).strip()
        if draw.textlength(trial, font=font) <= max_w:
            cur = trial
        else:
            if cur:
                lines.append(cur)
            cur = w_
    if cur:
        lines.append(cur)
    return lines[:3]  # max 3 righe

def wordmark(draw, x, y):
    """CORRIERE (bianco) EDILE (oro) + quadratino logo."""
    draw.rectangle([x, y + 2, x + 18, y + 20], fill=GOLD)
    tx = x + 28
    draw.text((tx, y), "CORRIERE", font=F_WORD, fill=WHITE)
    tx += draw.textlength("CORRIERE", font=F_WORD) + 10
    draw.text((tx, y), "EDILE", font=F_WORD, fill=GOLD)

# ---------------------------------------------------------------- varianti per categoria
# (shade_navy_chiaro, posizione barra accento, lato skyline, angolo travi)
CATEGORY_STYLE = {
    "Bonus & Fisco":        dict(top=(26, 62, 108), bar="left",   skyline="right", angle=24),
    "Normativa":            dict(top=(18, 46, 84),  bar="top",    skyline="left",  angle=-24),
    "Mercato":              dict(top=(30, 68, 116), bar="bottom", skyline="right", angle=18),
    "Prodotti & Materiali": dict(top=(24, 56, 100), bar="left",   skyline="left",  angle=-18),
    "Progetti":             dict(top=(20, 50, 90),  bar="top",    skyline="right", angle=28),
    "Cantieri":             dict(top=(16, 42, 78),  bar="bottom", skyline="left",  angle=-28),
    "Attualità":            dict(top=(28, 64, 112), bar="left",   skyline="right", angle=22),
    "Eventi & Fiere":       dict(top=(22, 54, 96),  bar="top",    skyline="left",  angle=-22),
}

def make_cover(slug, category, short_title):
    style = CATEGORY_STYLE.get(category, CATEGORY_STYLE["Attualità"])
    img = Image.new("RGB", (W, H))
    d = ImageDraw.Draw(img)
    vertical_gradient(d, W, H, style["top"], (10, 26, 50))

    # griglia tecnica leggera
    draw_grid(d, W, H, lerp(NAVY, WHITE, 0.05), step=75)
    # travi diagonali
    draw_beams(d, W, H, lerp(NAVY, WHITE, 0.06), count=6, angle_deg=style["angle"])

    # skyline in basso
    sky_color = lerp(NAVY, (0, 0, 0), 0.18)
    if style["skyline"] == "right":
        draw_skyline(d, H, W // 2, W + 20, sky_color, seed=hash(slug) % 9999)
        draw_skyline(d, H, -20, W // 3, lerp(NAVY, (0, 0, 0), 0.30), seed=hash(slug) % 7777)
    else:
        draw_skyline(d, H, -20, W // 2, sky_color, seed=hash(slug) % 9999)
        draw_skyline(d, H, 2 * W // 3, W + 20, lerp(NAVY, (0, 0, 0), 0.30), seed=hash(slug) % 7777)

    # banda scura dietro il testo per leggibilità
    overlay = Image.new("RGBA", (W, H), (0, 0, 0, 0))
    od = ImageDraw.Draw(overlay)
    od.rectangle([0, 0, int(W * 0.66), H], fill=(10, 24, 46, 120))
    img = Image.alpha_composite(img.convert("RGBA"), overlay).convert("RGB")
    d = ImageDraw.Draw(img)

    # barra accento oro
    if style["bar"] == "top":
        d.rectangle([0, 0, W, 14], fill=GOLD)
    elif style["bar"] == "bottom":
        d.rectangle([0, H - 14, W, H], fill=GOLD)
    else:
        d.rectangle([0, 0, 14, H], fill=GOLD)

    pad = 64
    y = 96

    # etichetta categoria small caps
    cat = category.upper()
    tw = d.textlength(cat, font=F_CAT)
    d.rectangle([pad, y, pad + tw + 36, y + 44], fill=GOLD)
    d.text((pad + 18, y + 8), cat, font=F_CAT, fill=NAVY)
    y += 44 + 42

    # titolo serif bianco (max 3 righe)
    font = F_TITLE if len(short_title) < 48 else F_TITLE_SMALL
    lines = wrap_text(d, short_title, font, int(W * 0.58))
    for ln in lines:
        d.text((pad, y), ln, font=font, fill=WHITE)
        y += font.size + 14

    # wordmark in basso a sinistra
    wordmark(d, pad, H - 74)

    out = os.path.join(OUT_DIR, f"{slug}.jpg")
    img.save(out, "JPEG", quality=85, optimize=True)
    return out

# ---------------------------------------------------------------- dati articoli (slug, categoria, titolo breve)
ARTICLES = [
    ("bonus-edilizi-2026-guida-completa", "Bonus & Fisco", "Bonus edilizi 2026: la guida completa"),
    ("migliori-fornitori-serramenti-2026", "Prodotti & Materiali", "I migliori fornitori di serramenti 2026"),
    ("direttiva-case-green-2026-cosa-cambia", "Normativa", "Direttiva Case Green: cosa cambia dal 2026"),
    ("mercato-costruzioni-2026-previsioni", "Mercato", "Mercato costruzioni 2026: previsioni e scenari"),
    ("prezzi-materiali-costruzione-2026", "Mercato", "Prezzi dei materiali da costruzione 2026"),
    ("sicurezza-cantieri-2026-nuove-regole", "Cantieri", "Sicurezza in cantiere 2026: le nuove regole"),
    ("cappotto-termico-2026-costi-materiali", "Prodotti & Materiali", "Cappotto termico 2026: costi e materiali"),
    ("fotovoltaico-edilizia-2026-incentivi", "Bonus & Fisco", "Fotovoltaico in edilizia 2026: incentivi"),
    ("bim-obbligatorio-2026-appalti", "Normativa", "BIM obbligatorio 2026 negli appalti"),
    ("pompe-calore-2026-migliori-modelli", "Prodotti & Materiali", "Pompe di calore 2026: i migliori modelli"),
    ("ristrutturare-casa-2026-costi-guida", "Progetti", "Ristrutturare casa 2026: costi e tempi"),
    ("migliori-imprese-costruzioni-italia-2026", "Mercato", "Le migliori imprese di costruzioni 2026"),
    ("posa-in-opera-serramenti-uni-11673", "Cantieri", "Posa in opera serramenti UNI 11673"),
    ("isolamento-acustico-edifici-normativa", "Normativa", "Isolamento acustico: requisiti di legge"),
    ("saie-2026-bologna-anteprima", "Eventi & Fiere", "SAIE 2026 Bologna: l'anteprima"),
    ("case-prefabbricate-legno-2026", "Progetti", "Case prefabbricate in legno 2026"),
    ("superbonus-ultimi-cantieri-chiusura", "Bonus & Fisco", "Superbonus: chiudere gli ultimi cantieri"),
    ("intelligenza-artificiale-cantieri-2026", "Attualità", "L'AI nei cantieri edili"),
    ("rigenerazione-urbana-2026-progetti", "Attualità", "Rigenerazione urbana 2026: i progetti"),
    ("efficienza-energetica-condomini-2026", "Progetti", "Efficienza energetica nei condomini"),
]

# Articoli 21–32 (aggiunti luglio 2026)
ARTICLES_NEW = [
    ("edilizia-2026-carenza-manodopera-cantieri", "Attualità", "Edilizia 2026: la carenza di manodopera"),
    ("economia-circolare-cantiere-materiali-riciclati", "Attualità", "Economia circolare in cantiere"),
    ("ponteggi-sicurezza-montaggio-norme", "Cantieri", "Ponteggi in sicurezza: montaggio e verifiche"),
    ("cantiere-digitale-droni-sensori-monitoraggio", "Cantieri", "Il cantiere digitale: droni e sensori IoT"),
    ("klimahouse-2026-bolzano-anteprima", "Eventi & Fiere", "Klimahouse 2026: l'anteprima di Bolzano"),
    ("made-expo-2027-milano-anteprima", "Eventi & Fiere", "MADE Expo 2027: l'anteprima di Milano"),
    ("marmomac-2026-verona-pietra-naturale", "Eventi & Fiere", "Marmomac 2026: la pietra a Verona"),
    ("conto-termico-3-0-guida-incentivi", "Bonus & Fisco", "Conto Termico 3.0: la guida agli incentivi"),
    ("migliori-materiali-isolanti-2026", "Prodotti & Materiali", "I migliori materiali isolanti 2026"),
    ("salva-casa-sanatoria-irregolarita-edilizie", "Normativa", "Salva Casa: la sanatoria edilizia 2026"),
    ("mercato-immobiliare-2026-compravendite", "Mercato", "Mercato immobiliare 2026: i numeri"),
    ("cila-scia-permessi-2026-guida-pratiche", "Progetti", "CILA, SCIA e permessi 2026: la guida"),
]

def make_og_default():
    """Cover generica sito 1200x630 per Open Graph homepage."""
    w, h = 1200, 630
    img = Image.new("RGB", (w, h))
    d = ImageDraw.Draw(img)
    vertical_gradient(d, w, h, (26, 62, 108), (10, 26, 50))
    draw_grid(d, w, h, lerp(NAVY, WHITE, 0.05), step=75)
    draw_beams(d, w, h, lerp(NAVY, WHITE, 0.06), count=6, angle_deg=24)
    draw_skyline(d, h, -20, w + 20, lerp(NAVY, (0, 0, 0), 0.22), seed=42)
    d.rectangle([0, 0, w, 14], fill=GOLD)
    pad = 70
    d.rectangle([pad, 150, pad + 34, 340], fill=GOLD)
    d.text((pad + 70, 150), "CORRIERE", font=load_font("serif_bold", 96), fill=WHITE)
    d.text((pad + 70, 258), "EDILE", font=load_font("serif_bold", 96), fill=GOLD)
    d.text(
        (pad + 70, 400),
        "Notizie, normativa e bonus per il mondo delle costruzioni",
        font=load_font("sans", 34),
        fill=(220, 230, 242),
    )
    d.text(
        (pad + 70, h - 80),
        "corriereadile.it",
        font=F_WORD2,
        fill=(180, 195, 215),
    )
    out = os.path.join(ROOT, "public", "images", "og-default.jpg")
    img.save(out, "JPEG", quality=85, optimize=True)
    return out

def make_webp(jpg_path):
    """Versione WebP (q82) della cover, se assente."""
    webp = jpg_path[:-4] + ".webp"
    if os.path.exists(webp):
        return None
    Image.open(jpg_path).save(webp, "WEBP", quality=82)
    return webp

if __name__ == "__main__":
    done = []
    skipped = 0
    for slug, cat, title in ARTICLES + ARTICLES_NEW:
        jpg = os.path.join(OUT_DIR, f"{slug}.jpg")
        if os.path.exists(jpg):
            skipped += 1  # non rigenerare: hash() non è stabile tra processi
            webp = make_webp(jpg)
            if webp:
                done.append(webp)
            continue
        done.append(make_cover(slug, cat, title))
        webp = make_webp(os.path.join(OUT_DIR, f"{slug}.jpg"))
        if webp:
            done.append(webp)
    og = make_og_default() if not os.path.exists(os.path.join(ROOT, "public", "images", "og-default.jpg")) else None
    print(f"Saltate {skipped} cover esistenti; generati/aggiornati {len(done)} file in {OUT_DIR}")
    for p in done:
        print(" -", os.path.basename(p), os.path.getsize(p), "bytes")
    if og:
        print("OG default:", og, os.path.getsize(og), "bytes")
