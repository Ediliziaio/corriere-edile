#!/usr/bin/env node
/**
 * IndexNow — notifica istantanea a Bing, Yandex, Seznam, Naver.
 *
 * Perche' serve: Google non ha un'API di submission aperta, ma IndexNow si'.
 * Essere indicizzati su Bing conta due volte: traffico proprio + Bing e' la
 * fonte di ricerca di ChatGPT, quindi entrare nell'indice Bing e' la via piu'
 * rapida per diventare citabili dagli assistenti AI.
 *
 * Uso:
 *   node scripts/indexnow.mjs            # invia tutti gli URL della sitemap
 *   node scripts/indexnow.mjs <url> ...  # invia URL specifici
 */
import { readFileSync, readdirSync } from "node:fs";

const HOST = "www.corrieredile.it";
const key = readdirSync("public").find((f) => /^[0-9a-f]{32}\.txt$/.test(f))?.replace(".txt", "");
if (!key) {
  console.error("Chiave IndexNow non trovata in public/. Attesa: public/<32hex>.txt");
  process.exit(1);
}

function urlsFromSitemap() {
  const xml = readFileSync("out/sitemap.xml", "utf8");
  return [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
}

const urlList = process.argv.slice(2).length ? process.argv.slice(2) : urlsFromSitemap();
if (!urlList.length) {
  console.error("Nessun URL da inviare (build il sito prima: npm run build).");
  process.exit(1);
}

const body = { host: HOST, key, keyLocation: `https://${HOST}/${key}.txt`, urlList };

const res = await fetch("https://api.indexnow.org/IndexNow", {
  method: "POST",
  headers: { "Content-Type": "application/json; charset=utf-8" },
  body: JSON.stringify(body),
});

console.log(`IndexNow -> HTTP ${res.status} (${res.statusText})`);
console.log(`URL inviati: ${urlList.length}`);
if (res.status === 200 || res.status === 202) {
  console.log("OK: gli URL sono stati accettati per la scansione.");
} else {
  console.log(await res.text());
}
