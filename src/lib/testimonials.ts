export interface Testimonial {
  id: string;
  /** The buyer's own words. */
  quote: string;
  /** Buyer's first name (and optionally town/county). */
  buyer: string;
  /** What prompted the commission, e.g. "A 40th birthday gift for my sister". */
  occasion: string;
  kind: "memorial" | "gift" | "multi-pet";
  /** Set to false once a real review has replaced the placeholder text. */
  placeholder: boolean;
}

const KINDS = ["memorial", "gift", "multi-pet"] as const;

/** 15 placeholder slots. Replace each with a real review, then set placeholder: false. */
export const TESTIMONIALS: Testimonial[] = Array.from({ length: 15 }, (_, i) => ({
  id: `review-${String(i + 1).padStart(2, "0")}`,
  quote: "The buyer’s own words about their portrait will go here.",
  buyer: "Buyer name, county",
  occasion: "What prompted the commission",
  kind: KINDS[i % KINDS.length],
  placeholder: true,
}));

export const ALL_PLACEHOLDERS = TESTIMONIALS.every((t) => t.placeholder);
