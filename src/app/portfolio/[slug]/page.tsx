import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getProject, projects } from "@/data/projects";
import ImageCarousel from "@/components/portfolio/ImageCarousel";
import ContactCTA from "@/components/sections/ContactCTA";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};

  const firstPhoto = project.images.find(
    (img) => img.kind === "photo" || img.kind === "before-after"
  );
  const ogImage =
    firstPhoto?.kind === "photo"
      ? firstPhoto.src
      : firstPhoto?.kind === "before-after"
      ? firstPhoto.after.src
      : "/images/interior-arches.jpg";

  return {
    title: project.title,
    description: project.description,
    openGraph: {
      title: `${project.title} | Lawson Builders`,
      description: project.description,
      images: [{ url: ogImage, width: 1200, height: 630, alt: project.title }],
    },
    twitter: {
      images: [ogImage],
    },
  };
}

export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  // Adjacent projects for prev/next nav
  const idx = projects.findIndex((p) => p.slug === slug);
  const prev = idx > 0 ? projects[idx - 1] : null;
  const next = idx < projects.length - 1 ? projects[idx + 1] : null;

  return (
    <>
      {/* Fixed-header spacer */}
      <div className="h-[72px] bg-warm-50" />

      {/* Carousel — full width, no container constraints */}
      <ImageCarousel images={project.images} title={project.title} />

      {/* Project detail */}
      <section className="bg-white py-16 sm:py-24">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-10">
          {/* Back link */}
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-2 text-xs font-medium tracking-widest uppercase text-zinc-400 hover:text-zinc-900 transition-colors mb-12 group"
          >
            <svg className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19l-7-7 7-7" />
            </svg>
            All Projects
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            {/* Main content */}
            <div className="lg:col-span-7">
              <p className="text-warm-accent text-[10px] font-medium tracking-[0.28em] uppercase mb-4">
                {project.category}
              </p>
              <h1 className="font-serif text-4xl sm:text-5xl font-semibold text-zinc-950 leading-tight mb-6">
                {project.title}
              </h1>
              <p className="text-zinc-500 text-base leading-relaxed">
                {project.description}
              </p>

              <div className="mt-12 pt-10 border-t border-zinc-100">
                <h2 className="font-serif text-xl font-semibold text-zinc-950 mb-6">
                  Project Highlights
                </h2>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {project.highlights.map((h) => (
                    <li key={h} className="flex items-center gap-3 text-sm text-zinc-600">
                      <div className="w-1 h-1 rounded-full bg-warm-accent shrink-0" />
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Sidebar specs */}
            <div className="lg:col-span-4 lg:col-start-9">
              <div className="border border-zinc-100 divide-y divide-zinc-100">
                {[
                  { label: "Location", value: project.location },
                  { label: "Category", value: project.category },
                  { label: "Scope", value: project.scope },
                  { label: "Year Completed", value: project.year },
                ].map(({ label, value }) => (
                  <div key={label} className="px-6 py-5">
                    <p className="text-zinc-400 text-[10px] font-medium tracking-[0.2em] uppercase mb-1">
                      {label}
                    </p>
                    <p className="text-zinc-900 font-medium">{value}</p>
                  </div>
                ))}

                <div className="px-6 py-6">
                  <Link
                    href="/contact"
                    className="block text-center text-xs font-semibold tracking-widest uppercase bg-warm-accent text-white px-6 py-4 hover:bg-zinc-900 transition-colors duration-300"
                  >
                    Start a Similar Project
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Prev / Next navigation */}
          <div className="mt-20 pt-10 border-t border-zinc-100 flex items-center justify-between gap-6">
            {prev ? (
              <Link
                href={`/portfolio/${prev.slug}`}
                className="group flex items-center gap-3 text-sm text-zinc-500 hover:text-zinc-900 transition-colors"
              >
                <svg className="w-5 h-5 group-hover:-translate-x-0.5 transition-transform shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19l-7-7 7-7" />
                </svg>
                <span>
                  <span className="block text-[10px] tracking-widest uppercase text-zinc-400 mb-0.5">Previous</span>
                  <span className="font-semibold text-zinc-900">{prev.title}</span>
                </span>
              </Link>
            ) : (
              <div />
            )}

            {next ? (
              <Link
                href={`/portfolio/${next.slug}`}
                className="group flex items-center gap-3 text-sm text-zinc-500 hover:text-zinc-900 transition-colors text-right"
              >
                <span>
                  <span className="block text-[10px] tracking-widest uppercase text-zinc-400 mb-0.5">Next</span>
                  <span className="font-semibold text-zinc-900">{next.title}</span>
                </span>
                <svg className="w-5 h-5 group-hover:translate-x-0.5 transition-transform shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            ) : (
              <div />
            )}
          </div>
        </div>
      </section>

      <ContactCTA />
    </>
  );
}
