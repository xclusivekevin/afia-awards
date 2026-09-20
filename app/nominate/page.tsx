import Image from "next/image";
import type { Metadata } from "next";
import { PageHero } from "@/components/ui";
import Form from "@/components/Form";
export const metadata: Metadata = { title: "Nominate", description: "Nominate an individual or brand for the African Food Influencers Awards 2026." };
const CATS = ["Chef of the Year", "Restaurateur of the Year", "Food Media Personality of the Year", "Best Food Content Creator", "Food Brand of the Year", "Food Entrepreneur of the Year", "Culinary Heritage Champion", "Emerging Talent of the Year"];
export default function Nominate() {
  return (
    <>
      <PageHero title="Nominate for AFIA 2026" image="/img/Active-2026-Hero.png" />
      <section className="section"><div className="container grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
        <div><Image src="/img/Nominate.png" alt="AFIA nominations" width={800} height={600} className="img-frame" /><div className="prose mt-8"><p>The African Food Influencers Awards is Africa’s definitive recognition platform for excellence in food, culinary arts, and food industry leadership.</p><p>Organised annually, AFIA honours the individuals and brands making a measurable, lasting contribution to Africa’s food ecosystem — across culinary arts, entrepreneurship, media storytelling, and cultural preservation.</p><p>The awards are built on three principles that do not change: impact over popularity, independent jury, and zero pay-to-play.</p><h3>Important Notes Before Submitting</h3><ul><li>Nominations are free and open to anyone.</li><li>You may nominate individuals or brands.</li><li>Self-nomination is permitted.</li><li>All submissions are treated confidentially.</li><li>Submission does not guarantee shortlisting. The jury selects from all eligible nominations.</li><li>Nominations close [date TBC].</li></ul></div></div>
        <div className="card-light p-8"><Form name="AFIA 2026 nomination" submit="Submit Nomination" thanks="Thank you. Your nomination has been received and will be reviewed by the jury.">
          <h2 className="text-[18px] text-[color:var(--afia-gold-600)]">About the Nominee</h2>
          <div className="mt-4 grid gap-4"><label className="label">Full name of nominee (or brand name) *<input className="input" name="nominee" required /></label><label className="label">Award category *<select className="input" name="category" required defaultValue=""><option value="" disabled>--- Select Choice ---</option>{CATS.map((c) => <option key={c}>{c}</option>)}</select></label><label className="label">Country of work or origin *<input className="input" name="country" required /></label><label className="label">Website or social media profile<input className="input" name="profile" /></label></div>
          <h2 className="mt-8 text-[18px] text-[color:var(--afia-gold-600)]">Why You Are Nominating Them?</h2>
          <label className="label mt-4">Tell us why this person or brand deserves recognition. What have they built, changed, or contributed? Be specific. *<textarea className="input min-h-[160px]" name="reason" required maxLength={2400} /><span className="text-[12px] font-normal text-[color:var(--afia-grey-600)]">300 words maximum</span></label>
          <h2 className="mt-8 text-[18px] text-[color:var(--afia-gold-600)]">Your Details</h2>
          <div className="mt-4 grid gap-4"><label className="label">Your name *<input className="input" name="your_name" required /></label><label className="label">Your email address *<input className="input" name="email" type="email" required /></label><label className="label">Your relationship to the nominee<input className="input" name="relationship" /></label><label className="flex items-start gap-3 text-[13px]"><input type="checkbox" name="confirmation" value="yes" required className="mt-1" />I confirm the information provided is accurate to the best of my knowledge. *</label></div>
        </Form></div>
      </div></section>
    </>
  );
}
