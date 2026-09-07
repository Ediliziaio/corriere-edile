# SEO Blueprint — Corriere Edile

> Documentazione interna dell'architettura SEO/GEO/AEO.
> Era una pagina pubblica (`/seo-blueprint`, noindex e non linkata): rimossa
> perche' orfana e ormai disallineata dal sito (dichiarava 20 articoli quando
> erano 34). Vive qui, dove puo' essere aggiornata con il codice.

- Torna alla homepage
- SEO Blueprint — Corriere Edile
- Architettura tecnica ed editoriale per la visibilità su motori di ricerca (SEO), AI Overview e motori generativi (GEO) e answer engine (AEO).
- Next.js 15 (App Router) con export statico (SSG)
- — tutte le pagine sono HTML pre-renderizzato; metadata via Metadata API, sitemap/robots/feed generati dalle route
- slug brevi, keyword-first, senza date (
- /articolo/bonus-edilizi-2026-guida-completa
- su ogni pagina; parametri di tracking esclusi via canonical self-referencing.
- uniforme su tutte le URL (
- Knowledge panel, sitelinks search box, identità entità (GEO)
- Rich results FAQ, caroselli notizie
- Top Stories, Google News, breadcrumb in SERP, risposte AEO
- Struttura hub, navigazione SERP
- ( Organization/WebSite globale nel root layout); validazione consigliata con Rich Results Test e Schema Markup Validator a ogni release.
- Slot mappati 1:1 sull'ad server tramite l'attributo
- del componente
- . Format IAB standard; i formati wide collassano su mobile (collapsing div riservato per evitare CLS).
- Label "Pubblicità" sempre visibile sopra lo slot (trasparenza utente e policy).
- Max 1 slot above-the-fold; densità pubblicitaria ≤ 30% per viewport.
- Lazy-load degli script adv fuori viewport; spazio riservato per eliminare CLS.
- ✓ H1 unico, ≤ 60 caratteri, keyword primaria all'inizio.
- — es. "Bonus edilizi 2026: tutte le novità per imprese e professionisti".
- ✓ Sottotitolo/occhiello 120–160 caratteri = meta description.
- ✓ Gerarchia H2/H3 senza salti; un concetto per sezione.
- ✓ Indice con anchor link per articoli > 800 parole.
- in apertura: 3–4 takeaway completi e citabili.
- ✓ Risposta alla domanda principale nel primo paragrafo.
- ✓ FAQ a fine articolo (3–5 domande in linguaggio naturale) +
- ✓ Definizioni esplicite dei termini tecnici (CILA, DURC, trasmittanza…).
- Autorevolezza (E-E-A-T / GEO)
- ✓ Firma reale con ruolo e bio; author box in fondo.
- aggiornamento sempre visibili.
- ✓ Fonti istituzionali citate (Agenzia delle Entrate, MIMIT, norme UNI).
- ✓ Tabelle e dati strutturati: i contenuti citabili dai LLM sono quelli con dati verificabili.
- ✓ Alt text descrittivo (soggetto + contesto), mai "immagine1.jpg".
- sotto la piega; hero con
- ✓ Didascalia + credit per ogni foto in
- ✓ Contrasto testo/sfondo ≥ 4.5:1; focus visibile su tutti i controlli.
- (Largest Contentful Paint)
- HTML pre-renderizzato (SSG), hero image con
- (zero FOUT/FOIT), WebP con fallback JPG.
- (Interaction to Next Paint)
- Hydration minima: solo i componenti interattivi sono client (accordion FAQ, ricerca, banner cookie); il corpo delle pagine è server-rendered senza JS.
- (Cumulative Layout Shift)
- Dimensioni riservate per immagini (
- ) e slot adv (altezze fisse IAB), font con metriche corrette da
- , nessun contenuto iniettato above-the-fold.
- Monitoraggio: CrUX / Search Console Core Web Vitals report; soglia di allerta al 75° percentile mobile. Il sito è ora una
- SSG Next.js 15 (App Router, output "export")
- : ogni pagina è servita come HTML statico pronto per caching edge/CDN, con hydration limitata ai soli widget interattivi.
- Documento mantenuto da Redazione & Sviluppo — Corriere Edile. Ultima revisione: luglio 2026.