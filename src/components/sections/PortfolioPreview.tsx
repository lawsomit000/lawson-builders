import Link from "next/link";
import Image from "next/image";

type Project = {
  title: string;
  location: string;
  description: string;
  category: string;
  span: string;
  height: string;
} & (
  | { image: string; imageAlt: string; gradient?: never }
  | { gradient: string; image?: never; imageAlt?: never }
);

const projects: Project[] = [
  {
    title: "Modern Master Bathroom",
    location: "Nashville, TN",
    description: "Custom arched doorways, freestanding soaker tub, wood vanity, and natural stone throughout.",
    category: "Bathroom",
    image: "/images/interior-arches.jpg",
    imageAlt: "Luxury bathroom with arched doorways and spa tub",
    span: "lg:col-span-1 lg:row-span-2",
    height: "h-[480px] lg:h-full",
  },
  {
    title: "Wraparound Composite Deck",
    location: "Franklin, TN",
    description: "500 sq ft deck with cable railings and built-in seating.",
    category: "Deck",
    gradient: "from-amber-800 via-orange-900 to-stone-900",
    span: "lg:col-span-1",
    height: "h-[300px]",
  },
  {
    title: "Covered Patio & Outdoor Kitchen",
    location: "Brentwood, TN",
    description: "Stamped concrete, pergola, outdoor kitchen, and fireplace.",
    category: "Outdoor Living",
    gradient: "from-stone-500 via-amber-700 to-stone-700",
    span: "lg:col-span-1",
    height: "h-[300px]",
  },
  {
    title: "Custom Barndominium",
    location: "Williamson County, TN",
    description: "2,400 sq ft build from shell erection to full interior finish-out.",
    category: "Barndominium",
    gradient: "from-zinc-500 via-slate-600 to-zinc-800",
    span: "lg:col-span-2",
    height: "h-[300px]",
  },
];

export default function PortfolioPreview() {
  return (
    <section className="bg-warm-50 py-24 sm:py-32">
      <div className="max-w-screen-xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-8 mb-16">
          <div>
            <p className="text-warm-accent text-[10px] font-medium tracking-[0.28em] uppercase mb-5">
              Our Work
            </p>
            <h2 className="font-serif text-4xl sm:text-5xl font-semibold text-zinc-950 leading-tight">
              Projects We&apos;re
              <br />
              <em className="italic font-normal">Proud Of</em>
            </h2>
          </div>
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-2 text-sm font-semibold text-zinc-900 hover:text-warm-accent transition-colors group shrink-0"
          >
            Full Portfolio
            <svg className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 lg:grid-rows-2 gap-4">
          {projects.map((project) => (
            <div
              key={project.title}
              className={`relative overflow-hidden group ${project.span} ${project.height} min-h-[280px]`}
            >
              {/* Real photo or gradient placeholder */}
              {project.image ? (
                <Image
                  src={project.image}
                  alt={project.imageAlt}
                  fill
                  className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              ) : (
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${project.gradient} transition-transform duration-700 group-hover:scale-105`}
                  aria-hidden="true"
                />
              )}

              {/* Bottom overlay */}
              <div
                className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-zinc-950/20 to-transparent"
                aria-hidden="true"
              />

              {/* Category tag */}
              <div className="absolute top-5 left-5">
                <span className="text-[9px] font-semibold tracking-[0.2em] uppercase text-white/70 border border-white/20 px-3 py-1.5">
                  {project.category}
                </span>
              </div>

              {/* Text */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="font-serif text-xl font-semibold text-white mb-1">
                  {project.title}
                </h3>
                <p className="text-white/60 text-xs tracking-wide mb-2">{project.location}</p>
                <p className="text-white/70 text-sm leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <Link
            href="/portfolio"
            className="inline-flex items-center text-xs font-semibold tracking-widest uppercase border border-zinc-900 text-zinc-900 px-8 py-4 hover:bg-zinc-950 hover:text-white hover:border-zinc-950 transition-colors duration-300"
          >
            View All Projects
          </Link>
        </div>
      </div>
    </section>
  );
}
