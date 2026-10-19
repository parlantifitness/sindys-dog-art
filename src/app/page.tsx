import type { Metadata } from "next";
import Link from "next/link";
import { ArtImage } from "@/components/ArtImage";
import { ButtonLink } from "@/components/ButtonLink";
import { Container } from "@/components/Container";
import { PricingGrid } from "@/components/PricingTable";
import { DOG_PHOTOS, SINDY_PHOTO } from "@/lib/about";
import { getFeaturedItems, type PortraitCategory } from "@/lib/gallery";
import { COMMISSION_HREF, COMMISSION_LABEL, SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: { absolute: `${SITE.name} | Hand-Painted Oil Dog Portraits, UK` },
  description:
    "Custom hand-painted oil portraits of dogs by Sindy, with over 20 years of experience. Memorial and gift portraits painted from your photos and shipped across the UK.",
  alternates: { canonical: "/" },
};

const OCCASIONS: {
  id: PortraitCategory;
  title: string;
  text: string;
  cta: string;
}[] = [
  {
    id: "memorial",
    title: "A tribute to a dog you love",
    text: "A memorial portrait keeps their face, their warmth and their little quirks close, painted by hand from the photos you treasure most.",
    cta: "See memorial portraits",
  },
  {
    id: "gift",
    title: "A gift they’ll never forget",
    text: "Birthdays, Christmas, anniversaries or a new arrival: a hand-painted portrait of their dog is a present no one else will ever give.",
    cta: "See gift portraits",
  },
];

export default function HomePage() {
  const featured = getFeaturedItems();

  return (
    <>
      <section className="border-b border-line bg-sage-soft/40 py-16 text-center sm:py-24">
        <Container narrow>
          <h1 className="text-5xl leading-[1.05] sm:text-7xl">
            {SITE.tagline}
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-lg text-ink-soft">
            Custom oil portraits of dogs, hand-painted from your photos by an
            artist with over 20 years of experience. Painted to remember them
            by, or to give to someone who adores theirs. Shipped anywhere in
            the UK.
          </p>
          <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <ButtonLink href={COMMISSION_HREF}>{COMMISSION_LABEL}</ButtonLink>
            <ButtonLink href="/gallery" variant="outline">
              View the Gallery
            </ButtonLink>
          </div>
        </Container>
      </section>

      <section className="py-20" aria-labelledby="occasions-heading">
        <Container>
          <h2
            id="occasions-heading"
            className="mx-auto mb-12 max-w-2xl text-center text-4xl sm:text-5xl"
          >
            Two ways to celebrate a good dog
          </h2>
          <div className="grid gap-px border border-line bg-line md:grid-cols-2">
            {OCCASIONS.map((occasion) => (
              <article
                key={occasion.id}
                className="bg-cream p-8 text-center sm:p-12"
              >
                <h3 className="text-3xl sm:text-4xl">{occasion.title}</h3>
                <p className="mx-auto mt-4 max-w-md text-ink-soft">
                  {occasion.text}
                </p>
                <Link
                  href={`/gallery#${occasion.id}`}
                  className="mt-6 inline-block border-b border-ink pb-0.5 text-sm uppercase tracking-[0.16em] hover:border-sage-deep hover:text-sage-deep"
                >
                  {occasion.cta}
                </Link>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section
        className="border-y border-line bg-sage-soft/40 py-20"
        aria-labelledby="featured-heading"
      >
        <Container>
          <h2
            id="featured-heading"
            className="mb-10 text-center text-4xl sm:text-5xl"
          >
            Recent portraits
          </h2>
          <ul className="grid gap-6 sm:grid-cols-3">
            {featured.map((item) => (
              <li key={item.id}>
                <ArtImage
                  src={item.painting}
                  alt={item.paintingAlt}
                  sizes="(min-width: 640px) 33vw, 100vw"
                />
              </li>
            ))}
          </ul>
          <p className="mt-10 text-center">
            <Link
              href="/gallery"
              className="border-b border-ink pb-0.5 text-sm uppercase tracking-[0.16em] hover:border-sage-deep hover:text-sage-deep"
            >
              Explore the full gallery
            </Link>
          </p>
        </Container>
      </section>

      <section className="py-20" aria-labelledby="sizes-heading">
        <Container>
          <h2
            id="sizes-heading"
            className="mb-3 text-center text-4xl sm:text-5xl"
          >
            Sizes &amp; pricing
          </h2>
          <p className="mx-auto mb-10 max-w-xl text-center text-ink-soft">
            Every portrait is painted to order. Choose the size that suits your
            space and your dog.
          </p>
          <PricingGrid />
        </Container>
      </section>

      <section
        className="border-y border-line bg-sage-soft/40 py-20"
        aria-labelledby="sindy-heading"
      >
        <Container className="grid items-center gap-12 md:grid-cols-[2fr_3fr]">
          <ArtImage
            src={SINDY_PHOTO.src}
            alt={SINDY_PHOTO.alt}
            width={SINDY_PHOTO.width}
            height={SINDY_PHOTO.height}
            sizes="(min-width: 768px) 35vw, 100vw"
            className="mx-auto w-full max-w-sm"
          />
          <div className="text-center md:text-left">
            <h2 id="sindy-heading" className="text-4xl sm:text-5xl">
              Painted by someone who adores dogs
            </h2>
            <p className="mt-4 max-w-xl text-ink-soft">
              Sindy has been painting dogs for over 20 years, and has three of
              her own: Lulu, Milly and Nellie.
            </p>
            <ul className="mt-6 grid max-w-md grid-cols-3 gap-3">
              {DOG_PHOTOS.map((photo) => (
                <li key={photo.src}>
                  <ArtImage src={photo.src} alt={photo.alt} sizes="160px" />
                </li>
              ))}
            </ul>
            <Link
              href="/about"
              className="mt-8 inline-block border-b border-ink pb-0.5 text-sm uppercase tracking-[0.16em] hover:border-sage-deep hover:text-sage-deep"
            >
              Meet Sindy
            </Link>
          </div>
        </Container>
      </section>

      <section className="bg-ink py-20 text-center text-cream">
        <Container narrow>
          <h2 className="text-4xl sm:text-5xl">
            Ready to start your portrait?
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-cream/80">
            Send a photo and a few details. Sindy will be in touch to talk
            through your portrait, with a sketch for your approval before any
            painting begins.
          </p>
          <ButtonLink href={COMMISSION_HREF} variant="sage" className="mt-8">
            {COMMISSION_LABEL}
          </ButtonLink>
        </Container>
      </section>
    </>
  );
}
