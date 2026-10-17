"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import type { PortfolioPhoto } from "@/data/portfolioPhotos";

export default function PortfolioGallery({ photos }: { photos: PortfolioPhoto[] }) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const close = useCallback(() => setActiveIndex(null), []);

  const prev = useCallback(() => {
    setActiveIndex((i) => (i === null ? null : (i - 1 + photos.length) % photos.length));
  }, [photos.length]);

  const next = useCallback(() => {
    setActiveIndex((i) => (i === null ? null : (i + 1) % photos.length));
  }, [photos.length]);

  useEffect(() => {
    if (activeIndex === null) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", handler);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", handler);
      document.body.style.overflow = "";
    };
  }, [activeIndex, close, prev, next]);

  const active = activeIndex !== null ? photos[activeIndex] : null;

  return (
    <>
      {/* Grid */}
      <div
        className="grid gap-[2px]"
        style={{
          gridTemplateColumns: "repeat(auto-fill, minmax(360px, 1fr))",
          gridAutoRows: "320px",
        }}
      >
        {photos.map((photo, i) => (
          <button
            key={photo.id}
            onClick={() => setActiveIndex(i)}
            className={`relative overflow-hidden group text-left ${
              photo.span === "tall" ? "row-span-2" : ""
            } ${photo.span === "wide" ? "col-span-2" : ""}`}
            aria-label={`View ${photo.title}`}
          >
            <Image
              src={photo.src}
              alt={photo.alt}
              fill
              unoptimized
              className="object-cover object-center transition-transform duration-700 group-hover:scale-[1.04]"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-zinc-800/85 via-zinc-800/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />

            <div className="absolute top-4 left-4">
              <span className="text-[9px] font-semibold tracking-[0.2em] uppercase text-white/80 border border-white/20 bg-zinc-700/40 backdrop-blur-sm px-3 py-1">
                {photo.category}
              </span>
            </div>

            <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-2 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
              <p className="font-serif text-xl font-semibold text-white leading-snug">
                {photo.title}
              </p>
              <p className="text-white/50 text-xs mt-1 tracking-wide">{photo.location}</p>
            </div>
          </button>
        ))}
      </div>

      {/* Modal */}
      {active && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-zinc-900/95 backdrop-blur-sm"
          onClick={close}
        >
          {/* Close */}
          <button
            onClick={close}
            className="absolute top-5 right-5 w-10 h-10 flex items-center justify-center text-white/60 hover:text-white border border-white/20 hover:border-white/50 transition-colors z-10"
            aria-label="Close"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Counter */}
          <div className="absolute top-5 left-1/2 -translate-x-1/2 text-[10px] font-semibold tracking-[0.2em] uppercase text-white/40">
            {(activeIndex ?? 0) + 1} / {photos.length}
          </div>

          {/* Prev */}
          <button
            onClick={(e) => { e.stopPropagation(); prev(); }}
            className="absolute left-4 sm:left-6 w-10 h-10 flex items-center justify-center text-white/60 hover:text-white border border-white/20 hover:border-white/50 transition-colors z-10"
            aria-label="Previous photo"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Image */}
          <div
            className="relative w-full h-full max-w-6xl max-h-[85vh] mx-16 sm:mx-24"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              key={active.id}
              src={active.src}
              alt={active.alt}
              fill
              unoptimized
              className="object-contain"
              sizes="(max-width: 768px) 100vw, 90vw"
              priority
            />

            {/* Caption */}
            <div className="absolute bottom-0 left-0 right-0 pb-4 text-center">
              <p className="font-serif text-base font-semibold text-white">{active.title}</p>
              <p className="text-white/40 text-xs mt-0.5 tracking-wide">{active.location} · {active.category}</p>
            </div>
          </div>

          {/* Next */}
          <button
            onClick={(e) => { e.stopPropagation(); next(); }}
            className="absolute right-4 sm:right-6 w-10 h-10 flex items-center justify-center text-white/60 hover:text-white border border-white/20 hover:border-white/50 transition-colors z-10"
            aria-label="Next photo"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      )}
    </>
  );
}
