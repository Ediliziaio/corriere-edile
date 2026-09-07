import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { SITE, jsonLd, absUrl } from "@/lib/site";
import TitoloEdilizioTool from "@/components/TitoloEdilizioTool";

/**
 * Selettore del titolo abilitativo: lo strumento interattivo della testata.
 *
 * Il sito e' posizionato su normativa, permessi e adempimenti: qui la
 * domanda con l'intento piu' netto e' operativa ("che pratica devo fare?").
 * L'indice delle norme risponde a chi cerca una norma per nome; questo
 * risponde a chi ha un cantiere da avviare.
 *
 * La tabella comparativa e le note restano in HTML statico, quindi
 * indicizzabili: l'interattivita' si aggiunge sopra, non sostituisce il
 * contenuto.
 */

export const metadata: Metadata = {
  title: "Quale titolo edilizio serve: CILA, SCIA o permesso di costruire",
  description:
    "Rispondi a quattro domande e scopri se i tuoi lavori richiedono edilizia libera, CILA, SCIA o permesso di costruire, con tempi di avvio, spese tecniche e oneri comunali.",
  alternates: { canonical: "/quale-titolo-edilizio" },
  openGraph: {
    type: "website",
    url: absUrl("/quale-titolo-edilizio"),
    title: "Quale titolo edilizio serve per i tuoi lavori | Corriere Edile",
    description:
      "CILA, SCIA o permesso di costruire? Quattro domande per capire quale pratica serve, quando puoi iniziare e quanto costa.",
    images: [{ url: "/images/og-default.jpg", width: 1200, height: 630 }],
  },
};

const TABELLA = [
  {
    titolo: "Edilizia libera",
    interventi: "Manutenzione ordinaria, tinteggi, pavimenti",
    avvio: "Immediato",
    spese: "—",
    oneri: "—",
  },
  {
    titolo: "CILA",
    interventi: "Tramezzi, bagni, impianti, opere interne",
    avvio: "Immediato",
    spese: "800-1.800 €",
    oneri: "Diritti 100-300 €",
  },
  {
    titolo: "SCIA",
    interventi: "Strutture, prospetti, cambi d'uso con opere",
    avvio: "Immediato (verifiche 30 gg)",
    spese: "1.500-4.000 €",
    oneri: "Diritti e oneri variabili",
  },
  {
    titolo: "SCIA alternativa al permesso",
    interventi: "Ristrutturazioni rilevanti, nei casi ammessi",
    avvio: "Immediato",
    spese: "2.500-5.000 €",
    oneri: "Oneri ridotti o dovuti",
  },
  {
    titolo: "Permesso di costruire",
    interventi: "Nuove costruzioni, ampliamenti, ristrutturazioni urbanistiche",
    avvio: "Dopo il rilascio (4-9 mesi reali)",
    spese: "da 3.000 € a salire",
    oneri: "Urbanizzazione e costo di costruzione",
  },
  {
    titolo: "CILA tardiva / regolarizzazione",
    interventi: "Opere già eseguite senza titolo",
    avvio: "—",
    spese: "600-1.500 €",
    oneri: "Sanzione ridotta",
  },
];

const FAQ = [
  {
    q: "Che differenza c'è tra CILA e SCIA?",
    a: "La CILA copre le opere interne che non toccano le strutture: tramezzi, bagno, impianti. La SCIA serve quando si interviene su strutture portanti, si modificano i prospetti o si cambia la destinazione d'uso con opere. In entrambi i casi i lavori possono partire subito dalla presentazione, ma la SCIA comporta verifiche comunali entro 30 giorni e adempimenti strutturali aggiuntivi.",
  },
  {
    q: "Quanto costa la pratica edilizia?",
    a: "Le spese tecniche indicative sono 800-1.800 euro per una CILA, 1.500-4.000 euro per una SCIA e da 3.000 euro in su per un permesso di costruire, oltre ai diritti di segreteria e, per il permesso, agli oneri di urbanizzazione. Gli importi variano molto per Comune e complessità dell'intervento.",
  },
  {
    q: "Ho già fatto i lavori senza pratica: cosa posso fare?",
    a: "Se l'intervento sarebbe stato assentibile con CILA, si può regolarizzare con una CILA tardiva pagando una sanzione amministrativa ridotta, con spese tecniche indicative di 600-1.500 euro. Se invece le opere richiedevano SCIA o permesso di costruire la procedura è diversa e più onerosa, e va valutata con un tecnico dopo aver verificato lo stato legittimo dell'immobile.",
  },
  {
    q: "Quanto tempo serve per ottenere il permesso di costruire?",
    a: "I lavori non possono iniziare prima del rilascio e nella pratica i tempi reali si collocano tra 4 e 9 mesi. Nei casi previsti dalla legge è ammessa la SCIA alternativa al permesso, che consente invece l'avvio immediato.",
  },
];

export default function QualeTitoloEdilizio() {
  const url = absUrl("/quale-titolo-edilizio");

  const blocks = [
    {
      "@context": "https://schema.org",
      "@type": "WebApplication",
      "@id": `${url}#app`,
      name: "Quale titolo edilizio serve: CILA, SCIA o permesso di costruire",
      url,
      applicationCategory: "BusinessApplication",
      operatingSystem: "Qualsiasi browser web",
      inLanguage: "it-IT",
      browserRequirements: "Richiede JavaScript",
      offers: { "@type": "Offer", price: "0", priceCurrency: "EUR" },
      publisher: { "@id": `${SITE.url}/#organization` },
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: FAQ.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: `${SITE.url}/` },
        { "@type": "ListItem", position: 2, name: "Quale titolo edilizio serve", item: url },
      ],
    },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLd(blocks) }}
      />

      <div className="mx-auto max-w-3xl px-4 py-10">
        <nav aria-label="Percorso di navigazione" className="mb-6 flex items-center gap-1 text-xs text-navy-600">
          <Link href="/" className="hover:underline">
            Home
          </Link>
          <ChevronRight className="h-3 w-3" aria-hidden="true" />
          <span>Quale titolo edilizio serve</span>
        </nav>

        <h1 className="font-serif text-3xl font-bold text-navy-900 sm:text-4xl">
          Quale titolo edilizio serve per i tuoi lavori
        </h1>
        <p className="mt-4 text-lg text-navy-800">
          Edilizia libera, CILA, SCIA o permesso di costruire: quattro domande per capire quale pratica
          serve, quando puoi iniziare i lavori e quanto costa.
        </p>

        <div className="mt-8">
          <TitoloEdilizioTool />
        </div>

        <h2 className="mt-12 font-serif text-2xl font-bold text-navy-900">
          I titoli abilitativi a confronto
        </h2>
        <p className="mt-3 text-navy-800">
          I valori sono indicativi, rilevati su tariffari professionali e regolamenti comunali: cambiano
          sensibilmente da Comune a Comune e con la complessità dell&apos;intervento.
        </p>
        <div className="mt-4 overflow-x-auto">
          <table className="w-full min-w-[640px] border-collapse text-sm">
            <thead>
              <tr className="border-b-2 border-navy-200 text-left">
                <th className="py-2 pr-3 font-semibold text-navy-900">Titolo</th>
                <th className="py-2 pr-3 font-semibold text-navy-900">Interventi tipici</th>
                <th className="py-2 pr-3 font-semibold text-navy-900">Avvio lavori</th>
                <th className="py-2 pr-3 font-semibold text-navy-900">Spese tecniche</th>
                <th className="py-2 font-semibold text-navy-900">Oneri comunali</th>
              </tr>
            </thead>
            <tbody>
              {TABELLA.map((r) => (
                <tr key={r.titolo} className="border-b border-navy-100 align-top">
                  <th scope="row" className="py-2 pr-3 text-left font-semibold text-navy-900">
                    {r.titolo}
                  </th>
                  <td className="py-2 pr-3 text-navy-700">{r.interventi}</td>
                  <td className="py-2 pr-3 text-navy-700">{r.avvio}</td>
                  <td className="py-2 pr-3 text-navy-700">{r.spese}</td>
                  <td className="py-2 text-navy-700">{r.oneri}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 className="mt-12 font-serif text-2xl font-bold text-navy-900">
          Perché lo stato legittimo viene prima della pratica
        </h2>
        <p className="mt-3 text-navy-800">
          Qualunque titolo si presenti, il tecnico assevera anche che l&apos;immobile sia conforme a quanto
          autorizzato in origine. Una CILA depositata su uno stato non legittimo non regolarizza nulla ed
          espone tutta la filiera: prima di aprire il cantiere vanno recuperati i titoli storici e
          verificata la corrispondenza con lo stato di fatto. È il passaggio che nella pratica genera più
          sorprese, soprattutto sugli immobili passati per più compravendite.
        </p>

        <h2 className="mt-12 font-serif text-2xl font-bold text-navy-900">I limiti di questo strumento</h2>
        <p className="mt-3 text-navy-800">
          Il questionario applica la gerarchia generale dei titoli abilitativi. Non conosce il regolamento
          edilizio del tuo Comune, eventuali vincoli paesaggistici o storico-artistici, la presenza di
          difformità pregresse né le deroghe locali: sono proprio gli elementi che spostano un intervento
          da un titolo all&apos;altro. <strong>Non sostituisce il parere di un tecnico abilitato</strong>,
          che resta necessario per l&apos;asseverazione.
        </p>

        <h2 className="mt-12 font-serif text-2xl font-bold text-navy-900">Domande frequenti</h2>
        <dl className="mt-4 space-y-5">
          {FAQ.map((f) => (
            <div key={f.q}>
              <dt className="font-semibold text-navy-900">{f.q}</dt>
              <dd className="mt-1 text-navy-800">{f.a}</dd>
            </div>
          ))}
        </dl>

        <h2 className="mt-12 font-serif text-2xl font-bold text-navy-900">Approfondimenti</h2>
        <ul className="mt-3 list-disc space-y-2 pl-5 text-navy-800">
          <li>
            <Link
              className="underline hover:text-gold-600"
              href="/articolo/cila-scia-permessi-2026-guida-pratiche/"
            >
              CILA, SCIA e permesso di costruire nel 2026: la guida alle pratiche edilizie
            </Link>
          </li>
          <li>
            <Link className="underline hover:text-gold-600" href="/norme-tecniche/">
              Indice delle norme tecniche per l&apos;edilizia
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}
