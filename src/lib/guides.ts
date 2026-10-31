import { guide as bestPhotos } from "@/content/guides/best-photos";
import { guide as canvasToWall } from "@/content/guides/canvas-to-wall";
import { guide as cost } from "@/content/guides/cost";
import { guide as giftIdeas } from "@/content/guides/gift-ideas";
import { guide as howToCommission } from "@/content/guides/how-to-commission";
import { guide as memorialIdeas } from "@/content/guides/memorial-ideas";
import { guide as multiDogs } from "@/content/guides/photographing-multiple-dogs";
import type { Guide } from "./guide-types";

export type { Guide } from "./guide-types";

export const GUIDES: Guide[] = [
  howToCommission,
  bestPhotos,
  memorialIdeas,
  cost,
  giftIdeas,
  multiDogs,
  canvasToWall,
];

export function getGuide(slug: string): Guide | undefined {
  return GUIDES.find((guide) => guide.slug === slug);
}
