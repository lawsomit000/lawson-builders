import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import ContactCTA from "@/components/sections/ContactCTA";

export const metadata: Metadata = {
  title: "Services",
  description:
    "General contracting, bathroom remodels, decks, patios, barndominiums, outdoor living spaces, home additions, and renovations across Middle Tennessee.",
  openGraph: {
    title: "Services | Todd Joseph Builders",
    description:
      "General contracting, bathroom remodels, decks, patios, barndominiums, outdoor living spaces, home additions, and renovations across Middle Tennessee.",
    images: [{ url: "/images/deck-outdoor.jpg", width: 1200, height: 630, alt: "Covered outdoor deck with fireplace by Todd Joseph Builders" }],
  },
  twitter: {
    images: ["/images/deck-outdoor.jpg"],
  },
};

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
    title: "General Contracting",
    slug: "general-contracting",
    description:
      "When a project spans multiple trades — framing, electrical, plumbing, HVAC, tile — you need someone who can coordinate it all without things falling through the cracks. We manage schedules, subcontractors, material deliveries, and inspections so you don't have to. One point of contact, a clear plan, and a project that finishes on time.",
    highlights: ["Full project management", "Subcontractor coordination", "Permit & inspection handling", "Single point of contact"],
    image: "/images/general-contracting.jpg",
    imageAlt: "Home interior mid-renovation showing exposed framing, subfloor, and active construction",
  },
  {
    num: "02",
    title: "Bathroom Remodels",
    slug: "bathroom-remodels",
    description:
      "A bathroom remodel done right transforms one of the most-used rooms in your home. We handle everything from demo to the final fixture — tile work, shower surrounds, tub installation, vanities, lighting, and plumbing. Whether you're updating a guest bath or building a spa-quality master suite, we plan the layout, source quality materials, and execute the work with precision.",
    highlights: ["Demo to finish", "Custom tile & stonework", "Shower & tub surrounds", "Vanity & fixture installation"],
    image: "/images/interior-arches.jpg",
    imageAlt: "Luxury bathroom with arched doorways and freestanding spa tub",
  },
  {
    num: "03",
    title: "Back Decks",
    slug: "back-decks",
    description:
      "A well-built deck extends your living space and adds real value to your home. We design and build decks to code — choosing the right material (pressure-treated lumber, cedar, or composite) for your climate, budget, and aesthetic. Every deck we build gets proper footings, structural framing, and finishes that hold up season after season.",
    highlights: ["Pressure-treated & composite options", "Code-compliant footings", "Railing & stair systems", "Built-in seating available"],
    image: "/images/deck-outdoor.jpg",
    imageAlt: "Covered back deck with stone fireplace, recessed lighting, and outdoor living area at dusk",
  },
  {
    num: "04",
    title: "Patios",
    slug: "patios",
    description:
      "Patios are one of the best ROI improvements you can make to a home. We pour concrete slabs, lay pavers, and set natural stone — each with proper grading, drainage, and base preparation to prevent cracking and shifting over time. Add a pergola, fire pit, or outdoor kitchen and we'll coordinate the full buildout.",
    highlights: ["Concrete, paver & stone options", "Proper grading & drainage", "Stamped concrete available", "Full outdoor buildout coordination"],
    image: "/images/patio-outdoor.jpg",
    imageAlt: "Modern patio with flagstone path, raised composite deck, pergola, and lush landscaping",
  },
  {
    num: "05",
    title: "Barndominiums",
    slug: "barndominiums",
    description:
      "Barndominiums require a contractor who understands both the steel structure side and the residential finish-out side. We handle the full scope — from working with your shell manufacturer to completing the interior to your specifications. Floor plans, insulation, electrical, plumbing, HVAC, drywall, cabinetry, flooring — we manage it all under one roof.",
    highlights: ["Shell coordination", "Full interior finish-out", "Custom floor plans", "Energy-efficient builds"],
    image: "/images/barndominium.jpg",
    imageAlt: "White board-and-batten barndominium with metal roof lit up at dusk against a mountain backdrop",
  },
  {
    num: "06",
    title: "Outdoor Living Spaces",
    slug: "outdoor-living-spaces",
    description:
      "A great outdoor living space is one you actually use. We design and build covered patios, pergolas, outdoor kitchens, fire pit areas, and entertainment spaces that extend your home's footprint and match your lifestyle. Every project is designed around how you plan to use the space — from quiet evenings to backyard gatherings.",
    highlights: ["Covered patios & pergolas", "Outdoor kitchens", "Fire pit & fireplace builds", "Custom entertainment areas"],
    image: "/images/outdoor-living.jpg",
    imageAlt: "Pergola-covered outdoor living space with stone fireplace, teak furniture, and paver patio",
  },
  {
    num: "07",
    title: "Home Additions",
    slug: "home-additions",
    description:
      "Adding on to your home is one of the most complex projects a homeowner can take on. It requires careful structural planning, seamless integration with the existing home, and coordination across every trade. We've built master suite additions, family room expansions, garage conversions, and full second-story additions.",
    highlights: ["Structural planning & permits", "Seamless home integration", "Room additions & suite buildouts", "Garage conversions"],
    image: "/images/home-addition.jpg",
    imageAlt: "Modern home addition with floor-to-ceiling glass walls, wood deck, and open-concept interior",
  },
  {
    num: "08",
    title: "Renovations & Repairs",
    slug: "renovations-repairs",
    description:
      "Not every project is a ground-up build. Sometimes a home needs a refreshed kitchen, repaired structural damage, updated flooring, or a room that finally gets finished the right way. We handle renovations of all sizes with the same care we bring to larger projects. No job is too small if it's something you care about.",
    highlights: ["Kitchen updates", "Structural repairs", "Flooring & interior updates", "Room finishing & refresh"],
    image: "/images/renovation.jpg",
    imageAlt: "Home interior mid-renovation with exposed ceiling joists, brick walls, and lumber staged for build-out",
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Page header */}
      <section className="bg-zinc-950 pt-[72px]">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-10 py-20 sm:py-28">
          <p className="text-warm-accent text-[10px] font-medium tracking-[0.3em] uppercase mb-6">
            What We Build
          </p>
          <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl font-semibold text-white leading-[1.05] mb-8 max-w-2xl">
            Services
          </h1>
          <p className="text-zinc-400 text-lg max-w-xl leading-relaxed">
            From small renovations to full-scale builds, we help homeowners plan, manage, and
            complete projects with confidence and craftsmanship we stand behind.
          </p>
        </div>
      </section>

      {/* Alternating service rows */}
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
                    Talk Through This Project
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

      <ContactCTA />
    </>
  );
}
