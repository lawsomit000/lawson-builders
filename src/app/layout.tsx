import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { Playfair_Display } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  style: ["normal", "italic"],
  weight: ["400", "500", "600", "700", "800"],
});

// TODO: Replace https://lawsonbuilders.com with the real production domain
export const metadata: Metadata = {
  metadataBase: new URL("https://www.lawsonbuild.com"),
  title: {
    default: "Lawson Builders | Home Design & Remodel Planning in Middle Tennessee",
    template: "%s | Lawson Builders",
  },
  description:
    "Turn your ideas into a finished design, detailed plan, and realistic budget. Lawson Builders helps Middle Tennessee homeowners plan with confidence. Free consultation call.",
  keywords: [
    "home design planning Franklin TN",
    "remodel planning Middle Tennessee",
    "interior design consultation Nashville",
    "bathroom kitchen design Franklin TN",
    "home addition planning Brentwood TN",
    "barndominium design Tennessee",
    "outdoor living design Middle Tennessee",
    "design consultation Franklin TN",
    "whole home renovation planning Nashville",
  ],
  openGraph: {
    siteName: "Lawson Builders",
    title: "Lawson Builders | Home Design & Remodel Planning in Middle Tennessee",
    description:
      "Turn your ideas into a finished design, detailed plan, and realistic budget. Serving Middle Tennessee. Free consultation call.",
    type: "website",
    locale: "en_US",
    // TODO: Replace with a new 1200×630 OG image using Lawson branding
    images: [
      {
        url: "/images/interior-arches.jpg",
        width: 1200,
        height: 630,
        alt: "Lawson Builders — home design and planning, Middle Tennessee",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Lawson Builders | Home Design & Remodel Planning in Middle Tennessee",
    description:
      "Turn your ideas into a finished design, detailed plan, and realistic budget. Free consultation call.",
    // TODO: Replace with Lawson-branded OG image
    images: ["/images/interior-arches.jpg"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "HomeAndConstructionBusiness",
  name: "Lawson Builders",
  description:
    "Home design and planning services in Middle Tennessee. We help homeowners turn their ideas into finished designs, detailed plans, and realistic budgets — so they're ready to hire a builder with confidence.",
  // TODO: Replace with real domain
  url: "https://lawsonbuilders.com",
  // TODO: Replace with real domain
  logo: "https://lawsonbuilders.com/images/logo-lll.png",
  // TODO: Replace with real phone number
  telephone: "[FILL IN: phone]",
  // TODO: Replace with real email
  email: "[FILL IN: email]",
  address: {
    "@type": "PostalAddress",
    // TODO: Add full address
    addressLocality: "[FILL IN: city]",
    addressRegion: "TN",
    addressCountry: "US",
  },
  areaServed: [
    "Franklin, TN",
    "Brentwood, TN",
    "Nashville, TN",
    "Nolensville, TN",
    "Leiper's Fork, TN",
    "Williamson County, TN",
  ],
  founders: [
    { "@type": "Person", name: "Madi Lawson" },
    { "@type": "Person", name: "Mitch Lawson" },
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Home Design & Planning Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "Free Consultation Call", serviceType: "Home Design" },
        price: "0",
        priceCurrency: "USD",
      },
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "Room Design Plan", serviceType: "Home Design" },
        price: "995",
        priceCurrency: "USD",
      },
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "Renovation Planning Package", serviceType: "Home Design" },
        price: "1950",
        priceCurrency: "USD",
      },
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "Bathroom & Kitchen Design", serviceType: "Home Design" },
      },
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "Addition & Barndominium Planning", serviceType: "Home Design" },
      },
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "Outdoor Living Design", serviceType: "Home Design" },
      },
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "Whole-Home Renovation Design", serviceType: "Home Design" },
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geist.variable} ${playfair.variable} h-full antialiased`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {/* TODO: Replace favicon, apple-touch-icon, and PWA icons with Lawson-branded assets */}
        {/* TODO: Add Google Analytics / GA4 ID for Lawson Builders — remove any previous client tracking IDs */}
        {/* TODO: Add Google Search Console verification meta tag for Lawson domain */}
      </head>
      <body className="min-h-full flex flex-col bg-white text-zinc-900 font-sans">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
