// TODO: Replace placeholder cards with real Lawson Builders reviews.
// All previous testimonials referencing the prior business have been removed.
const placeholders = [
  { author: "— [Client Name]", location: "[City, TN]", project: "[Project Type]" },
  { author: "— [Client Name]", location: "[City, TN]", project: "[Project Type]" },
  { author: "— [Client Name]", location: "[City, TN]", project: "[Project Type]" },
  { author: "— [Client Name]", location: "[City, TN]", project: "[Project Type]" },
];

export default function Testimonials() {
  return (
    <section className="bg-white py-24 sm:py-32">
      <div className="max-w-screen-xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <div className="mb-16">
          <p className="text-warm-accent text-[10px] font-medium tracking-[0.28em] uppercase mb-5">
            Homeowner Reviews
          </p>
          <h2 className="font-serif text-4xl sm:text-5xl font-semibold text-zinc-950 leading-tight max-w-lg">
            What Our
            <br />
            <em className="italic font-normal">Clients Say</em>
          </h2>
        </div>

        {/* Placeholder grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border-l border-t border-zinc-100">
          {placeholders.map((t, i) => (
            <article
              key={i}
              className="border-r border-b border-zinc-100 p-10 flex flex-col justify-between"
            >
              <div>
                <p className="font-serif text-6xl text-zinc-100 leading-none mb-4 select-none">
                  &ldquo;
                </p>
                <blockquote className="text-zinc-300 text-base leading-relaxed italic">
                  TODO: Add real client review here.
                </blockquote>
              </div>

              <div className="mt-8 pt-6 border-t border-zinc-100 flex items-center justify-between">
                <div>
                  <p className="font-semibold text-zinc-400 text-sm">{t.author}</p>
                  <p className="text-zinc-400 text-xs mt-0.5">{t.location}</p>
                </div>
                <p className="text-warm-dark text-xs font-medium tracking-wide">
                  {t.project}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
