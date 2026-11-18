"use client";
import { useEffect, useState } from "react";

/**
 * Scroll-to-top button. Taste Doctrine §6 (Kevin, 29 Sep 2026): every site ships one,
 * shown after the first screen. It renders nothing until it is needed, and it hides no
 * page content, so a failure here costs a convenience and never a sentence of copy.
 */
export default function ScrollTop() {
  const [on, setOn] = useState(false);
  useEffect(() => {
    const f = () => setOn(window.scrollY > window.innerHeight * 0.9);
    f();
    window.addEventListener("scroll", f, { passive: true });
    return () => window.removeEventListener("scroll", f);
  }, []);
  return (
    <button
      type="button"
      aria-label="Back to top"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className={`fixed bottom-6 right-6 z-[90] grid h-12 w-12 place-items-center rounded-full border border-[color:var(--afia-gold-600)] bg-black/80 text-[color:var(--afia-gold-500)] backdrop-blur transition hover:bg-[color:var(--afia-gold-600)] hover:text-white ${on ? "opacity-100" : "pointer-events-none opacity-0"}`}
    >
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
        <path d="M12 19V5M5 12l7-7 7 7" />
      </svg>
    </button>
  );
}
