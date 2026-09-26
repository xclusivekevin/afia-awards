import type { NextConfig } from "next";
const nextConfig: NextConfig = {
  images: { formats: ["image/avif", "image/webp"] },
  // The www redirect and the noindex header used to live in middleware.ts,
  // which ran as a billed function on every request, before the cache
  // (PDOS 08 rule 19b, 26 Sep 2026). As config they run in Vercel's router.
  async headers() {
    return [{ source: "/:path*", missing: [{ type: "host", value: "awards.afrifoodnetwork.com" }], headers: [{ key: "X-Robots-Tag", value: "noindex, nofollow" }] }];
  },
  async redirects() {
    return [
      { source: "/:path*", has: [{ type: "host", value: "www.awards.afrifoodnetwork.com" }], destination: "https://awards.afrifoodnetwork.com/:path*", permanent: true },{ source: "/afia", destination: "/", permanent: true }, { source: "/press-and-media", destination: "/press", permanent: true }, { source: "/winners/2025-winners/", destination: "/winners/2025-winners", permanent: true }]; },
};
export default nextConfig;
