"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { usePathname } from "next/navigation";

type Item = { label: string; href: string; children?: { label: string; href: string; external?: boolean }[] };
const NAV: Item[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about", children: [{ label: "About AFIA", href: "/about" }, { label: "About African Food Network", href: "https://afrifoodnetwork.com/", external: true }, { label: "About CAPA (AFIA 2026 National Host Partner)", href: "https://capanigeria.org/", external: true }] },
  { label: "2026 Awards", href: "/2026-awards", children: [{ label: "Theme and Overview", href: "/2026-awards" }, { label: "Award Categories", href: "/award-categories" }, { label: "Nominate", href: "/nominate" }] },
  { label: "Past Winners", href: "/winners", children: [{ label: "2025 Winners", href: "/winners/2025-winners" }, { label: "2025 Nominees", href: "/2025-nominees" }] },
  { label: "Partners", href: "/partners", children: [{ label: "Current Partners", href: "/partners#current-partners" }, { label: "Partnership Opportunities", href: "/partners#partnership-opportunities" }] },
  { label: "Press & Media", href: "/press", children: [{ label: "Press Kit", href: "/press#press-kit" }, { label: "Media Coverage", href: "/press#media-coverage" }, { label: "Media Enquiries", href: "/press#media-enquiries" }] },
];
const Caret = () => <svg width="10" height="10" viewBox="0 0 10 10" aria-hidden><path d="M1 3l4 4 4-4" stroke="currentColor" strokeWidth="1.5" fill="none" /></svg>;

export default function Header() {
  const [open, setOpen] = useState(false);
  const path = usePathname();
  const active = (h: string) => (h === "/" ? path === "/" : path.startsWith(h));
  return (
    <header className="absolute inset-x-0 top-0 z-[50]">
      <div className="container flex h-[88px] items-center justify-between">
        <Link href="/" aria-label="African Food Influencers Awards home"><Image src="/img/Awards-Logo-01.png" alt="AFIA African Food Influencers Awards" width={138} height={56} priority style={{ height: 56, width: "auto" }} /></Link>
        <nav aria-label="Main" className="hidden xl:block">
          <ul className="display flex items-center gap-7 text-[15px] font-medium text-white">
            {NAV.map((item) => (
              <li key={item.label} className="group relative">
                <Link href={item.href} className={`inline-flex items-center gap-1.5 border-b-2 py-3 ${active(item.href) ? "border-[color:var(--afia-gold-600)] text-[color:var(--afia-gold-600)]" : "border-transparent hover:text-[color:var(--afia-gold-500)]"}`}>{item.label}{item.children && <Caret />}</Link>
                {item.children && <ul className="invisible absolute left-0 top-full min-w-[260px] rounded-md bg-black/95 p-2 opacity-0 shadow-lg transition group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">{item.children.map((c) => <li key={c.label}><Link href={c.href} target={c.external ? "_blank" : undefined} className="block rounded px-3 py-2 text-[13px] normal-case tracking-normal hover:bg-white/10">{c.label}</Link></li>)}</ul>}
              </li>
            ))}
          </ul>
        </nav>
        <div className="flex items-center gap-3">
          <Link href="/contact" className="btn btn--primary hidden sm:inline-flex">Contact</Link>
          <button type="button" aria-label="Open menu" aria-expanded={open} aria-controls="mobile-menu" onClick={() => setOpen(!open)} className="p-2 text-white xl:hidden"><svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 6h18M3 12h18M3 18h18" /></svg></button>
        </div>
      </div>
      {open && (
        <div id="mobile-menu" className="fixed inset-0 z-[100] overflow-y-auto bg-black text-white">
          <div className="container flex h-[88px] items-center justify-between"><Image src="/img/Awards-Logo-01.png" alt="" width={99} height={40} style={{ height: 40, width: "auto" }} /><button type="button" aria-label="Close menu" onClick={() => setOpen(false)} className="p-2"><svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 6l12 12M18 6L6 18" /></svg></button></div>
          <ul className="container display space-y-2 pb-10 text-[20px]">
            {NAV.map((item) => <li key={item.label}><Link href={item.href} onClick={() => setOpen(false)} className="block py-2">{item.label}</Link>{item.children && <ul className="ml-4 space-y-1 text-[14px] normal-case tracking-normal text-white/70">{item.children.map((c) => <li key={c.label}><Link href={c.href} onClick={() => setOpen(false)} className="block py-1">{c.label}</Link></li>)}</ul>}</li>)}
            <li className="pt-4"><Link href="/contact" onClick={() => setOpen(false)} className="btn btn--primary">Contact</Link></li>
          </ul>
        </div>
      )}
    </header>
  );
}
