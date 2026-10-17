import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import ContactCTA from "@/components/sections/ContactCTA";
import HowItWorks from "@/components/sections/HowItWorks";
import PricingProcess from "@/components/sections/PricingProcess";

export const metadata: Metadata = {
  title: "Home Design & Remodel Planning | Lawson Builders",
  description:
    "Design and plan your remodel, addition, or outdoor space with Lawson Builders. Bid-ready plans for Middle Tennessee homeowners. Free consultation call.",
  openGraph: {
    title: "Home Design & Remodel Planning | Lawson Builders",
    description:
      "Design and plan your remodel, addition, or outdoor space with Lawson Builders. Bid-ready plans for Middle Tennessee homeowners.",
    images: [{ url: "/images/design-services.jpg", width: 1200, height: 630, alt: "Designer reviewing floor plans and material swatches — Lawson Builders" }],
  },
  twitter: {
    images: ["/images/design-services.jpg"],
  },
};

// TODO: Confirm full deliverables list before publishing this section.
// Potential items (all unconfirmed — check each before going live):
//   - Measured existing-conditions drawings
//   - Proposed floor plan
//   - Elevations
//   - 3D renderings (confirm if offered)
//   - Finish and fixture schedule
//   - Material spec sheet
//   - Budget estimate / cost range
//   - Contractor bid package
const deliverables = [
  "Measured existing-conditions drawings",
  "Proposed floor plan",
  "Elevations",
  "3D renderings (confirm if offered)",
  "Finish and fixture schedule",
  "Material spec sheet",
  "Budget estimate / cost range",
  "Contractor bid package",
];

type Service = {
  num: string;
  title: string;
  slug: string;
  description: string;
  highlights: string[];
} & (
  | { image: string; imageAlt: string; gradient?: never }
  | { gradient: string; image?: never; imageAlt?: never }
);

const services: Service[] = [
  {
    num: "01",
    title: "Whole-Home & Renovation Design",
    slug: "whole-home-design",
    description:
      "Planning a larger renovation means a lot of moving pieces. We look at the whole picture — layout, flow, finishes, and phasing — and turn it into one cohesive plan, so every room works together and your contractor knows exactly what to bid.",
    highlights: [
      "Whole-home layout and flow planning",
      "Cohesive finish and material direction",
      "Project phasing recommendations",
      "Bid-ready plan package",
    ],
    image: "/images/design-services.jpg",
    imageAlt: "Designer reviewing floor plan sketches and material swatches for a whole-home renovation plan",
  },
  {
    num: "02",
    title: "Bathroom Design",
    slug: "bathroom-design",
    description:
      "A great bathroom starts long before the first tile is set. We plan the layout, select fixtures and finishes, and work through the details — storage, lighting, shower configuration — on paper first. Whether it's a guest bath refresh or a spa-style primary suite, you'll leave with a plan any contractor can price accurately.",
    highlights: [
      "Layout and space planning",
      "Tile, fixture, and vanity selections",
      "Lighting and storage design",
      "Bid-ready plan and spec sheet",
    ],
    image: "/images/interior-arches.jpg",
    imageAlt: "Bathroom design with arched doorways and freestanding soaking tub",
  },
  {
    num: "03",
    title: "Deck Design",
    slug: "deck-design",
    description:
      "A well-designed deck extends your living space and adds real value to your home. We help you choose the right size, layout, and material — pressure-treated, cedar, or composite — for your yard, budget, and style, then document it so your builder has a clear plan to follow.",
    highlights: [
      "Size, shape, and layout planning",
      "Material comparison and selection",
      "Railing, stair, and built-in seating design",
      "Plan package ready for contractor bids",
    ],
    // TODO: Needs a dedicated exterior deck image — provide a photo and we'll swap this placeholder out.
    gradient: "from-stone-200 via-stone-300 to-stone-400",
  },
  {
    num: "04",
    title: "Patio Design",
    slug: "patio-design",
    description:
      "Concrete, pavers, or natural stone — the right patio depends on how you'll use it. We design the layout, select materials, and plan how it connects to your home and yard, so the finished space feels intentional, not added on.",
    highlights: [
      "Layout and traffic flow planning",
      "Material and pattern selection",
      "Connection to home, deck, and landscape",
      "Plan and material list ready for bids",
    ],
    image: "/images/patio-outdoor.jpg",
    imageAlt: "Patio design with flagstone path, raised deck, pergola, and landscaping",
  },
  {
    num: "05",
    title: "Barndominium Planning",
    slug: "barndominium-planning",
    description:
      "Barndominiums offer incredible flexibility — which means a lot of decisions. We help you plan a floor plan that fits your family, select interior finishes, and think through how you'll live in the space for years to come.",
    highlights: [
      "Custom floor plan development",
      "Interior layout and finish selections",
      "Energy-efficiency considerations",
      "Plan package ready for builder bids",
    ],
    image: "/images/barndominium.jpg",
    imageAlt: "Board-and-batten barndominium exterior at dusk",
  },
  {
    num: "06",
    title: "Outdoor Living Design",
    slug: "outdoor-living-design",
    description:
      "Covered patios, pergolas, outdoor kitchens, fire features. We design outdoor spaces around how you actually live — where you'll gather, cook, and relax — and how it all flows from the inside out.",
    highlights: [
      "Covered patio and pergola design",
      "Outdoor kitchen and fireplace layout",
      "Lighting and comfort planning",
      "Bid-ready plan package",
    ],
    image: "/images/deck-outdoor.jpg",
    imageAlt: "Covered outdoor living space design with stone fireplace and comfortable seating area",
  },
  {
    num: "07",
    title: "Home Addition Planning",
    slug: "home-addition-planning",
    description:
      "The best additions look like they were always there. We plan new square footage that fits your property, matches your home's character, and connects naturally to your existing layout — from primary suites to family rooms to second stories.",
    highlights: [
      "Concept and layout options",
      "Integration with existing floor plan",
      "Exterior and interior finish direction",
      "Plan package ready for contractor bids",
    ],
    image: "/images/home-addition.jpg",
    imageAlt: "Home addition design with floor-to-ceiling windows and open-concept interior",
  },
  {
    num: "08",
    title: "Kitchen & Interior Design",
    slug: "kitchen-interior-design",
    description:
      "Kitchens and living spaces get the most daily use — and the most benefit from good planning. We design layouts, cabinetry, surfaces, and lighting that make your home work better and feel like yours.",
    highlights: [
      "Kitchen layout and cabinetry design",
      "Countertop, flooring, and surface selections",
      "Lighting and fixture planning",
      "Bid-ready plan and spec sheet",
    ],
    // TODO: Needs a finished kitchen or interior design photo.
    gradient: "from-warm-200 via-stone-200 to-stone-300",
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Page header */}
      <section className="bg-zinc-950 pt-[72px]">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-10 py-20 sm:py-28">
          <p className="text-warm-accent text-[10px] font-medium tracking-[0.3em] uppercase mb-6">
            Design &amp; Planning Services
          </p>
          <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl font-semibold text-white leading-[1.05] mb-8 max-w-3xl">
            Plan It Right
            <br />
            <em className="italic font-normal">Before It&apos;s Built</em>
          </h1>
          <p className="text-zinc-400 text-lg max-w-xl leading-relaxed mb-10">
            Most remodel headaches start before construction does: unclear plans, finishes
            chosen on the fly, budgets that don&apos;t match the vision. We help you design
            every detail up front, so you can hire a builder with confidence and know
            exactly what you&apos;re getting.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center text-xs font-semibold tracking-widest uppercase border border-white/30 text-white px-8 py-4 hover:bg-white hover:text-zinc-950 transition-colors duration-300"
          >
            Book a Free Call
          </Link>
        </div>
      </section>

      {/* How It Works */}
      <HowItWorks />

      {/* What You Walk Away With */}
      <section className="bg-white py-24 sm:py-32 border-t border-zinc-100">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-10">
          <div className="mb-16">
            <p className="text-warm-accent text-[10px] font-medium tracking-[0.28em] uppercase mb-5">
              Your Plan Package
            </p>
            <h2 className="font-serif text-4xl sm:text-5xl font-semibold text-zinc-950 leading-tight">
              Everything You Need
              <br />
              <em className="italic font-normal">to Hire With Confidence</em>
            </h2>
          </div>

          <div className="bg-warm-50 border border-zinc-100 p-10">
            <p className="text-zinc-500 text-sm leading-relaxed mb-8 max-w-2xl">
              Every completed design engagement includes a plan package ready to hand off
              to a contractor. The exact deliverables depend on project scope — the items
              below are pending confirmation.
            </p>
            {/* TODO: Confirm which deliverables are included before publishing.
                Remove the amber "TODO" prefix from each item once confirmed. */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-4">
              {deliverables.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <div className="w-1 h-1 rounded-full bg-warm-accent shrink-0 mt-2" />
                  <span className="text-sm text-amber-600 italic">TODO: Confirm — {item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Alternating service blocks */}
      <section className="bg-white">
        <div className="border-t border-zinc-100">
          {services.map((service, index) => {
            const flip = index % 2 === 1;
            return (
              <div
                key={service.title}
                id={service.slug}
                className="grid grid-cols-1 lg:grid-cols-2 border-b border-zinc-100 group"
              >
                {/* Visual */}
                <div
                  className={`relative min-h-[300px] lg:min-h-[480px] overflow-hidden ${
                    flip ? "lg:order-2" : "lg:order-1"
                  }`}
                >
                  {service.image ? (
                    <Image
                      src={service.image}
                      alt={service.imageAlt}
                      fill
                      className="object-cover object-center transition-transform duration-700 group-hover:scale-[1.03]"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                  ) : (
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${service.gradient} transition-transform duration-700 group-hover:scale-[1.03]`}
                      aria-hidden="true"
                    />
                  )}

                  {/* Service number watermark */}
                  <span className="absolute top-6 left-6 text-white/15 font-serif text-8xl font-bold leading-none select-none pointer-events-none">
                    {service.num}
                  </span>
                </div>

                {/* Content */}
                <div
                  className={`flex flex-col justify-center px-8 py-14 lg:px-16 lg:py-20 ${
                    flip ? "lg:order-1" : "lg:order-2"
                  }`}
                >
                  <p className="text-zinc-300 text-xs font-medium tracking-widest mb-5">
                    {service.num}
                  </p>
                  <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-zinc-950 mb-6 leading-snug">
                    {service.title}
                  </h2>
                  <p className="text-zinc-500 leading-relaxed mb-8">
                    {service.description}
                  </p>

                  <ul className="space-y-3 mb-10">
                    {service.highlights.map((h) => (
                      <li key={h} className="flex items-center gap-3 text-sm text-zinc-600">
                        <div className="w-1 h-1 rounded-full bg-warm-accent shrink-0" />
                        {h}
                      </li>
                    ))}
                  </ul>

                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-zinc-900 hover:text-warm-accent transition-colors group/link w-fit"
                  >
                    Book a Free Call
                    <svg
                      className="w-4 h-4 group-hover/link:translate-x-0.5 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <PricingProcess />
      <ContactCTA />
    </>
  );
}
