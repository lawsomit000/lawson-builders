import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden">
      {/* Background photo */}
      <Image
        src="/images/hero-bg.jpg"
        alt="Warm living room with stone fireplace and wood beams — Lawson Builders home design"
        fill
        priority
        className="object-cover object-center"
        sizes="100vw"
      />

      {/* Gradient overlay */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to bottom, rgba(8,8,6,0.62) 0%, rgba(8,8,6,0.52) 35%, rgba(8,8,6,0.82) 100%)",
        }}
        aria-hidden="true"
      />

      {/* Content */}
      <div className="relative max-w-screen-xl mx-auto px-6 lg:px-10 pt-24 pb-16 w-full">
        <div className="max-w-4xl">
          <p className="text-warm-accent text-[10px] font-medium tracking-[0.3em] uppercase mb-8">
            Home Design &amp; Planning · Middle Tennessee
          </p>

          <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl xl:text-[80px] font-semibold text-white leading-[1.06] mb-8">
            Designed With You.
            <br />
            {/* TODO: Confirm second line — "Ready to Build." or keep "Built to Last." */}
            <em className="italic font-normal text-warm-accent">Ready to Build.</em>
          </h1>

          <p className="text-white/70 text-lg sm:text-xl leading-relaxed max-w-xl mb-12">
            We help you turn inspiration into a finished design, a detailed plan, and a
            budget that fits — so you can hire a builder with confidence. Your first
            call is free.
          </p>

          <div className="flex flex-wrap items-center gap-6">
            <Link
              href="/contact"
              className="inline-flex items-center text-xs font-semibold tracking-widest uppercase bg-white text-zinc-950 px-8 py-4 hover:bg-warm-accent hover:text-white transition-colors duration-300"
            >
              Book a Free Call
            </Link>
            <Link
              href="#how-it-works"
              className="inline-flex items-center gap-2 text-sm font-medium text-white/70 hover:text-white transition-colors group"
            >
              See How It Works
              <svg
                className="w-4 h-4 group-hover:translate-x-0.5 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 right-10 hidden lg:flex flex-col items-center gap-3">
        <div className="w-px h-14 bg-white/30" aria-hidden="true" />
        <p className="text-white/40 text-[9px] tracking-[0.2em] uppercase [writing-mode:vertical-rl]">
          Scroll
        </p>
      </div>
    </section>
  );
}
