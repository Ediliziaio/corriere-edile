"use client";

import { useState } from "react";
import Link from "next/link";

/**
 * Selettore del titolo abilitativo.
 *
 * La gerarchia, i tempi di avvio, le spese tecniche e gli oneri provengono
 * dalla tabella comparativa pubblicata nella nostra guida "CILA, SCIA e
 * permesso di costruire nel 2026". Sono valori indicativi rilevati su
 * tariffari professionali e regolamenti comunali: variano molto per Comune
 * e complessita' dell'intervento.
 *
 * Lo strumento risponde a una domanda pratica ("che pratica devo fare?"),
 * ma non sostituisce il parere di un tecnico: l'inquadramento di un
 * intervento dipende dallo stato legittimo dell'immobile e dal regolamento
 * edilizio comunale, che nessun questionario puo' conoscere.
 */

interface Esito {
  titolo: string;
  quando: string;
  spese: string;
  oneri: string;
  spiegazione: string;
  attenzione: string;
}

const ESITI: Record<string, Esito> = {
  tardiva: {
    titolo: "CILA tardiva (regolarizzazione)",
    quando: "Opere già eseguite: si sana a posteriori",
    spese: "600-1.500 €",
    oneri: "Sanzione amministrativa ridotta",
    spiegazione:
      "I lavori sono già stati fatti senza il titolo dovuto. La CILA tardiva permette di regolarizzare pagando una sanzione ridotta, ma vale solo per interventi che sarebbero stati assentibili con CILA.",
    attenzione:
      "Se le opere richiedevano SCIA o permesso di costruire la strada è diversa e più onerosa. Prima di qualunque pratica va verificato lo stato legittimo dell'immobile: una CILA asseverata su uno stato non legittimo espone tutta la filiera.",
  },
  permesso: {
    titolo: "Permesso di costruire",
    quando: "Dopo il rilascio — nella pratica 4-9 mesi",
    spese: "da 3.000 € a salire",
    oneri: "Oneri di urbanizzazione e costo di costruzione",
    spiegazione:
      "Nuove costruzioni, ampliamenti di volumetria e ristrutturazioni urbanistiche richiedono il titolo più impegnativo: i lavori non possono iniziare prima del rilascio.",
    attenzione:
      "I tempi reali sono molto più lunghi di quelli teorici. In alcuni casi previsti dalla legge è ammessa la SCIA alternativa al permesso, che consente l'avvio immediato: va valutata con il tecnico.",
  },
  scia: {
    titolo: "SCIA",
    quando: "Avvio immediato (verifiche comunali entro 30 giorni)",
    spese: "1.500-4.000 €",
    oneri: "Diritti di segreteria e oneri variabili",
    spiegazione:
      "Interventi che toccano le strutture, modificano i prospetti o cambiano la destinazione d'uso con opere richiedono la segnalazione asseverata da un tecnico abilitato.",
    attenzione:
      "Toccare strutture portanti comporta anche il deposito al Genio Civile, la direzione lavori e il collaudo statico: sono adempimenti separati dalla pratica edilizia.",
  },
  cila: {
    titolo: "CILA",
    quando: "Avvio immediato dalla presentazione",
    spese: "800-1.800 €",
    oneri: "Diritti di segreteria 100-300 €",
    spiegazione:
      "Opere interne che non toccano le strutture: spostamento di tramezzi, rifacimento del bagno, impianti. È il titolo più usato nelle ristrutturazioni di appartamento.",
    attenzione:
      "La CILA è asseverata: il tecnico dichiara la conformità dell'intervento e lo stato legittimo dell'immobile. È anche il presupposto documentale per accedere alle detrazioni.",
  },
  libera: {
    titolo: "Edilizia libera",
    quando: "Nessuna pratica, avvio immediato",
    spese: "—",
    oneri: "—",
    spiegazione:
      "Manutenzione ordinaria: tinteggiature, sostituzione di pavimenti e rivestimenti, riparazioni che non alterano strutture, prospetti né destinazione d'uso.",
    attenzione:
      "Anche in edilizia libera restano fermi i vincoli paesaggistici e i regolamenti condominiali: su immobili vincolati serve comunque l'autorizzazione della Soprintendenza.",
  },
};

const DOMANDE = [
  {
    id: "tardiva",
    testo: "I lavori sono già stati eseguiti, senza presentare alcuna pratica?",
    esito: "tardiva",
  },
  {
    id: "permesso",
    testo:
      "Prevedi una nuova costruzione, un ampliamento della volumetria o una ristrutturazione urbanistica?",
    esito: "permesso",
  },
  {
    id: "scia",
    testo:
      "Tocchi strutture portanti, modifichi i prospetti o cambi la destinazione d'uso con opere?",
    esito: "scia",
  },
  {
    id: "cila",
    testo:
      "Fai opere interne — spostamento di tramezzi, rifacimento del bagno, rifacimento impianti?",
    esito: "cila",
  },
] as const;

export default function TitoloEdilizioTool() {
  const [passo, setPasso] = useState(0);
  const [esito, setEsito] = useState<string | null>(null);

  const rispondi = (si: boolean) => {
    if (si) {
      setEsito(DOMANDE[passo].esito);
      return;
    }
    if (passo + 1 < DOMANDE.length) {
      setPasso(passo + 1);
    } else {
      setEsito("libera");
    }
  };

  const ricomincia = () => {
    setPasso(0);
    setEsito(null);
  };

  const e = esito ? ESITI[esito] : null;

  return (
    <section className="rounded-xl border border-navy-200 bg-navy-50/40 p-5 sm:p-6">
      {!e ? (
        <>
          <p className="text-xs font-semibold uppercase tracking-wider text-navy-600">
            Domanda {passo + 1} di {DOMANDE.length}
          </p>
          <h2 className="mt-2 font-serif text-xl font-bold text-navy-900 sm:text-2xl">
            {DOMANDE[passo].testo}
          </h2>
          <div className="mt-5 flex gap-3">
            <button
              type="button"
              onClick={() => rispondi(true)}
              className="rounded-lg bg-navy-900 px-6 py-3 font-semibold text-white transition-colors hover:bg-navy-700"
            >
              Sì
            </button>
            <button
              type="button"
              onClick={() => rispondi(false)}
              className="rounded-lg border border-navy-200 bg-white px-6 py-3 font-semibold text-navy-900 transition-colors hover:bg-navy-100"
            >
              No
            </button>
          </div>
          {passo > 0 && (
            <button
              type="button"
              onClick={ricomincia}
              className="mt-4 text-sm text-navy-600 underline hover:text-navy-900"
            >
              Ricomincia
            </button>
          )}
        </>
      ) : (
        <div aria-live="polite">
          <p className="text-xs font-semibold uppercase tracking-wider text-navy-600">
            Titolo richiesto
          </p>
          <h2 className="mt-2 font-serif text-2xl font-bold text-navy-900">{e.titolo}</h2>
          <p className="mt-3 text-navy-800">{e.spiegazione}</p>

          <dl className="mt-5 grid gap-x-6 gap-y-2 border-t border-navy-200 pt-4 text-sm sm:grid-cols-2">
            <div>
              <dt className="font-semibold text-navy-900">Quando puoi iniziare</dt>
              <dd className="text-navy-700">{e.quando}</dd>
            </div>
            <div>
              <dt className="font-semibold text-navy-900">Spese tecniche indicative</dt>
              <dd className="text-navy-700">{e.spese}</dd>
            </div>
            <div>
              <dt className="font-semibold text-navy-900">Oneri comunali</dt>
              <dd className="text-navy-700">{e.oneri}</dd>
            </div>
          </dl>

          <p className="mt-5 rounded-lg border-l-4 border-gold-500 bg-white p-4 text-sm text-navy-800">
            <strong>Da sapere:</strong> {e.attenzione}
          </p>

          <div className="mt-5 flex flex-wrap items-center gap-4">
            <button
              type="button"
              onClick={ricomincia}
              className="rounded-lg border border-navy-200 bg-white px-5 py-2.5 font-semibold text-navy-900 hover:bg-navy-100"
            >
              Rifai il test
            </button>
            <Link
              href="/articolo/cila-scia-permessi-2026-guida-pratiche/"
              className="text-sm font-semibold text-navy-900 underline hover:text-gold-600"
            >
              Leggi la guida completa ai titoli edilizi
            </Link>
          </div>
        </div>
      )}
    </section>
  );
}
