import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const roboto = Roboto({ subsets: ["latin"], weight: ["400", "500"], variable: "--font-roboto", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL("https://awards.afrifoodnetwork.com"),
  title: { default: "African Food Influencers Awards (AFIA) | Celebrating African Culinary Excellence", template: "%s - African Food Influencers Awards" },
  description: "The African Food Influencers Awards recognises the individuals and brands shaping Africa's culinary identity, on the continent and across the world.",
  icons: { icon: "/img/Awards-Favicon.png" },
  openGraph: { siteName: "African Food Influencers Awards", images: ["/img/Active-Hero-2026.png"] },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={roboto.variable}>
      <body style={{ ["--font-body" as string]: "var(--font-roboto)" }}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
