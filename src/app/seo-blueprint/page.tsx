import type { Metadata } from "next";
import Link from "next/link";
import {
  FileText,
  Globe,
  Table2,
  CheckSquare,
  Gauge,
  Network,
  ArrowLeft,
} from "lucide-react";

/**
 * SEO Blueprint — documentazione interna dell'architettura SEO/GEO/AEO del sito.
 * Pensata come riferimento per redazione, sviluppo e marketing.
 */

export const metadata: Metadata = {
  title: "SEO Blueprint — architettura SEO/GEO/AEO",
  description:
    "Documentazione tecnica dell'architettura SEO, GEO e AEO di Corriere Edile: sitemap, strategia schema.org, inventario slot pubblicitari e linee guida editoriali.",
  alternates: { canonical: "/seo-blueprint" },
  robots: { index: false, follow: false },
};

function Section({
  id,
  icon: Icon,
  title,
  children,
}: {
  id: string;
  icon: React.ElementType;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} aria-labelledby={`${id}-title`} className="scroll-mt-24">
      <h2
        id={`${id}-title`}
        className="mb-4 flex items-center gap-2 border-b-2 border-gold-500 pb-2 font-serif text-2xl font-bold text-navy-800"
      >
        <Icon className="h-6 w-6 text-gold-600" aria-hidden="true" /> {title}
      </h2>
      {children}
    </section>
  );
}

function Code({ children }: { children: React.ReactNode }) {
  return (
    <code className="rounded bg-navy-50 px-1.5 py-0.5 text-[13px] text-navy-700">{children}</code>
  );
}

const TH = ({ children }: { children: React.ReactNode }) => (
  <th scope="col" className="px-4 py-2.5 text-left font-semibold">{children}</th>
);
const TD = ({ children }: { children: React.ReactNode }) => (
  <td className="px-4 py-2.5 align-top">{children}</td>
);

export default function SeoBlueprint() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-10">
      <Link href="/" className="mb-6 inline-flex items-center gap-1 text-sm font-semibold text-navy-700 hover:text-gold-600">
        <ArrowLeft className="h-4 w-4" aria-hidden="true" /> Torna alla homepage
      </Link>

      <header className="mb-10">
        <p className="text-xs font-bold uppercase tracking-widest text-gold-600">Documento interno · v1.1</p>
        <h1 className="mt-2 font-serif text-4xl font-bold text-navy-900">
          SEO Blueprint — Corriere Edile
        </h1>
        <p className="mt-3 text-lg leading-relaxed text-muted-foreground">
          Architettura tecnica ed editoriale per la visibilità su motori di ricerca (SEO),
          AI Overview e motori generativi (GEO) e answer engine (AEO).
        </p>
        <p className="mt-4 rounded-lg border-l-4 border-gold-500 bg-gold-50 p-4 text-sm leading-relaxed text-navy-900">
          <strong>Stato attuale:</strong> il sito pubblica <strong>20 articoli completi</strong> con
          meta title/description dedicati, JSON-LD NewsArticle + BreadcrumbList + FAQPage per articolo,
          cover editoriali brandizzate (1200×675, filename = slug) e sitemap XML. Stack:{" "}
          <strong>Next.js 15 (App Router) con export statico (SSG)</strong> — tutte le pagine sono
          HTML pre-renderizzato; metadata via Metadata API, sitemap/robots/feed generati dalle route
          <Code>app/sitemap.ts</Code>, <Code>app/robots.ts</Code>, <Code>app/feed.xml/route.ts</Code>.
        </p>
      </header>

      <div className="space-y-14">
        {/* ============ 1. Architettura / Sitemap ============ */}
        <Section id="architettura" icon={Network} title="1. Architettura del sito e sitemap">
          <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
            Struttura piatta a tre livelli: homepage → categoria → articolo. Ogni pagina è
            raggiungibile in massimo 3 click. La sitemap XML è pubblicata in{" "}
            <Code>/sitemap.xml</Code> e dichiarata in <Code>robots.txt</Code>.
          </p>
          <div className="overflow-x-auto rounded-lg border border-border bg-muted p-5 font-mono text-[13px] leading-relaxed text-navy-800">
            <pre>{`corriereadile.it/
├── / (homepage)
├── /categoria/{slug}            ← 8 hub editoriali (SSG)
│   └── attualita, normativa, bonus-fisco, mercato,
│       prodotti-materiali, progetti, cantieri, eventi-fiere
├── /articolo/{slug}             ← 20 articoli reali, SSG con generateStaticParams
├── /cerca?q=                    ← ricerca client-side
├── /chi-siamo · /contatti
├── /privacy-policy · /cookie-policy · /termini
└── /seo-blueprint (questo documento)`}</pre>
          </div>
          <ul className="mt-4 list-disc space-y-1.5 pl-5 text-sm text-muted-foreground">
            <li><strong className="text-navy-800">URL strategy:</strong> slug brevi, keyword-first, senza date (<Code>/articolo/bonus-edilizi-2026-guida-completa</Code>).</li>
            <li><strong className="text-navy-800">Canonical</strong> su ogni pagina; parametri di tracking esclusi via canonical self-referencing.</li>
            <li><strong className="text-navy-800">hreflang</strong> <Code>it</Code> + <Code>x-default</Code> (sito monolingua).</li>
            <li><strong className="text-navy-800">Trailing slash</strong> uniforme su tutte le URL (<Code>trailingSlash: true</Code>).</li>
          </ul>
        </Section>

        {/* ============ 2. Schema.org map ============ */}
        <Section id="schema" icon={Globe} title="2. Mappa schema.org per tipo di pagina">
          <div className="overflow-x-auto rounded-lg border border-border">
            <table className="w-full text-sm">
              <thead className="bg-navy text-white">
                <tr>
                  <TH>Tipo pagina</TH>
                  <TH>Schema JSON-LD</TH>
                  <TH>Obiettivo</TH>
                </tr>
              </thead>
              <tbody className="divide-y divide-border bg-white">
                <tr>
                  <TD><strong className="text-navy-800">Tutte le pagine</strong></TD>
                  <TD><Code>NewsMediaOrganization</Code> + <Code>WebSite</Code> (con <Code>SearchAction</Code>)</TD>
                  <TD>Knowledge panel, sitelinks search box, identità entità (GEO)</TD>
                </tr>
                <tr>
                  <TD><strong className="text-navy-800">Homepage</strong></TD>
                  <TD>+ <Code>FAQPage</Code>, <Code>ItemList</Code> (ultime notizie)</TD>
                  <TD>Rich results FAQ, caroselli notizie</TD>
                </tr>
                <tr>
                  <TD><strong className="text-navy-800">Articolo</strong></TD>
                  <TD><Code>NewsArticle</Code> + <Code>BreadcrumbList</Code> + <Code>FAQPage</Code></TD>
                  <TD>Top Stories, Google News, breadcrumb in SERP, risposte AEO</TD>
                </tr>
                <tr>
                  <TD><strong className="text-navy-800">Categoria</strong></TD>
                  <TD><Code>CollectionPage</Code> + <Code>ItemList</Code> + <Code>BreadcrumbList</Code></TD>
                  <TD>Struttura hub, navigazione SERP</TD>
                </tr>
                <tr>
                  <TD><strong className="text-navy-800">Chi siamo</strong></TD>
                  <TD><Code>AboutPage</Code> + <Code>NewsMediaOrganization</Code></TD>
                  <TD>E-E-A-T verificabile</TD>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-sm text-muted-foreground">
            Implementazione: blocchi JSON-LD serializzati inline nelle server page con l'helper{" "}
            <Code>jsonLd()</Code> di <Code>src/lib/site.ts</Code> ( Organization/WebSite globale nel
            root layout); validazione consigliata con Rich Results Test e Schema Markup Validator a
            ogni release.
          </p>
        </Section>

        {/* ============ 3. Inventario ad slot ============ */}
        <Section id="ad-slot" icon={Table2} title="3. Inventario slot pubblicitari">
          <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
            Slot mappati 1:1 sull'ad server tramite l'attributo <Code>data-ad-slot</Code> del
            componente <Code>&lt;AdSlot&gt;</Code>. Format IAB standard; i formati wide collassano
            su mobile (collapsing div riservato per evitare CLS).
          </p>
          <div className="overflow-x-auto rounded-lg border border-border">
            <table className="w-full text-sm">
              <thead className="bg-navy text-white">
                <tr>
                  <TH>Slot ID</TH>
                  <TH>Formato IAB</TH>
                  <TH>Posizione</TH>
                  <TH>Pagine</TH>
                </tr>
              </thead>
              <tbody className="divide-y divide-border bg-white">
                <tr><TD><Code>home_billboard_top</Code></TD><TD>Billboard 970×250</TD><TD>Dopo hero</TD><TD>Homepage</TD></tr>
                <tr><TD><Code>home_mpu_sidebar</Code></TD><TD>MPU 300×250</TD><TD>Sidebar top</TD><TD>Homepage</TD></tr>
                <tr><TD><Code>home_halfpage_sidebar</Code></TD><TD>Half Page 300×600</TD><TD>Sidebar bottom</TD><TD>Homepage</TD></tr>
                <tr><TD><Code>home_leaderboard_footer</Code></TD><TD>Leaderboard 728×90</TD><TD>Pre-footer</TD><TD>Homepage</TD></tr>
                <tr><TD><Code>article_infeed_1</Code></TD><TD>In-Feed fluid</TD><TD>Dopo la 2ª sezione</TD><TD>Articolo</TD></tr>
                <tr><TD><Code>article_mpu_sidebar</Code></TD><TD>MPU 300×250</TD><TD>Sidebar sticky</TD><TD>Articolo</TD></tr>
              </tbody>
            </table>
          </div>
          <ul className="mt-3 list-disc space-y-1.5 pl-5 text-sm text-muted-foreground">
            <li>Label "Pubblicità" sempre visibile sopra lo slot (trasparenza utente e policy).</li>
            <li>Max 1 slot above-the-fold; densità pubblicitaria ≤ 30% per viewport.</li>
            <li>Lazy-load degli script adv fuori viewport; spazio riservato per eliminare CLS.</li>
          </ul>
        </Section>

        {/* ============ 4. Checklist editoriale ============ */}
        <Section id="editoriale" icon={CheckSquare} title="4. Checklist editoriale per la redazione">
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-lg border border-border bg-white p-5">
              <h3 className="mb-3 font-serif text-lg font-bold text-navy-800">Titoli e struttura (SEO)</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>✓ H1 unico, ≤ 60 caratteri, keyword primaria all'inizio.</li>
                <li>✓ Pattern titolo: <Code>{`{Tema} {anno}: {promessa} per {audience}`}</Code> — es. "Bonus edilizi 2026: tutte le novità per imprese e professionisti".</li>
                <li>✓ Sottotitolo/occhiello 120–160 caratteri = meta description.</li>
                <li>✓ Gerarchia H2/H3 senza salti; un concetto per sezione.</li>
                <li>✓ Indice con anchor link per articoli &gt; 800 parole.</li>
              </ul>
            </div>
            <div className="rounded-lg border border-border bg-white p-5">
              <h3 className="mb-3 font-serif text-lg font-bold text-navy-800">Risposte dirette (AEO)</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>✓ Box <strong className="text-navy-800">"In sintesi"</strong> in apertura: 3–4 takeaway completi e citabili.</li>
                <li>✓ Risposta alla domanda principale nel primo paragrafo.</li>
                <li>✓ FAQ a fine articolo (3–5 domande in linguaggio naturale) + <Code>FAQPage</Code> schema.</li>
                <li>✓ Definizioni esplicite dei termini tecnici (CILA, DURC, trasmittanza…).</li>
              </ul>
            </div>
            <div className="rounded-lg border border-border bg-white p-5">
              <h3 className="mb-3 font-serif text-lg font-bold text-navy-800">Autorevolezza (E-E-A-T / GEO)</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>✓ Firma reale con ruolo e bio; author box in fondo.</li>
                <li>✓ Date di pubblicazione <em>e</em> aggiornamento sempre visibili.</li>
                <li>✓ Fonti istituzionali citate (Agenzia delle Entrate, MIMIT, norme UNI).</li>
                <li>✓ Tabelle e dati strutturati: i contenuti citabili dai LLM sono quelli con dati verificabili.</li>
              </ul>
            </div>
            <div className="rounded-lg border border-border bg-white p-5">
              <h3 className="mb-3 font-serif text-lg font-bold text-navy-800">Media e accessibilità</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>✓ Alt text descrittivo (soggetto + contesto), mai "immagine1.jpg".</li>
                <li>✓ <Code>loading="lazy"</Code> sotto la piega; hero con <Code>fetchpriority="high"</Code>.</li>
                <li>✓ Didascalia + credit per ogni foto in <Code>&lt;figcaption&gt;</Code>.</li>
                <li>✓ Contrasto testo/sfondo ≥ 4.5:1; focus visibile su tutti i controlli.</li>
              </ul>
            </div>
          </div>
        </Section>

        {/* ============ 5. Core Web Vitals ============ */}
        <Section id="cwv" icon={Gauge} title="5. Core Web Vitals — note tecniche">
          <div className="overflow-x-auto rounded-lg border border-border">
            <table className="w-full text-sm">
              <thead className="bg-navy text-white">
                <tr><TH>Metrica</TH><TH>Target</TH><TH>Azioni implementate</TH></tr>
              </thead>
              <tbody className="divide-y divide-border bg-white">
                <tr>
                  <TD><strong className="text-navy-800">LCP</strong> (Largest Contentful Paint)</TD>
                  <TD>≤ 2,5 s</TD>
                  <TD>HTML pre-renderizzato (SSG), hero image con <Code>fetchpriority="high"</Code>, font self-hosted via <Code>next/font</Code> (zero FOUT/FOIT), WebP con fallback JPG.</TD>
                </tr>
                <tr>
                  <TD><strong className="text-navy-800">INP</strong> (Interaction to Next Paint)</TD>
                  <TD>≤ 200 ms</TD>
                  <TD>Hydration minima: solo i componenti interattivi sono client (accordion FAQ, ricerca, banner cookie); il corpo delle pagine è server-rendered senza JS.</TD>
                </tr>
                <tr>
                  <TD><strong className="text-navy-800">CLS</strong> (Cumulative Layout Shift)</TD>
                  <TD>≤ 0,1</TD>
                  <TD>Dimensioni riservate per immagini (<Code>width/height</Code>) e slot adv (altezze fisse IAB), font con metriche corrette da <Code>next/font</Code>, nessun contenuto iniettato above-the-fold.</TD>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-sm text-muted-foreground">
            Monitoraggio: CrUX / Search Console Core Web Vitals report; soglia di allerta al 75°
            percentile mobile. Il sito è ora una <strong>SSG Next.js 15 (App Router,
            output "export")</strong>: ogni pagina è servita come HTML statico pronto per caching
            edge/CDN, con hydration limitata ai soli widget interattivi.
          </p>
        </Section>

        <footer className="rounded-lg bg-navy-50 p-5 text-sm text-muted-foreground">
          <p>
            <FileText className="mr-1 inline h-4 w-4 text-gold-600" aria-hidden="true" />
            Documento mantenuto da Redazione &amp; Sviluppo — Corriere Edile. Ultima revisione: luglio 2026.
          </p>
        </footer>
      </div>
    </div>
  );
}
