const steps = [
  {
    num: "01",
    title: "Free Call",
    description:
      "We start with a free 30-minute call to hear your ideas, goals, timeline, and budget, and recommend the right package.",
  },
  {
    num: "02",
    title: "Inspiration & Kickoff",
    description:
      "We visit your home, walk the space, take measurements, and gather the ideas you've been saving — whether that's a Pinterest board or a feeling you can't quite describe.",
  },
  {
    num: "03",
    title: "Design",
    description:
      "We turn your inspiration into a real design concept, with mood boards, layout direction, and the look and feel of the finished space.",
  },
  {
    num: "04",
    title: "Selections",
    description:
      "Tile, fixtures, cabinetry, lighting, furniture. We help you choose every finish and document it, so nothing gets decided on the fly later.",
  },
  {
    num: "05",
    title: "Planning & Budgeting",
    description:
      "We put it all into a clear plan with a scope and realistic budget, so the design you love is one you can actually afford.",
  },
  {
    num: "06",
    title: "Ready for Bids",
    description:
      "You leave with a plan any contractor can price accurately — with apples-to-apples bids and fewer surprises.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-zinc-950 py-24 sm:py-32">
      <div className="max-w-screen-xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-10 mb-20">
          <div>
            <p className="text-warm-accent text-[10px] font-medium tracking-[0.28em] uppercase mb-5">
              Our Process
            </p>
            <h2 className="font-serif text-4xl sm:text-5xl font-semibold text-white leading-tight">
              From Inspiration
              <br />
              <em className="italic font-normal">to Ready-to-Bid</em>
            </h2>
          </div>
          <p className="text-zinc-400 text-base leading-relaxed max-w-sm lg:text-right">
            A clear, step-by-step process — so you always know where your project stands
            and what comes next.
          </p>
        </div>

        {/* Steps grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-0 border-l border-t border-zinc-800">
          {steps.map((step) => (
            <div
              key={step.num}
              className="border-r border-b border-zinc-800 p-10"
            >
              <p className="text-warm-accent text-xs font-medium tracking-widest mb-6">
                {step.num}
              </p>
              <h3 className="font-serif text-xl font-semibold text-white mb-4">
                {step.title}
              </h3>
              <p className="text-zinc-500 text-sm leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
