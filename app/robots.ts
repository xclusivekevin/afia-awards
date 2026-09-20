import type { MetadataRoute } from "next";
export default function robots(): MetadataRoute.Robots {
  return { rules: [{ userAgent: "*", allow: "/", disallow: ["/api/", "/admin"] }], sitemap: "https://awards.afrifoodnetwork.com/sitemap.xml", host: "https://awards.afrifoodnetwork.com" };
}
