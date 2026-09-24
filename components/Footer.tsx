import Link from "next/link";
import Image from "next/image";
const LINKS = [["About AFIA", "/about"], ["Winners Archive", "/winners"], ["Award Categories", "/award-categories"], ["Food Tour & Cultural Night", "https://festival.afrifoodnetwork.com/food-tour/"], ["Jury and Governance", "/governance"], ["Press and Media", "/press"], ["African Food Network", "https://afrifoodnetwork.com/"], ["Privacy Policy", "https://afrifoodnetwork.com/privacy"]];
const SOCIAL = [["Instagram", "https://instagram.com/afrifoodnet", "M7 3h10a4 4 0 014 4v10a4 4 0 01-4 4H7a4 4 0 01-4-4V7a4 4 0 014-4zm5 5a4 4 0 100 8 4 4 0 000-8zm5-1a1 1 0 100 2 1 1 0 000-2z"], ["Facebook", "https://facebook.com/africanfoodnetwork", "M14 8h2V5h-2c-2.2 0-3.5 1.3-3.5 3.5V10H8v3h2.5v7h3v-7H16l.5-3h-3V8.8c0-.5.2-.8.5-.8z"], ["X (Twitter)", "https://x.com/afrifoodnet", "M4 4h4l4.5 6L17 4h3l-6.2 8L21 20h-4l-5-6.5L6.5 20H3.5l6.7-8.5L4 4z"], ["TikTok", "https://tiktok.com/@afrifoodnet", "M14 3h3a4 4 0 004 4v3a7 7 0 01-4-1.3V15a5.5 5.5 0 11-5.5-5.5v3a2.5 2.5 0 102.5 2.5V3z"]];
export default function Footer() {
  return (
    <footer className="bg-white">
      <div className="container grid gap-10 py-16 md:grid-cols-[1.2fr_1fr_1fr]">
        <div><Image src="/img/Awards-Logo-02.png" alt="AFIA African Food Influencers Awards" width={177} height={72} style={{ height: 72, width: "auto" }} /><p className="mt-4 max-w-xs text-[14px]">Africa&apos;s definitive recognition platform for excellence in food, culinary arts, and food industry leadership.</p></div>
        <div><h2 className="mb-4 text-[18px] normal-case tracking-normal text-black">Useful Links</h2><ul className="list-gold space-y-2 text-[15px]">{LINKS.map(([l, h]) => <li key={l}><Link href={h} className="hover:text-[color:var(--afia-gold-600)] hover:underline">{l}</Link></li>)}</ul></div>
        <div><h2 className="mb-4 text-[18px] normal-case tracking-normal text-black">Connect</h2><ul className="space-y-2 text-[15px]">{SOCIAL.map(([n, h, d]) => <li key={n}><a href={h} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 hover:text-[color:var(--afia-gold-600)] hover:underline"><svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="text-[color:var(--afia-gold-600)]"><path d={d} /></svg>{n}</a></li>)}<li><a href="mailto:awards@afrifoodnetwork.com" className="inline-flex items-center gap-2 hover:underline"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="text-[color:var(--afia-gold-600)]"><rect x="3" y="5" width="18" height="14" rx="2" /><path d="M3 7l9 6 9-6" /></svg>awards@afrifoodnetwork.com</a></li></ul></div>
      </div>
      <div className="sheen bg-[color:var(--afia-gold-500)] py-4 text-center text-[13px] text-black">© 2026 African Food Network. All rights reserved. AFIA is an African Food Network initiative.</div>
    </footer>
  );
}
