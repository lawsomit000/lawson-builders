import type { Metadata } from "next";
import ContactForm from "@/components/sections/ContactForm";

export const metadata: Metadata = {
  title: "Contact | Todd Joseph Contracting",
  description:
    "Request a free estimate or get in touch with Todd Joseph Contracting. We respond quickly and love hearing about new projects.",
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
            Request a Free Estimate
          </h1>
          <p className="text-zinc-400 text-lg max-w-xl leading-relaxed">
            Whether you have detailed plans or just a rough idea, we&apos;d love to hear about
            your project. Fill out the form and we&apos;ll get back to you within one business
            day — no pressure, no sales pitch.
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
                      value: "(773) 957-8493",
                      href: "tel:+17739578493",
                    },
                    {
                      label: "Email",
                      value: "hello@tjbuild.com",
                      href: "mailto:hello@tjbuild.com",
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
                  That&apos;s completely okay. Just tell us what you&apos;re thinking and
                  we&apos;ll help you figure out scope, timeline, and budget — no commitment
                  needed.
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
