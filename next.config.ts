import type { NextConfig } from "next";
const nextConfig: NextConfig = {
  images: { formats: ["image/avif", "image/webp"] },
  async redirects() { return [{ source: "/afia", destination: "/", permanent: true }, { source: "/press-and-media", destination: "/press", permanent: true }, { source: "/winners/2025-winners/", destination: "/winners/2025-winners", permanent: true }]; },
};
export default nextConfig;
