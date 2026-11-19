"use client";
import { useEffect, useRef, useState } from "react";

/**
 * The ceremony date types itself out, character by character, the way
 * awwwards-les-francouvertes animates "25 O" into "25 OCTOBRE".
 *
 * This is the text treatment that is not a fade (John hard rule 15).
 *
 * It renders the FULL string on the server and only starts trimming once the
 * effect has run, so the date is complete in the HTML, complete for a crawler,
 * complete with JavaScript off, and complete under reduced motion. Nothing hides
 * itself waiting for a watcher that might never report.
 */
export default function TypedDate({ text, className = "" }: { text: string; className?: string }) {
  const [shown, setShown] = useState(text);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const el = ref.current;
    if (!el) return;
    let timer: number | undefined;
    const io = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting) return;
      io.disconnect();
      let i = 0;
      setShown("");
      const step = () => {
        i += 1;
        setShown(text.slice(0, i));
        if (i < text.length) timer = window.setTimeout(step, 38);
      };
      timer = window.setTimeout(step, 180);
    }, { threshold: 0.4 });
    io.observe(el);
    // backstop: if the observer never fires, the full text is already there
    return () => { io.disconnect(); if (timer) clearTimeout(timer); };
  }, [text]);

  return (
    <span ref={ref} className={className}>
      <span aria-hidden>{shown}</span>
      <span className="sr-only">{text}</span>
      <span className="caret" aria-hidden />
    </span>
  );
}
