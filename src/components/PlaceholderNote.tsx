import type { ReactNode } from "react";

/** Visible marker for copy that Sindy still needs to supply. Search for <PlaceholderNote> to find them all. */
export function PlaceholderNote({ children }: { children: ReactNode }) {
  return (
    <p className="my-6 border border-dashed border-sage bg-sage-soft/60 px-5 py-4 text-sm text-ink-soft">
      <span className="mr-2 font-medium uppercase tracking-[0.18em] text-sage-deep">
        Placeholder
      </span>
      {children}
    </p>
  );
}
