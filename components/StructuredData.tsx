/** Organization + WebSite JSON-LD. Event schema waits for the confirmed November 2026 ceremony date. */
const SITE = "https://awards.afrifoodnetwork.com";
export default function StructuredData() {
  const data = [
    { "@context": "https://schema.org", "@type": "Organization", name: "African Food Influencers Awards", alternateName: "AFIA", url: SITE,
      logo: `${SITE}/img/Awards-Logo-01.png`, email: "awards@afrifoodnetwork.com",
      parentOrganization: { "@type": "Organization", name: "African Food Network", url: "https://afrifoodnetwork.com" },
      sameAs: ["https://instagram.com/afrifoodnet", "https://facebook.com/africanfoodnetwork", "https://x.com/afrifoodnet", "https://tiktok.com/@afrifoodnet"] },
    { "@context": "https://schema.org", "@type": "WebSite", name: "African Food Influencers Awards", url: SITE },
  ];
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}
