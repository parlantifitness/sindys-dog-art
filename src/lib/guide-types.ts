/** Article model for /guides. Content lives in src/content/guides/. */
export type Block =
  | { type: "p"; text: string }
  | { type: "h3"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "ol"; items: string[] }
  | { type: "note"; title?: string; text: string }
  | { type: "steps" }
  | { type: "pricing" }
  | { type: "facts" }
  | { type: "painting"; id: string; caption: string; photo?: boolean }
  | { type: "cta"; text: string };

export interface GuideSection {
  id: string;
  title: string;
  blocks: Block[];
}

export interface GuideFaq {
  question: string;
  answer: string;
}

export interface Guide {
  slug: string;
  /** The page heading (H1). */
  title: string;
  /** Shorter title for the browser tab and search results (keep under ~45 characters; the site name is added). */
  metaTitle?: string;
  /** Meta description. */
  description: string;
  /** A direct 40–60 word answer shown at the top and quoted by search and AI answers. */
  quickAnswer: string;
  /** ISO dates, set by hand (no runtime clock under Cache Components). */
  published: string;
  updated: string;
  sections: GuideSection[];
  faqs: GuideFaq[];
  /** Slugs of other guides to link to at the end. */
  related: string[];
  /** Optional step-by-step HowTo structured data. */
  howTo?: { name: string; steps: { name: string; text: string }[] };
  /** "draft" guides are noindexed and left out of the sitemap. */
  status: "draft" | "published";
}

// Small builders keep the content files readable.
export const p = (text: string): Block => ({ type: "p", text });
export const h3 = (text: string): Block => ({ type: "h3", text });
export const ul = (...items: string[]): Block => ({ type: "ul", items });
export const ol = (...items: string[]): Block => ({ type: "ol", items });
export const note = (text: string, title?: string): Block => ({ type: "note", text, title });
export const painting = (id: string, caption: string, photo = false): Block => ({
  type: "painting",
  id,
  caption,
  photo,
});
export const cta = (text: string): Block => ({ type: "cta", text });
export const steps: Block = { type: "steps" };
export const pricing: Block = { type: "pricing" };
export const facts: Block = { type: "facts" };

export function wordCount(guide: Guide): number {
  const text: string[] = [guide.quickAnswer];
  for (const s of guide.sections) {
    text.push(s.title);
    for (const b of s.blocks) {
      if ("text" in b) text.push(b.text);
      if ("items" in b) text.push(...b.items);
    }
  }
  return text.join(" ").split(/\s+/).filter(Boolean).length;
}

export function readingMinutes(guide: Guide): number {
  return Math.max(2, Math.round(wordCount(guide) / 220));
}
