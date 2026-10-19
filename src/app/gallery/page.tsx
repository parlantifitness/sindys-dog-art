import Link from "next/link";
import { ButtonLink } from "@/components/ButtonLink";
import { Container } from "@/components/Container";
import { GalleryCard } from "@/components/GalleryCard";
import { PageHeader } from "@/components/PageHeader";
import { CATEGORIES, getGalleryItems } from "@/lib/gallery";
import { pageMetadata } from "@/lib/seo";
import { COMMISSION_HREF, COMMISSION_LABEL } from "@/lib/site";

export const metadata = pageMetadata({
  title: "Gallery of Hand-Painted Dog Portraits",
  description:
    "Browse hand-painted oil dog portraits by Sindy: memorial portraits, gift portraits and multi-pet paintings, with original photos alongside the finished work.",
  path: "/gallery",
});

export default function GalleryPage() {
  const items = getGalleryItems();

  return (
    <>
      <PageHeader eyebrow="Gallery" title="Portraits, painted with love">
        <p>
          Browse memorial portraits, gift portraits and multi-pet paintings.
          Where an original photo is shown, use the toggle to compare it with
          the finished painting.
        </p>
      </PageHeader>

      <Container className="py-12">
        <nav aria-label="Gallery sections">
          <ul className="flex flex-wrap justify-center gap-x-8 gap-y-2 text-sm uppercase tracking-[0.16em]">
            {CATEGORIES.map((category) => (
              <li key={category.id}>
                <Link
                  href={`#${category.id}`}
                  className="inline-flex min-h-11 items-center border-b border-transparent hover:border-sage-deep hover:text-sage-deep"
                >
                  {category.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {CATEGORIES.map((category) => (
          <section
            key={category.id}
            id={category.id}
            aria-labelledby={`${category.id}-heading`}
            className="scroll-mt-8 pt-14"
          >
            <h2
              id={`${category.id}-heading`}
              className="text-center text-4xl sm:text-5xl"
            >
              {category.label}
            </h2>
            <p className="mx-auto mb-10 mt-3 max-w-2xl text-center text-ink-soft">
              {category.intro}
            </p>
            <ul className="grid grid-cols-2 gap-x-4 gap-y-8 md:grid-cols-3 lg:grid-cols-4 lg:gap-x-6">
              {items
                .filter((item) => item.category === category.id)
                .map((item) => (
                  <li key={item.id}>
                    <GalleryCard item={item} />
                  </li>
                ))}
            </ul>
          </section>
        ))}

        <div className="mt-20 text-center">
          <p className="mb-5 font-display text-3xl">
            Would your dog look good in oils?
          </p>
          <ButtonLink href={COMMISSION_HREF}>{COMMISSION_LABEL}</ButtonLink>
        </div>
      </Container>
    </>
  );
}
