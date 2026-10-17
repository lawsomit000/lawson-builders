import type { Metadata } from "next";
import ContactForm from "@/components/sections/ContactForm";

export const metadata: Metadata = {
  title: "Book a Free Call | Lawson Builders",
  description:
    "Book a free 30-minute call with Lawson Builders in Middle Tennessee. Talk through your project, goals, and budget. No pressure, no obligation.",
  openGraph: {
    title: "Book a Free Call | Lawson Builders",
    description:
      "Book a free 30-minute call with Lawson Builders. We'll talk through your project and recommend the right next step. Middle Tennessee.",
  },
};

export default function ContactPage() {
  return (
    <>
      {/* Page header */}
      <section className="bg-zinc-950 pt-[72px]">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-10 py-20 sm:py-28">
          <p className="text-warm-accent text-[10px] font-medium tracking-[0.3em] uppercase mb-6">
            Let&apos;s Talk
          </p>
          <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl font-semibold text-white leading-[1.05] mb-8 max-w-2xl">
            Book a Free Call
          </h1>
          <p className="text-zinc-400 text-lg max-w-xl leading-relaxed">
            Fill out the form and we&apos;ll reach out within one business day to schedule
            your free 30-minute call — no pressure, no obligation.
          </p>
        </div>
      </section>

      {/* Contact section */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            {/* Sidebar */}
            <div className="space-y-10">
              <div>
                <h2 className="font-serif text-2xl font-semibold text-zinc-950 mb-8">
                  Get in Touch
                </h2>

                <div className="space-y-8">
                  {[
                    {
                      label: "Phone",
                      // TODO: Replace with real Lawson phone number
                      value: "[FILL IN: phone]",
                      href: "tel:+1XXXXXXXXXX",
                    },
                    {
                      label: "Email",
                      // TODO: Replace with real Lawson email
                      value: "[FILL IN: email]",
                      href: "mailto:hello@lawsonbuilders.com",
                    },
                  ].map((item) => (
                    <div key={item.label} className="border-b border-zinc-100 pb-8">
                      <p className="text-zinc-400 text-[10px] font-medium tracking-[0.2em] uppercase mb-2">
                        {item.label}
                      </p>
                      <a
                        href={item.href}
                        className="text-zinc-900 font-medium hover:text-warm-accent transition-colors"
                      >
                        {item.value}
                      </a>
                    </div>
                  ))}

                  <div className="border-b border-zinc-100 pb-8">
                    <p className="text-zinc-400 text-[10px] font-medium tracking-[0.2em] uppercase mb-2">
                      Response Time
                    </p>
                    <p className="text-zinc-900 font-medium">Within 1 business day</p>
                  </div>

                  <div>
                    <p className="text-zinc-400 text-[10px] font-medium tracking-[0.2em] uppercase mb-2">
                      Service Area
                    </p>
                    <p className="text-zinc-900 font-medium">
                      Middle Tennessee &amp; Surrounding Counties
                    </p>
                  </div>
                </div>
              </div>

              <div
                className="p-8 text-white"
                style={{
                  background: "linear-gradient(155deg, #1c1a14 0%, #111310 100%)",
                }}
              >
                <p className="text-warm-accent text-[9px] font-medium tracking-[0.2em] uppercase mb-3">
                  Not Sure Where to Start?
                </p>
                <p className="text-zinc-300 text-sm leading-relaxed">
                  That&apos;s exactly what the free call is for. Just tell us what
                  you&apos;re thinking and we&apos;ll help you figure out the right next
                  step — no commitment needed.
                </p>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-2">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
