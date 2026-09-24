import type { Metadata } from "next";
import { Btn } from "@/components/ui";
export const metadata: Metadata = { title: "Page not found", robots: { index: false } };
export default function NotFound() {
  return (
    <section className="dark flex min-h-[70vh] items-center pt-[88px]" style={{ backgroundImage: "linear-gradient(180deg, rgba(0,0,0,0.3), rgba(0,0,0,0.78)), url(/img/Active-Hero-2026.png)", backgroundSize: "cover", backgroundPosition: "center" }}>
      <div className="container py-20 text-center">
        <p className="display text-[13px] text-[color:var(--afia-gold-500)]">Error 404</p>
        <h1 className="mx-auto mt-4 max-w-3xl text-[length:var(--text-h1)]">This page is not on the shortlist</h1>
        <p className="mx-auto mt-4 max-w-xl text-white/85">The page you were looking for is not here. It may have belonged to the previous site.</p>
        <div className="mt-8 flex flex-wrap justify-center gap-5">
          <Btn href="/">Back to AFIA</Btn>
          <Btn href="/award-categories" variant="outline">Award Categories</Btn>
        </div>
      </div>
    </section>
  );
}
