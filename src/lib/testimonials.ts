export interface Testimonial {
  id: string;
  /** The buyer's own words, exactly as given. */
  quote: string;
  /** How the buyer wants to be named, e.g. "Jane, Leeds". */
  buyer: string;
  /** What prompted the commission, e.g. "A 40th birthday gift for my sister". */
  occasion: string;
  kind: "memorial" | "gift" | "multi-pet";
}

/**
 * Real customer reviews shown on /testimonials. Only add reviews from genuine, independent
 * customers (with their permission). Leave empty until then: the page then shows just the
 * Trustpilot links and stays out of search results and the sitemap.
 */
export const TESTIMONIALS: Testimonial[] = [];

export const HAS_TESTIMONIALS = TESTIMONIALS.length > 0;
