const reasons = [
  {
    title: "Design-First Approach",
    description:
      "We plan the space with you before anything gets built. Layout, finishes, materials — all agreed on upfront so there are no surprises during the build.",
  },
  {
    title: "Madi & Mitch on Every Job",
    description:
      "We're owner-operated. Madi and Mitch are directly involved on every project — not managing from a distance. You have direct access to the people responsible for your home.",
  },
  {
    title: "Clear Communication",
    description:
      "No surprises, no runaround. Straight answers, realistic timelines, and regular updates before you have to ask.",
  },
  {
    title: "Quality Craftsmanship",
    description:
      "Every finish, every joint, every detail done right the first time. We hold our work to a standard we're proud of.",
  },
  {
    title: "Honest Pricing",
    description:
      "Fair bids with every line item explained. No hidden fees, no fuzzy estimates designed to grow after signing.",
  },
  {
    title: "Local & Trusted",
    description:
      "We live and work in the communities we build in. Our reputation depends on doing right by our neighbors.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-zinc-950 py-24 sm:py-32">
      <div className="max-w-screen-xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-10 mb-20">
          <div>
            <p className="text-warm-accent text-[10px] font-medium tracking-[0.28em] uppercase mb-5">
              Why Lawson Builders
            </p>
            <h2 className="font-serif text-4xl sm:text-5xl font-semibold text-white leading-tight">
              The Way Contracting
              <br />
              <em className="italic font-normal">Should Work</em>
            </h2>
          </div>
          <p className="text-zinc-400 text-base leading-relaxed max-w-sm lg:text-right">
            We built this company around the things homeowners told us they wished were
            standard. They should be.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-0 border-l border-t border-zinc-800">
          {reasons.map((reason, i) => (
            <div
              key={reason.title}
              className="border-r border-b border-zinc-800 p-10 group hover:bg-zinc-900/60 transition-colors duration-300"
            >
              <p className="text-zinc-700 text-xs font-medium tracking-widest mb-6">
                {String(i + 1).padStart(2, "0")}
              </p>
              <h3 className="font-serif text-xl font-semibold text-white mb-4">
                {reason.title}
              </h3>
              <p className="text-zinc-500 text-sm leading-relaxed">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
