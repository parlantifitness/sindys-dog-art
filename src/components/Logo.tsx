const SIZES = {
  sm: { mark: "h-6 w-9", text: "text-4xl" },
  md: { mark: "h-7 w-10", text: "text-5xl" },
  lg: { mark: "h-10 w-14", text: "text-7xl sm:text-8xl" },
} as const;

/** Single line-drawn brushstroke that sits above the wordmark. */
export function BrushMark({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 56 40"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <path
        d="M4 36 C4 20 14 8 24 6 C22 4 22 2 24 2 C30 2 34 10 34 16 C42 18 50 26 52 36"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
    </svg>
  );
}

/** “Sindy’s” over “Dog Art” in Alex Brush, centred, with the brushstroke above. */
export function Logo({
  size = "md",
  className = "",
}: {
  size?: keyof typeof SIZES;
  className?: string;
}) {
  const s = SIZES[size];
  return (
    <span
      className={`inline-flex flex-col items-center text-ink ${className}`}
    >
      <BrushMark className={`${s.mark} mb-1 text-sage`} />
      <span
        className={`font-script ${s.text} block text-center leading-[0.92]`}
      >
        <span className="block">Sindy’s</span>
        <span className="block">Dog Art</span>
      </span>
    </span>
  );
}
