import type { Metadata } from "next";
import Link from "next/link";
import LegalPage, { LegalSection, PlaceholderNote } from "@/components/legal/LegalPage";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Informativa sul trattamento dei dati personali di Corriere Edile ai sensi del GDPR (UE) 2016/679: dati raccolti, finalità, basi giuridiche, cookie e diritti degli interessati.",
  alternates: { canonical: "/privacy-policy" },
  // Boilerplate legale: nessun valore di ricerca. Resta linkata e raggiungibile
  // (serve a utenti e conformita'), ma fuori dall'indice per non figurare tra
  // le pagine "scansionate e non indicizzate" mascherando il dato reale.
  robots: { index: false, follow: true },
};

export default function PrivacyPolicy() {
  return (
    <LegalPage title="Privacy Policy" updated="21 luglio 2026">
      <PlaceholderNote>
        gli indirizzi email operativi (privacy@, dpo@) e l'eventuale nomina del DPO vanno confermati
        e allineati al dominio reale prima della pubblicazione.
      </PlaceholderNote>

      <LegalSection id="titolare" title="1. Titolare del trattamento">
        <p>
          Il Titolare del trattamento dei dati personali è <strong>Domus Group S.r.l.</strong>,
          P.IVA 13132010961, con sede legale in Via Aurelio Saffi 29, 20123 Milano (MI), Italia. PEC:{" "}
          <a href="mailto:domusgroupsrl@legalmail.it" className="font-medium text-navy underline decoration-gold-500 underline-offset-2 hover:text-gold-600">
            domusgroupsrl@legalmail.it
          </a>
          .
        </p>
        <p>
          Per qualsiasi richiesta relativa alla privacy è possibile scrivere a{" "}
          <a href="mailto:privacy@corrieredile.it" className="font-medium text-navy underline decoration-gold-500 underline-offset-2 hover:text-gold-600">
            privacy@corrieredile.it
          </a>
          . Il Data Protection Officer (DPO), ove nominato, è raggiungibile all'indirizzo{" "}
          <a href="mailto:dpo@corrieredile.it" className="font-medium text-navy underline decoration-gold-500 underline-offset-2 hover:text-gold-600">
            dpo@corrieredile.it
          </a>
          .
        </p>
      </LegalSection>

      <LegalSection id="dati-raccolti" title="2. Dati personali raccolti">
        <p>Attraverso il sito possiamo raccogliere le seguenti categorie di dati:</p>
        <ul className="list-disc space-y-1.5 pl-6 marker:text-gold-600">
          <li>
            <strong>Dati di navigazione:</strong> indirizzi IP, tipo di browser, pagine visitate,
            tempi di permanenza e altri parametri tecnici trasmessi implicitamente nell'uso dei
            protocolli di comunicazione Internet.
          </li>
          <li>
            <strong>Dati forniti volontariamente:</strong> nome, indirizzo email e ragione sociale
            inviati tramite il form contatti o l'iscrizione alla newsletter.
          </li>
          <li>
            <strong>Dati relativi ai commenti e alle interazioni:</strong> contenuti pubblicati
            volontariamente dall'utente nelle aree di interazione del sito, ove attive.
          </li>
          <li>
            <strong>Cookie e strumenti di tracciamento:</strong> vedere la{" "}
            <Link href="/cookie-policy" className="font-medium text-navy underline decoration-gold-500 underline-offset-2 hover:text-gold-600">
              Cookie Policy
            </Link>{" "}
            per il dettaglio.
          </li>
        </ul>
      </LegalSection>

      <LegalSection id="finalita" title="3. Finalità e basi giuridiche del trattamento">
        <ul className="list-disc space-y-1.5 pl-6 marker:text-gold-600">
          <li>
            <strong>Funzionamento e sicurezza del sito</strong> — base giuridica: legittimo
            interesse del Titolare (art. 6, lett. f, GDPR).
          </li>
          <li>
            <strong>Risposta alle richieste inviate tramite il form contatti</strong> — base
            giuridica: esecuzione di misure precontrattuali su richiesta dell'interessato (art. 6,
            lett. b, GDPR).
          </li>
          <li>
            <strong>Invio della newsletter e di comunicazioni editoriali</strong> — base giuridica:
            consenso dell'interessato (art. 6, lett. a, GDPR), revocabile in ogni momento tramite il
            link di disiscrizione presente in ogni email.
          </li>
          <li>
            <strong>Analisi statistiche aggregate sull'uso del sito</strong> — base giuridica:
            consenso (art. 6, lett. a, GDPR) per strumenti non anonimizzati; legittimo interesse per
            statistiche aggregate e anonime.
          </li>
          <li>
            <strong>Adempimenti di legge</strong> — base giuridica: obbligo legale (art. 6, lett. c,
            GDPR).
          </li>
        </ul>
      </LegalSection>

      <LegalSection id="conservazione" title="4. Conservazione e comunicazione dei dati">
        <p>
          I dati di contatto sono conservati per il tempo necessario a evadere la richiesta; i dati
          della newsletter fino alla revoca del consenso; i dati di navigazione secondo i tempi
          indicati nella Cookie Policy. I dati non sono diffusi e possono essere comunicati a
          fornitori tecnici (hosting, piattaforme email, provider analytics) nominati responsabili
          del trattamento ai sensi dell'art. 28 GDPR, e alle autorità competenti nei casi previsti
          dalla legge.
        </p>
        <p>
          Qualora alcuni fornitori trattino dati al di fuori dello Spazio Economico Europeo, il
          trasferimento avviene nel rispetto degli artt. 44 e ss. GDPR (decisioni di adeguatezza o
          clausole contrattuali standard).
        </p>
      </LegalSection>

      <LegalSection id="diritti" title="5. Diritti dell'interessato (artt. 15–22 GDPR)">
        <p>In qualità di interessato, hai diritto di:</p>
        <ul className="list-disc space-y-1.5 pl-6 marker:text-gold-600">
          <li><strong>accesso</strong> ai tuoi dati personali (art. 15);</li>
          <li><strong>rettifica</strong> dei dati inesatti o incompleti (art. 16);</li>
          <li><strong>cancellazione</strong> ("diritto all'oblio", art. 17);</li>
          <li><strong>limitazione</strong> del trattamento (art. 18);</li>
          <li><strong>portabilità</strong> dei dati in formato strutturato (art. 20);</li>
          <li><strong>opposizione</strong> al trattamento basato su legittimo interesse (art. 21);</li>
          <li>
            <strong>revoca del consenso</strong> in qualsiasi momento, senza pregiudicare la liceità
            del trattamento basata sul consenso prestato prima della revoca.
          </li>
        </ul>
        <p>
          Le richieste possono essere inviate a{" "}
          <a href="mailto:privacy@corrieredile.it" className="font-medium text-navy underline decoration-gold-500 underline-offset-2 hover:text-gold-600">
            privacy@corrieredile.it
          </a>
          . Hai inoltre diritto di proporre reclamo al Garante per la protezione dei dati personali
          (<a href="https://www.garanteprivacy.it" target="_blank" rel="noopener" className="font-medium text-navy underline decoration-gold-500 underline-offset-2 hover:text-gold-600">
            garanteprivacy.it
          </a>).
        </p>
      </LegalSection>

      <LegalSection id="modifiche" title="6. Modifiche a questa informativa">
        <p>
          Il Titolare può aggiornare la presente informativa in seguito a modifiche normative o
          organizzative. La data di ultimo aggiornamento è indicata in cima alla pagina; le
          modifiche sostanziali saranno segnalate agli utenti registrati alla newsletter.
        </p>
      </LegalSection>
    </LegalPage>
  );
}
