import { ALL_FAQS } from "@/lib/faq";
import { KEY_FACTS } from "@/lib/policies";
import { GUIDES } from "@/lib/guides";
import { EXPERIENCE_YEARS, NAV_LINKS, SITE } from "@/lib/site";

const PAGE_NOTES: Record<string, string> = {
  "/gallery": "Finished oil portraits: memorial, gift and multi-pet.",
  "/how-it-works": "The commission process from enquiry to UK delivery.",
  "/testimonials": "What customers say about their portraits.",
  "/about": `About Sindy, a UK artist painting dogs for over ${EXPERIENCE_YEARS} years.`,
  "/guides": "Guides to commissioning, photos, memorial and gift ideas, and pricing.",
  "/faq": "Answers on pricing, turnaround, revisions, refunds and shipping.",
};

/** Plain-text summary for AI assistants and answer engines (https://llmstxt.org). */
export function GET() {
  const published = GUIDES.filter((g) => g.status === "published");
  const body = [
    `# ${SITE.name}`,
    "",
    `> ${SITE.description}`,
    "",
    `${SITE.tagline}`,
    "",
    "## Key facts",
    ...KEY_FACTS.map((f) => `- ${f.label}: ${f.value}`),
    "- Portrait types: memorial portraits, gift portraits and multi-pet portraits",
    "- Medium: hand-painted oil, painted from customer photos by one artist (Sindy)",
    "- Service area: customers across the UK; no shipping outside the UK",
    "",
    "## Pages",
    `- [Commission a portrait](${SITE.url}/commission): enquiry form with photo upload, size and portrait type.`,
    ...NAV_LINKS.filter((l) => PAGE_NOTES[l.href]).map(
      (l) => `- [${l.label}](${SITE.url}${l.href}): ${PAGE_NOTES[l.href]}`
    ),
    `- [Terms of commission](${SITE.url}/terms): payment, revisions, refunds, turnaround, shipping.`,
    `- [Privacy policy](${SITE.url}/privacy): how enquiry details and photos are handled.`,
    ...(published.length
      ? ["", "## Guides", ...published.map((g) => `- [${g.title}](${SITE.url}/guides/${g.slug}): ${g.description}`)]
      : []),
    "",
    "## Common questions",
    ...ALL_FAQS.map((f) => `- ${f.question}`),
    "",
  ].join("\n");
  return new Response(body, { headers: { "Content-Type": "text/plain; charset=utf-8" } });
}
