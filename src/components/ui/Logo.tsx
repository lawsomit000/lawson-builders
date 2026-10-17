// Note: The image-based logo (/images/logo-lll.png) is used in Header and Footer.
// This SVG component is kept for potential future use.

interface LogoProps {
  variant?: "dark" | "light";
  size?: "mark" | "full";
  className?: string;
}

const palette = {
  dark:  { primary: "#ffffff", gold: "#c4a882" },
  light: { primary: "#252D3D", gold: "#b8904a" },
};

function RoofIcon({ primary, gold, width }: { primary: string; gold: string; width: number }) {
  return (
    <svg
      viewBox="0 0 240 52"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      style={{ width }}
    >
      <line x1="2" y1="40" x2="238" y2="40" stroke={primary} strokeWidth="2.5" strokeLinecap="round" />
      <polyline points="2,40 120,4 238,40" stroke={primary} strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
      <polyline points="46,40 120,16 194,40" stroke={gold} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function Logo({ variant = "dark", size = "mark", className = "" }: LogoProps) {
  const c = palette[variant];

  if (size === "full") {
    return (
      <div className={`flex flex-col items-center leading-none select-none ${className}`}>
        <RoofIcon primary={c.primary} gold={c.gold} width={96} />
        <div className="font-serif font-bold text-[42px] tracking-[0.05em] leading-none mt-1">
          <span style={{ color: c.primary }}>L</span>
          <span style={{ color: c.gold }}>B</span>
        </div>
        <p
          className="font-serif text-[18px] font-semibold tracking-[0.22em] uppercase mt-3"
          style={{ color: c.primary }}
        >
          Lawson
        </p>
        <div className="flex items-center gap-2.5 mt-1.5">
          <div className="h-px w-8" style={{ backgroundColor: c.gold }} />
          <p className="text-[10px] font-semibold tracking-[0.3em] uppercase" style={{ color: c.gold }}>
            Builders
          </p>
          <div className="h-px w-8" style={{ backgroundColor: c.gold }} />
        </div>
        <p
          className="text-[8px] font-medium tracking-[0.18em] uppercase mt-3"
          style={{ color: c.primary, opacity: 0.5 }}
        >
          Built Right.&nbsp;&nbsp;|&nbsp;&nbsp;Built Local.&nbsp;&nbsp;|&nbsp;&nbsp;Built to Last.
        </p>
      </div>
    );
  }

  return (
    <div className={`flex flex-col items-center leading-none select-none ${className}`}>
      <RoofIcon primary={c.primary} gold={c.gold} width={72} />
      <div className="font-serif font-bold text-[28px] tracking-[0.05em] leading-none mt-0.5">
        <span style={{ color: c.primary }}>L</span>
        <span style={{ color: c.gold }}>B</span>
      </div>
      <p className="text-[8px] font-medium tracking-[0.28em] uppercase mt-1" style={{ color: c.gold }}>
        Builders
      </p>
    </div>
  );
}
