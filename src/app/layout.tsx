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

export const metadata: Metadata = {
  metadataBase: new URL("https://toddjosephbuilders.com"),
  title: {
    default: "Todd Joseph Builders | Built Right. Built Local. Built to Last.",
    template: "%s | Todd Joseph Builders",
  },
  description:
    "Family-owned general contractor serving Franklin, Brentwood, Nashville & Middle Tennessee. Bathroom remodels, decks, patios, barndominiums, home additions, and more — built to last generations.",
  keywords: [
    "general contractor Franklin TN",
    "home remodel Nashville",
    "deck builder Brentwood TN",
    "patio contractor Middle Tennessee",
    "barndominium builder Tennessee",
    "bathroom remodel Franklin",
    "home addition Nashville TN",
    "outdoor living spaces Tennessee",
    "family owned contractor TN",
  ],
  openGraph: {
    siteName: "Todd Joseph Builders",
    title: "Todd Joseph Builders | Built Right. Built Local. Built to Last.",
    description:
      "Family-owned general contractor serving Franklin, Brentwood, Nashville & Middle Tennessee. Craftsmanship built to last generations.",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/images/interior-arches.jpg",
        width: 1200,
        height: 630,
        alt: "Todd Joseph Builders — luxury bathroom remodel with arched doorways",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Todd Joseph Builders | Built Right. Built Local. Built to Last.",
    description:
      "Family-owned general contractor serving Franklin, Brentwood, Nashville & Middle Tennessee.",
    images: ["/images/interior-arches.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geist.variable} ${playfair.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-white text-zinc-900 font-sans">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
