import { ArtImage } from "@/components/ArtImage";
import { ButtonLink } from "@/components/ButtonLink";
import { Container } from "@/components/Container";
import { PageHeader } from "@/components/PageHeader";
import { PlaceholderNote } from "@/components/PlaceholderNote";
import { DOG_PHOTOS, SINDY_PHOTO } from "@/lib/about";
import { pageMetadata } from "@/lib/seo";
import { COMMISSION_HREF, COMMISSION_LABEL } from "@/lib/site";

export const metadata = pageMetadata({
  title: "About Sindy",
  description:
    "Meet Sindy, a UK artist who has been painting dogs for over 20 years, creating hand-painted oil portraits for dog lovers across the country.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <PageHeader eyebrow="About" title="Meet Sindy">
        <p>
          Sindy has been painting dogs for over 20 years, and she still can’t
          resist a good face.
        </p>
      </PageHeader>

      <Container className="grid gap-12 py-16 md:grid-cols-[2fr_3fr] md:items-start">
        <ArtImage
          src={SINDY_PHOTO.src}
          alt={SINDY_PHOTO.alt}
          width={SINDY_PHOTO.width}
          height={SINDY_PHOTO.height}
          sizes="(min-width: 768px) 40vw, 100vw"
          priority
        />
        <div className="space-y-5 text-ink-soft">
          <h2 className="text-4xl text-ink">Painting dogs for over 20 years</h2>
          <p>
            Sindy is a UK-based artist who hand-paints custom oil portraits of
            dogs. For more than twenty years she has painted much-loved
            companions for customers across the UK, as lasting memorials and as
            gifts for the dog lovers in their lives.
          </p>
          <PlaceholderNote>
            Sindy’s full bio goes here: how she started painting, what draws
            her to dogs, her studio and materials, and a personal anecdote or
            two.
          </PlaceholderNote>
          <div className="pt-2">
            <ButtonLink href={COMMISSION_HREF}>{COMMISSION_LABEL}</ButtonLink>
          </div>
        </div>
      </Container>

      <section
        aria-labelledby="dogs-heading"
        className="border-t border-line bg-sage-soft/40 py-16"
      >
        <Container>
          <h2 id="dogs-heading" className="text-center text-4xl sm:text-5xl">
            Meet Lulu, Millie &amp; Nellie
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-center text-ink-soft">
            Sindy’s own dogs, and the reason every portrait she paints starts
            with a really good look at the face.
          </p>
          <ul className="mt-10 grid gap-6 sm:grid-cols-3">
            {DOG_PHOTOS.map((photo) => (
              <li key={photo.src}>
                <figure>
                  <ArtImage
                    src={photo.src}
                    alt={photo.alt}
                    sizes="(min-width: 640px) 33vw, 100vw"
                  />
                  <figcaption className="mt-3 text-center font-display text-xl">
                    {photo.caption}
                  </figcaption>
                </figure>
              </li>
            ))}
          </ul>
        </Container>
      </section>
    </>
  );
}
