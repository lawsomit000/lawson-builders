const testimonials = [
  {
    quote:
      "Todd transformed our master bathroom into something we're truly proud of. The tile work is immaculate, the timeline was accurate, and the whole process felt stress-free. Highly recommend.",
    author: "Sarah M.",
    location: "Franklin, TN",
    project: "Bathroom Remodel",
  },
  {
    quote:
      "We hired Todd for a back deck and had him come back the following spring for a covered patio. He does exactly what he says he's going to do, on time and on budget. That's rare.",
    author: "James & Kelli R.",
    location: "Brentwood, TN",
    project: "Deck & Patio",
  },
  {
    quote:
      "Our barndominium build was a big undertaking. Todd walked us through every phase and we never felt out of the loop. The finished product exceeded our expectations.",
    author: "Mike D.",
    location: "Leiper's Fork, TN",
    project: "Barndominium",
  },
  {
    quote:
      "From the first walkthrough to the final punch list, Todd was professional and thorough. Our home addition blends seamlessly — you'd never know it wasn't there from the start.",
    author: "Linda H.",
    location: "Nashville, TN",
    project: "Home Addition",
  },
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

        {/* Testimonials grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border-l border-t border-zinc-100">
          {testimonials.map((t) => (
            <article
              key={t.author}
              className="border-r border-b border-zinc-100 p-10 flex flex-col justify-between"
            >
              {/* Large serif quote mark */}
              <div>
                <p className="font-serif text-6xl text-zinc-100 leading-none mb-4 select-none">
                  &ldquo;
                </p>
                <blockquote className="text-zinc-700 text-base leading-relaxed">
                  {t.quote}
                </blockquote>
              </div>

              <div className="mt-8 pt-6 border-t border-zinc-100 flex items-center justify-between">
                <div>
                  <p className="font-semibold text-zinc-900 text-sm">{t.author}</p>
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
