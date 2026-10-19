import { readdirSync, readFileSync } from "node:fs";
import path from "node:path";
import { imageSize } from "image-size";

export type PortraitCategory = "memorial" | "gift" | "multi-pet";

export interface GalleryItem {
  id: string;
  category: PortraitCategory;
  title: string;
  /** Public path of the finished painting, e.g. /gallery/memorial-01.jpg. Missing = placeholder frame. */
  painting?: string;
  /** Public path of the original dog photo. Optional; enables the painting / photo toggle. */
  photo?: string;
  /** Natural pixel size of the painting, so it can be shown uncropped. */
  width?: number;
  height?: number;
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
 * Empty “coming soon” frames to show in a category until it has this many real paintings.
 * 0 shows finished work only (and hides a category that has none yet).
 */
const SLOTS_PER_CATEGORY = 0;

/**
 * Optional per-image details, keyed by item id (e.g. "memorial-01").
 * Good alt text describes the dog and the painting, e.g.
 * "Oil painting of a golden retriever lying in long grass".
 */
const DETAILS: Record<
  string,
  { title?: string; paintingAlt?: string; photoAlt?: string }
> = {
  "memorial-01": {
    title: "White dog among blue flowers",
    paintingAlt: "Oil painting of a fluffy white dog among blue flowers",
  },
  "memorial-02": {
    title: "German shepherd at the fence",
    paintingAlt: "Oil painting of a German shepherd resting its paws on a wooden fence",
  },
  "memorial-03": {
    title: "Rottweiler in the meadow",
    paintingAlt: "Oil painting of a Rottweiler in long grass with autumn trees behind",
  },
  "memorial-04": {
    title: "Spaniel on blue",
    paintingAlt: "Oil painting of a black and white spaniel with a happy open mouth against a blue background",
  },
  "memorial-05": {
    title: "Wolfhound in profile",
    paintingAlt: "Oil painting of a grey wiry-coated dog in a tartan collar looking to the side against a teal background",
  },
  "memorial-06": {
    title: "Yorkshire terrier",
    paintingAlt: "Oil painting of a Yorkshire terrier against an olive-gold background",
  },
  "memorial-07": {
    title: "Husky in the surf",
    paintingAlt: "Oil painting of a husky in a harness splashing through waves between rocks",
  },
  "memorial-08": {
    title: "Black cocker spaniel",
    paintingAlt: "Oil painting of a black cocker spaniel sitting on a paved path, looking up with brown eyes",
  },
  "memorial-09": {
    title: "Cream cocker spaniel",
    paintingAlt: "Oil painting of a cream cocker spaniel with long soft ears resting its paw, against a warm brown background",
  },
  "gift-08": {
    title: "Jack Russell at home",
    paintingAlt: "Oil painting of a Jack Russell terrier sitting up in a cosy room with a sofa and rug behind",
  },
  "gift-09": {
    title: "Springer spaniel in the sun",
    paintingAlt: "Oil painting of a liver and white springer spaniel lying on grass with its tongue out under a blue sky",
  },
  "gift-10": {
    title: "Fawn dog on gold",
    paintingAlt: "Oil painting of a fawn dog with a dark muzzle and soulful brown eyes against a golden-orange background",
  },
  "gift-01": {
    title: "Black dog in a pink harness",
    paintingAlt: "Oil painting of a black dog in a pink harness lying on sand",
  },
  "gift-02": {
    title: "Black spaniel",
    paintingAlt: "Oil painting of a black spaniel with a white chest and soulful brown eyes",
  },
  "gift-03": {
    title: "Blue-eyed husky",
    paintingAlt: "Oil painting of a grey and white husky with blue eyes against a blue background",
  },
  "gift-04": {
    title: "Black Labrador puppy",
    paintingAlt: "Oil painting of a young black Labrador stretching on a paved patio",
  },
  "gift-05": {
    title: "Fluffy white dog",
    paintingAlt: "Oil painting of a small cream-white dog with fluffy ears against a dark background",
  },
  "gift-06": {
    title: "Black Labrador on the grass",
    paintingAlt: "Oil painting of a smiling black Labrador sitting in a sunny field",
  },
  "gift-07": {
    title: "Westie in the grass",
    paintingAlt: "Oil painting of a West Highland white terrier lying in grass looking upwards",
  },
  "multi-pet-01": {
    title: "Millie and Nellie",
    paintingAlt: "Oil painting of Nellie the French bulldog and Millie the Yorkshire terrier in matching red harnesses",
  },
  "multi-pet-02": {
    title: "Spaniel and Yorkie",
    paintingAlt: "Oil painting of a black spaniel and a Yorkshire terrier lying together",
  },
};

/** The paintings shown, left to right, in “Recent portraits” on the home page. */
const FEATURED_IDS = ["gift-08", "memorial-03", "multi-pet-01"];

const FILE_PATTERN = /^(memorial|gift|multi-pet)-(\d+)(-photo)?\.(jpe?g|png|webp|avif)$/i;

const CATEGORY_LABEL: Record<PortraitCategory, string> = {
  memorial: "memorial",
  gift: "gift",
  "multi-pet": "multi-pet",
};

function paintingSize(publicPath: string): { width?: number; height?: number } {
  try {
    const { width, height } = imageSize(
      readFileSync(path.join(process.cwd(), "public", publicPath))
    );
    return { width, height };
  } catch {
    return {};
  }
}

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
        ...(files.painting ? paintingSize(files.painting) : {}),
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

/** Home page “Recent portraits”: the FEATURED_IDS that exist, falling back to the first few paintings. */
export function getFeaturedItems(): GalleryItem[] {
  const items = getGalleryItems();
  const featured = FEATURED_IDS.flatMap((id) => items.find((item) => item.id === id) ?? []);
  return featured.length > 0 ? featured : items.filter((item) => item.painting).slice(0, 3);
}
