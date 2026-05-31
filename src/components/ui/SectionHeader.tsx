interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  titleItalic?: string;
  subtitle?: string;
  center?: boolean;
  light?: boolean;
}

export default function SectionHeader({
  eyebrow,
  title,
  titleItalic,
  subtitle,
  center = false,
  light = false,
}: SectionHeaderProps) {
  const align = center ? "text-center items-center" : "items-start";
  const titleColor = light ? "text-white" : "text-zinc-950";
  const eyebrowColor = "text-warm-accent";
  const subtitleColor = light ? "text-zinc-400" : "text-zinc-500";

  return (
    <div className={`flex flex-col gap-4 ${align}`}>
      {eyebrow && (
        <p className={`text-[10px] font-medium tracking-[0.28em] uppercase ${eyebrowColor}`}>
          {eyebrow}
        </p>
      )}
      <h2 className={`font-serif text-4xl sm:text-5xl font-semibold leading-tight ${titleColor}`}>
        {title}
        {titleItalic && (
          <>
            <br />
            <em className="italic font-normal">{titleItalic}</em>
          </>
        )}
      </h2>
      {subtitle && (
        <p className={`text-base leading-relaxed max-w-2xl ${subtitleColor}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
