"use client";

import Link from "next/link";
import { Cookie } from "lucide-react";
import { CATEGORIES } from "@/data/articles";
import { categoryUrl } from "@/lib/categories";
import { reopenCookiePreferences, TRACKING_ATTIVO } from "@/lib/consent";

export default function Footer() {
  return (
    <footer className="bg-navy-900 text-navy-100">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 md:grid-cols-4">
        {/* Brand + descrizione */}
        <div className="space-y-4">
          <Link href="/" aria-label="Corriere Edile — homepage">
            <img
              src="/logo.png"
              alt="Corriere Edile — il portale delle costruzioni"
              className="h-12 w-auto rounded bg-white p-1"
              width={180}
              height={60}
            />
          </Link>
          <p className="text-sm leading-relaxed text-navy-200">
            La testata tecnica di chi il cantiere lo vive: norme spiegate come si applicano,
            adempimenti, posa a regola d'arte e prezzi reali dei materiali.
          </p>
          {/* Nessuna icona social finche' i profili non esistono: erano quattro
              link morti ripetuti su ogni pagina del sito. */}
        </div>

        {/* Sezioni */}
        <nav aria-label="Sezioni del sito">
          <h2 className="mb-3 font-serif text-lg font-bold text-white">Sezioni</h2>
          <ul className="grid grid-cols-1 gap-1.5 text-sm">
            {CATEGORIES.map((c) => (
              <li key={c}>
                <Link href={categoryUrl(c)} className="hover:text-gold-500">{c}</Link>
              </li>
            ))}
            <li>
              <Link href="/norme-tecniche" className="font-semibold text-gold-500 hover:underline">
                Indice norme tecniche
              </Link>
            </li>
            <li>
              <Link href="/fiere-edilizia" className="font-semibold text-gold-500 hover:underline">
                Calendario fiere
              </Link>
            </li>
          </ul>
        </nav>

        {/* Info legali */}
        <nav aria-label="Informazioni">
          <h2 className="mb-3 font-serif text-lg font-bold text-white">La testata</h2>
          <ul className="space-y-1.5 text-sm">
            <li><Link href="/chi-siamo" className="hover:text-gold-500">Chi siamo</Link></li>
            <li><Link href="/chi-siamo" className="hover:text-gold-500">Redazione</Link></li>
            <li><Link href="/archivio" className="hover:text-gold-500">Archivio articoli</Link></li>
            <li><Link href="/contatti" className="hover:text-gold-500">Contatti</Link></li>
            <li><Link href="/contatti" className="hover:text-gold-500">Pubblicità</Link></li>
            <li><Link href="/privacy-policy" className="hover:text-gold-500">Privacy Policy</Link></li>
            <li><Link href="/cookie-policy" className="hover:text-gold-500">Cookie Policy</Link></li>
            <li><Link href="/termini" className="hover:text-gold-500">Termini e condizioni</Link></li>
            {TRACKING_ATTIVO && (
              <li>
                <button
                  type="button"
                  onClick={reopenCookiePreferences}
                  className="inline-flex items-center gap-1.5 hover:text-gold-500"
                >
                  <Cookie className="h-3.5 w-3.5" aria-hidden="true" /> Gestisci cookie
                </button>
              </li>
            )}
          </ul>
        </nav>

        {/* Contatti diretti al posto della newsletter.
            Il blocco precedente prometteva un invio "ogni mattina alle 7" e
            raccoglieva indirizzi email senza alcun servizio dietro: una
            promessa che il sito non puo' mantenere e una raccolta di dati
            personali priva di finalita'. Torna quando la newsletter esiste. */}
        <div>
          <h2 className="mb-3 font-serif text-lg font-bold text-white">Scrivi alla redazione</h2>
          <p className="mb-3 text-sm text-navy-200">
            Segnalazioni su norme e adempimenti, correzioni, comunicati stampa e proposte di
            approfondimento tecnico.
          </p>
          <a
            href="mailto:redazione@corrieredile.it"
            className="inline-block rounded-md bg-gold-500 px-4 py-2 text-sm font-bold text-navy-900 hover:bg-gold-600"
          >
            redazione@corrieredile.it
          </a>
        </div>
      </div>

      <div className="border-t border-navy-800">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-4 py-4 text-xs text-navy-200 sm:flex-row">
          <p>© 2026 Corriere Edile — Editore: Domus Group S.r.l.</p>
          <p>
            Via Aurelio Saffi 29, 20123 Milano · P.IVA 13132010961 · Cap. soc. € 20.000,00 · PEC:{" "}
            domusgroupsrl@legalmail.it
          </p>
        </div>
      </div>
    </footer>
  );
}
