import { formatPrice, SIZES } from "@/lib/pricing";

/** £175 → "£175"; £227.5 → "£227.50". */
export function money(pounds: number): string {
  return Number.isInteger(pounds) ? formatPrice(pounds) : `£${pounds.toFixed(2)}`;
}

/** One line per size, built from the price list so guides can never disagree with it. */
export function sizeBullets(): string[] {
  return SIZES.map(
    (s) =>
      `**${s.name}** (${s.id === "large" ? "size agreed with Sindy" : s.dimensions}): from ${formatPrice(s.from)}. ${s.blurb}`
  );
}

export const PUBLISHED = "2026-10-19";
