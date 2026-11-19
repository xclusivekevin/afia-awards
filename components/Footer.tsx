import Link from "next/link";
import Image from "next/image";
import Ankara from "./Ankara";
import { AFIA } from "@/lib/event";

/**
 * The footer, rebuilt from height/awwwards-palomino sections/10.jpg: small label columns
 * across the top, then the wordmark set enormous and bleeding off both edges with imagery
 * showing through it.
 *
 * Here the wordmark is filled with the same wall of nominee photographs the hero uses, so
 * the page opens on the faces and closes on them.
 */
const COLUMNS: [string, [string, string, boolean?][]][] = [
  ["The awards", [
    ["AFIA 2026", "/2026-awards"],
    ["Every award, explained", "/award-categories"],
    ["The nominees", "/nominees"],
    ["Winners archive", "/winners"],
  ]],
  ["Jury and process", [
    ["How winners are chosen", "/governance"],
    ["Who can be nominated", "/nominate"],
    ["Last year's winners", "/winners/2025-winners"],
    ["Press and media", "/press"],
  ]],
  ["African Food Network", [
    ["AFN", "https://afrifoodnetwork.com/", true],
    ["African recipes", "https://afrifoodnetwork.com/recipes/", true],
    ["Jollof, country by country", "https://afrifoodnetwork.com/food/dishes/jollof-rice/", true],
    ["Privacy policy", "https://afrifoodnetwork.com/privacy", true],
  ]],
];

/** The awards' own accounts, not African Food Network's (Kevin, 19 Nov 2026). */
const SOCIAL: [string, string, string][] = [
  ["Instagram", "https://instagram.com/afrifoodawards", "M7 3h10a4 4 0 014 4v10a4 4 0 01-4 4H7a4 4 0 01-4-4V7a4 4 0 014-4zm5 5a4 4 0 100 8 4 4 0 000-8zm5-1a1 1 0 100 2 1 1 0 000-2z"],
  ["TikTok", "https://tiktok.com/@afrifoodawards", "M14 3h3a4 4 0 004 4v3a7 7 0 01-4-1.3V15a5.5 5.5 0 11-5.5-5.5v3a2.5 2.5 0 102.5 2.5V3z"],
  ["X", "https://x.com/afrifoodawards", "M4 4h4l4.5 6L17 4h3l-6.2 8L21 20h-4l-5-6.5L6.5 20H3.5l6.7-8.5L4 4z"],
];

export default function Footer() {
  return (
    <footer className="dark relative overflow-hidden">
      <Ankara side="left" />
      <Ankara side="right" />

      <div className="container relative z-[2] grid grid-cols-2 gap-x-6 gap-y-11 pt-16 pb-10 md:gap-x-10 lg:grid-cols-4 lg:pt-20">
        <div className="col-span-2 lg:col-span-1">
          <Image
            src="/img/Awards-Logo-01.png"
            alt="AFIA African Food Influencers Awards"
            width={177} height={72}
            style={{ height: 60, width: "auto" }}
          />
          <p className="mt-5 max-w-[30ch] text-[14px] leading-relaxed text-white/70">
            Africa&apos;s recognition platform for excellence in food, culinary arts and food
            industry leadership. An African Food Network initiative.
          </p>
          <ul className="mt-7 flex gap-3">
            {SOCIAL.map(([n, h, d]) => (
              <li key={n}>
                <a href={h} target="_blank" rel="noreferrer" aria-label={n} className="social-dot">
                  <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor" aria-hidden><path d={d} /></svg>
                </a>
              </li>
            ))}
          </ul>
        </div>

        {COLUMNS.map(([head, links]) => (
          <nav key={head} aria-label={head}>
            <h2 className="foot-head">{head}</h2>
            <ul className="mt-5 space-y-3">
              {links.map(([label, href, ext]) => (
                <li key={label}>
                  {ext ? (
                    <a href={href} target="_blank" rel="noreferrer" className="foot-link">{label}</a>
                  ) : (
                    <Link href={href} className="foot-link">{label}</Link>
                  )}
                </li>
              ))}
            </ul>
          </nav>
        ))}
      </div>

      <div className="container relative z-[2] flex flex-wrap items-center justify-between gap-x-8 gap-y-3 pb-8 text-[13px] text-white/55">
        <a href={`mailto:${AFIA.email}`} className="foot-link">{AFIA.email}</a>
        <p>© 2026 African Food Network. AFIA is an African Food Network initiative.</p>
      </div>

      {/* the wordmark, filled with the nominee wall, bleeding off both edges */}
      <p className="foot-mark" aria-hidden>AFIA</p>
    </footer>
  );
}
