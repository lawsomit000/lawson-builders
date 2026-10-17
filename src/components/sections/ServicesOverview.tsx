import Link from "next/link";

const services = [
  {
    num: "01",
    title: "Kitchens",
    slug: "bathrooms-kitchens",
    description:
      "Layouts, cabinetry, surfaces, and lighting designed around how your family cooks and gathers.",
  },
  {
    num: "02",
    title: "Bathrooms",
    slug: "bathroom-design",
    description:
      "Tile, fixtures, vanities, and storage planned on paper first, so the finished room works and feels right.",
  },
  {
    num: "03",
    title: "Living Spaces",
    slug: "kitchen-interior-design",
    description:
      "Furniture, color, finishes, and lighting that make everyday rooms feel finished and like yours.",
  },
  {
    num: "04",
    title: "Outdoor Spaces",
    slug: "outdoor-living",
    description:
      "Patios, decks, and covered areas designed around how you gather and relax.",
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
              Design First,
              <br />
              <em className="italic font-normal">Then Build With Confidence</em>
            </h2>
          </div>
          <div className="max-w-sm">
            <p className="text-zinc-500 leading-relaxed mb-6">
              Most remodel headaches start before construction does: unclear plans, finishes
              chosen on the fly, and budgets that don&apos;t match the vision. We solve that
              up front. We design your space with you, plan every detail, and build a
              realistic budget — so when it&apos;s time to hire a builder, you know exactly
              what you&apos;re getting.
            </p>
            <div className="flex items-center gap-5">
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
              <Link
                href="/pricing"
                className="text-sm font-semibold text-zinc-400 hover:text-warm-accent transition-colors"
              >
                See Pricing
              </Link>
            </div>
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
          All Services
        </Link>
      </div>
    </section>
  );
}
