import type { Metadata } from "next";
import LegalPage, { LegalSection } from "@/components/legal/LegalPage";
import ManageCookiesButton from "@/components/ManageCookiesButton";
import { TRACKING_ATTIVO } from "@/lib/consent";

export const metadata: Metadata = {
  title: "Cookie Policy",
  description:
    "Cookie Policy di Corriere Edile: cosa sono i cookie, categorie utilizzate (tecnici, analitici, marketing), durata e come gestire o revocare il consenso.",
  alternates: { canonical: "/cookie-policy" },
  // Boilerplate legale: nessun valore di ricerca. Resta linkata e raggiungibile
  // (serve a utenti e conformita'), ma fuori dall'indice per non figurare tra
  // le pagine "scansionate e non indicizzate" mascherando il dato reale.
  robots: { index: false, follow: true },
};

// La tabella segue la configurazione pubblicata: nessun servizio è dichiarato attivo prima della verifica.
const COOKIE_TABLE = [
  {
    category: "Tecnici / necessari",
    purpose:
      "Funzionamento del sito e memorizzazione delle preferenze. Non richiedono consenso ai sensi dell'art. 122 del Codice privacy.",
    examples: [
      {
        name: "ce-cookie-consent",
        duration: "Fino alla cancellazione o all’aggiornamento delle preferenze",
        note: "Salva l'eventuale scelta espressa sulle preferenze (localStorage, nessun dato personale)",
      },
    ],
  },
  ...(TRACKING_ATTIVO ? [{
    category: "Statistiche — solo con consenso",
    purpose: "Google Analytics 4, caricato tramite Google Tag Manager dopo l’accettazione dei cookie analitici, misura le pagine visitate e l’utilizzo del sito.",
    examples: [
      { name: "_ga", duration: "2 anni (durata predefinita Google)", note: "Distingue i browser per le statistiche di navigazione." },
      { name: "_ga_<identificativo>", duration: "2 anni (durata predefinita Google)", note: "Conserva le informazioni della sessione di Analytics." },
    ],
  }] : []),
];

export default function CookiePolicy() {
  return (
    <LegalPage title="Cookie Policy" updated={TRACKING_ATTIVO ? "18 novembre 2026" : "21 luglio 2026"}>

      <LegalSection id="cosa-sono" title="1. Cosa sono i cookie">
        <p>
          I cookie sono piccoli file di testo che i siti visitati inviano al dispositivo dell'utente,
          dove vengono memorizzati per essere ritrasmessi agli stessi siti alla visita successiva.
          Possono essere di prima parte (impostati da questo sito) o di terze parti (impostati da
          servizi esterni integrati nelle pagine). Alcune preferenze sono memorizzate anche tramite
          il localStorage del browser, con finalità equivalenti.
        </p>
      </LegalSection>

      <LegalSection id="categorie" title="2. Cookie utilizzati da questo sito">
        <div className="space-y-5">
          {COOKIE_TABLE.map((cat) => (
            <div key={cat.category} className="overflow-hidden rounded-lg border border-border">
              <div className="bg-navy px-4 py-2.5">
                <h3 className="text-sm font-bold text-white">{cat.category}</h3>
                <p className="mt-0.5 text-xs text-navy-100">{cat.purpose}</p>
              </div>
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-muted text-left">
                    <th scope="col" className="px-4 py-2 font-semibold text-navy-800">Nome</th>
                    <th scope="col" className="px-4 py-2 font-semibold text-navy-800">Durata</th>
                    <th scope="col" className="px-4 py-2 font-semibold text-navy-800">Finalità</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border bg-white">
                  {cat.examples.map((c) => (
                    <tr key={c.name}>
                      <td className="px-4 py-2 font-mono text-[13px] text-navy-700">{c.name}</td>
                      <td className="px-4 py-2">{c.duration}</td>
                      <td className="px-4 py-2">{c.note}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ))}
        </div>
      </LegalSection>

      <LegalSection id="non-attivi" title="3. Cookie analitici e di profilazione">
        {TRACKING_ATTIVO ? (
          <>
            <p>Con il tuo consenso utilizziamo Google Analytics 4 tramite Google Tag Manager per misurare le visite alle pagine del sito. Prima dell’accettazione non vengono caricati i tag Google. Non vengono introdotti pixel pubblicitari o strumenti di profilazione.</p>
            <p>Puoi rifiutare i cookie analitici o revocare la scelta da «Gestisci cookie». La revoca interrompe la misurazione e ricarica la pagina per rimuovere gli script già caricati. Il sito resta utilizzabile con i soli cookie necessari.</p>
            <p>Le durate indicate sono quelle predefinite descritte nella <a href="https://support.google.com/analytics/answer/11397207?hl=it" target="_blank" rel="noopener noreferrer" className="underline">documentazione Google sui cookie di Analytics</a>; il browser può limitarle ulteriormente.</p>
          </>
        ) : (
          <p>Questo sito non utilizza attualmente cookie analitici o di profilazione. Gli strumenti di misurazione vengono attivati soltanto dopo la verifica della configurazione e l’aggiornamento del banner.</p>
        )}
      </LegalSection>

      <LegalSection id="gestione-consenso" title="4. Come gestire o revocare il consenso">
        <p>
          Puoi modificare in qualsiasi momento le preferenze espresse al primo accesso, riaprendo il
          pannello di gestione del consenso:
        </p>
        <p>
          <ManageCookiesButton />
        </p>
        <p>
          In alternativa, puoi eliminare i dati di consenso dal browser (localStorage e cookie del
          dominio): al successivo accesso il banner verrà riproposto.
        </p>
      </LegalSection>

      <LegalSection id="browser" title="5. Gestione dei cookie dal browser">
        <p>Ogni browser consente di bloccare o eliminare i cookie dalle impostazioni:</p>
        <ul className="list-disc space-y-1.5 pl-6 marker:text-gold-600">
          <li>
            <a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener" className="font-medium text-navy underline decoration-gold-500 underline-offset-2 hover:text-gold-600">
              Google Chrome
            </a>
          </li>
          <li>
            <a href="https://support.apple.com/it-it/guide/safari/sfri11471/mac" target="_blank" rel="noopener" className="font-medium text-navy underline decoration-gold-500 underline-offset-2 hover:text-gold-600">
              Apple Safari
            </a>
          </li>
          <li>
            <a href="https://support.mozilla.org/it/kb/protezione-antitracciamento-avanzata-firefox-desktop" target="_blank" rel="noopener" className="font-medium text-navy underline decoration-gold-500 underline-offset-2 hover:text-gold-600">
              Mozilla Firefox
            </a>
          </li>
          <li>
            <a href="https://support.microsoft.com/it-it/microsoft-edge/eliminare-i-cookie-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" target="_blank" rel="noopener" className="font-medium text-navy underline decoration-gold-500 underline-offset-2 hover:text-gold-600">
              Microsoft Edge
            </a>
          </li>
        </ul>
        <p>
          La disattivazione dei cookie tecnici può compromettere alcune funzionalità del sito, come
          il salvataggio delle preferenze di consenso.
        </p>
      </LegalSection>

      <LegalSection id="aggiornamenti" title="6. Aggiornamenti della Cookie Policy">
        <p>
          Questa pagina può essere aggiornata in seguito all'introduzione di nuovi strumenti o a
          modifiche normative. In caso di modifiche sostanziali, il banner del consenso verrà
          riproposto agli utenti con la nuova versione della policy. Ultimo aggiornamento: luglio
          2026 (versione 1.0).
        </p>
      </LegalSection>
    </LegalPage>
  );
}
