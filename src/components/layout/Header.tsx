"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/services", label: "Services" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/about", label: "About" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 72);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const transparent = isHome && !scrolled && !open;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        transparent ? "bg-transparent" : "bg-zinc-950"
      }`}
    >
      <div className="max-w-screen-xl mx-auto px-6 lg:px-10">
        <div className="flex items-center justify-between h-[72px]">
          {/* Logo */}
          <Link href="/" className="flex items-center" aria-label="Todd Joseph Builders — Home">
            <Image
              src="/images/logo-tjb-alpha.png"
              alt="Todd Joseph Builders"
              width={96}
              height={64}
              style={{ filter: "brightness(0) invert(1)" }}
              priority
            />
          </Link>

          {/* Desktop nav — centered */}
          <nav className="hidden md:flex items-center gap-10 absolute left-1/2 -translate-x-1/2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium tracking-wide transition-colors ${
                  pathname === link.href
                    ? "text-white"
                    : "text-zinc-400 hover:text-white"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Right side */}
          <div className="hidden md:flex items-center gap-6">
            <Link
              href="/contact"
              className={`text-sm font-medium tracking-wide transition-colors ${
                pathname === "/contact" ? "text-white" : "text-zinc-400 hover:text-white"
              }`}
            >
              Contact
            </Link>
            <Link
              href="/contact"
              className="text-xs font-semibold tracking-widest uppercase border border-white/30 text-white px-5 py-2.5 hover:bg-white hover:text-zinc-950 transition-colors duration-300"
            >
              Free Estimate
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2 text-white"
            onClick={() => setOpen(!open)}
            aria-label={open ? "Close menu" : "Open menu"}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {open ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-zinc-950 border-t border-zinc-800">
          <nav className="flex flex-col px-6 py-6 gap-5">
            {[...navLinks, { href: "/contact", label: "Contact" }].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-base font-medium text-zinc-300 hover:text-white transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="mt-2 text-xs font-semibold tracking-widest uppercase border border-white/30 text-white px-5 py-3 text-center hover:bg-white hover:text-zinc-950 transition-colors"
            >
              Free Estimate
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
