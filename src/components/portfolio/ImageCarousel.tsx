"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import type { ProjectImage } from "@/data/projects";
import BeforeAfterSlider from "./BeforeAfterSlider";

interface ImageCarouselProps {
  images: ProjectImage[];
  title: string;
}

function SlideContent({
  image,
  visible,
}: {
  image: ProjectImage;
  visible: boolean;
}) {
  return (
    <div
      className={`absolute inset-0 transition-opacity duration-400 ${
        visible ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      {image.kind === "photo" ? (
        <Image
          src={image.src}
          alt={image.alt}
          fill
          priority
          className="object-cover"
          style={{ objectPosition: image.position ?? "center" }}
          sizes="100vw"
        />
      ) : image.kind === "before-after" ? (
        <BeforeAfterSlider before={image.before} after={image.after} />
      ) : (
        <div className={`absolute inset-0 bg-gradient-to-br ${image.gradient}`} />
      )}
    </div>
  );
}

export default function ImageCarousel({ images, title }: ImageCarouselProps) {
  const [current, setCurrent] = useState(0);

  const prev = useCallback(
    () => setCurrent((c) => (c === 0 ? images.length - 1 : c - 1)),
    [images.length]
  );
  const next = useCallback(
    () => setCurrent((c) => (c === images.length - 1 ? 0 : c + 1)),
    [images.length]
  );

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [prev, next]);

  return (
    <div className="flex flex-col">
      {/* Main image stage */}
      <div className="relative h-[55vh] sm:h-[65vh] lg:h-[78vh] bg-zinc-900 overflow-hidden">
        {/* Slides — render all, only current is visible */}
        {images.map((img, i) => (
          <SlideContent key={i} image={img} visible={i === current} />
        ))}

        {/* Dark vignette at bottom */}
        <div
          className="absolute inset-x-0 bottom-0 h-32 pointer-events-none"
          style={{ background: "linear-gradient(to top, rgba(0,0,0,0.5), transparent)" }}
          aria-hidden="true"
        />

        {/* Counter */}
        <div className="absolute top-5 right-5 bg-black/40 text-white text-xs font-medium tracking-widest px-3 py-1.5 backdrop-blur-sm">
          {current + 1} / {images.length}
        </div>

        {/* Prev / Next arrows */}
        {images.length > 1 && (
          <>
            <button
              onClick={prev}
              aria-label="Previous image"
              className="absolute left-4 top-1/2 -translate-y-1/2 w-11 h-11 bg-black/30 hover:bg-black/60 backdrop-blur-sm text-white flex items-center justify-center transition-colors duration-200 group"
            >
              <svg className="w-5 h-5 group-hover:-translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={next}
              aria-label="Next image"
              className="absolute right-4 top-1/2 -translate-y-1/2 w-11 h-11 bg-black/30 hover:bg-black/60 backdrop-blur-sm text-white flex items-center justify-center transition-colors duration-200 group"
            >
              <svg className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </>
        )}

        {/* Slide label — bottom left (hidden for before-after, it has its own labels) */}
        {images[current].kind !== "before-after" && (
          <div className="absolute bottom-5 left-6 text-white/60 text-xs tracking-wide">
            {images[current].kind === "photo"
              ? images[current].alt
              : images[current].label}
          </div>
        )}
      </div>

      {/* Thumbnail strip */}
      {images.length > 1 && (
        <div className="bg-zinc-950 px-4 py-3 flex gap-2 overflow-x-auto scrollbar-none">
          {images.map((img, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              aria-label={`Go to image ${i + 1}`}
              className={`relative shrink-0 w-20 h-14 overflow-hidden transition-all duration-200 ${
                i === current
                  ? "ring-2 ring-warm-accent ring-offset-1 ring-offset-zinc-950 opacity-100"
                  : "opacity-40 hover:opacity-70"
              }`}
            >
              {img.kind === "photo" ? (
                <Image
                  src={img.src}
                  alt={`Thumbnail ${i + 1}`}
                  fill
                  className="object-cover"
                  style={{ objectPosition: img.position ?? "center" }}
                  sizes="80px"
                />
              ) : img.kind === "before-after" ? (
                <>
                  {/* Split thumbnail: before (left half, grayscale) | after (right half) */}
                  <div className="absolute inset-0 overflow-hidden" style={{ clipPath: "inset(0 50% 0 0)" }}>
                    <Image
                      src={img.before.src}
                      alt="Before"
                      fill
                      className="object-cover"
                      style={{ objectPosition: img.before.position ?? "center", filter: "grayscale(80%) brightness(0.7)" }}
                      sizes="40px"
                    />
                  </div>
                  <div className="absolute inset-0 overflow-hidden" style={{ clipPath: "inset(0 0 0 50%)" }}>
                    <Image
                      src={img.after.src}
                      alt="After"
                      fill
                      className="object-cover"
                      style={{ objectPosition: img.after.position ?? "center" }}
                      sizes="40px"
                    />
                  </div>
                  <div className="absolute inset-x-1/2 top-0 bottom-0 w-px bg-white/60" />
                </>
              ) : (
                <div className={`absolute inset-0 bg-gradient-to-br ${img.gradient}`} />
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
