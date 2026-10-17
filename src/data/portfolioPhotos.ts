// ─────────────────────────────────────────────────────────────────────────────
// PORTFOLIO PHOTOS
// ─────────────────────────────────────────────────────────────────────────────
// To add a new photo:
//   1. Drop the image file into /public/images/portfolio/
//   2. Add an entry to the array below
//   3. Set span: "tall" for portrait photos, "wide" for panoramic shots,
//      "normal" for standard landscape photos
// ─────────────────────────────────────────────────────────────────────────────

export type PortfolioPhoto = {
  id: string;
  src: string;           // path relative to /public, e.g. "/images/portfolio/my-photo.jpg"
  alt: string;
  title: string;
  location: string;      // TODO: fill in the city for each project
  category: string;
  span: "normal" | "wide" | "tall";
};

export const portfolioPhotos: PortfolioPhoto[] = [
  {
    id: "white-brick-exterior",
    src: "/images/portfolio/photo-17.webp",
    alt: "White painted brick ranch exterior with craftsman front door and fresh landscaping",
    title: "White Brick Ranch Exterior",
    location: "Middle Tennessee",
    category: "Renovation",
    span: "wide",
  },
  {
    id: "open-plan-kitchen-dining",
    src: "/images/portfolio/photo-18.webp",
    alt: "Open-plan kitchen and dining area with white painted brick interior wall and light wood floors",
    title: "Open-Plan Kitchen & Dining",
    location: "Middle Tennessee",
    category: "Renovation",
    span: "wide",
  },
  {
    id: "vaulted-kitchen-island",
    src: "/images/portfolio/photo-15.webp",
    alt: "Open-concept kitchen with wood island, farmhouse sink, arched niche, and vaulted ceiling",
    title: "Vaulted Kitchen with Wood Island",
    location: "Middle Tennessee",
    category: "Renovation",
    span: "wide",
  },
  {
    id: "powder-room-shiplap",
    src: "/images/portfolio/photo-03.webp",
    alt: "Powder room with shiplap accent wall, white vanity, marble countertop, and gold faucet",
    title: "Shiplap Powder Room",
    location: "Middle Tennessee",
    category: "Remodel",
    span: "tall",
  },
  {
    id: "marble-shower-detail",
    src: "/images/portfolio/photo-12.webp",
    alt: "Walk-in shower with marble slab surround, built-in bench, and bronze handheld fixture",
    title: "Marble Shower Suite",
    location: "Middle Tennessee",
    category: "Remodel",
    span: "tall",
  },
  {
    id: "covered-outdoor-deck",
    src: "/images/portfolio/photo-09.webp",
    alt: "Covered outdoor deck with stained wood ceiling, wicker patio furniture, and ceiling fan",
    title: "Covered Outdoor Living Deck",
    location: "Middle Tennessee",
    category: "Outdoor",
    span: "wide",
  },
  {
    id: "green-vanity-bathroom",
    src: "/images/portfolio/photo-01.webp",
    alt: "Bathroom remodel with sage green vanity, gold fixtures, white subway tile, and tub-shower combo",
    title: "Sage Green Bathroom Remodel",
    location: "Middle Tennessee",
    category: "Remodel",
    span: "normal",
  },
  {
    id: "double-vanity-marble-bath",
    src: "/images/portfolio/photo-02.webp",
    alt: "Master bathroom with double wood vanity, arched mirrors, marble walk-in shower, and gold fixtures",
    title: "Master Bath with Marble Shower",
    location: "Middle Tennessee",
    category: "Remodel",
    span: "normal",
  },
  {
    id: "brick-fireplace-living",
    src: "/images/portfolio/photo-04.webp",
    alt: "Living room with leather sofa, brick fireplace, built-in shelving, and dark hardwood floors",
    title: "Brick Fireplace Living Room",
    location: "Middle Tennessee",
    category: "Renovation",
    span: "normal",
  },
  {
    id: "white-kitchen-marble-island",
    src: "/images/portfolio/photo-05.webp",
    alt: "Kitchen renovation with white cabinets, marble waterfall island, subway tile backsplash, and stainless appliances",
    title: "White Kitchen with Marble Island",
    location: "Middle Tennessee",
    category: "Renovation",
    span: "wide",
  },
  {
    id: "dark-vanity-bathroom",
    src: "/images/portfolio/photo-06.webp",
    alt: "Bathroom with dark matte black vanity, round mirror, subway tile tub surround, and gold accents",
    title: "Black Vanity Bath Remodel",
    location: "Middle Tennessee",
    category: "Remodel",
    span: "normal",
  },
  {
    id: "living-room-wide",
    src: "/images/portfolio/photo-07.webp",
    alt: "Wide-angle living room with dark hardwood floors, built-ins, and natural light",
    title: "Open Living Room Renovation",
    location: "Middle Tennessee",
    category: "Renovation",
    span: "normal",
  },
  {
    id: "dining-room-wicker",
    src: "/images/portfolio/photo-08.webp",
    alt: "Dining room with round table, wicker chairs, and plantation shutters",
    title: "Dining Room Refresh",
    location: "Middle Tennessee",
    category: "Renovation",
    span: "normal",
  },
  {
    id: "open-dining-kitchen",
    src: "/images/portfolio/photo-10.webp",
    alt: "Open dining room connected to kitchen with hardwood floors and natural light",
    title: "Kitchen & Dining Open Concept",
    location: "Middle Tennessee",
    category: "Renovation",
    span: "normal",
  },
  {
    id: "gray-island-kitchen",
    src: "/images/portfolio/photo-11.webp",
    alt: "Kitchen with gray island, white upper cabinets, and open connection to dining area",
    title: "Gray Island Kitchen Remodel",
    location: "Middle Tennessee",
    category: "Renovation",
    span: "normal",
  },
  {
    id: "sage-home-office",
    src: "/images/portfolio/photo-13.webp",
    alt: "Home office with sage green accent walls, dark wood desk, and plantation shutters",
    title: "Sage Green Home Office",
    location: "Middle Tennessee",
    category: "Renovation",
    span: "normal",
  },
  {
    id: "shiplap-bedroom",
    src: "/images/portfolio/photo-14.webp",
    alt: "Primary bedroom with shiplap accent wall and navy blue bedding",
    title: "Shiplap Accent Bedroom",
    location: "Middle Tennessee",
    category: "Renovation",
    span: "normal",
  },
  {
    id: "white-kitchen-perimeter",
    src: "/images/portfolio/photo-16.webp",
    alt: "Kitchen with white perimeter cabinets, open shelving, and light wood floors",
    title: "White Perimeter Kitchen",
    location: "Middle Tennessee",
    category: "Renovation",
    span: "normal",
  },
  {
    id: "white-kitchen-gray-island-bar",
    src: "/images/portfolio/photo-19.webp",
    alt: "Kitchen with white cabinets, gray island with bar seating, and stainless appliances",
    title: "White & Gray Kitchen with Bar Seating",
    location: "Middle Tennessee",
    category: "Renovation",
    span: "normal",
  },
  {
    id: "green-double-vanity-bath",
    src: "/images/portfolio/photo-20.webp",
    alt: "Bathroom with double sage green vanities, dual round mirrors, and gold fixtures",
    title: "Double Vanity Primary Bath",
    location: "Middle Tennessee",
    category: "Remodel",
    span: "tall",
  },
  {
    id: "craftsman-foyer",
    src: "/images/portfolio/photo-21.webp",
    alt: "Bright foyer and living area with craftsman front door and light hardwood floors",
    title: "Craftsman Entry & Living Space",
    location: "Middle Tennessee",
    category: "Renovation",
    span: "normal",
  },
];
