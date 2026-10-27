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
export const TESTIMONIALS: Testimonial[] = [
  {
    id: "review-erica",
    quote:
      "I was fortunate enough to be gifted a portrait of my dogs done by Sindy. She brought out all their characteristics - cheekiness, fun, loveable and togetherness. Sindy's attention to detail - gleaned from a photo of my dogs - was exceptional. She is a real talent. I would not hesitate to recommend Sindy to undertake a portrait for you. You will not be disappointed.",
    buyer: "Erica",
    occasion: "A surprise gift — a portrait of her two dogs together",
    kind: "multi-pet",
  },
  {
    id: "review-jennie",
    quote:
      "Amazing lifelike art work. Sindy painted my dog and it's so like her. Sadly passed away now but will always have treasured memories thanks to Sindy.",
    buyer: "Jennie V.",
    occasion: "A memorial portrait after her dog passed away",
    kind: "memorial",
  },
  {
    id: "review-sue",
    quote:
      "Sindy painted the most beautiful portrait from a photograph. I was so delighted with the result, it really illustrated their true personality and many friends admire it. Thanks for the attention to detail and consummate professionalism.",
    buyer: "Sue H.",
    occasion: "A portrait painted from a photograph",
    kind: "gift",
  },
];

export const HAS_TESTIMONIALS = TESTIMONIALS.length > 0;
