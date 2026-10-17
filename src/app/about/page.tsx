import type { Metadata } from "next";
import Image from "next/image";
import ContactCTA from "@/components/sections/ContactCTA";

export const metadata: Metadata = {
  title: "About the Lawsons | Lawson Builders",
  description:
    "Madi and Mitch Lawson are Middle Tennessee's home design and planning team. Navy veteran, middle school sweethearts, parents of two, and passionate about home design. Free consultation call.",
  openGraph: {
    title: "About the Lawsons | Lawson Builders",
    description:
      "Meet Madi and Mitch Lawson — home design and planning specialists serving Middle Tennessee, built on family, creativity, and a genuine passion for beautiful homes.",
    images: [{ url: "/images/lawson-family.png", width: 1200, height: 630, alt: "Madi and Mitch Lawson with their two boys — Lawson Builders" }],
  },
  twitter: {
    images: ["/images/lawson-family.png"],
  },
};

const values = [
  {
    num: "01",
    title: "Craftsmanship",
    description:
      "We hold every project to the standard we'd want in our own homes. That means taking the extra time to do things right, not just fast.",
  },
  {
    num: "02",
    title: "Communication",
    description:
      "You'll always know where your project stands. We send updates before you have to ask, and give straight answers to hard questions.",
  },
  {
    num: "03",
    title: "Reliability",
    description:
      "Our word means something. If we give you a timeline and a price, we work to hit both — and tell you early if anything changes.",
  },
  {
    num: "04",
    title: "Design",
    description:
      "Great spaces start with great planning. We invest the time upfront to design every detail so the result is something you love.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Page header */}
      <section className="bg-zinc-950 pt-[72px]">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-10 py-20 sm:py-28">
          <p className="text-warm-accent text-[10px] font-medium tracking-[0.3em] uppercase mb-6">
            Who We Are
          </p>
          <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl font-semibold text-white leading-[1.05] mb-8 max-w-2xl">
            About Lawson Builders
          </h1>
          <p className="text-zinc-400 text-lg max-w-xl leading-relaxed">
            A husband-and-wife home design and planning team built on honest communication,
            dependable work, and a genuine passion for creating homes families love.
          </p>
        </div>
      </section>

      {/* Main about section */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Story */}
            <div>
              <p className="text-warm-accent text-[10px] font-medium tracking-[0.28em] uppercase mb-6">
                Our Story
              </p>
              <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-zinc-950 mb-8 leading-tight">
                Built on Doing Things
                <br />
                <em className="italic font-normal">the Right Way</em>
              </h2>
              <div className="space-y-5 text-zinc-600 leading-relaxed">
                <p>
                  Madi and Mitch Lawson have been together since middle school — over 15
                  years of building a life side by side, including two young boys and a
                  shared passion for home design and renovation that turned into something
                  more.
                </p>
                <p>
                  Before starting Lawson Builders, Mitch served in the U.S. Navy as a
                  rescue swimmer. That experience — discipline, calm under pressure,
                  attention to detail when it matters most — shows up in every project we
                  take on. We don&apos;t cut corners, and we don&apos;t disappear when
                  things get hard.
                </p>
                <p>
                  Together, we&apos;ve bought, designed, renovated, and sold 7 homes.
                  We&apos;ve lived through every phase of the process as homeowners — the
                  good decisions and the ones we learned from. We started Lawson Builders
                  to do this full time, and to bring the same care we put into our own
                  homes to yours.
                </p>
                <p>
                  We work primarily in Franklin, Brentwood, Nashville, Nolensville, and
                  the surrounding Middle Tennessee area. We&apos;re your neighbors, and we
                  take our reputation in this community seriously.
                </p>
              </div>
            </div>

            {/* Right column */}
            <div className="space-y-6">
              {/* Brand card */}
              <div
                className="w-full h-72 relative overflow-hidden flex items-end p-8"
                style={{
                  background: "linear-gradient(155deg, #1c1a14 0%, #111310 40%, #0d100a 100%)",
                }}
              >
                <div
                  className="absolute inset-0 opacity-[0.04]"
                  style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23n)'/%3E%3C/svg%3E")`,
                  }}
                  aria-hidden="true"
                />
                <div className="relative">
                  <p className="text-white font-serif font-semibold text-2xl">Madi &amp; Mitch Lawson</p>
                  <p className="text-warm-accent text-[9px] font-medium tracking-[0.28em] uppercase mt-1">
                    Lawson Builders
                  </p>
                  <p className="text-zinc-400 text-sm mt-3">Home Design &amp; Planning · Tennessee</p>
                </div>
              </div>

              {/* Stats — TODO: confirm these figures */}
              <div className="grid grid-cols-3 gap-0 border-l border-t border-zinc-100">
                {[
                  { value: "7", label: "Homes Designed" },
                  { value: "15+", label: "Years Together" },
                  { value: "100%", label: "Owner-Operated" },
                ].map((stat) => (
                  <div key={stat.label} className="border-r border-b border-zinc-100 p-6 text-center">
                    <p className="font-serif text-3xl font-semibold text-zinc-950">{stat.value}</p>
                    <p className="text-zinc-400 text-xs mt-2 leading-tight">{stat.label}</p>
                  </div>
                ))}
              </div>

              {/* What to expect */}
              <div className="bg-warm-50 border border-zinc-100 p-8">
                <h3 className="font-serif text-lg font-semibold text-zinc-950 mb-6">
                  What You Can Expect
                </h3>
                <ul className="space-y-3.5">
                  {[
                    "Free, no-pressure consultation call",
                    "Madi & Mitch on every project",
                    "Regular progress updates",
                    "Written scopes and clear pricing",
                    "Owner-operated and accountable",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-3 text-sm text-zinc-600">
                      <div className="w-1 h-1 rounded-full bg-warm-accent shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Family section */}
      <section className="bg-warm-50 border-t border-zinc-100">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
            <div className="relative min-h-[480px] lg:min-h-[600px] overflow-hidden">
              <Image
                src="/images/lawson-family.png"
                alt="Madi and Mitch Lawson with their two boys"
                fill
                className="object-cover object-top"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>

            {/* Copy */}
            <div className="flex flex-col justify-center px-8 py-16 lg:px-16 lg:py-20">
              <p className="text-warm-accent text-[10px] font-medium tracking-[0.28em] uppercase mb-6">
                Family Owned &amp; Operated
              </p>
              <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-zinc-950 mb-8 leading-tight">
                Built for Your Family,
                <br />
                <em className="italic font-normal">By Ours</em>
              </h2>
              <div className="space-y-5 text-zinc-600 leading-relaxed">
                <p>
                  Lawson Builders is a family business in every sense of the word. We
                  started this company because we love what a well-designed, thoughtfully
                  planned home does for a family — and we wanted to bring that to the
                  community we&apos;re proud to be a part of.
                </p>
                <p>
                  When you invite us into your home, you&apos;re trusting us with the
                  place where your family eats dinner, wakes up on Christmas morning, and
                  makes memories that last a lifetime. We don&apos;t take that lightly.
                </p>
                <p>
                  That&apos;s why we design everything as if it were our own home —
                  because after seven renovations of our own, we know exactly what families
                  need and deserve.
                </p>
              </div>

              <div className="mt-10 pt-8 border-t border-zinc-200">
                <p className="font-serif text-lg text-zinc-800 italic leading-snug">
                  {/* TODO: Replace with an approved quote from Madi or Mitch */}
                  &ldquo;TODO: Add a quote from Madi or Mitch — something personal about why
                  they started Lawson Builders or what drives the quality of their work.&rdquo;
                </p>
                <p className="text-zinc-500 text-sm mt-3">— Madi &amp; Mitch Lawson</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core values */}
      <section className="py-20 sm:py-28 bg-zinc-950">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-10">
          <div className="mb-16">
            <p className="text-warm-accent text-[10px] font-medium tracking-[0.28em] uppercase mb-5">
              Core Values
            </p>
            <h2 className="font-serif text-4xl sm:text-5xl font-semibold text-white leading-tight">
              What Every Project
              <br />
              <em className="italic font-normal">Is Built On</em>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0 border-l border-t border-zinc-800">
            {values.map((value) => (
              <div key={value.title} className="border-r border-b border-zinc-800 p-10">
                <p className="text-zinc-700 text-xs font-medium tracking-widest mb-6">{value.num}</p>
                <h3 className="font-serif text-xl font-semibold text-white mb-4">{value.title}</h3>
                <p className="text-zinc-500 text-sm leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ContactCTA />
    </>
  );
}
