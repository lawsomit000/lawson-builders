import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { projects } from "@/data/projects";
import ContactCTA from "@/components/sections/ContactCTA";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "Browse completed projects across Middle Tennessee — bathroom remodels, decks, patios, barndominiums, home additions, and outdoor living spaces.",
  openGraph: {
    title: "Portfolio | Todd Joseph Builders",
    description:
      "Browse completed projects across Middle Tennessee — bathroom remodels, decks, patios, barndominiums, home additions, and outdoor living spaces.",
    images: [{ url: "/images/interior-arches.jpg", width: 1200, height: 630, alt: "Completed bathroom remodel by Todd Joseph Builders" }],
  },
  twitter: {
    images: ["/images/interior-arches.jpg"],
  },
};

const categories = ["All", "Bathroom", "Deck", "Patio", "Barndominium", "Addition", "Outdoor Living"];

const cardGradients: Record<string, string> = {
  "modern-master-bathroom": "",
  "wraparound-composite-deck": "from-amber-800 via-orange-900 to-stone-900",
  "custom-barndominium": "from-zinc-500 via-slate-600 to-zinc-800",
  "covered-patio-outdoor-kitchen": "from-stone-500 via-amber-700 to-stone-700",
  "primary-suite-addition": "from-rose-100 via-stone-200 to-stone-400",
  "spa-style-hall-bathroom": "from-teal-600 via-teal-700 to-stone-600",
  "flagstone-patio": "from-stone-400 via-stone-500 to-stone-700",
  "screened-in-deck-addition": "from-emerald-700 via-emerald-800 to-stone-800",
  "two-story-barndominium": "from-zinc-600 via-zinc-700 to-zinc-900",
};

export default function PortfolioPage() {
  return (
    <>
      {/* Page header */}
      <section className="bg-zinc-950 pt-[72px]">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-10 py-20 sm:py-28">
          <p className="text-warm-accent text-[10px] font-medium tracking-[0.3em] uppercase mb-6">
            Past Work
          </p>
          <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl font-semibold text-white leading-[1.05] mb-8 max-w-2xl">
            Portfolio
          </h1>
          <p className="text-zinc-400 text-lg max-w-xl leading-relaxed">
            Projects completed across Middle TN — from bathroom remodels to full barndominium
            builds. Click any project to see the full photo gallery.
          </p>
        </div>
      </section>

      {/* Category filter */}
      <div className="bg-zinc-900 border-b border-zinc-800">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-10 py-4 flex flex-wrap gap-6">
          {categories.map((cat, i) => (
            <span
              key={cat}
              className={`text-xs font-medium tracking-widest uppercase cursor-default transition-colors ${
                i === 0 ? "text-white" : "text-zinc-600 hover:text-zinc-300"
              }`}
            >
              {cat}
            </span>
          ))}
        </div>
      </div>

      {/* Projects grid */}
      <section className="py-16 sm:py-24 bg-warm-50">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {projects.map((project) => {
              const firstImage = project.images[0];
              const gradient = cardGradients[project.slug];

              return (
                <Link
                  key={project.slug}
                  href={`/portfolio/${project.slug}`}
                  className={`relative overflow-hidden group block ${
                    project.size === "tall" ? "sm:row-span-2" : ""
                  } ${project.size === "wide" ? "sm:col-span-2" : ""} ${
                    project.size === "tall" ? "h-[480px]" : "h-[300px]"
                  }`}
                >
                  {/* Background */}
                  {firstImage.kind === "photo" ? (
                    <Image
                      src={firstImage.src}
                      alt={firstImage.alt}
                      fill
                      className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  ) : firstImage.kind === "before-after" ? (
                    <Image
                      src={firstImage.after.src}
                      alt={firstImage.after.alt}
                      fill
                      className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  ) : (
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${gradient || firstImage.gradient} transition-transform duration-700 group-hover:scale-105`}
                      aria-hidden="true"
                    />
                  )}

                  {/* Overlay */}
                  <div
                    className="absolute inset-0 bg-gradient-to-t from-zinc-950/85 via-zinc-950/20 to-transparent"
                    aria-hidden="true"
                  />

                  {/* Image count badge */}
                  <div className="absolute top-4 right-4 flex items-center gap-1.5 bg-black/40 backdrop-blur-sm text-white/80 text-[10px] font-medium tracking-widest px-2.5 py-1.5">
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    {project.images.length}
                  </div>

                  {/* Category tag */}
                  <div className="absolute top-4 left-4">
                    <span className="text-[9px] font-semibold tracking-[0.2em] uppercase text-white/70 border border-white/20 px-3 py-1">
                      {project.category}
                    </span>
                  </div>

                  {/* Text + hover arrow */}
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <div className="flex items-end justify-between gap-3">
                      <div>
                        <h2 className="font-serif text-xl font-semibold text-white leading-snug mb-1">
                          {project.title}
                        </h2>
                        <p className="text-white/50 text-xs tracking-wide">{project.location}</p>
                      </div>
                      <div className="shrink-0 w-9 h-9 border border-white/30 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <ContactCTA />
    </>
  );
}
