import Image from "next/image";
import type { Metadata } from "next";
import { PageHero } from "@/components/ui";
export const metadata: Metadata = { title: "About", description: "The African Food Influencers Awards is Africa's definitive recognition platform for excellence in food, culinary arts, and food industry leadership." };
export default function About() {
  return (
    <>
      <PageHero title="About the African Food Influencers Awards" />
      <section className="section"><div className="container grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
        <Image src="/img/About-AFIA.png" alt="AFIA ceremony" width={800} height={1000} className="img-frame self-start" />
        <div className="prose">
          <h2>What is AFIA?</h2><p>The African Food Influencers Awards — AFIA — is Africa’s definitive recognition platform for excellence in food, culinary arts, and food industry leadership. Established by African Food Network, AFIA exists to honour the individuals and brands making a genuine, measurable contribution to Africa’s food ecosystem.</p>
          <h3>Philosophy</h3><p>AFIA was built on a belief that recognition in the African food industry should be earned, not purchased. The awards operate on three principles:</p><ul><li><strong>Impact over popularity:</strong> the jury evaluates what a nominee has actually built, changed, or contributed, not how many followers they have.</li><li><strong>Independent jury:</strong> selection is made by an independent body of industry professionals with no conflict of interest and no editorial interference from the organiser.</li><li><strong>Zero pay-to-play:</strong> nomination is open and free. Winning cannot be bought.</li></ul>
          <h2>What AFIA Recognises</h2><p>AFIA covers the full breadth of Africa’s food ecosystem. Thirteen awards are presented annually across four tracks: Culinary Excellence, Media and Influence, Brands and Innovation, and Future and Legacy. Nominees may come from anywhere on the African continent or from the African diaspora.</p>
          <h2>Why It Matters</h2><p>Less than 15 percent of African foods have their recipes documented online. Africa’s food culture is among the richest and most diverse in the world, and it has been consistently underrepresented in global industry recognition. AFIA exists to correct that. Every edition builds a growing archive of the individuals and brands shaping Africa’s food narrative, locally and globally.</p>
          <h2>Founding Context</h2><p>AFIA was inaugurated in 2025 as an initiative of African Food Network; Africa’s pan-African food media, events, and ecosystem platform, founded in 2019 and recognised with two consecutive World Culinary Awards for Africa’s Best Culinary Festival in 2024 and 2025.</p>
          <h2>2026 Edition Note</h2><p>AFIA 2026 is convened by the African Food Network in partnership with CAPA — Culinary Art Practitioners Association of Nigeria — as National Host and Chef Network Partner for this edition.</p>
        </div>
      </div></section>
    </>
  );
}
