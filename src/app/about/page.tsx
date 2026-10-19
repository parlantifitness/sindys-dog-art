import Link from "next/link";
import { ArtImage } from "@/components/ArtImage";
import { ButtonLink } from "@/components/ButtonLink";
import { Container } from "@/components/Container";
import { PageHeader } from "@/components/PageHeader";
import { DOG_PHOTOS, SINDY_PHOTO } from "@/lib/about";
import { BreadcrumbJsonLd, JsonLdGraph } from "@/components/JsonLd";
import { ORG_ID, PERSON_ID, abs } from "@/lib/schema";
import { pageMetadata } from "@/lib/seo";
import { COMMISSION_HREF, COMMISSION_LABEL, EXPERIENCE_YEARS } from "@/lib/site";

export const metadata = pageMetadata({
  title: "About Sindy",
  description:
    `Meet Sindy, a UK artist who has been painting dogs for over ${EXPERIENCE_YEARS} years, creating hand-painted oil portraits for dog lovers across the country.`,
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <PageHeader eyebrow="About" title="Meet Sindy">
        <p>
          A lifelong dog lover who has been painting dogs in oils for over{" "}
          {EXPERIENCE_YEARS} years.
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
          <h2 className="text-4xl text-ink">Painting dogs for over {EXPERIENCE_YEARS} years</h2>
          <p>
            I have always loved to paint. As a child I was always artistic and
            loved creating paintings, even at school. It was only after having
            my children that I had the time to put my talents to use. I
            attended an art class for a few years, which was a real
            inspiration.
          </p>
          <p>
            I have always been a dog lover. I started by painting my own pets,
            and then painted for family members and friends, who recommended me
            to their friends and families. It all started from there. Now I
            paint animals regularly, and I have been painting dogs for over{" "}
            {EXPERIENCE_YEARS} years.
          </p>

          <h3 className="pt-3 font-display text-3xl text-ink">
            Your dog’s portrait
          </h3>
          <p>
            If you would like your dog painted in oil, I need just three things
            from you:
          </p>
          <ul className="ml-5 list-disc space-y-1">
            <li>a good, clear photograph (our{" "}
              <Link
                href="/guides/best-photos-for-a-dog-portrait"
                className="underline decoration-sage underline-offset-4 hover:text-sage-deep"
              >
                guide to the best photos
              </Link>{" "}
              can help)
            </li>
            <li>your dog’s name</li>
            <li>a little about their character, so I get a feel for them</li>
          </ul>
          <p>
            Then leave it to me. I will send you a sketch to approve before I
            start painting, and I will take care of the rest.
          </p>
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
      <JsonLdGraph
        nodes={[
          {
            "@type": "AboutPage",
            url: abs("/about"),
            name: "About Sindy",
            mainEntity: { "@id": PERSON_ID },
            about: { "@id": ORG_ID },
          },
        ]}
      />
      <BreadcrumbJsonLd trail={[{ name: "About", path: "/about" }]} />
    </>
  );
}
