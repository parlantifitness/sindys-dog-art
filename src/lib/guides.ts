export interface Guide {
  slug: string;
  title: string;
  description: string;
  /** Planned headings, shown until the article is written. */
  outline: string[];
  /** Set to "published" once the article body is written; drafts are noindexed. */
  status: "draft" | "published";
}

export const GUIDES: Guide[] = [
  {
    slug: "how-to-commission-a-dog-portrait-from-a-photo",
    title: "How to commission a dog portrait from a photo",
    description:
      "A step-by-step guide to commissioning a hand-painted oil portrait of your dog from a photo, from first enquiry to delivery.",
    outline: [
      "What a commissioned dog portrait involves",
      "Choosing a photo and a size",
      "The sketch stage and your revisions",
      "Painting, payment and shipping",
    ],
    status: "draft",
  },
  {
    slug: "best-photos-for-a-dog-portrait",
    title: "Best photos to use for a dog portrait",
    description:
      "How to choose or take the best photo of your dog for a painted portrait: light, angle, detail and what to avoid.",
    outline: [
      "Why the photo matters so much",
      "Light, focus and angle",
      "Capturing personality and expression",
      "Common photo problems and how to fix them",
    ],
    status: "draft",
  },
  {
    slug: "dog-memorial-portrait-ideas",
    title: "Dog memorial portrait ideas",
    description:
      "Thoughtful ideas for a memorial portrait of a much-loved dog, from choosing the right photo to personal details worth including.",
    outline: [
      "Choosing the moment you want to remember",
      "Including a favourite place, collar or toy",
      "Single portraits and family tributes",
      "Giving a memorial portrait as a gesture of support",
    ],
    status: "draft",
  },
  {
    slug: "how-much-does-a-custom-oil-dog-portrait-cost",
    title: "How much does a custom oil dog portrait cost?",
    description:
      "What affects the price of a custom oil dog portrait, with Sindy’s from-prices for A5, A4, A3 and Large sizes.",
    outline: [
      "Sindy’s from-prices by size",
      "What can change the final price",
      "Expedited turnaround",
      "How payment works",
    ],
    status: "draft",
  },
  {
    slug: "dog-portrait-gift-ideas",
    title: "Dog portrait gift ideas",
    description:
      "Gift ideas for dog lovers: when a custom dog portrait makes the perfect present, and how to organise one in good time.",
    outline: [
      "Birthdays, Christmas and anniversaries",
      "Gifts for new dog owners and dog lovers",
      "How to give a portrait as a surprise",
      "Planning ahead for a deadline",
    ],
    status: "draft",
  },
];

export function getGuide(slug: string): Guide | undefined {
  return GUIDES.find((guide) => guide.slug === slug);
}
