import Image from "next/image";
import type { Metadata } from "next";
import { PageHero, Btn } from "@/components/ui";
import Form from "@/components/Form";
export const metadata: Metadata = { title: "Partners", description: "AFIA 2026 partners and partnership opportunities." };
const TIERS = [["PIP-Partner-Tier.png", "Principal Institutional Partner", "The highest level of partnership. One Principal Institutional Partner per edition. Prominent naming rights, opening ceremony association, full brand integration across event and digital assets, and dedicated fireside conversation slot at the awards ceremony."], ["CSP-Partner-Tier.png", "Category Support Partner", "Exclusive association with one of AFIA's 13 award categories. Category is named in partnership with the brand. Brand integration across the category's nominations, shortlist announcement, and ceremony presentation."], ["SP-Partner-Tier.png", "Supporting Partner", "Brand presence across AFIA 2026 digital assets and the ceremony, with acknowledgement in shortlist and winner communications."]];
export default function Partners() {
  return (
    <>
      <PageHero title="Partners and Sponsors" />
      <section id="current-partners" className="section"><div className="container">
        <h2 className="text-center text-[length:var(--text-h2)]">AFIA 2026 Partners</h2>
        <div className="card-light mx-auto mt-10 grid max-w-4xl items-center gap-8 p-8 md:grid-cols-[260px_1fr] md:p-10"><Image src="/img/CAPA.jpeg" alt="CAPA" width={260} height={130} className="mx-auto w-[220px] md:w-[260px]" /><div><h3 className="text-[18px] normal-case tracking-normal text-black">National Host and Chef Network Partner — AFIA 2026</h3><p className="mt-3 text-[14px]">CAPA is the leading professional body for culinary arts practitioners in Nigeria. As National Host and Chef Network Partner for AFIA 2026, CAPA brings the weight of Nigeria&apos;s professional culinary community to the awards and serves as the primary interface with the country&apos;s chef and culinary practitioner network.</p><div className="mt-5"><Btn href="https://capanigeria.org/" variant="outline-light">About CAPA</Btn></div></div></div>
      </div></section>
      <section id="partnership-opportunities" className="dark section"><div className="container">
        <div className="grid items-center gap-12 lg:grid-cols-2"><div><h2 className="text-[length:var(--text-h1)]">Partner with AFIA</h2><p className="mt-5 text-white/85">AFIA offers partnership opportunities to brands, institutions, and organisations aligned with advancing Africa’s food industry. Partners are positioned not as sponsors alone, but as contributors to the recognition and elevation of African food culture.</p><p className="mt-4 text-white/85">AFIA reaches a demonstrated audience across Nigeria, Ghana, the United Kingdom, and the United States — drawn from African Food Network’s 100,000+ email subscribers and the broader AFN community. Partners gain visibility with an audience of food professionals, cultural influencers, and African diaspora communities.</p></div><Image src="/img/AFIA-Partners.png" alt="AFIA partners" width={800} height={600} className="img-frame" /></div>
        <h2 className="mt-16 text-center text-[length:var(--text-h2)]">Partnership Tiers</h2>
        <div className="mt-10 grid gap-6 md:grid-cols-3">{TIERS.map(([img, t, d]) => <div key={t} className="card-dark"><Image src={`/img/${img}`} alt="" width={400} height={300} className="w-full rounded-lg" /><h3 className="mt-5 text-[18px] text-white">{t}</h3><p className="mt-3 text-[14px] text-white/85">{d}</p><p className="mt-3 text-[13px] text-[color:var(--afia-gold-500)]">Investment range: available on request</p></div>)}</div>
      </div></section>
      <section className="section"><div className="container"><div className="card-light mx-auto max-w-2xl p-8">
        <h2 className="text-[24px]">Partnership Enquiry</h2>
        <Form name="Partnership enquiry" submit="Submit Partnership Enquiry" thanks="Thank you. Qualified enquiries receive a response within five working days." className="mt-5 grid gap-4">
          <label className="label">Organisation name *<input className="input" name="organisation" required /></label><label className="label">Contact Name & Title *<input className="input" name="contact" required /></label><label className="label">Email address *<input className="input" name="email" type="email" required /></label>
          <label className="label">Nature of interest *<select className="input" name="tier" required defaultValue=""><option value="" disabled>Select Tier</option><option>Principal Institutional Partner</option><option>Category Support Partner</option><option>Supporting Partner</option><option>Other</option></select></label>
          <label className="label">Nature & alignment<textarea className="input min-h-[120px]" name="alignment" maxLength={1200} placeholder="Brief note on alignment (150 words)" /></label>
        </Form>
        <p className="mt-4 text-[13px]">All enquiries are reviewed by the AFIA partnerships team. Qualified enquiries receive a response within five working days.</p>
      </div></div></section>
    </>
  );
}
