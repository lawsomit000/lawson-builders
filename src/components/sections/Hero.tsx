import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-end overflow-hidden">
      {/* Background photo */}
      <Image
        src="/images/interior-arches.jpg"
        alt="Luxury interior with arched doorways and spa bathroom"
        fill
        priority
        className="object-cover object-center"
        sizes="100vw"
      />

      {/* Dark overlay — same technique as Trace (photo at ~30% with dark tint on top) */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to bottom, rgba(8,8,6,0.55) 0%, rgba(8,8,6,0.45) 40%, rgba(8,8,6,0.75) 100%)",
        }}
        aria-hidden="true"
      />

      {/* Content — anchored to lower portion */}
      <div className="relative max-w-screen-xl mx-auto px-6 lg:px-10 pb-20 sm:pb-28 pt-40 w-full">
        <div className="max-w-4xl">
          <p className="text-warm-accent text-[10px] font-medium tracking-[0.3em] uppercase mb-8">
            Licensed &amp; Insured General Contractor · Texas
          </p>

          <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl xl:text-[80px] font-semibold text-white leading-[1.06] mb-8">
            Quality Contracting
            <br />
            for Homes{" "}
            <em className="italic font-normal text-warm-accent">Built to Last.</em>
          </h1>

          <p className="text-white/70 text-lg sm:text-xl leading-relaxed max-w-xl mb-12">
            Dependable craftsmanship, clear communication, and quality work across
            remodels, decks, patios, barndominiums, and more.
          </p>

          <div className="flex flex-wrap items-center gap-6">
            <Link
              href="/contact"
              className="inline-flex items-center text-xs font-semibold tracking-widest uppercase bg-white text-zinc-950 px-8 py-4 hover:bg-warm-accent hover:text-white transition-colors duration-300"
            >
              Request a Free Estimate
            </Link>
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-2 text-sm font-medium text-white/70 hover:text-white transition-colors group"
            >
              View Our Work
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

        {/* Stats row */}
        <div className="mt-20 pt-10 border-t border-white/15 grid grid-cols-3 gap-8 max-w-sm">
          {[
            { value: "10+", label: "Years Experience" },
            { value: "200+", label: "Projects Complete" },
            { value: "100%", label: "Owner-Operated" },
          ].map((stat) => (
            <div key={stat.label}>
              <p className="font-serif text-2xl sm:text-3xl font-semibold text-white">
                {stat.value}
              </p>
              <p className="text-white/50 text-xs mt-1.5 tracking-wide">{stat.label}</p>
            </div>
          ))}
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
