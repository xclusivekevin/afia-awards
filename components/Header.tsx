"use client";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";

type Item = { label: string; href: string; children?: { label: string; href: string; external?: boolean }[] };
const NAV: Item[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about", children: [{ label: "About AFIA", href: "/about" }, { label: "About African Food Network", href: "https://afrifoodnetwork.com/", external: true }] },
  { label: "2026 Awards", href: "/2026-awards", children: [{ label: "AFIA 2026 and how to watch", href: "/2026-awards" }, { label: "The 2026 Nominees", href: "/nominees" }, { label: "Award Categories", href: "/award-categories" }, { label: "Jury and Governance", href: "/governance" }] },
  { label: "Nominees", href: "/nominees" },
  { label: "Past Winners", href: "/winners", children: [{ label: "2025 Winners", href: "/winners/2025-winners" }, { label: "2025 Nominees", href: "/2025-nominees" }] },
  { label: "Partners", href: "/partners", children: [{ label: "Current Partners", href: "/partners#current-partners" }, { label: "Partnership Opportunities", href: "/partners#partnership-opportunities" }] },
  { label: "Press & Media", href: "/press", children: [{ label: "Press Kit", href: "/press#press-kit" }, { label: "Media Coverage", href: "/press#media-coverage" }, { label: "Media Enquiries", href: "/press#media-enquiries" }] },
];

/**
 * The phone menu, rebuilt from React Bits "Card Nav", entry 2 of
 * 02_LIBRARY/sections/menus_from_libraries.md. The bar button drops a panel of
 * three cards, each a group title with its links, so eleven flat links become
 * three a thumb can read. Rebuilt in our own code in AFIA's colours; no library
 * code ships.
 *
 * Held to Kevin's 23 October ruling: plain, links only, set large, no
 * photographs behind the words and no numbers beside them, and the mark at the
 * top is larger than the bar's.
 */
const GROUPS: [string, { label: string; href: string; external?: boolean }[]][] = [
  ["The awards", [
    { label: "The nominees", href: "/nominees" },
    { label: "Every award, explained", href: "/award-categories" },
    { label: "How winners are chosen", href: "/governance" },
    { label: "The ceremony", href: "/2026-awards" },
  ]],
  ["The record", [
    { label: "Winners archive", href: "/winners" },
    { label: "AFIA 2025 winners", href: "/winners/2025-winners" },
    { label: "AFIA 2025 nominees", href: "/2025-nominees" },
  ]],
  ["AFIA", [
    { label: "About AFIA", href: "/about" },
    { label: "Partners", href: "/partners" },
    { label: "Press and media", href: "/press" },
    { label: "The AFN 100", href: "https://afrifoodnetwork.com/afn-100/", external: true },
  ]],
];

const Caret = () => <svg width="10" height="10" viewBox="0 0 10 10" aria-hidden><path d="M1 3l4 4 4-4" stroke="currentColor" strokeWidth="1.5" fill="none" /></svg>;
const Go = () => <svg width="15" height="8" viewBox="0 0 15 8" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden><path d="M0 4h12M9 1l3 3-3 3" /></svg>;

export default function Header() {
  const [open, setOpen] = useState(false);
  const [stuck, setStuck] = useState(false);
  const path = usePathname();
  const closeRef = useRef<HTMLButtonElement>(null);

  // The bar is invisible over the hero and only materialises once you leave it,
  // so the first screen is the poster and nothing else (Aceternity "Floating Navbar").
  useEffect(() => {
    const f = () => setStuck(window.scrollY > 90);
    f();
    window.addEventListener("scroll", f, { passive: true });
    return () => window.removeEventListener("scroll", f);
  }, []);

  // close on route change, close on Escape, and hold the page still while open
  useEffect(() => { setOpen(false); }, [path]);
  useEffect(() => {
    if (!open) return;
    const esc = (e: KeyboardEvent) => { if (e.key === "Escape") setOpen(false); };
    document.addEventListener("keydown", esc);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    return () => { document.removeEventListener("keydown", esc); document.body.style.overflow = prev; };
  }, [open]);

  const active = (h: string) => (h === "/" ? path === "/" : path.startsWith(h));

  return (
    <header className={`site-bar isolate fixed inset-x-0 top-0 z-[50] ${stuck ? "site-bar--stuck" : ""}`}>
      <div className="container flex h-[88px] items-center justify-between">
        <Link href="/" aria-label="African Food Influencers Awards home"><Image src="/img/Awards-Logo-01.png" alt="AFIA African Food Influencers Awards" width={138} height={56} priority style={{ height: 56, width: "auto" }} /></Link>
        <nav aria-label="Main" className="hidden xl:block">
          <ul className="display flex items-center gap-7 text-[15px] font-medium text-white">
            {NAV.map((item) => (
              <li key={item.label} className="group relative">
                <Link href={item.href} className={`inline-flex items-center gap-1.5 border-b-2 py-3 ${active(item.href) ? "border-[color:var(--afia-ribbon)] text-white" : "border-transparent text-white/90 hover:text-[color:var(--afia-gold-200)]"}`}>{item.label}{item.children && <Caret />}</Link>
                {item.children && <ul className="invisible absolute left-0 top-full min-w-[260px] rounded-md bg-black/95 p-2 opacity-0 shadow-lg transition group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">{item.children.map((c) => <li key={c.label}><Link href={c.href} target={c.external ? "_blank" : undefined} className="block rounded px-3 py-2 text-[13px] normal-case tracking-normal hover:bg-white/10">{c.label}</Link></li>)}</ul>}
              </li>
            ))}
          </ul>
        </nav>
        <div className="flex items-center gap-3">
          <Link href="/contact" className="btn btn--primary hidden sm:inline-flex">Contact</Link>
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="card-nav"
            onClick={() => setOpen(!open)}
            className="cardnav__trigger xl:hidden"
          >
            <span className="display text-[13px] font-medium tracking-[0.14em]">{open ? "Close" : "Menu"}</span>
            <span className={`cardnav__bars ${open ? "cardnav__bars--x" : ""}`} aria-hidden><i /><i /></span>
          </button>
        </div>
      </div>

      {/* ── Card Nav (React Bits entry 2), rebuilt ───────────────────────── */}
      {open && (
        <>
          <button type="button" aria-label="Close menu" className="cardnav__veil xl:hidden" onClick={() => setOpen(false)} />
          <div id="card-nav" className="cardnav xl:hidden" role="dialog" aria-modal="true" aria-label="Menu">
            <div className="cardnav__top">
              <Image src="/img/Awards-Logo-01.png" alt="AFIA African Food Influencers Awards" width={207} height={84} style={{ height: 84, width: "auto" }} />
              <button ref={closeRef} type="button" aria-label="Close menu" onClick={() => setOpen(false)} className="cardnav__close">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" aria-hidden><path d="M6 6l12 12M18 6L6 18" /></svg>
              </button>
            </div>

            <div className="cardnav__cards">
              {GROUPS.map(([head, links], i) => (
                <nav key={head} aria-label={head} className="cardnav__card" style={{ "--i": i } as React.CSSProperties}>
                  <h2 className="cardnav__head">{head}</h2>
                  <ul>
                    {links.map((l) => (
                      <li key={l.label}>
                        {l.external
                          ? <a href={l.href} target="_blank" rel="noreferrer" className="cardnav__link"><Go />{l.label}</a>
                          : <Link href={l.href} onClick={() => setOpen(false)} className={`cardnav__link ${active(l.href) ? "cardnav__link--on" : ""}`}><Go />{l.label}</Link>}
                      </li>
                    ))}
                  </ul>
                </nav>
              ))}
            </div>

            <Link href="/contact" onClick={() => setOpen(false)} className="btn btn--primary cardnav__cta">Contact AFIA</Link>
          </div>
        </>
      )}
    </header>
  );
}
