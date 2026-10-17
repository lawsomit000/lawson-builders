import type { Metadata } from "next";
import Link from "next/link";
import ContactCTA from "@/components/sections/ContactCTA";

export const metadata: Metadata = {
  title: "Pricing | Lawson Builders",
  description:
    "Transparent home design pricing in Middle Tennessee. Free consultation call, Room Design Plans from $995, and Renovation Planning Packages from $1,950.",
  openGraph: {
    title: "Pricing | Lawson Builders",
    description:
      "Transparent home design pricing in Middle Tennessee. Free consultation call, Room Design Plans from $995, and Renovation Planning Packages from $1,950.",
  },
  twitter: {
    title: "Pricing | Lawson Builders",
    description:
      "Transparent home design pricing in Middle Tennessee. Free consultation call, Room Design Plans from $995, and Renovation Planning Packages from $1,950.",
  },
};

const tiers = [
  {
    num: "01",
    title: "Free Consultation Call",
    price: "Free",
    idealFor: "Anyone with a project in mind who wants to know where to start.",
    includes: [
      "30-minute phone or video call",
      "Talk through your goals and style",
      "Timeline and budget conversation",
      "Honest advice on what your project needs",
      "Recommendation for the right package",
    ],
  },
  {
    num: "02",
    title: "Room Design Plan",
    price: "$995",
    idealFor: "One room that needs a complete, shoppable plan.",
    includes: [
      "In-home kickoff visit",
      "Concept and mood board",
      "Color palette and finishes",
      "Furniture and lighting selections",
      "Sourcing and shopping list",
      "Room budget estimate",
      "One round of revisions",
    ],
  },
  {
    num: "03",
    title: "Renovation Planning Package",
    price: "$1,950",
    idealFor: "A kitchen, bathroom, or defined area you're planning to renovate.",
    includes: [
      "In-home kickoff visit",
      "Design concept, finishes, and materials",
      "Layout drawings (non-permit)",
      "Preliminary project scope",
      "Project budget and priorities",
      "Product sourcing and shopping list",
      "Contractor checklist and bid prep",
    ],
  },
];

// Comparison table rows: [feature, freeCall, roomPlan, renovationPackage]
// true = included, false = not included
const compareRows: { feature: string; free: boolean; room: boolean; reno: boolean }[] = [
  { feature: "Consultation call", free: true, room: true, reno: true },
  { feature: "In-home kickoff visit", free: false, room: true, reno: true },
  { feature: "Concept and mood board", free: false, room: true, reno: true },
  { feature: "Finishes and color palette", free: false, room: true, reno: true },
  { feature: "Furniture and lighting selections", free: false, room: true, reno: false },
  { feature: "Layout drawings (non-permit)", free: false, room: false, reno: true },
  { feature: "Preliminary project scope", free: false, room: false, reno: true },
  { feature: "Budget estimate", free: false, room: true, reno: true },
  { feature: "Sourcing and shopping list", free: false, room: true, reno: true },
  { feature: "Contractor checklist and bid prep", free: false, room: false, reno: true },
  { feature: "One round of revisions", free: false, room: true, reno: true },
];

const faqs = [
  {
    q: "Is the call really free?",
    a: "Yes. No cost, no obligation. We'll talk through your project and recommend a next step. If a package isn't the right fit, we'll tell you.",
  },
  {
    q: "When do you come to my home?",
    a: "Every paid package starts with an in-home kickoff visit, where we measure, photograph, and walk the space with you.",
  },
  {
    q: "How do I pay?",
    // TODO: Confirm payment terms — full upfront, 50/50, or other structure.
    a: "Packages are paid before work begins, with the scope agreed in writing. [TODO: Confirm payment terms — e.g., full upfront or 50% deposit, 50% on delivery.]",
  },
  {
    q: "Can I use any contractor?",
    a: "Absolutely. Your plan is yours to take to any licensed contractor you choose.",
  },
  {
    q: "Do your plans work for permits?",
    a: "Our layout drawings are for design and bidding, not permit submission. If your project needs permit or engineered drawings, your contractor or an architect can prepare those from our plan.",
  },
  {
    q: "What if my project is bigger than one room?",
    a: "We'll talk it through on your call and give you a custom quote in writing.",
  },
  {
    q: "Where do you work?",
    // TODO: Fill in service area — e.g., "Franklin, Brentwood, Nashville, Nolensville, and surrounding Middle Tennessee counties."
    a: "[FILL IN: service area — e.g., Franklin, Brentwood, Nashville, Nolensville, and surrounding Middle Tennessee counties.]",
  },
];

function Check() {
  return (
    <svg className="w-4 h-4 text-warm-accent mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
    </svg>
  );
}

function Dash() {
  return <span className="block text-center text-zinc-300 text-sm">—</span>;
}

export default function PricingPage() {
  return (
    <>
      {/* 1. Hero */}
      <section className="bg-zinc-950 pt-[72px]">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-10 py-20 sm:py-28">
          <p className="text-warm-accent text-[10px] font-medium tracking-[0.3em] uppercase mb-6">
            Pricing
          </p>
          <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl font-semibold text-white leading-[1.05] mb-8 max-w-3xl">
            Simple, Transparent
            <br />
            <em className="italic font-normal">Design Pricing</em>
          </h1>
          <p className="text-zinc-400 text-lg max-w-xl leading-relaxed mb-10">
            No hourly billing, no surprise invoices. Start with a free call, then choose
            the package that fits your project.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center text-xs font-semibold tracking-widest uppercase border border-white/30 text-white px-8 py-4 hover:bg-white hover:text-zinc-950 transition-colors duration-300"
          >
            Book a Free Call
          </Link>
        </div>
      </section>

      {/* 2. Pricing tiers */}
      <section className="bg-white py-24 sm:py-32">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-0 border-l border-t border-zinc-100">
            {tiers.map((tier) => (
              <div key={tier.num} className="border-r border-b border-zinc-100 p-8 flex flex-col">
                <p className="text-zinc-300 text-xs font-medium tracking-widest mb-6">
                  {tier.num}
                </p>
                <p className="font-serif text-3xl font-semibold text-zinc-950 mb-1">
                  {tier.price}
                </p>
                <h2 className="font-serif text-lg font-semibold text-zinc-900 mb-3">
                  {tier.title}
                </h2>
                <p className="text-zinc-400 text-xs leading-relaxed mb-6 pb-6 border-b border-zinc-100">
                  <span className="text-zinc-500 font-medium">Ideal for: </span>
                  {tier.idealFor}
                </p>
                <ul className="space-y-3 mb-8 flex-1">
                  {tier.includes.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-zinc-600">
                      <div className="w-1 h-1 rounded-full bg-warm-accent shrink-0 mt-2" />
                      {item}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/contact"
                  className="block text-center text-xs font-semibold tracking-widest uppercase bg-zinc-950 text-white px-6 py-3 hover:bg-warm-accent transition-colors duration-300 mt-auto"
                >
                  Book a Free Call
                </Link>
              </div>
            ))}
          </div>
          <p className="text-zinc-400 text-sm mt-8 leading-relaxed">
            Prices are per room or defined area. Larger or multi-room projects are quoted
            after your call, always in writing.
          </p>
        </div>
      </section>

      {/* 3. Compare packages */}
      <section className="bg-warm-50 border-t border-warm-200 py-24 sm:py-32">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-10">
          <div className="mb-16">
            <p className="text-warm-accent text-[10px] font-medium tracking-[0.28em] uppercase mb-5">
              Side by Side
            </p>
            <h2 className="font-serif text-4xl sm:text-5xl font-semibold text-zinc-950 leading-tight">
              Compare
              <br />
              <em className="italic font-normal">the Packages</em>
            </h2>
          </div>

          {/* Horizontally scrollable on mobile */}
          <div className="overflow-x-auto -mx-6 px-6 sm:mx-0 sm:px-0">
            <div className="min-w-[600px]">
              {/* Header row */}
              <div className="grid grid-cols-4 border-l border-t border-zinc-200">
                <div className="border-r border-b border-zinc-200 p-4" />
                <div className="border-r border-b border-zinc-200 p-4 text-center">
                  <p className="font-serif text-sm font-semibold text-zinc-900">Free Call</p>
                  <p className="text-warm-accent text-xs font-medium mt-0.5">Free</p>
                </div>
                <div className="border-r border-b border-zinc-200 p-4 text-center">
                  <p className="font-serif text-sm font-semibold text-zinc-900">Room Design Plan</p>
                  <p className="text-warm-accent text-xs font-medium mt-0.5">$995</p>
                </div>
                <div className="border-r border-b border-zinc-200 p-4 text-center">
                  <p className="font-serif text-sm font-semibold text-zinc-900">Renovation Package</p>
                  <p className="text-warm-accent text-xs font-medium mt-0.5">$1,950</p>
                </div>
              </div>

              {/* Feature rows */}
              {compareRows.map((row) => (
                <div key={row.feature} className="grid grid-cols-4 border-l border-zinc-200">
                  <div className="border-r border-b border-zinc-200 px-4 py-3 text-sm text-zinc-600">
                    {row.feature}
                  </div>
                  <div className="border-r border-b border-zinc-200 px-4 py-3">
                    {row.free ? <Check /> : <Dash />}
                  </div>
                  <div className="border-r border-b border-zinc-200 px-4 py-3">
                    {row.room ? <Check /> : <Dash />}
                  </div>
                  <div className="border-r border-b border-zinc-200 px-4 py-3">
                    {row.reno ? <Check /> : <Dash />}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4. What shapes your project */}
      <section className="bg-zinc-950 py-24 sm:py-32">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-10">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-10 mb-20">
            <div>
              <p className="text-warm-accent text-[10px] font-medium tracking-[0.28em] uppercase mb-5">
                Good to Know
              </p>
              <h2 className="font-serif text-4xl sm:text-5xl font-semibold text-white leading-tight">
                What Shapes
                <br />
                <em className="italic font-normal">Your Project</em>
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-0 border-l border-t border-zinc-800">
            {[
              {
                num: "01",
                title: "Size and Scope",
                description:
                  "Our packages cover one room or defined area. Bigger projects get a custom quote, always agreed in writing before we start.",
              },
              {
                num: "02",
                title: "Revisions",
                // TODO: Confirm additional revision pricing before publishing.
                description:
                  "Each package includes one round of revisions. Additional rounds are available if you need them. [TODO: confirm additional revision pricing]",
              },
              {
                num: "03",
                title: "Timeline",
                // TODO: Fill in typical delivery timeframe — e.g., "2–3 weeks of your kickoff visit."
                description:
                  "Most plans are delivered within [FILL IN: e.g., 2–3 weeks] of your kickoff visit, depending on scope.",
              },
            ].map((card) => (
              <div key={card.num} className="border-r border-b border-zinc-800 p-10">
                <p className="text-warm-accent text-xs font-medium tracking-widest mb-6">
                  {card.num}
                </p>
                <h3 className="font-serif text-xl font-semibold text-white mb-4">
                  {card.title}
                </h3>
                <p className="text-zinc-500 text-sm leading-relaxed">{card.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. What we don't do */}
      <section className="bg-warm-50 border-t border-warm-200 py-24 sm:py-32">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-10">
          <div className="max-w-2xl">
            <p className="text-warm-accent text-[10px] font-medium tracking-[0.28em] uppercase mb-5">
              Our Scope
            </p>
            <h2 className="font-serif text-4xl sm:text-5xl font-semibold text-zinc-950 leading-tight mb-8">
              Design and Planning,
              <br />
              <em className="italic font-normal">Done Right</em>
            </h2>
            <div className="bg-white border border-zinc-100 p-8">
              <p className="text-zinc-600 text-base leading-relaxed">
                We focus on design and planning so you can hire a builder with confidence.
                We don&apos;t provide construction, construction management, engineering,
                or permit drawings. If your project needs those, we&apos;ll tell you
                upfront and help you know what to ask for.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. FAQ */}
      <section className="bg-white border-t border-zinc-100 py-24 sm:py-32">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-10">
          <div className="mb-16">
            <p className="text-warm-accent text-[10px] font-medium tracking-[0.28em] uppercase mb-5">
              FAQ
            </p>
            <h2 className="font-serif text-4xl sm:text-5xl font-semibold text-zinc-950 leading-tight">
              Common
              <br />
              <em className="italic font-normal">Questions</em>
            </h2>
          </div>

          <div className="max-w-3xl divide-y divide-zinc-100 border-t border-zinc-100">
            {faqs.map((faq) => (
              <div key={faq.q} className="py-8">
                <h3 className="font-serif text-lg font-semibold text-zinc-950 mb-3">
                  {faq.q}
                </h3>
                <p className="text-zinc-500 text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Closing CTA */}
      <ContactCTA
        headline="Let's Start With"
        italicLine="a Conversation"
        subhead="Start with a free 30-minute call. No pressure, no obligation."
        buttonText="Book a Free Call"
      />
    </>
  );
}
