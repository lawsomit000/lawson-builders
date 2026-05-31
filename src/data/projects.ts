type Photo = { src: string; alt: string; position?: string };

export type ProjectImage =
  | { kind: "photo"; src: string; alt: string; position?: string }
  | { kind: "gradient"; gradient: string; label: string }
  | { kind: "before-after"; before: Photo; after: Photo; label: string };

export type Project = {
  slug: string;
  title: string;
  location: string;
  category: string;
  year: string;
  scope: string;
  description: string;
  highlights: string[];
  images: ProjectImage[];
  size: "normal" | "tall" | "wide";
};

export const projects: Project[] = [
  {
    slug: "modern-master-bathroom",
    title: "Modern Master Bathroom",
    location: "Franklin, TN",
    category: "Bathroom",
    year: "2024",
    scope: "Full Remodel",
    description:
      "A complete gut and remodel of a dated master bath into a light-filled spa retreat. The design centers on the arched doorway framing a freestanding soaker tub, with natural wood accents, large-format tile, and carefully placed pendant lighting. Every surface was replaced — from the herringbone floor tile to the custom wood vanity — to create a cohesive, timeless feel.",
    highlights: [
      "Arched doorway construction",
      "Freestanding soaker tub installation",
      "Custom wood vanity & cabinetry",
      "Pendant lighting & electrical",
      "Large-format floor & wall tile",
      "Natural stone accents",
    ],
    images: [
      {
        kind: "before-after",
        before: {
          src: "/images/interior-arches.jpg",
          alt: "Master bathroom before renovation",
          position: "right 50%",
        },
        after: {
          src: "/images/interior-arches.jpg",
          alt: "Master bathroom after renovation",
          position: "center 40%",
        },
        label: "Before & After",
      },
      {
        kind: "photo",
        src: "/images/interior-arches.jpg",
        alt: "Arched hallway leading to freestanding soaker tub",
        position: "center 40%",
      },
      {
        kind: "photo",
        src: "/images/interior-arches.jpg",
        alt: "Tropical plants and warm natural light through arch",
        position: "left 30%",
      },
      {
        kind: "photo",
        src: "/images/interior-arches.jpg",
        alt: "Custom wood bench and woven rug detail",
        position: "right 70%",
      },
      {
        kind: "photo",
        src: "/images/interior-arches.jpg",
        alt: "Vanity and pendant lighting through the arch",
        position: "center 60%",
      },
    ],
    size: "tall",
  },
  {
    slug: "wraparound-composite-deck",
    title: "Wraparound Composite Deck",
    location: "Brentwood, TN",
    category: "Deck",
    year: "2023",
    scope: "New Construction",
    description:
      "A 500 sq ft wraparound composite deck designed to extend the home's living space into the backyard. Cable railings keep the sightlines open, built-in bench seating anchors the corners, and recessed deck lighting makes it usable well into the evening. A pergola-covered dining area at the rear provides shade without blocking airflow.",
    highlights: [
      "500 sq ft composite decking",
      "Stainless steel cable railing system",
      "Built-in corner bench seating",
      "Recessed deck lighting",
      "Pergola-covered dining area",
      "Code-compliant footing system",
    ],
    images: [
      { kind: "gradient", gradient: "from-amber-800 via-orange-900 to-stone-900", label: "Deck overview" },
      { kind: "gradient", gradient: "from-amber-700 via-amber-800 to-stone-800", label: "Cable railing detail" },
      { kind: "gradient", gradient: "from-stone-700 via-amber-900 to-stone-950", label: "Pergola dining area" },
      { kind: "gradient", gradient: "from-amber-900 via-orange-950 to-zinc-900", label: "Evening lighting" },
    ],
    size: "normal",
  },
  {
    slug: "custom-barndominium",
    title: "Custom Barndominium",
    location: "Leiper's Fork, TN",
    category: "Barndominium",
    year: "2023",
    scope: "Ground-Up Build",
    description:
      "A 2,400 sq ft barndominium built from steel shell erection through full interior finish-out. The open floor plan features vaulted ceilings with exposed steel, a custom kitchen with commercial-grade appliances, two full bathrooms, and a two-car attached garage. Every trade was managed in-house, with a build timeline of seven months from slab to move-in.",
    highlights: [
      "Steel shell coordination",
      "2,400 sq ft interior finish-out",
      "Vaulted ceilings with exposed steel",
      "Custom kitchen & cabinetry",
      "Two full bathrooms",
      "Attached two-car garage",
    ],
    images: [
      { kind: "gradient", gradient: "from-zinc-500 via-slate-600 to-zinc-800", label: "Exterior shell" },
      { kind: "gradient", gradient: "from-slate-400 via-zinc-500 to-slate-700", label: "Open living area" },
      { kind: "gradient", gradient: "from-zinc-600 via-slate-700 to-zinc-900", label: "Kitchen finish-out" },
      { kind: "gradient", gradient: "from-slate-500 via-zinc-600 to-slate-800", label: "Master bathroom" },
      { kind: "gradient", gradient: "from-zinc-400 via-slate-500 to-zinc-700", label: "Garage & exterior" },
    ],
    size: "normal",
  },
  {
    slug: "covered-patio-outdoor-kitchen",
    title: "Covered Patio & Outdoor Kitchen",
    location: "Nashville, TN",
    category: "Outdoor Living",
    year: "2024",
    scope: "New Construction",
    description:
      "An extended covered patio with stamped concrete, a custom pergola structure, and a full outdoor kitchen built around a built-in grill, under-counter refrigerator, and stone countertops. A wood-burning fireplace anchors the far end, making the space usable year-round. Landscape lighting and a ceiling fan system complete the build.",
    highlights: [
      "Stamped concrete patio slab",
      "Custom pergola structure",
      "Full outdoor kitchen build",
      "Wood-burning fireplace",
      "Landscape & ceiling lighting",
      "Under-counter appliance installation",
    ],
    images: [
      { kind: "gradient", gradient: "from-stone-500 via-amber-700 to-stone-700", label: "Patio overview" },
      { kind: "gradient", gradient: "from-amber-600 via-stone-600 to-stone-800", label: "Outdoor kitchen" },
      { kind: "gradient", gradient: "from-stone-600 via-amber-800 to-stone-900", label: "Fireplace detail" },
      { kind: "gradient", gradient: "from-amber-700 via-stone-700 to-zinc-800", label: "Evening ambiance" },
    ],
    size: "wide",
  },
  {
    slug: "primary-suite-addition",
    title: "Primary Suite Addition",
    location: "Franklin, TN",
    category: "Addition",
    year: "2023",
    scope: "Room Addition",
    description:
      "An 800 sq ft room addition that gave the homeowners the primary suite they'd always wanted — vaulted ceilings, an oversized walk-in closet, and a spa-inspired en-suite bathroom with heated tile floors. The addition was structurally tied into the existing home so the transition is seamless inside and out.",
    highlights: [
      "800 sq ft structural addition",
      "Vaulted ceiling framing",
      "Heated tile floor system",
      "Oversized walk-in closet build-out",
      "Spa en-suite bathroom",
      "Seamless exterior integration",
    ],
    images: [
      { kind: "gradient", gradient: "from-rose-100 via-stone-200 to-warm-200", label: "Suite overview" },
      { kind: "gradient", gradient: "from-stone-200 via-rose-100 to-stone-300", label: "Walk-in closet" },
      { kind: "gradient", gradient: "from-warm-100 via-stone-200 to-rose-100", label: "En-suite bathroom" },
      { kind: "gradient", gradient: "from-stone-300 via-warm-200 to-stone-400", label: "Exterior addition" },
    ],
    size: "normal",
  },
  {
    slug: "spa-style-hall-bathroom",
    title: "Spa-Style Hall Bathroom",
    location: "Brentwood, TN",
    category: "Bathroom",
    year: "2024",
    scope: "Full Remodel",
    description:
      "A jack-and-jill bathroom converted into a private spa retreat. Natural stone tile lines the shower and floors, custom built-in cabinetry replaced the builder-grade vanity, and backlit mirrors bring a soft ambiance to the space. Heated floors and a frameless glass shower enclosure complete the transformation.",
    highlights: [
      "Natural stone tile throughout",
      "Custom built-in cabinetry",
      "Frameless glass shower enclosure",
      "Backlit mirror installation",
      "Heated floor system",
      "Layout reconfiguration",
    ],
    images: [
      { kind: "gradient", gradient: "from-teal-600 via-teal-700 to-stone-600", label: "Full bathroom view" },
      { kind: "gradient", gradient: "from-teal-700 via-stone-600 to-teal-800", label: "Shower enclosure" },
      { kind: "gradient", gradient: "from-stone-500 via-teal-600 to-stone-700", label: "Custom vanity" },
      { kind: "gradient", gradient: "from-teal-500 via-teal-700 to-stone-800", label: "Stone tile detail" },
    ],
    size: "normal",
  },
  {
    slug: "flagstone-patio",
    title: "Flagstone Patio",
    location: "Nashville, TN",
    category: "Patio",
    year: "2023",
    scope: "New Construction",
    description:
      "An irregular flagstone patio with mortared joints set over a properly compacted base. Integrated landscape lighting is wired throughout the stone for evening use, and a custom stone fire pit serves as the centerpiece of the outdoor area. The design followed the natural grade of the yard to minimize excavation.",
    highlights: [
      "Irregular flagstone selection & setting",
      "Mortared joint system",
      "Compacted gravel base",
      "Integrated landscape lighting",
      "Custom stone fire pit",
      "Grade-following layout",
    ],
    images: [
      { kind: "gradient", gradient: "from-stone-400 via-stone-500 to-stone-700", label: "Full patio view" },
      { kind: "gradient", gradient: "from-stone-500 via-stone-600 to-stone-800", label: "Fire pit detail" },
      { kind: "gradient", gradient: "from-stone-300 via-stone-500 to-stone-600", label: "Flagstone pattern" },
      { kind: "gradient", gradient: "from-stone-600 via-stone-700 to-zinc-800", label: "Evening lighting" },
    ],
    size: "normal",
  },
  {
    slug: "screened-in-deck-addition",
    title: "Screened-In Deck Addition",
    location: "Leiper's Fork, TN",
    category: "Deck",
    year: "2024",
    scope: "Addition & Enclosure",
    description:
      "A ground-level deck expanded with a fully screened-in room addition — creating a bug-free outdoor living room that gets used year-round. Ceiling fans, screened French doors, and tongue-and-groove ceiling boards make it feel like a finished room rather than a screened porch. The deck structure was reinforced to carry the additional load.",
    highlights: [
      "Deck structural reinforcement",
      "Full screen room enclosure",
      "Screened French door system",
      "Tongue-and-groove ceiling",
      "Ceiling fan rough-in & install",
      "Composite deck surface",
    ],
    images: [
      { kind: "gradient", gradient: "from-emerald-700 via-emerald-800 to-stone-800", label: "Screen room view" },
      { kind: "gradient", gradient: "from-emerald-600 via-stone-700 to-emerald-900", label: "French door detail" },
      { kind: "gradient", gradient: "from-stone-600 via-emerald-700 to-stone-900", label: "Ceiling & fan" },
      { kind: "gradient", gradient: "from-emerald-800 via-zinc-700 to-stone-900", label: "Deck overview" },
    ],
    size: "normal",
  },
  {
    slug: "two-story-barndominium",
    title: "Two-Story Barndominium",
    location: "Franklin, TN",
    category: "Barndominium",
    year: "2022",
    scope: "Ground-Up Build",
    description:
      "A 3,200 sq ft two-story barndominium with a loft-style second level and a wraparound porch. The industrial-modern interior pairs exposed steel with warm wood finishes throughout. A commercial-grade kitchen anchors the open main floor, and the loft overlooks the living area below through a custom steel railing system.",
    highlights: [
      "3,200 sq ft two-story build",
      "Loft-style second level",
      "Wraparound covered porch",
      "Commercial-grade kitchen",
      "Custom steel loft railing",
      "Industrial-modern interior finish",
    ],
    images: [
      { kind: "gradient", gradient: "from-zinc-600 via-zinc-700 to-zinc-900", label: "Exterior overview" },
      { kind: "gradient", gradient: "from-zinc-500 via-zinc-600 to-slate-800", label: "Open main floor" },
      { kind: "gradient", gradient: "from-slate-600 via-zinc-700 to-zinc-900", label: "Loft & steel railing" },
      { kind: "gradient", gradient: "from-zinc-700 via-slate-700 to-zinc-950", label: "Wraparound porch" },
      { kind: "gradient", gradient: "from-zinc-500 via-zinc-600 to-slate-900", label: "Commercial kitchen" },
    ],
    size: "tall",
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
