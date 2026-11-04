import Link from "next/link";

const pricingCards = [
  {
    num: "01",
    title: "Free Consultation Call",
    description:
      "Your first call is always free. We talk through your project, goals, timeline, and budget, and recommend the right package — no strings attached.",
  },
  {
    num: "02",
    title: "Design Packages",
    description:
      "Design packages are fixed-fee engagements with a clear scope agreed in writing before we start. Pricing is based on project type and scale — from a single-room concept to a full renovation plan. We'll recommend the right fit on your free call.",
  },
];

export default function PricingProcess() {
  return (
    <section className="bg-white py-24 sm:py-32">
      <div className="max-w-screen-xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-10 mb-20">
          <div>
            <p className="text-warm-accent text-[10px] font-medium tracking-[0.28em] uppercase mb-5">
              Pricing
            </p>
            <h2 className="font-serif text-4xl sm:text-5xl font-semibold text-zinc-950 leading-tight">
              Simple, Transparent
              <br />
              <em className="italic font-normal">Design Pricing</em>
            </h2>
          </div>
          <p className="text-zinc-500 text-base leading-relaxed max-w-sm lg:text-right">
            The first call is always free. Design fees are straightforward and
            explained before you commit to anything.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-0 border-l border-t border-zinc-100">
          {pricingCards.map((card) => (
            <div key={card.num} className="border-r border-b border-zinc-100 p-10">
              <p className="text-zinc-300 text-xs font-medium tracking-widest mb-6">
                {card.num}
              </p>
              <h3 className="font-serif text-lg font-semibold text-zinc-900 mb-4">
                {card.title}
              </h3>
              <p className="text-sm leading-relaxed text-zinc-500">
                {card.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col sm:flex-row items-start sm:items-center gap-6">
          <Link
            href="/contact"
            className="inline-flex items-center text-xs font-semibold tracking-widest uppercase bg-zinc-950 text-white px-8 py-4 hover:bg-warm-accent transition-colors duration-300"
          >
            Book a Free Call
          </Link>
          <p className="text-zinc-400 text-sm">
            Questions about pricing? Ask us in your free call — we&apos;ll walk you through everything.
          </p>
        </div>
      </div>
    </section>
  );
}
