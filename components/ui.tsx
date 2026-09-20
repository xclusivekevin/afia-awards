import Link from "next/link";
import type { ReactNode } from "react";
export function Btn({ href, children, variant = "primary", className = "" }: { href: string; children: ReactNode; variant?: "primary" | "outline" | "outline-light"; className?: string }) {
  const ext = /^(https?:|mailto:|#)/.test(href); const cls = `btn btn--${variant} ${className}`;
  return ext ? <a href={href} className={cls} target={href.startsWith("http") ? "_blank" : undefined} rel={href.startsWith("http") ? "noreferrer" : undefined}>{children}</a> : <Link href={href} className={cls}>{children}</Link>;
}
export function Eyebrow({ children, light }: { children: ReactNode; light?: boolean }) { return <p className={`eyebrow ${light ? "eyebrow--light" : ""}`}>{children}</p>; }
/** Dark hero band for inner pages */
export function PageHero({ eyebrow, title, sub, children, image = "/img/Active-Hero-2026.png" }: { eyebrow?: string; title: ReactNode; sub?: ReactNode; children?: ReactNode; image?: string }) {
  return (
    <section className="dark relative flex min-h-[420px] items-center pt-[88px] text-center" style={{ backgroundImage: `linear-gradient(180deg, rgba(0,0,0,0.3), rgba(0,0,0,0.75)), url(${image})`, backgroundSize: "cover", backgroundPosition: "center" }}>
      <div className="container py-16">{eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}<h1 className="mx-auto mt-5 max-w-4xl text-[length:var(--text-h1)]">{title}</h1>{sub && <div className="lede mx-auto mt-5 max-w-2xl text-white/85">{sub}</div>}{children && <div className="mt-8 flex flex-wrap justify-center gap-4">{children}</div>}</div>
    </section>
  );
}
export const WINNERS_HOME: [string, string, string, string, string][] = [
  ["Chef-Hilda-Baci.jpg", "Chef Hilda Baci", "Chef of the Year", "Nigeria", "A global record-breaking chef whose achievements following her Guinness World Record have positioned Nigerian cuisine on the world stage."],
  ["AA.webp", "Dr. Akinwumi Adesina", "Lifetime Achievement Award", "Nigeria", "As President of the African Development Bank, Dr. Adesina has been instrumental in financing and promoting Africa's food security agenda for over two decades."],
  ["Chef-Neo-Nontso.webp", "Chef Neo Nontso", "Rising Star in Food & Drinks", "South Africa", "A fast-rising chef, cookbook author, and TV personality promoting modern South African cuisine to new audiences."],
];
