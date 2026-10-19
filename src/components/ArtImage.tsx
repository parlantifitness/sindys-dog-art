import Image from "next/image";
import { BrushMark } from "./Logo";

/** A 4:5 frame showing an image, or a tidy placeholder when no image has been added yet. */
export function ArtImage({
  src,
  alt,
  label = "Painting coming soon",
  sizes = "(min-width: 1024px) 25vw, (min-width: 640px) 33vw, 50vw",
  priority = false,
  className = "",
}: {
  src?: string;
  alt: string;
  label?: string;
  sizes?: string;
  priority?: boolean;
  className?: string;
}) {
  return (
    <div
      className={`relative aspect-[4/5] overflow-hidden bg-sage-soft ${className}`}
    >
      {src ? (
        <Image
          src={src}
          alt={alt}
          fill
          sizes={sizes}
          priority={priority}
          className="object-cover"
        />
      ) : (
        <div className="absolute inset-3 flex flex-col items-center justify-center gap-3 border border-sage/50 text-center">
          <BrushMark className="h-6 w-9 text-sage" />
          <p className="px-3 text-xs uppercase tracking-[0.2em] text-sage-deep">
            {label}
          </p>
        </div>
      )}
    </div>
  );
}
