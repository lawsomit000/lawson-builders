import Link from "next/link";
import Logo from "@/components/ui/Logo";

const serviceLinks = [
  { label: "General Contracting", href: "/services" },
  { label: "Bathroom Remodels", href: "/services" },
  { label: "Back Decks", href: "/services" },
  { label: "Patios", href: "/services" },
  { label: "Barndominiums", href: "/services" },
  { label: "Outdoor Living Spaces", href: "/services" },
  { label: "Home Additions", href: "/services" },
  { label: "Renovations & Repairs", href: "/services" },
];

const pageLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="bg-zinc-950 text-zinc-400">
      {/* Top CTA strip */}
      <div className="border-b border-zinc-800">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-10 py-16 sm:py-20 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8">
          <div>
            <p className="text-xs font-medium tracking-[0.2em] uppercase text-warm-accent mb-3">
              Start Your Project
            </p>
            <h2 className="text-3xl sm:text-4xl font-serif text-white leading-tight">
              Ready to build something{" "}
              <em className="italic">worth lasting?</em>
            </h2>
          </div>
          <Link
            href="/contact"
            className="shrink-0 text-xs font-semibold tracking-widest uppercase border border-white/30 text-white px-8 py-4 hover:bg-white hover:text-zinc-950 transition-colors duration-300"
          >
            Request a Free Estimate
          </Link>
        </div>
      </div>

      {/* Full logo centrepiece */}
      <div className="border-b border-zinc-800/60 py-14 flex justify-center">
        <Link href="/" aria-label="Todd Joseph Builders — Home">
          <Logo variant="dark" size="full" />
        </Link>
      </div>

      {/* Main footer grid */}
      <div className="max-w-screen-xl mx-auto px-6 lg:px-10 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-12">
          {/* Nav */}
          <div>
            <h3 className="text-white text-xs font-semibold uppercase tracking-widest mb-5">
              Navigate
            </h3>
            <ul className="space-y-3">
              {pageLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-zinc-500 text-sm hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white text-xs font-semibold uppercase tracking-widest mb-5">
              Services
            </h3>
            <ul className="space-y-3">
              {serviceLinks.map((s) => (
                <li key={s.label}>
                  <Link
                    href={s.href}
                    className="text-zinc-500 text-sm hover:text-white transition-colors"
                  >
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white text-xs font-semibold uppercase tracking-widest mb-5">
              Contact
            </h3>
            <ul className="space-y-5">
              <li>
                <p className="text-zinc-600 text-[10px] uppercase tracking-wider mb-1">Phone</p>
                <a href="tel:+17739578493" className="text-zinc-300 text-sm hover:text-white transition-colors">
                  (773) 957-8493
                </a>
              </li>
              <li>
                <p className="text-zinc-600 text-[10px] uppercase tracking-wider mb-1">Email</p>
                <a href="mailto:hello@tjbuild.com" className="text-zinc-300 text-sm hover:text-white transition-colors">
                  hello@tjbuild.com
                </a>
              </li>
              <li>
                <p className="text-zinc-600 text-[10px] uppercase tracking-wider mb-1">Service Area</p>
                <p className="text-zinc-400 text-sm">Middle Tennessee &amp; Surrounding Counties</p>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-zinc-800 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-zinc-600 text-xs">
            &copy; {new Date().getFullYear()} Todd Joseph Builders. All rights reserved.
          </p>
          <p className="text-zinc-700 text-xs">Licensed &amp; Insured General Contractor · Middle TN</p>
        </div>
      </div>
    </footer>
  );
}
