import type { Metadata } from "next";
import { PageHero } from "@/components/ui";
export const metadata: Metadata = { title: "Jury and Governance" };
const JURY = [["Ruth Egbe", "Operations Manager, APC"], ["Ireoluwa Soetan", "Founder, A+ Agency"], ["Kachi Nwachukwu", "Programs Manager, APC"], ["Dr. Maryam Habib", "MBBS, MSC PH, CMC, FIMC, AMT"], ["Duchess Nena", "Vegan Chef and Plan-Based Nutritionist"]];
export default function Governance() {
  return (
    <>
      <PageHero title="Jury and Governance" sub="The African Food Influencers Awards is committed to a selection process that is independent, transparent, and free from commercial influence. The following framework governs how AFIA operates" />
      <section className="section"><div className="container prose max-w-3xl">
        <h3>Selection Framework</h3><p>Nominations are received from the public during an open nominations window. All eligible nominations are reviewed by an independent jury of food industry professionals. The jury evaluates nominees against defined criteria for each award category. Jury deliberations are confidential.</p>
        <h3>Jury Composition</h3><p>The AFIA jury is drawn from across the African food ecosystem, including culinary professionals, food media practitioners, food entrepreneurs, cultural leaders, and diaspora representatives. Jury members are selected on the basis of professional standing, sector expertise, and geographic representation. No single sector or country dominates the jury.</p><p>Jury members for each edition are announced following the shortlist announcement.</p>
        <h3>Independence and Conflict of Interest</h3><p>Jury members are required to declare any conflict of interest prior to deliberation. A juror with a declared conflict in a specific category will not vote in that category. Organisational staff do not vote. Commercial partners of the awards do not influence the selection process.</p><p>AFIA operates a zero pay-to-play policy. Nomination is free. Sponsorship does not confer any advantage in the selection process.</p>
        <h3>Eligibility</h3><p>Nominees must have made a demonstrable contribution to the African food ecosystem. Work may be based anywhere in the world. The impact must be demonstrably connected to African food culture, African food industries, or the African diaspora food community. Eligibility criteria per category are published on the 2026 Awards page.</p>
        <h3>Enquiries</h3><p>Governance enquiries may be directed to <a href="mailto:awards@afrifoodnetwork.com" className="text-[color:var(--afia-gold-600)] underline">awards@afrifoodnetwork.com</a>.</p>
      </div></section>
      <section className="dark section"><div className="container text-center"><h2 className="text-[length:var(--text-h2)]">Introducing the AFIA 2025 Jury</h2><div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">{JURY.map(([n, r]) => <div key={n} className="card-dark"><h3 className="text-[16px] text-white">{n}</h3><p className="mt-2 text-[13px] text-white/80">{r}</p></div>)}</div></div></section>
    </>
  );
}
