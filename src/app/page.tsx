import Image from "next/image";
import Link from "next/link";
import Hero from "@/components/sections/Hero";
import ServicesOverview from "@/components/sections/ServicesOverview";
import HowItWorks from "@/components/sections/HowItWorks";
import ContactCTA from "@/components/sections/ContactCTA";

export default function HomePage() {
  return (
    <>
      {/* 1. Hero */}
      <Hero />

      {/* 2. What We Do */}
      <ServicesOverview />

      {/* 3. How It Works */}
      <HowItWorks />

      {/* 4. What You Walk Away With */}
      <section className="bg-warm-50 border-t border-warm-200 py-24 sm:py-32">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-10">
          <div className="flex flex-col lg:flex-row lg:items-start gap-16">
            <div className="lg:w-1/2">
              <p className="text-warm-accent text-[10px] font-medium tracking-[0.28em] uppercase mb-5">
                Your Plan
              </p>
              <h2 className="font-serif text-4xl sm:text-5xl font-semibold text-zinc-950 leading-tight">
                Everything You Need
                <br />
                <em className="italic font-normal">to Hire With Confidence</em>
              </h2>
            </div>
            <div className="lg:w-1/2">
              <div className="bg-white border border-zinc-100 p-8">
                <ul className="space-y-3.5">
                  {[
                    "Concept and mood board",
                    "Color palette and finishes",
                    "Furniture and lighting selections",
                    "Layout drawings (non-permit, Renovation Package)",
                    "Project scope",
                    "Budget estimate",
                    "Sourcing and shopping list",
                    "Contractor checklist",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-3 text-sm text-zinc-600">
                      <div className="w-1 h-1 rounded-full bg-warm-accent shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="mt-8 pt-6 border-t border-zinc-100">
                  <Link
                    href="/pricing"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-zinc-900 hover:text-warm-accent transition-colors group"
                  >
                    Compare Packages
                    <svg
                      className="w-4 h-4 group-hover:translate-x-0.5 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Meet the Lawsons */}
      <section className="bg-white border-t border-zinc-100">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
            {/* TODO: Confirm family photo — currently using /images/lawson-family.png */}
            <div className="relative min-h-[420px] lg:min-h-[540px] overflow-hidden">
              <Image
                src="/images/lawson-family.png"
                alt="Madi and Mitch Lawson with their two boys"
                fill
                className="object-cover object-top"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div className="flex flex-col justify-center px-8 py-16 lg:px-16 lg:py-20">
              <p className="text-warm-accent text-[10px] font-medium tracking-[0.28em] uppercase mb-6">
                Family Owned &amp; Operated
              </p>
              <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-zinc-950 mb-8 leading-tight">
                Meet
                <br />
                <em className="italic font-normal">the Lawsons</em>
              </h2>
              <p className="text-zinc-600 leading-relaxed mb-8">
                Madi and Mitch have bought, remodeled, and sold 5 homes together — and
                design is what they love most about it. Middle school sweethearts, married
                15 years, and parents to two young boys, they started Lawson Builders to
                help other families plan homes they&apos;ll love for years to come.
              </p>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-sm font-semibold text-zinc-900 hover:text-warm-accent transition-colors group self-start"
              >
                Our Story
                <svg
                  className="w-4 h-4 group-hover:translate-x-0.5 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 6. How to Get Started */}
      <section className="bg-warm-50 border-t border-warm-200">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-10 pt-24 sm:pt-32 pb-16">
          <div className="max-w-xl">
            <p className="text-warm-accent text-[10px] font-medium tracking-[0.28em] uppercase mb-5">
              Getting Started
            </p>
            <h2 className="font-serif text-4xl sm:text-5xl font-semibold text-zinc-950 leading-tight">
              Three Simple Steps
              <br />
              <em className="italic font-normal">to Get Started</em>
            </h2>
          </div>
        </div>

        <div className="border-t border-warm-200">
          <div className="max-w-screen-xl mx-auto px-6 lg:px-10">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-0 border-l border-t border-warm-200">
              {[
                {
                  num: "01",
                  title: "Book Your Free Call",
                  description:
                    "Pick a time that works for you. It takes less than a minute.",
                },
                {
                  num: "02",
                  title: "We Meet at Your Home",
                  description:
                    "We walk the space, hear your ideas, and talk through goals, timeline, and budget. No cost, no pressure.",
                },
                {
                  num: "03",
                  title: "Get Your Design Proposal",
                  // TODO: Confirm this matches your actual process — especially the proposal step.
                  description:
                    "We'll follow up with a clear proposal for your project's design and planning — with transparent pricing and no surprises.",
                },
              ].map((step) => (
                <div
                  key={step.num}
                  className="border-r border-b border-warm-200 p-8"
                >
                  <p className="text-zinc-300 text-xs font-medium tracking-widest mb-6">
                    {step.num}
                  </p>
                  <h3 className="font-serif text-lg font-semibold text-zinc-900 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-zinc-500 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="max-w-screen-xl mx-auto px-6 lg:px-10 pb-24 sm:pb-32 pt-10">
          <Link
            href="/contact"
            className="inline-flex items-center text-xs font-semibold tracking-widest uppercase bg-zinc-950 text-white px-8 py-4 hover:bg-warm-accent transition-colors duration-300"
          >
            Book a Free Call
          </Link>
        </div>
      </section>

      {/* 7. Closing CTA */}
      <ContactCTA />
    </>
  );
}
