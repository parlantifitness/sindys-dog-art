import { guide as bestPhotos } from "@/content/guides/best-photos";
import { guide as cost } from "@/content/guides/cost";
import { guide as giftIdeas } from "@/content/guides/gift-ideas";
import { guide as howToCommission } from "@/content/guides/how-to-commission";
import { guide as memorialIdeas } from "@/content/guides/memorial-ideas";
import type { Guide } from "./guide-types";

export type { Guide } from "./guide-types";

/** Display order on the guides index. */
export const GUIDES: Guide[] = [howToCommission, bestPhotos, memorialIdeas, cost, giftIdeas];

export function getGuide(slug: string): Guide | undefined {
  return GUIDES.find((guide) => guide.slug === slug);
}
