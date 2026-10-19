/**
 * Single source of truth for the business rules quoted around the site.
 * The FAQ, How It Works, Terms, commission form, structured data, llms.txt and any
 * guide article should read from here instead of restating prices or policies, so
 * the wording can never drift between pages.
 */
import { formatPrice, SIZES } from "./pricing";

/**
 * PLACEHOLDER: Sindy to confirm. This is the one place the typical turnaround is
 * written; change it here and every page updates.
 */
export const TURNAROUND_ESTIMATE = "around 4–6 weeks";

export const RUSH_PERCENT = 30;
export const RUSH_NOTE = `+${RUSH_PERCENT}% for expedited turnaround — discuss with Sindy`;

export const FINAL_PRICE_NOTE =
  "Sindy will confirm the final price with you before any work begins.";
export const PRICE_NOTE = `All prices are “from” prices. ${FINAL_PRICE_NOTE}`;

/** e.g. “£95 for A5, £175 for A4, £320 for A3 and £480 for Large”. */
export function priceSummary(): string {
  const parts = SIZES.map((s) => `${formatPrice(s.from)} for ${s.name}`);
  return `${parts.slice(0, -1).join(", ")} and ${parts[parts.length - 1]}`;
}

export const LOWEST_PRICE = Math.min(...SIZES.map((s) => s.from));
export const HIGHEST_PRICE = Math.max(...SIZES.map((s) => s.from));

export const PAYMENT_SPLIT =
  "Payment is split into a 50% deposit and the remaining 50% on completion.";
export const FINAL_PAYMENT = "The final payment is due before your portrait is shipped.";

export const REVISIONS = "Two rounds of revisions are included at the sketch/outline stage.";
export const NO_REVISIONS = "Once painting is underway, no further revisions can be made.";

export const REFUND =
  "Every portrait is a custom, hand-painted commission, so refunds are not available once painting has started.";
export const LIKENESS =
  "If there is a genuine likeness issue, Sindy will offer a replacement or rework.";

export const SHIPPING = "Shipping is UK only.";

export const TURNAROUND_TYPICAL = `Allow ${TURNAROUND_ESTIMATE} for a typical portrait.`;
export const TURNAROUND_TEXT = `${TURNAROUND_TYPICAL} Timing depends on the size of your portrait and Sindy’s current schedule, and she will confirm it for yours when you enquire.`;

/** Short, quotable facts for “at a glance” blocks and llms.txt. */
export const KEY_FACTS: readonly { label: string; value: string }[] = [
  { label: "Price", value: `From ${formatPrice(LOWEST_PRICE)} (A5) to ${formatPrice(HIGHEST_PRICE)} (Large); final price confirmed before work begins` },
  { label: "Turnaround", value: `${TURNAROUND_ESTIMATE[0].toUpperCase()}${TURNAROUND_ESTIMATE.slice(1)} for a typical portrait; expedited turnaround is +${RUSH_PERCENT}% (discuss with Sindy)` },
  { label: "Payment", value: "50% deposit, 50% on completion (before shipping)" },
  { label: "Revisions", value: "Two rounds at the sketch/outline stage; none once painting is underway" },
  { label: "Refunds", value: "None once painting has started; replacement or rework for genuine likeness issues" },
  { label: "Shipping", value: "UK only" },
];

export const POLICY_UPDATED = "19 October 2026";
export const PRIVACY_EMAIL = "privacy@sindysdogart.com";
