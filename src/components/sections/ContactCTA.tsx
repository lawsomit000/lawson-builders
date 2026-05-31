import Link from "next/link";

export default function ContactCTA() {
  return (
    <section className="bg-zinc-950 py-24 sm:py-32 relative overflow-hidden">
      {/* Subtle warm glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full opacity-[0.05]"
        style={{ background: "radial-gradient(circle, #c4a882, transparent)" }}
        aria-hidden="true"
      />

      <div className="relative max-w-screen-xl mx-auto px-6 lg:px-10 text-center">
        <p className="text-warm-accent text-[10px] font-medium tracking-[0.3em] uppercase mb-8">
          Let&apos;s Work Together
        </p>
        <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-semibold text-white leading-[1.1] mb-8 max-w-3xl mx-auto">
          Let&apos;s Talk Through{" "}
          <em className="italic font-normal">Your Project</em>
        </h2>
        <p className="text-zinc-400 text-lg leading-relaxed max-w-xl mx-auto mb-12">
          Whether you have detailed plans or just an idea, we&apos;d love to hear about
          your project. Free estimates, straight answers — no pressure.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-5">
          <Link
            href="/contact"
            className="inline-flex items-center text-xs font-semibold tracking-widest uppercase bg-white text-zinc-950 px-10 py-4 hover:bg-warm-accent hover:text-white transition-colors duration-300"
          >
            Request a Free Estimate
          </Link>
          <a
            href="tel:+17739578493"
            className="inline-flex items-center gap-2.5 text-sm font-medium text-zinc-400 hover:text-white transition-colors"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            (773) 957-8493
          </a>
        </div>
      </div>
    </section>
  );
}
