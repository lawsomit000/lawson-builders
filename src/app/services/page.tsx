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

const deliverables = [
  "Conceptual Floor Plans & Space Planning",
  "Interior & Exterior Design Concepts",
  "Photorealistic 3D Renderings",
  "Materials, Finishes & Color Selections",
  "Renovation & Addition Planning",
  "Outdoor Living Design",
  "Design Revisions & Refinements",
  "Contractor-Ready Concept Presentations",
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
      "Thoughtful design concepts for home renovations, additions, and complete transformations. We help reimagine existing spaces through layout planning, material selections, and realistic visualizations that bring your vision to life.",
    highlights: [
      "Layout planning and space optimization",
      "Materials, finishes, and color direction",
      "Project phasing and sequencing",
      "Contractor-ready concept presentation",
    ],
    image: "/images/design-services.jpg",
    imageAlt: "Designer reviewing floor plan sketches and material swatches for a whole-home renovation plan",
  },
  {
    num: "02",
    title: "Bathroom Design",
    slug: "bathroom-design",
    description:
      "From refreshing an existing bathroom to reimagining a primary suite, we develop cohesive concepts that balance timeless design, functionality, and everyday comfort.",
    highlights: [
      "Layout and space planning",
      "Tile, fixture, and vanity selections",
      "Lighting and storage design",
      "Design concept and finish selections",
    ],
    image: "/images/interior-arches.jpg",
    imageAlt: "Bathroom design with arched doorways and freestanding soaking tub",
  },
  {
    num: "03",
    title: "Deck Design",
    slug: "deck-design",
    description:
      "Extend your living space outdoors with thoughtfully designed decks that complement your home's architecture and lifestyle. We explore layouts, materials, and design features to create a seamless connection between indoors and out.",
    highlights: [
      "Size, shape, and layout planning",
      "Material comparison and selection",
      "Railing, stair, and built-in feature design",
      "Contractor-ready concept presentation",
    ],
    image: "/images/deck-design.png",
    imageAlt: "Covered outdoor deck with stone fireplace and wireframe design overlay at sunset",
  },
  {
    num: "04",
    title: "Patio Design",
    slug: "patio-design",
    description:
      "Create inviting outdoor environments designed for entertaining, relaxing, and gathering. From covered patios to outdoor kitchens and fireplaces, we help visualize spaces that feel like a natural extension of your home.",
    highlights: [
      "Layout and traffic flow planning",
      "Material and pattern selection",
      "Connection to home, deck, and landscape",
      "Visual concept and material selections",
    ],
    image: "/images/patio-outdoor.jpg",
    imageAlt: "Patio design with flagstone path, raised deck, pergola, and landscaping",
  },
  {
    num: "05",
    title: "Barndominium Planning",
    slug: "barndominium-planning",
    description:
      "Bring your barndominium vision to life with conceptual floor plans, exterior design, and interior space planning. We combine practical layouts with distinctive architectural character.",
    highlights: [
      "Conceptual floor plan development",
      "Interior layout and finish selections",
      "Exterior design and architectural character",
      "Design concept ready to share with your builder",
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
      "Contractor-ready concept presentation",
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
      "Contractor-ready concept presentation",
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
      "Design concept and finish selections",
    ],
    image: "/images/kitchen-design.png",
    imageAlt: "Bright farmhouse kitchen with marble countertops and wireframe design overlay",
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
              What We Offer
            </p>
            <h2 className="font-serif text-4xl sm:text-5xl font-semibold text-zinc-950 leading-tight">
              Everything You Need
              <br />
              <em className="italic font-normal">to Hire With Confidence</em>
            </h2>
          </div>

          <div className="bg-warm-50 border border-zinc-100 p-10">
            <p className="text-zinc-500 text-sm leading-relaxed mb-8 max-w-2xl">
              From initial inspiration to a refined design direction, our services help you
              make informed decisions before investing in construction.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-4">
              {deliverables.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <div className="w-1 h-1 rounded-full bg-warm-accent shrink-0 mt-2" />
                  <span className="text-sm text-zinc-600">{item}</span>
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
                    Discuss Your Project
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
