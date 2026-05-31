import type { Metadata } from "next";
import Image from "next/image";
import ContactCTA from "@/components/sections/ContactCTA";
import Testimonials from "@/components/sections/Testimonials";

export const metadata: Metadata = {
  title: "About",
  description:
    "Family-owned and operated general contractor serving Middle Tennessee. Learn about Todd Joseph Builders — built on honest communication, dependable work, and craftsmanship that lasts generations.",
  openGraph: {
    title: "About | Todd Joseph Builders",
    description:
      "Family-owned and operated general contractor serving Middle Tennessee. Built on honest communication, dependable work, and craftsmanship that lasts generations.",
    images: [{ url: "/images/family.jpg", width: 1200, height: 630, alt: "The Joseph family" }],
  },
  twitter: {
    images: ["/images/family.jpg"],
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
    title: "Trust",
    description:
      "Your home is your biggest investment. We treat it that way — respecting your space, your budget, and your time at every step.",
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
            About Todd Joseph Contracting
          </h1>
          <p className="text-zinc-400 text-lg max-w-xl leading-relaxed">
            A local, hands-on contracting company built on honest communication, dependable
            work, and careful attention from start to finish.
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
                  Todd Joseph Contracting was built on a simple idea: homeowners deserve a
                  contractor they can actually trust. Someone who shows up, does quality work,
                  communicates clearly, and finishes what they started.
                </p>
                <p>
                  With over a decade of hands-on experience, we&apos;ve built barndominiums from
                  the ground up, remodeled hundreds of bathrooms, constructed decks and patios
                  that become the favorite room of the house, and managed large-scale additions
                  that give families the space they&apos;ve been waiting for.
                </p>
                <p>
                  What sets us apart isn&apos;t a pitch — it&apos;s a track record. We&apos;re
                  owner-operated, which means when you hire Todd Joseph Builders, Todd is on
                  the job. Not a project manager reading notes. Not a subcontractor you&apos;ve
                  never met. The person responsible for your project is the one doing the work.
                </p>
                <p>
                  We work primarily in Franklin, Brentwood, Nashville, Leiper&apos;s Fork, and
                  the surrounding Middle Tennessee area. We&apos;re your neighbors, and we take
                  our reputation in this community seriously.
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
                  <p className="text-white font-serif font-semibold text-2xl">Todd Joseph</p>
                  <p className="text-warm-accent text-[9px] font-medium tracking-[0.28em] uppercase mt-1">
                    Contracting
                  </p>
                  <p className="text-zinc-400 text-sm mt-3">Licensed &amp; Insured · Tennessee</p>
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-0 border-l border-t border-zinc-100">
                {[
                  { value: "10+", label: "Years in Business" },
                  { value: "200+", label: "Projects Complete" },
                  { value: "5★", label: "Avg. Review Rating" },
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
                    "Free, no-pressure project estimates",
                    "Owner on-site for every project",
                    "Regular progress updates",
                    "Written scopes and clear pricing",
                    "Fully licensed and insured",
                    "Warranty on all work performed",
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
            {/* Photo */}
            <div className="relative min-h-[480px] lg:min-h-[600px] overflow-hidden">
              <Image
                src="/images/family.jpg"
                alt="The Joseph family"
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
                  Todd Joseph Builders is a family business in every sense of the word. Family
                  is everything to us — it&apos;s why we started this company, and it&apos;s
                  what drives the standard we hold ourselves to on every single job.
                </p>
                <p>
                  When you invite us into your home, you&apos;re trusting us with more than a
                  construction project. You&apos;re trusting us with the place where your family
                  eats dinner, wakes up on Christmas morning, and makes memories that last a
                  lifetime. We don&apos;t take that lightly.
                </p>
                <p>
                  That&apos;s why we build everything as if it were our own home — because we
                  know your family deserves craftsmanship they&apos;ll love for generations
                  to come.
                </p>
              </div>

              <div className="mt-10 pt-8 border-t border-zinc-200">
                <p className="font-serif text-lg text-zinc-800 italic leading-snug">
                  &ldquo;I want every family to feel the same pride in their home that I feel
                  in mine.&rdquo;
                </p>
                <p className="text-zinc-500 text-sm mt-3">— Todd Joseph</p>
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

      <Testimonials />
      <ContactCTA />
    </>
  );
}
