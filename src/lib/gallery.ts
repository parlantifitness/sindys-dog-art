import { existsSync, readdirSync, readFileSync } from "node:fs";
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
  photoWidth?: number;
  photoHeight?: number;
  /** Label for the second view in the card toggle; defaults to “Photo”. */
  photoLabel?: string;
  paintingAlt: string;
  photoAlt: string;
  /** On the home page strip, show the photo-beside-painting shot instead of the painting alone. */
  featureAsPhoto?: boolean;
  /** CSS object-position used when the painting is cropped to a fixed frame (e.g. home page strip). */
  focus?: string;
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
 * Per-image details, keyed by the file name without its extension. The order here is the
 * order paintings appear in the gallery (within each category); files not listed come last.
 * Good alt text describes the dog and the painting.
 */
const DETAILS: Record<
  string,
  {
    title?: string;
    paintingAlt?: string;
    photoAlt?: string;
    photoLabel?: string;
    featureAsPhoto?: boolean;
    focus?: string;
  }
> = {
  "hand-painted-fluffy-white-dog-blue-flowers-oil-portrait-memorial": {
    title: "White dog among blue flowers",
    paintingAlt: "Hand-painted oil portrait of a fluffy white dog among blue flowers, painted as a memorial piece",
  },
  "hand-painted-german-shepherd-oil-portrait-memorial": {
    title: "German shepherd at the fence",
    paintingAlt: "Hand-painted oil portrait of a German Shepherd resting its paws on a wooden fence, painted as a memorial piece",
  },
  "hand-painted-rottweiler-oil-portrait-memorial": {
    title: "Rottweiler in the meadow",
    paintingAlt: "Hand-painted oil portrait of a Rottweiler in long grass with autumn trees behind, painted as a memorial piece",
  },
  "hand-painted-black-and-white-spaniel-oil-portrait-memorial": {
    title: "Spaniel on blue",
    paintingAlt: "Hand-painted oil portrait of a black and white spaniel with a happy open mouth against a blue background, painted as a memorial piece",
  },
  "hand-painted-grey-wiry-coated-dog-oil-portrait-memorial": {
    title: "Wolfhound in profile",
    paintingAlt: "Hand-painted oil portrait of a grey wiry-coated dog in a tartan collar looking to the side against a teal background, painted as a memorial piece",
  },
  "hand-painted-yorkshire-terrier-oil-portrait-memorial": {
    title: "Yorkshire terrier",
    paintingAlt: "Hand-painted oil portrait of a Yorkshire Terrier against an olive-gold background, painted as a memorial piece",
  },
  "hand-painted-husky-surf-oil-portrait-memorial": {
    title: "Husky in the surf",
    paintingAlt: "Hand-painted oil portrait of a husky in a harness splashing through waves between rocks, painted as a memorial piece",
  },
  "hand-painted-black-cocker-spaniel-oil-portrait-memorial": {
    title: "Black cocker spaniel",
    paintingAlt: "Hand-painted oil portrait of a black cocker spaniel sitting on a paved path, looking up with brown eyes, painted as a memorial piece",
  },
  "hand-painted-cream-cocker-spaniel-oil-portrait-memorial": {
    title: "Cream cocker spaniel",
    paintingAlt: "Hand-painted oil portrait of a cream cocker spaniel with long soft ears resting its paw, against a warm brown background, painted as a memorial piece",
  },
  "hand-painted-black-poodle-oil-portrait-memorial": {
    title: "Black poodle",
    paintingAlt: "Hand-painted oil portrait of a black poodle with curly fur tilting its head against a soft blue-grey background, painted as a memorial piece",
  },
  "hand-painted-black-dog-pink-harness-oil-portrait-gift": {
    title: "Black dog in a pink harness",
    paintingAlt: "Hand-painted oil portrait of a black dog in a pink harness lying on sand, painted as a gift portrait",
  },
  "hand-painted-black-spaniel-oil-portrait-gift": {
    title: "Black spaniel",
    paintingAlt: "Hand-painted oil portrait of a black spaniel with a white chest and soulful brown eyes, painted as a gift portrait",
  },
  "hand-painted-blue-eyed-husky-oil-portrait-gift": {
    title: "Blue-eyed husky",
    paintingAlt: "Hand-painted oil portrait of a grey and white husky with blue eyes against a blue background, painted as a gift portrait",
  },
  "hand-painted-black-labrador-puppy-oil-portrait-gift": {
    title: "Black Labrador puppy",
    paintingAlt: "Hand-painted oil portrait of a young black Labrador stretching on a paved patio, painted as a gift portrait",
  },
  "hand-painted-fluffy-white-dog-oil-portrait-gift": {
    title: "Fluffy white dog",
    paintingAlt: "Hand-painted oil portrait of a small cream-white dog with fluffy ears against a dark background, painted as a gift portrait",
  },
  "hand-painted-black-labrador-grass-oil-portrait-gift": {
    title: "Black Labrador on the grass",
    paintingAlt: "Hand-painted oil portrait of a smiling black Labrador sitting in a sunny field, painted as a gift portrait",
  },
  "hand-painted-westie-oil-portrait-gift": {
    title: "Westie in the grass",
    paintingAlt: "Hand-painted oil portrait of a West Highland White Terrier lying in grass looking upwards, painted as a gift portrait",
  },
  "hand-painted-jack-russell-oil-portrait-gift": {
    title: "Jack Russell at home",
    paintingAlt: "Hand-painted oil portrait of a Jack Russell Terrier sitting up in a cosy room with a sofa and rug behind, painted as a gift portrait",
  },
  "hand-painted-springer-spaniel-oil-portrait-gift": {
    title: "Springer spaniel in the sun",
    paintingAlt: "Hand-painted oil portrait of a liver and white springer spaniel lying on grass with its tongue out under a blue sky, painted as a gift portrait",
  },
  "hand-painted-fawn-dog-gold-background-oil-portrait-gift": {
    title: "Fawn dog on gold",
    paintingAlt: "Hand-painted oil portrait of a fawn dog with a dark muzzle and soulful brown eyes against a golden-orange background, painted as a gift portrait",
  },
  "hand-painted-french-bulldog-birthday-oil-portrait-gift": {
    title: "Birthday boy",
    paintingAlt: "Hand-painted oil portrait of a fawn French bulldog in a blue star-patterned party hat resting its chin on a table beside a birthday cake with a candle, painted as a gift portrait",
    photoLabel: "Compare",
    featureAsPhoto: true,
    photoAlt: "Original reference photo of a French bulldog beside the finished hand-painted oil portrait, painted as a gift portrait, showing how closely the painting matches",
    focus: "center 12%",
  },
  "hand-painted-bulldog-patsy-oil-portrait-gift": {
    title: "Patsy the bulldog",
    paintingAlt: "Hand-painted oil portrait of Patsy, a white and fawn bulldog with amber eyes, against a warm orange background, painted as a gift portrait",
    photoAlt: "Original reference photo of Patsy the bulldog, used for her hand-painted oil portrait",
  },
  "hand-painted-brown-scruffy-faced-dog-oil-portrait-memorial": {
    title: "Brown dog with amber eyes",
    paintingAlt: "Hand-painted oil portrait of a brown dog with a scruffy muzzle and amber eyes against a soft pastel background, painted as a memorial piece",
  },
  "hand-painted-black-dog-blue-collar-oil-portrait-memorial": {
    title: "Black dog in a blue collar",
    paintingAlt: "Hand-painted oil portrait of a black dog looking upwards in a blue tartan collar against a soft pink, gold and teal background, painted as a memorial piece",
  },
  "hand-painted-brindle-dog-profile-oil-portrait-gift": {
    title: "Brindle dog in profile",
    paintingAlt: "Hand-painted oil portrait of a brindle dog in profile wearing a brown leather collar and harness against a green background, painted as a gift portrait",
  },
  "multi-pet-01": {
    title: "Millie and Nellie",
    paintingAlt: "Oil painting of Nellie the French bulldog and Millie the Yorkshire terrier in matching red harnesses",
  },
  "multi-pet-02": {
    title: "Spaniel and Yorkie",
    paintingAlt: "Oil painting of a black spaniel and a Yorkshire terrier lying together",
  },
  "hand-painted-brown-spaniel-and-scruffy-white-dog-oil-portrait-multi-pet": {
    title: "Spaniel and friend on the sofa",
    paintingAlt: "Hand-painted oil portrait of a brown spaniel lying beside a small scruffy white dog with black ears, together on a sofa, painted as a multi-pet portrait",
    photoAlt: "Original reference photo of a brown spaniel and a small scruffy white dog on a sofa, used for their hand-painted oil portrait",
  },
  "hand-painted-two-white-dogs-blue-flowers-oil-portrait-multi-pet": {
    title: "Two white dogs among blue flowers",
    paintingAlt: "Hand-painted oil portrait of two white dogs side by side against a blue sky, with blue flowers and long grass in front, painted as a multi-pet portrait",
  },
};

/** The paintings shown, left to right, in “Recent portraits” on the home page. */
const FEATURED_IDS = ["hand-painted-grey-wiry-coated-dog-oil-portrait-memorial", "hand-painted-french-bulldog-birthday-oil-portrait-gift", "multi-pet-01"];

const EXT = "(?:jpe?g|png|webp|avif)";
/** hand-painted-{description}-oil-portrait-{category}[-photo].jpg */
const NAMED_FILE = new RegExp(`^(hand-painted-.+-oil-portrait-(memorial|gift|multi-pet))(-photo)?\\.${EXT}$`, "i");
/** {category}-{number}[-photo].jpg (simple numbered names) */
const NUMBERED_FILE = new RegExp(`^((memorial|gift|multi-pet)-\\d+)(-photo)?\\.${EXT}$`, "i");

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
 *   hand-painted-{description}-oil-portrait-{category}.jpg         the finished painting
 *   hand-painted-{description}-oil-portrait-{category}-photo.jpg   the original dog photo (optional)
 * where category is memorial, gift or multi-pet. Simple names such as multi-pet-01.jpg also work.
 */
export function getGalleryItems(): GalleryItem[] {
  const found = new Map<string, { category: PortraitCategory; painting?: string; photo?: string }>();

  for (const file of listGalleryFiles()) {
    const named = NAMED_FILE.exec(file);
    const numbered = named ? null : NUMBERED_FILE.exec(file);
    const match = named ?? numbered;
    if (!match) continue;
    const id = match[1].toLowerCase();
    const category = match[2].toLowerCase() as PortraitCategory;
    const entry = found.get(id) ?? { category };
    entry[match[3] ? "photo" : "painting"] = `/gallery/${file}`;
    found.set(id, entry);
  }

  const detailOrder = Object.keys(DETAILS);
  const rank = (id: string) => {
    const i = detailOrder.indexOf(id);
    return i === -1 ? Number.MAX_SAFE_INTEGER : i;
  };

  const items: GalleryItem[] = [];

  for (const { id: category } of CATEGORIES) {
    const real = [...found.entries()]
      .filter(([, files]) => files.category === category)
      .sort(([a], [b]) => rank(a) - rank(b) || a.localeCompare(b, undefined, { numeric: true }));

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
        ...(files.photo
          ? (({ width, height }) => ({ photoWidth: width, photoHeight: height }))(
              paintingSize(files.photo)
            )
          : {}),
        photoLabel: detail.photoLabel,
        featureAsPhoto: detail.featureAsPhoto,
        paintingAlt:
          detail.paintingAlt ??
          `Hand-painted oil portrait of a dog (${label} commission)`,
        photoAlt:
          detail.photoAlt ?? `Original photo of the dog used for this ${label} portrait`,
        focus: detail.focus,
      });
    }
  }

  return items;
}

/**
 * Home page “Recent portraits”: the FEATURED_IDS that exist, falling back to the first few paintings.
 * A trimmed copy at public/featured/{id}.jpg, if present, is shown here instead of the full painting
 * (the gallery always shows the whole thing).
 */
export function getFeaturedItems(): GalleryItem[] {
  const items = getGalleryItems().map((item) => {
    const trimmed = `/featured/${item.id}.jpg`;
    if (!existsSync(path.join(process.cwd(), "public", trimmed))) return item;
    return { ...item, painting: trimmed, ...paintingSize(trimmed) };
  });
  const featured = FEATURED_IDS.flatMap((id) => items.find((item) => item.id === id) ?? []);
  return featured.length > 0 ? featured : items.filter((item) => item.painting).slice(0, 3);
}
