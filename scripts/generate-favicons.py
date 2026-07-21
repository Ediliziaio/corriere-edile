#!/usr/bin/env python3
"""
Favicon set da logo.png: ritaglia l'icona edificio/documento (parte sinistra)
e genera favicon.ico multi-size, icon-192/512, apple-touch-icon, manifest.
"""
import os
from PIL import Image

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
PUB = os.path.join(ROOT, "public")
LOGO = os.path.join(PUB, "logo.png")

img = Image.open(LOGO).convert("RGBA")
w, h = img.size  # 2172x724

# L'icona occupa circa il primo 25% della larghezza; ritaglia e centra in un quadrato
icon = img.crop((0, 0, int(w * 0.25), h))
bbox = icon.getbbox()
if bbox:
    icon = icon.crop(bbox)
# quadrato con padding 6%
side = max(icon.size)
pad = int(side * 0.06)
side += pad * 2
square = Image.new("RGBA", (side, side), (0, 0, 0, 0))
square.paste(icon, ((side - icon.width) // 2, (side - icon.height) // 2), icon)

def save_png(size, name):
    out = square.resize((size, size), Image.LANCZOS)
    out.save(os.path.join(PUB, name), "PNG", optimize=True)
    print(f"  {name} {size}x{size}")

# favicon.ico multi-size (16, 32, 48)
ico_sizes = [(16, 16), (32, 32), (48, 48)]
square.save(os.path.join(PUB, "favicon.ico"), "ICO", sizes=ico_sizes)
print("  favicon.ico (16+32+48)")

save_png(192, "icon-192.png")
save_png(512, "icon-512.png")
# apple-touch-icon: sfondo pieno navy (iOS non gestisce la trasparenza)
apple = Image.new("RGBA", (180, 180), (255, 255, 255, 255))
icon_180 = square.resize((int(180 * 0.86), int(180 * 0.86)), Image.LANCZOS)
apple.paste(icon_180, ((180 - icon_180.width) // 2, (180 - icon_180.height) // 2), icon_180)
apple.convert("RGB").save(os.path.join(PUB, "apple-touch-icon.png"), "PNG", optimize=True)
print("  apple-touch-icon.png 180x180 (sfondo bianco)")

manifest = """{
  "name": "Corriere Edile",
  "short_name": "Corriere Edile",
  "description": "Notizie, normativa e bonus per il mondo delle costruzioni",
  "start_url": "/",
  "display": "browser",
  "background_color": "#ffffff",
  "theme_color": "#16345C",
  "icons": [
    { "src": "/icon-192.png", "sizes": "192x192", "type": "image/png" },
    { "src": "/icon-512.png", "sizes": "512x512", "type": "image/png" }
  ]
}
"""
with open(os.path.join(PUB, "manifest.webmanifest"), "w", encoding="utf-8") as f:
    f.write(manifest)
print("  manifest.webmanifest")
print("Fatto.")
