import Link from "next/link";
import Image from "next/image";
import { portfolioPhotos } from "@/data/portfolioPhotos";

export default function PortfolioPreview() {
  // Show up to 4 photos; if none added yet, show a soft placeholder prompt
  const preview = portfolioPhotos.slice(0, 4);
  const hasPhotos = preview.length > 0;

  return (
    <section className="bg-zinc-950 py-24 sm:py-32">
      <div className="max-w-screen-xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-8 mb-10">
          <div>
            <p className="text-warm-accent text-[10px] font-medium tracking-[0.28em] uppercase mb-5">
              Our Work
            </p>
            <h2 className="font-serif text-4xl sm:text-5xl font-semibold text-white leading-tight">
              Projects We&apos;re
              <br />
              <em className="italic font-normal">Proud Of</em>
            </h2>
          </div>
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-2 text-sm font-semibold text-zinc-400 hover:text-white transition-colors group shrink-0"
          >
            Full Portfolio
            <svg className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>

        {hasPhotos ? (
          <>
            {/* Canvas preview grid — 2px gap, dark canvas feel */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-[2px]">
              {preview.map((photo, i) => (
                <Link
                  key={photo.id}
                  href="/portfolio"
                  className={`relative overflow-hidden group block ${
                    i === 0 ? "col-span-2 h-[420px]" : "h-[200px]"
                  }`}
                >
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    unoptimized
                    className="object-cover object-center transition-transform duration-700 group-hover:scale-[1.04]"
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-zinc-950/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute top-3 left-3">
                    <span className="text-[9px] font-semibold tracking-[0.2em] uppercase text-white/60 border border-white/15 bg-black/30 backdrop-blur-sm px-2.5 py-1">
                      {photo.category}
                    </span>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-1 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <p className="font-serif text-base font-semibold text-white leading-snug">
                      {photo.title}
                    </p>
                    <p className="text-white/50 text-xs mt-0.5">{photo.location}</p>
                  </div>
                </Link>
              ))}
            </div>

            <div className="mt-8 text-center">
              <Link
                href="/portfolio"
                className="inline-flex items-center text-xs font-semibold tracking-widest uppercase border border-white/20 text-white/70 px-8 py-4 hover:bg-white hover:text-zinc-950 hover:border-white transition-colors duration-300"
              >
                View All Projects
              </Link>
            </div>
          </>
        ) : (
          /* Placeholder until photos are added */
          <div className="border border-zinc-800 p-16 text-center">
            <p className="text-zinc-600 text-sm mb-6">
              Add photos to{" "}
              <code className="text-zinc-500 bg-zinc-900 px-2 py-0.5 font-mono">
                portfolioPhotos.ts
              </code>{" "}
              to populate this section.
            </p>
            <Link
              href="/portfolio"
              className="inline-flex items-center text-xs font-semibold tracking-widest uppercase border border-zinc-700 text-zinc-400 px-8 py-4 hover:border-white hover:text-white transition-colors duration-300"
            >
              Go to Portfolio
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
