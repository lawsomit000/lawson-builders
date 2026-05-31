import Link from "next/link";

const services = [
  {
    num: "01",
    title: "General Contracting",
    slug: "general-contracting",
    description:
      "Full project management from blueprint to completion. One point of contact, clear timelines, and trades coordinated so nothing falls through.",
  },
  {
    num: "02",
    title: "Bathroom Remodels",
    slug: "bathroom-remodels",
    description:
      "Demo to finish — custom tile, frameless glass, vanities, fixtures, and everything in between. Spaces you'll use every day, built to last.",
  },
  {
    num: "03",
    title: "Back Decks",
    slug: "back-decks",
    description:
      "Pressure-treated lumber, cedar, or composite — built to code with proper footings, railings, and finishes that hold up season after season.",
  },
  {
    num: "04",
    title: "Patios",
    slug: "patios",
    description:
      "Concrete, pavers, or natural stone — properly graded, drained, and set for the long haul. One of the best returns on your home investment.",
  },
  {
    num: "05",
    title: "Barndominiums",
    slug: "barndominiums",
    description:
      "Shell coordination through full interior finish-out. Custom floor plans, energy-efficient builds, and residential quality throughout.",
  },
  {
    num: "06",
    title: "Outdoor Living Spaces",
    slug: "outdoor-living-spaces",
    description:
      "Covered patios, pergolas, outdoor kitchens, fire pits — spaces designed around how you actually live, not just what looks good in a photo.",
  },
  {
    num: "07",
    title: "Home Additions",
    slug: "home-additions",
    description:
      "Seamless integration with your existing structure — master suites, family rooms, garage conversions, and full second-story additions.",
  },
  {
    num: "08",
    title: "Renovations & Repairs",
    slug: "renovations-repairs",
    description:
      "Kitchen refreshes, structural repairs, flooring, and updates of all sizes — handled with the same care we bring to every larger project.",
  },
];

export default function ServicesOverview() {
  return (
    <section className="bg-white">
      <div className="max-w-screen-xl mx-auto px-6 lg:px-10 pt-24 sm:pt-32 pb-16">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-10 mb-20">
          <div className="max-w-xl">
            <p className="text-warm-accent text-[10px] font-medium tracking-[0.28em] uppercase mb-5">
              What We Do
            </p>
            <h2 className="font-serif text-4xl sm:text-5xl font-semibold text-zinc-950 leading-tight">
              Built for Every Stage
              <br />
              <em className="italic font-normal">of Your Project</em>
            </h2>
          </div>
          <div className="max-w-sm">
            <p className="text-zinc-500 leading-relaxed mb-6">
              From small renovations to full-scale builds, we help homeowners plan,
              manage, and complete projects with confidence.
            </p>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-sm font-semibold text-zinc-900 hover:text-warm-accent transition-colors group"
            >
              All Services
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

      <div className="border-t border-zinc-100">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0 border-l border-t border-zinc-100">
            {services.map((service) => (
              <Link
                key={service.title}
                href={`/services#${service.slug}`}
                className="border-r border-b border-zinc-100 p-8 group hover:bg-warm-50 transition-colors duration-300 block"
              >
                <p className="text-zinc-300 text-xs font-medium tracking-widest mb-6">
                  {service.num}
                </p>
                <h3 className="font-serif text-lg font-semibold text-zinc-900 mb-3 group-hover:text-zinc-950">
                  {service.title}
                </h3>
                <p className="text-zinc-500 text-sm leading-relaxed">
                  {service.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-screen-xl mx-auto px-6 lg:px-10 pb-24 sm:pb-32 pt-10">
        <Link
          href="/services"
          className="inline-flex items-center text-xs font-semibold tracking-widest uppercase border border-zinc-900 text-zinc-900 px-8 py-4 hover:bg-zinc-950 hover:text-white hover:border-zinc-950 transition-colors duration-300"
        >
          View All Services
        </Link>
      </div>
    </section>
  );
}
