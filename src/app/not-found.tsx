import type { Metadata } from "next";
import { ArtImage } from "@/components/ArtImage";
import { ButtonLink } from "@/components/ButtonLink";
import { Container } from "@/components/Container";
import { DOG_PHOTOS } from "@/lib/about";

export const metadata: Metadata = {
  title: "Page not found",
  robots: { index: false },
};

export default function NotFound() {
  return (
    <Container narrow className="py-20 text-center">
      <ArtImage
        src={DOG_PHOTOS[2].src}
        alt={DOG_PHOTOS[2].alt}
        sizes="224px"
        className="mx-auto mb-8 w-56"
      />
      <h1 className="text-5xl">We couldn’t find that page</h1>
      <p className="mx-auto mt-4 max-w-md text-ink-soft">
        It may have moved, or the link might be mistyped. Let’s get you back to
        the good dogs.
      </p>
      <ButtonLink href="/" className="mt-8">
        Back to home
      </ButtonLink>
    </Container>
  );
}
