/** Years Sindy has been painting dogs. Change it here and every page, guide and structured-data block updates. */
export const EXPERIENCE_YEARS = 25;

export const SITE = {
  name: "Sindy’s Dog Art",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://sindysdogart.com",
  tagline: "Every good dog deserves a masterpiece.",
  description:
    `Hand-painted custom oil portraits of dogs by Sindy, a UK artist with over ${EXPERIENCE_YEARS} years of experience. Memorial portraits and gift portraits, painted from your photos and shipped across the UK.`,
} as const;

export const NAV_LINKS = [
  { href: "/gallery", label: "Gallery" },
  { href: "/how-it-works", label: "How It Works" },
  { href: "/testimonials", label: "Testimonials" },
  { href: "/about", label: "About" },
  { href: "/guides", label: "Guides" },
  { href: "/faq", label: "FAQ" },
] as const;

/** Business inbox: receives enquiries and data-protection requests. */
export const CONTACT_EMAIL = "sindysdogart@gmail.com";

/** Trustpilot profile (read reviews) and the invitation link customers use to write one. */
export const TRUSTPILOT_URL = "https://uk.trustpilot.com/review/sindysdogart.com";
export const TRUSTPILOT_REVIEW_URL = "https://uk.trustpilot.com/evaluate/sindysdogart.com";

export const COMMISSION_HREF = "/commission";
export const COMMISSION_LABEL = "Commission a Portrait";
