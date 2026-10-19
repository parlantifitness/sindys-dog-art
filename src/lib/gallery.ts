import { readdirSync } from "node:fs";
import path from "node:path";

export type PortraitCategory = "memorial" | "gift" | "multi-pet";

export interface GalleryItem {
  id: string;
  category: PortraitCategory;
  title: string;
  /** Public path of the finished painting, e.g. /gallery/memorial-01.jpg. Missing = placeholder frame. */
  painting?: string;
  /** Public path of the original dog photo. Optional; enables the painting / photo toggle. */
  photo?: string;
  paintingAlt: string;
  photoAlt: string;
}

export const CATEGORIES: readonly {
  id: PortraitCategory;
  label: string;
  intro: string;
}[] = [
  {
    id: "memorial",
    label: "Memorial portraits",
    intro:
      "Gentle, lasting tributes to dogs who have passed. Each one is painted to capture the look in their eyes that you remember best.",
  },
  {
    id: "gift",
    label: "Gift portraits",
    intro:
      "Birthdays, Christmas, anniversaries, new homes and “just because”: a one-of-a-kind present for someone who adores their dog.",
  },
  {
    id: "multi-pet",
    label: "Multi-pet portraits",
    intro:
      "Two dogs, three dogs, or dogs and their feline housemates, brought together in a single painting.",
  },
];

/**
 * How many frames each category shows while it has fewer real paintings than this.
 * Set to 0 before launch if you would rather show only finished work.
 */
const SLOTS_PER_CATEGORY = 10;

/**
 * Optional per-image details, keyed by item id (e.g. "memorial-01").
 * Good alt text describes the dog and the painting, e.g.
 * "Oil painting of a golden retriever lying in long grass".
 */
const DETAILS: Record<
  string,
  { title?: string; paintingAlt?: string; photoAlt?: string }
> = {};

const FILE_PATTERN = /^(memorial|gift|multi-pet)-(\d+)(-photo)?\.(jpe?g|png|webp|avif)$/i;

const CATEGORY_LABEL: Record<PortraitCategory, string> = {
  memorial: "memorial",
  gift: "gift",
  "multi-pet": "multi-pet",
};

function listGalleryFiles(): string[] {
  try {
    return readdirSync(path.join(process.cwd(), "public", "gallery"));
  } catch {
    return [];
  }
}

/**
 * Builds the gallery from files in /public/gallery named
 *   {category}-{number}.jpg         the finished painting
 *   {category}-{number}-photo.jpg   the original dog photo (optional)
 * where category is memorial, gift or multi-pet.
 */
export function getGalleryItems(): GalleryItem[] {
  const found = new Map<string, { painting?: string; photo?: string }>();

  for (const file of listGalleryFiles()) {
    const match = FILE_PATTERN.exec(file);
    if (!match) continue;
    const [, category, num, photoSuffix] = match;
    const id = `${category.toLowerCase()}-${num.padStart(2, "0")}`;
    const entry = found.get(id) ?? {};
    entry[photoSuffix ? "photo" : "painting"] = `/gallery/${file}`;
    found.set(id, entry);
  }

  const items: GalleryItem[] = [];

  for (const { id: category } of CATEGORIES) {
    const real = [...found.entries()]
      .filter(([id]) => id.startsWith(`${category}-`))
      .sort(([a], [b]) => a.localeCompare(b, undefined, { numeric: true }));

    const count = Math.max(real.length, SLOTS_PER_CATEGORY);
    for (let i = 0; i < count; i++) {
      const [id, files] = real[i] ?? [
        `${category}-placeholder-${String(i + 1).padStart(2, "0")}`,
        {},
      ];
      const detail = DETAILS[id] ?? {};
      const label = CATEGORY_LABEL[category];
      items.push({
        id,
        category,
        title: detail.title ?? `Portrait ${String(i + 1).padStart(2, "0")}`,
        painting: files.painting,
        photo: files.photo,
        paintingAlt:
          detail.paintingAlt ??
          `Hand-painted oil portrait of a dog (${label} commission)`,
        photoAlt:
          detail.photoAlt ?? `Original photo of the dog used for this ${label} portrait`,
      });
    }
  }

  return items;
}
