import type { Metadata } from "next";
import Link from "next/link";
import ContactCTA from "@/components/sections/ContactCTA";
import PortfolioGallery from "@/components/sections/PortfolioGallery";
import { portfolioPhotos } from "@/data/portfolioPhotos";

export const metadata: Metadata = {
  title: "Our Work | Lawson Builders",
  description:
    "Home design projects across Middle Tennessee by Lawson Builders — renovations, remodels, new builds, and outdoor spaces. Free consultation call.",
  openGraph: {
    title: "Our Work | Lawson Builders",
    description:
      "Home design projects across Middle Tennessee by Lawson Builders.",
    images: [{ url: "/images/lawson-family.png", width: 1200, height: 630, alt: "Lawson Builders portfolio" }],
  },
};

export default function PortfolioPage() {
  const hasPhotos = portfolioPhotos.length > 0;

  return (
    <>
      {/* Page header */}
      <section className="bg-warm-50 pt-[72px] border-b border-warm-200">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-10 py-16 sm:py-24">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-8">
            <div>
              <p className="text-warm-accent text-[10px] font-medium tracking-[0.3em] uppercase mb-5">
                Our Work
              </p>
              <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl font-semibold text-zinc-900 leading-[1.05]">
                The Portfolio
              </h1>
            </div>
            <Link
              href="/contact"
              className="shrink-0 text-xs font-semibold tracking-widest uppercase border border-zinc-300 text-zinc-800 px-6 py-3 hover:bg-zinc-900 hover:text-white hover:border-zinc-900 transition-colors duration-300"
            >
              Book a Free Call
            </Link>
          </div>
        </div>
      </section>

      {/* Canvas grid */}
      <section className="bg-warm-100 min-h-[60vh]">
        {hasPhotos ? (
          <PortfolioGallery photos={portfolioPhotos} />
        ) : (
          /* Empty state — shown until photos are added */
          <div className="max-w-screen-xl mx-auto px-6 lg:px-10 py-32 flex flex-col items-center text-center">
            <div className="w-16 h-16 border border-warm-300 flex items-center justify-center mb-8">
              <svg className="w-7 h-7 text-warm-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <h2 className="font-serif text-3xl font-semibold text-zinc-900 mb-4">
              Photos Coming Soon
            </h2>
            <p className="text-zinc-500 text-base leading-relaxed max-w-md mb-6">
              Drop your project photos into{" "}
              <code className="text-zinc-600 bg-warm-200 px-2 py-0.5 text-sm font-mono">
                /public/images/portfolio/
              </code>{" "}
              and add them to{" "}
              <code className="text-zinc-600 bg-warm-200 px-2 py-0.5 text-sm font-mono">
                portfolioPhotos.ts
              </code>{" "}
              to populate the gallery.
            </p>
            <Link
              href="/contact"
              className="text-xs font-semibold tracking-widest uppercase border border-zinc-300 text-zinc-700 px-8 py-4 hover:bg-zinc-900 hover:text-white hover:border-zinc-900 transition-colors duration-300"
            >
              Book a Free Call
            </Link>
          </div>
        )}
      </section>

      {/* Subtle bottom callout */}
      {hasPhotos && (
        <section className="bg-warm-50 border-t border-warm-200 py-16">
          <div className="max-w-screen-xl mx-auto px-6 lg:px-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div>
              <p className="text-zinc-500 text-sm leading-relaxed max-w-lg">
                Like what you see? Every project starts with a free call — no pressure, no
                commitment.
              </p>
            </div>
            <Link
              href="/contact"
              className="shrink-0 text-xs font-semibold tracking-widest uppercase bg-warm-accent text-white px-8 py-4 hover:bg-zinc-900 transition-colors duration-300"
            >
              Book a Free Call
            </Link>
          </div>
        </section>
      )}

      <ContactCTA />
    </>
  );
}
