import type { MetadataRoute } from "next";
export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    { url: "https://awards.afrifoodnetwork.com", lastModified: now, changeFrequency: "monthly", priority: 1 },
    { url: "https://awards.afrifoodnetwork.com/about", lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: "https://awards.afrifoodnetwork.com/2026-awards", lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: "https://awards.afrifoodnetwork.com/award-categories", lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: "https://awards.afrifoodnetwork.com/nominate", lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: "https://awards.afrifoodnetwork.com/2025-nominees", lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: "https://awards.afrifoodnetwork.com/winners", lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: "https://awards.afrifoodnetwork.com/winners/2025-winners", lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: "https://awards.afrifoodnetwork.com/governance", lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: "https://awards.afrifoodnetwork.com/partners", lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: "https://awards.afrifoodnetwork.com/press", lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: "https://awards.afrifoodnetwork.com/contact", lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: "https://awards.afrifoodnetwork.com/afia", lastModified: now, changeFrequency: "monthly", priority: 0.7 },
  ];
}
