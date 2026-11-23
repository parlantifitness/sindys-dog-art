import { guide as bestPhotos } from "@/content/guides/best-photos";
import { guide as canvasToWall } from "@/content/guides/canvas-to-wall";
import { guide as copingWithLoss } from "@/content/guides/coping-with-loss";
import { guide as cost } from "@/content/guides/cost";
import { guide as customisingPortrait } from "@/content/guides/customising-your-portrait";
import { guide as giftIdeas } from "@/content/guides/gift-ideas";
import { guide as howToCommission } from "@/content/guides/how-to-commission";
import { guide as memorialIdeas } from "@/content/guides/memorial-ideas";
import { guide as multiDogs } from "@/content/guides/photographing-multiple-dogs";
import { guide as petPortraitPricesUk } from "@/content/guides/pet-portrait-prices-uk";
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
  copingWithLoss,
  customisingPortrait,
  petPortraitPricesUk,
];

export function getGuide(slug: string): Guide | undefined {
  return GUIDES.find((guide) => guide.slug === slug);
}

export interface GuideTopic {
  id: string;
  title: string;
  blurb: string;
  slugs: string[];
}

/** Topic groups on the guides index. Any guide not listed here still appears, under “More guides”. */
export const GUIDE_TOPICS: GuideTopic[] = [
  {
    id: "commissioning",
    title: "Commissioning and caring for a portrait",
    blurb: "How the process works, what you can personalise, and looking after your painting.",
    slugs: [
      "how-to-commission-a-dog-portrait-from-a-photo",
      "customising-your-dog-portrait-background-colours-details",
      "caring-for-and-hanging-your-oil-portrait",
    ],
  },
  {
    id: "prices",
    title: "Prices and what affects them",
    blurb: "What a hand-painted portrait costs, and how it compares across the UK.",
    slugs: ["how-much-does-a-custom-oil-dog-portrait-cost", "pet-portrait-prices-uk"],
  },
  {
    id: "photos",
    title: "Choosing and taking photos",
    blurb: "Getting a reference photo Sindy can paint from, for one dog or several.",
    slugs: ["best-photos-for-a-dog-portrait", "photographing-multiple-dogs-for-a-portrait"],
  },
  {
    id: "memorials-gifts",
    title: "Memorials and gifts",
    blurb: "Ideas for remembering a dog, support through the loss, and giving a portrait.",
    slugs: [
      "dog-memorial-portrait-ideas",
      "coping-with-the-loss-of-a-dog",
      "dog-portrait-gift-ideas",
    ],
  },
];

/** The topics with their guides resolved, plus a trailing “More guides” group for any left over. */
export function getGuideTopics(): (Omit<GuideTopic, "slugs"> & { guides: Guide[] })[] {
  const placed = new Set(GUIDE_TOPICS.flatMap((t) => t.slugs));
  const topics = GUIDE_TOPICS.map(({ slugs, ...topic }) => ({
    ...topic,
    guides: slugs.flatMap((s) => GUIDES.find((g) => g.slug === s) ?? []),
  }));
  const rest = GUIDES.filter((g) => !placed.has(g.slug));
  if (rest.length > 0) {
    topics.push({
      id: "more",
      title: "More guides",
      blurb: "Further reading from Sindy.",
      guides: rest,
    });
  }
  return topics.filter((t) => t.guides.length > 0);
}
