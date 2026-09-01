import type { Metadata } from "next";
import { SITE, jsonLd, absUrl } from "@/lib/site";
import { Mail, MapPin, Phone } from "lucide-react";
import LegalPage, { LegalSection, PlaceholderNote } from "@/components/legal/LegalPage";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contatti",
  description:
    "Contatta la redazione di Corriere Edile: segnalazioni, comunicati stampa, pubblicità e partnership per il settore delle costruzioni.",
  alternates: { canonical: "/contatti" },
};


/*
  ContactPage + punti di contatto tipizzati: completa l'entita' editore
  (redazione, pubblicita', privacy) e la rende leggibile ai motori generativi
  quando qualcuno chiede "come contattare Corriere Edile".
*/
const CONTACT_JSONLD = [
  {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    url: absUrl("/contatti"),
    inLanguage: "it-IT",
    isPartOf: { "@id": `${SITE.url}/#website` },
    about: { "@id": `${SITE.url}/#organization` },
    mainEntity: {
      "@id": `${SITE.url}/#organization`,
      contactPoint: [
        {
          "@type": "ContactPoint",
          contactType: "editorial",
          name: "Redazione",
          email: "redazione@corrieredile.it",
          availableLanguage: ["it"],
          areaServed: "IT",
        },
        {
          "@type": "ContactPoint",
          contactType: "sales",
          name: "Pubblicità e partnership",
          email: "pubblicita@corrieredile.it",
          availableLanguage: ["it"],
          areaServed: "IT",
        },
        {
          "@type": "ContactPoint",
          contactType: "customer support",
          name: "Privacy e dati personali",
          email: "privacy@corrieredile.it",
          availableLanguage: ["it"],
          areaServed: "IT",
        },
      ],
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: absUrl("/") },
      { "@type": "ListItem", position: 2, name: "Contatti", item: absUrl("/contatti") },
    ],
  },
];

export default function Contatti() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(CONTACT_JSONLD) }} />
    <LegalPage title="Contatti">
      <div className="grid gap-8 md:grid-cols-5">
        {/* ===== Form contatti (submit simulato) ===== */}
        <section aria-labelledby="form-contatti" className="md:col-span-3">
          <h2 id="form-contatti" className="border-l-4 border-gold-500 pl-3 font-serif text-xl font-bold text-navy-800">
            Scrivici
          </h2>
          <ContactForm />
        </section>

        {/* ===== Recapiti ===== */}
        <aside aria-labelledby="recapiti" className="md:col-span-2">
          <h2 id="recapiti" className="border-l-4 border-gold-500 pl-3 font-serif text-xl font-bold text-navy-800">
            Recapiti
          </h2>
          <ul className="mt-4 space-y-4 text-sm">
            <li className="flex items-start gap-3">
              <Mail className="mt-0.5 h-5 w-5 shrink-0 text-gold-600" aria-hidden="true" />
              <div>
                <p className="font-semibold text-navy-800">Redazione</p>
                <a href="mailto:redazione@corrieredile.it" className="text-navy underline decoration-gold-500 underline-offset-2 hover:text-gold-600">
                  redazione@corrieredile.it
                </a>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <Mail className="mt-0.5 h-5 w-5 shrink-0 text-gold-600" aria-hidden="true" />
              <div>
                <p className="font-semibold text-navy-800">Pubblicità e partnership</p>
                <a href="mailto:pubblicita@corrieredile.it" className="text-navy underline decoration-gold-500 underline-offset-2 hover:text-gold-600">
                  pubblicita@corrieredile.it
                </a>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <Phone className="mt-0.5 h-5 w-5 shrink-0 text-gold-600" aria-hidden="true" />
              <div>
                <p className="font-semibold text-navy-800">Telefono</p>
                <p className="text-muted-foreground">+39 02 0000 0000</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-gold-600" aria-hidden="true" />
              <div>
                <p className="font-semibold text-navy-800">Sede</p>
                <p className="text-muted-foreground">
                  Domus Group S.r.l.
                  <br />
                  Via Aurelio Saffi 29, 20123 Milano (MI)
                </p>
              </div>
            </li>
          </ul>
          <div className="mt-5">
            <PlaceholderNote>
              gli indirizzi email e il telefono sono dimostrativi e vanno sostituiti con i recapiti reali.
            </PlaceholderNote>
          </div>
        </aside>
      </div>

      <div className="mt-10">
        <LegalSection id="tempi-risposta" title="Tempi e modalità di risposta">
          <p>
            La redazione legge tutte le segnalazioni. Le richieste di correzione sui contenuti sono
            valutate con priorità; le proposte commerciali ricevono risposta entro 2 giorni
            lavorativi. Per urgenze normative o legali scrivere a{" "}
            <a href="mailto:privacy@corrieredile.it" className="font-medium text-navy underline decoration-gold-500 underline-offset-2 hover:text-gold-600">
              privacy@corrieredile.it
            </a>
            .
          </p>
        </LegalSection>
      </div>
    </LegalPage>
    </>
  );
}