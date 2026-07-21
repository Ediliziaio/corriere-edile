import Link from "next/link";
import { FileQuestion } from "lucide-react";

export default function NotFound() {
  return (
    <div className="mx-auto flex max-w-2xl flex-col items-center px-4 py-24 text-center">
      <FileQuestion className="h-16 w-16 text-gold-500" aria-hidden="true" />
      <h1 className="mt-6 font-serif text-3xl font-bold text-navy-900">Pagina non trovata</h1>
      <p className="mt-3 text-muted-foreground">
        La pagina che stai cercando non esiste o è stata spostata. Torna alla homepage per le
        ultime notizie sul mondo delle costruzioni.
      </p>
      <Link
        href="/"
        className="mt-8 rounded-md bg-navy px-6 py-3 text-sm font-bold text-white hover:bg-navy-600"
      >
        Torna alla homepage
      </Link>
    </div>
  );
}
