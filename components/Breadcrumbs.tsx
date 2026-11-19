import { AFIA } from "@/lib/event";

/**
 * BreadcrumbList JSON-LD. Google shows the trail in place of the raw URL in a result,
 * which is one of the cheapest wins left on a site this size. Emitted as data only;
 * the visible navigation is the header.
 */
export default function Breadcrumbs({ trail }: { trail: [string, string][] }) {
  const data = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [["Home", "/"], ...trail].map(([name, path], i) => ({
      "@type": "ListItem",
      position: i + 1,
      name,
      item: `${AFIA.url}${path === "/" ? "" : path}`,
    })),
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}
