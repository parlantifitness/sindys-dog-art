"use client";

import { useState } from "react";
import type { GalleryItem } from "@/lib/gallery";
import { ArtImage } from "./ArtImage";

/** Gallery tile. When an original photo exists, a toggle flips between the painting and the photo. */
export function GalleryCard({ item }: { item: GalleryItem }) {
  const [view, setView] = useState<"painting" | "photo">("painting");
  const showPhoto = view === "photo" && item.photo;

  return (
    <figure>
      <ArtImage
        src={showPhoto ? item.photo : item.painting}
        alt={showPhoto ? item.photoAlt : item.paintingAlt}
      />
      <figcaption className="mt-3 flex items-center justify-between gap-3 text-sm">
        <span className="font-display text-lg text-ink">{item.title}</span>
        {item.photo ? (
          <span
            role="group"
            aria-label={`View ${item.title} as painting or original photo`}
            className="inline-flex border border-line text-xs uppercase tracking-[0.12em]"
          >
            {(["painting", "photo"] as const).map((option) => (
              <button
                key={option}
                type="button"
                aria-pressed={view === option}
                onClick={() => setView(option)}
                className={`min-h-9 px-3 transition-colors ${
                  view === option
                    ? "bg-ink text-cream"
                    : "text-ink-soft hover:text-ink"
                }`}
              >
                {option === "painting" ? "Painting" : "Photo"}
              </button>
            ))}
          </span>
        ) : null}
      </figcaption>
    </figure>
  );
}
