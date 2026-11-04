import Link from "next/link";
import Image from "next/image";

const serviceLinks = [
  { label: "Design Consultation", href: "/services#design-consultation" },
  { label: "Bathroom & Kitchen Design", href: "/services#bathrooms-kitchens" },
  { label: "Addition & Barndominium Planning", href: "/services#additions-barndominiums" },
  { label: "Outdoor Living Design", href: "/services#outdoor-living" },
  { label: "Whole-Home Renovation Design", href: "/services#whole-home-renovations" },
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
      {/* Logo centrepiece */}
      <div className="border-b border-zinc-800/60 py-14 flex justify-center">
        <Link href="/" aria-label="Lawson Builders — Home">
          <Image
            src="/images/logo-lll.png"
            alt="Lawson Builders"
            width={120}
            height={120}
            style={{ display: "block" }}
          />
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
                <p className="text-zinc-600 text-[10px] uppercase tracking-wider mb-1">Text Me</p>
                <a href="tel:+16159229948" className="text-zinc-300 text-sm hover:text-white transition-colors">
                  615-922-9948
                </a>
              </li>
              <li>
                <p className="text-zinc-600 text-[10px] uppercase tracking-wider mb-1">Email</p>
                <a href="mailto:mitch@lawsonbuild.com" className="text-zinc-300 text-sm hover:text-white transition-colors">
                  mitch@lawsonbuild.com
                </a>
              </li>
              <li>
                <p className="text-zinc-600 text-[10px] uppercase tracking-wider mb-1">Website</p>
                <a href="https://www.lawsonbuild.com" className="text-zinc-300 text-sm hover:text-white transition-colors">
                  www.lawsonbuild.com
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
            &copy; {new Date().getFullYear()} Lawson Builders. All rights reserved.
          </p>
          {/* TODO: Confirm insurance status before adding "Insured" back to this line */}
          <p className="text-zinc-700 text-xs">Home Design &amp; Planning · Middle Tennessee</p>
        </div>
      </div>
    </footer>
  );
}
