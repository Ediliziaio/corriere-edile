import type { Metadata } from "next";
import Link from "next/link";
import LegalPage, { LegalSection, PlaceholderNote } from "@/components/legal/LegalPage";

export const metadata: Metadata = {
  title: "Termini e condizioni d'uso",
  description:
    "Termini e condizioni d'uso del sito Corriere Edile: proprietà intellettuale, natura informativa dei contenuti e limitazione di responsabilità.",
  alternates: { canonical: "/termini" },
};

export default function Termini() {
  return (
    <LegalPage title="Termini e condizioni d'uso" updated="21 luglio 2026">
      <PlaceholderNote>
        questi termini sono una bozza dimostrativa: farli revisionare da un legale prima della
        pubblicazione definitiva.
      </PlaceholderNote>

      <LegalSection id="oggetto" title="1. Oggetto">
        <p>
          I presenti termini regolano l'utilizzo del sito corrieredile.it (di seguito "il Sito"),
          edito da <strong>Domus Group S.r.l.</strong>. Accedendo al Sito l'utente
          accetta integralmente questi termini; in caso di mancata accettazione è invitato a non
          utilizzare il Sito.
        </p>
      </LegalSection>

      <LegalSection id="contenuti" title="2. Natura dei contenuti">
        <p>
          I contenuti del Sito — inclusi articoli, guide, tabelle e risposte alle domande frequenti
          su normativa, bonus e fiscalità edilizia — hanno <strong>esclusivamente scopo informativo
          e divulgativo</strong>. Non costituiscono consulenza tecnica, fiscale o legale e non
          sostituiscono il parere di professionisti abilitati (commercialisti, avvocati, tecnici
          asseveratori). Per l'applicazione delle norme al caso concreto è sempre necessario
          rivolgersi a un professionista qualificato.
        </p>
        <p>
          La redazione si impegna ad aggiornare i contenuti con tempestività, ma non garantisce che
          siano in ogni momento completi, esatti o aggiornati rispetto all'evoluzione normativa.
        </p>
      </LegalSection>

      <LegalSection id="proprieta-intellettuale" title="3. Proprietà intellettuale">
        <p>
          Testi, grafiche, copertine editoriali, logo e impaginazione del Sito sono di titolarità di
          Domus Group S.r.l. o dei rispettivi licenzianti e sono protetti dalla normativa sul
          diritto d'autore. È vietata la riproduzione, anche parziale, senza autorizzazione scritta,
          salvo il diritto di breve citazione con indicazione della fonte e link all'articolo
          originale.
        </p>
      </LegalSection>

      <LegalSection id="responsabilita" title="4. Limitazione di responsabilità">
        <p>
          Domus Group S.r.l. non risponde di danni diretti o indiretti derivanti dall'uso delle
          informazioni pubblicate, da errori od omissioni nei contenuti, né del contenuto dei siti
          esterni raggiungibili tramite link, che sono forniti come riferimento e non implicano
          alcuna approvazione o controllo.
        </p>
      </LegalSection>

      <LegalSection id="servizi" title="5. Newsletter e servizi interattivi">
        <p>
          L'iscrizione alla newsletter è gratuita e revocabile in ogni momento tramite il link di
          disiscrizione presente in ogni comunicazione. Il trattamento dei dati personali è
          descritto nella{" "}
          <Link href="/privacy-policy" className="font-medium text-navy underline decoration-gold-500 underline-offset-2 hover:text-gold-600">
            Privacy Policy
          </Link>{" "}
          e nella{" "}
          <Link href="/cookie-policy" className="font-medium text-navy underline decoration-gold-500 underline-offset-2 hover:text-gold-600">
            Cookie Policy
          </Link>
          .
        </p>
      </LegalSection>

      <LegalSection id="legge" title="6. Legge applicabile e foro competente">
        <p>
          I presenti termini sono regolati dalla legge italiana. Per ogni controversia relativa
          all'utilizzo del Sito è competente in via esclusiva il Foro di Milano, salvo l'applicazione
          delle disposizioni inderogabili a tutela dei consumatori.
        </p>
      </LegalSection>
    </LegalPage>
  );
}
