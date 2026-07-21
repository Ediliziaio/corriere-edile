"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

/**
 * Barra di progresso lettura (fixed top, oro) basata sullo scroll
 * dell'articolo + bottone flottante "torna su" dopo 600px di scroll.
 * Montata solo nelle pagine articolo.
 */
export default function ReadingProgress() {
  const [progress, setProgress] = useState(0);
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const article = document.querySelector("article");
        const total = article
          ? article.offsetTop + article.offsetHeight - window.innerHeight
          : document.documentElement.scrollHeight - window.innerHeight;
        const y = window.scrollY;
        setProgress(total > 0 ? Math.min(1, Math.max(0, y / total)) : 0);
        setShowTop(y > 600);
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <>
      {/* Barra progresso lettura */}
      <div
        aria-hidden="true"
        className="fixed inset-x-0 top-0 z-50 h-1 bg-navy-100"
      >
        <div
          className="h-full bg-gold-500 transition-[width] duration-100"
          style={{ width: `${progress * 100}%` }}
        />
      </div>

      {/* Torna su */}
      {showTop && (
        <button
          type="button"
          aria-label="Torna su"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-6 right-6 z-50 rounded-full bg-navy p-3 text-white shadow-lg transition-colors hover:bg-gold-500 hover:text-navy-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold-500"
        >
          <ArrowUp className="h-5 w-5" aria-hidden="true" />
        </button>
      )}
    </>
  );
}
