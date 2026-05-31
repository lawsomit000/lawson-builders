"use client";

import { useRef, useCallback, useEffect } from "react";
import Image from "next/image";

interface Photo {
  src: string;
  alt: string;
  position?: string;
}

const INITIAL = 75;

export default function BeforeAfterSlider({
  before,
  after,
}: {
  before: Photo;
  after: Photo;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const beforeLayerRef = useRef<HTMLDivElement>(null);
  const dividerRef = useRef<HTMLDivElement>(null);
  const handleRef = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    const x = container.getBoundingClientRect().width * (INITIAL / 100);
    if (dividerRef.current) dividerRef.current.style.transform = `translateX(${x}px) translateX(-50%)`;
    if (handleRef.current) handleRef.current.style.transform = `translate(${x}px, -50%)`;
  }, []);

  const applyPosition = useCallback((clientX: number) => {
    const container = containerRef.current;
    if (!container) return;
    const rect = container.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    const pct = (x / rect.width) * 100;

    if (beforeLayerRef.current) {
      beforeLayerRef.current.style.clipPath = `inset(0 ${(100 - pct).toFixed(2)}% 0 0)`;
    }
    if (dividerRef.current) {
      dividerRef.current.style.transform = `translateX(${x.toFixed(1)}px) translateX(-50%)`;
    }
    if (handleRef.current) {
      handleRef.current.style.transform = `translate(${x.toFixed(1)}px, -50%)`;
    }
  }, []);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 select-none cursor-col-resize overflow-hidden touch-none"
      onPointerDown={(e) => {
        dragging.current = true;
        e.currentTarget.setPointerCapture(e.pointerId);
        applyPosition(e.clientX);
      }}
      onPointerMove={(e) => {
        if (dragging.current) applyPosition(e.clientX);
      }}
      onPointerUp={() => { dragging.current = false; }}
      onPointerCancel={() => { dragging.current = false; }}
    >
      {/* After image — full width, bottom layer */}
      <div className="absolute inset-0">
        <Image
          src={after.src}
          alt={after.alt}
          fill
          priority
          className="object-cover"
          style={{ objectPosition: after.position ?? "center" }}
          sizes="100vw"
        />
      </div>

      {/* Before layer — clipPath clips this entire layer */}
      <div
        ref={beforeLayerRef}
        className="absolute inset-0"
        style={{
          clipPath: `inset(0 ${100 - INITIAL}% 0 0)`,
          willChange: "clip-path",
        }}
      >
        <div
          className="absolute inset-0"
          style={{ filter: "grayscale(80%) brightness(0.7) saturate(0.4)" }}
        >
          <Image
            src={before.src}
            alt={before.alt}
            fill
            priority
            className="object-cover"
            style={{ objectPosition: before.position ?? "center" }}
            sizes="100vw"
          />
        </div>
      </div>

      {/* Divider */}
      <div
        ref={dividerRef}
        className="absolute top-0 bottom-0 left-0 w-px bg-white shadow-[0_0_10px_rgba(0,0,0,0.6)] pointer-events-none"
        style={{ willChange: "transform" }}
      />

      {/* Handle */}
      <div
        ref={handleRef}
        className="absolute top-1/2 left-0 flex items-center justify-center gap-0.5 w-11 h-11 rounded-full bg-white shadow-[0_2px_16px_rgba(0,0,0,0.35)] pointer-events-none z-10"
        style={{ willChange: "transform" }}
      >
        <svg className="w-3 h-3 text-zinc-700" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
        </svg>
        <svg className="w-3 h-3 text-zinc-700" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </div>

      {/* Labels */}
      <span className="absolute top-4 left-4 text-[9px] font-semibold tracking-[0.2em] uppercase text-white/80 border border-white/20 bg-black/40 backdrop-blur-sm px-3 py-1.5 pointer-events-none z-10">
        Before
      </span>
      <span className="absolute top-4 right-4 text-[9px] font-semibold tracking-[0.2em] uppercase text-white/80 border border-white/20 bg-black/40 backdrop-blur-sm px-3 py-1.5 pointer-events-none z-10">
        After
      </span>
    </div>
  );
}
