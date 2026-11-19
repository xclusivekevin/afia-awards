import { AFIA } from "@/lib/event";
import { TOTAL_NOMINEES, TOTAL_COUNTRIES } from "@/lib/nominees";

/**
 * Organization + WebSite + Event JSON-LD, on every page.
 *
 * Event schema is published because the date is both confirmed and already public:
 * Saturday 12 December 2026 went out in the nominee emails and the nominee announcement.
 * It stays out of the festival and awards sites whose dates are not announced.
 */
const SITE = AFIA.url;

export default function StructuredData() {
  const data = [
    {
      "@context": "https://schema.org", "@type": "Organization",
      name: "African Food Influencers Awards", alternateName: "AFIA", url: SITE,
      logo: `${SITE}/img/Awards-Logo-01.png`, email: AFIA.email,
      parentOrganization: { "@type": "Organization", name: "African Food Network", url: "https://afrifoodnetwork.com" },
      // the awards' own accounts, not African Food Network's (Kevin, 19 Nov 2026)
      sameAs: ["https://instagram.com/afrifoodawards", "https://tiktok.com/@afrifoodawards", "https://x.com/afrifoodawards"],
    },
    { "@context": "https://schema.org", "@type": "WebSite", name: "African Food Influencers Awards", url: SITE },
    {
      "@context": "https://schema.org", "@type": "Event",
      name: AFIA.name,
      alternateName: AFIA.short,
      description: `The second edition of the African Food Influencers Awards. ${TOTAL_NOMINEES} nominees from ${TOTAL_COUNTRIES} countries across ${AFIA.awards} awards, decided by an independent jury with no public vote. Streamed free online.`,
      startDate: AFIA.startISO,
      endDate: AFIA.endISO,
      eventStatus: "https://schema.org/EventScheduled",
      eventAttendanceMode: "https://schema.org/OnlineEventAttendanceMode",
      location: { "@type": "VirtualLocation", url: SITE },
      image: [`${SITE}/opengraph-image.png`],
      url: `${SITE}/2026-awards`,
      inLanguage: "en",
      isAccessibleForFree: true,
      offers: {
        "@type": "Offer", price: "0", priceCurrency: "NGN",
        availability: "https://schema.org/InStock",
        url: `${SITE}/2026-awards`,
        validFrom: "2026-11-12T00:00:00+01:00",
      },
      organizer: { "@type": "Organization", name: AFIA.organiser, url: AFIA.organiserUrl },
      superEvent: { "@type": "EventSeries", name: "African Food Influencers Awards", url: SITE },
    },
  ];
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}
