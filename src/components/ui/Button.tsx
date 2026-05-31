import Link from "next/link";

type ButtonVariant = "primary" | "secondary" | "outline";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps {
  href?: string;
  onClick?: () => void;
  children: React.ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  type?: "button" | "submit" | "reset";
}

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-zinc-950 text-white hover:bg-warm-accent focus-visible:ring-zinc-900",
  secondary:
    "bg-white text-zinc-950 hover:bg-warm-accent hover:text-white focus-visible:ring-white",
  outline:
    "border border-zinc-900 text-zinc-900 hover:bg-zinc-950 hover:text-white focus-visible:ring-zinc-900",
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: "px-5 py-2.5 text-xs",
  md: "px-8 py-4 text-xs",
  lg: "px-10 py-4 text-xs",
};

export default function Button({
  href,
  onClick,
  children,
  variant = "primary",
  size = "md",
  className = "",
  type = "button",
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center font-semibold tracking-widest uppercase transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 cursor-pointer";
  const classes = `${base} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
