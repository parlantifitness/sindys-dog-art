import Link from "next/link";
import type { ComponentProps } from "react";

const VARIANTS = {
  primary:
    "bg-ink text-cream hover:bg-sage-deep border border-transparent",
  sage: "bg-sage text-ink hover:bg-sage-deep hover:text-cream border border-transparent",
  outline: "border border-ink text-ink hover:bg-ink hover:text-cream",
} as const;

interface ButtonLinkProps extends ComponentProps<typeof Link> {
  variant?: keyof typeof VARIANTS;
}

export function ButtonLink({
  variant = "primary",
  className = "",
  ...props
}: ButtonLinkProps) {
  return (
    <Link
      className={`inline-flex min-h-12 items-center justify-center px-7 py-3 text-sm font-medium uppercase tracking-[0.14em] transition-colors ${VARIANTS[variant]} ${className}`}
      {...props}
    />
  );
}
