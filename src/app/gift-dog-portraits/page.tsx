import Link from "next/link";
import { ButtonLink } from "@/components/ButtonLink";
import { Container } from "@/components/Container";
import { FaqList } from "@/components/FaqList";
import { GalleryCard } from "@/components/GalleryCard";
import { BreadcrumbJsonLd, JsonLdGraph } from "@/components/JsonLd";
import { PageHeader } from "@/components/PageHeader";
import { getGalleryItems } from "@/lib/gallery";
import { LOWEST_PRICE, RUSH_NOTE, TURNAROUND_TEXT } from "@/lib/policies";
import { formatPrice } from "@/lib/pricing";
import { faqSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/seo";
import { COMMISSION_HREF, COMMISSION_LABEL } from "@/lib/site";

export const metadata = pageMetadata({
  title: "Dog Portrait Gifts",
  description: `A hand-painted oil portrait of a dog makes a one-of-a-kind gift. Prices from ${formatPrice(LOWEST_PRICE)}, painted from your photos, UK shipping.`,
  path: "/gift-dog-portraits",
});

const faqs = [
  {
    question: "Can I give a dog portrait as a surprise gift?",
    answer:
      "Yes. You deal with Sindy directly and approve the sketch yourself, so the person receiving the portrait doesn't need to know anything about it until you give it to them.",
  },
  {
    question: "How far ahead should I order a portrait for a birthday or Christmas?",
    answer:
      `${TURNAROUND_TEXT} Remember to allow time for delivery too, and mention your deadline in your enquiry. ${RUSH_NOTE}.`,
  },
  {
    question: "What occasions suit a dog portrait gift?",
    answer:
      "Birthdays, Christmas, anniversaries, a new puppy or rescue dog, retirement, or just because. Any occasion where a dog is part of the family works.",
  },
  {
    question: "What size makes the best gift?",
    answer:
      "It depends on where the portrait will go. A5 is a lovely keepsake for a shelf or desk, while A4, A3 or Large suit a wall. Tell Sindy where it will be displayed and she'll help you choose.",
  },
];

export default function GiftPortraitsPage() {
  const items = getGalleryItems()
    .filter((item) => item.category === "gift" && item.painting)
    .slice(0, 6);

  return (
    <>
      <PageHeader eyebrow="Gift portraits" title="A gift nobody else will think of">
        <p>
          A hand-painted oil portrait of their dog, painted from your photos.
          Truly one of a kind, for the dog lover who has everything else.
        </p>
      </PageHeader>

      <Container className="py-16">
        <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <li key={item.id}>
              <GalleryCard item={item} />
            </li>
          ))}
        </ul>

        <div className="mt-10 text-center">
          <Link
            href="/gallery#gift"
            className="underline decoration-sage underline-offset-4 hover:text-sage-deep"
          >
            See more gift portraits in the full gallery
          </Link>
        </div>

        <section className="mt-16 space-y-5 text-ink-soft" aria-labelledby="how-it-works-heading">
          <h2 id="how-it-works-heading" className="text-4xl font-semibold text-ink">
            How it works
          </h2>
          <p>
            Gather a clear photo of the dog, send an enquiry and choose
            &ldquo;Gift&rdquo; on the form, then approve the sketch on their
            behalf. {TURNAROUND_TEXT}
          </p>
          <p>
            Prices start from {formatPrice(LOWEST_PRICE)}. See our{" "}
            <Link href="/pricing" className="underline decoration-sage underline-offset-4 hover:text-sage-deep">
              full pricing page
            </Link>{" "}
            or read our{" "}
            <Link
              href="/guides/dog-portrait-gift-ideas"
              className="underline decoration-sage underline-offset-4 hover:text-sage-deep"
            >
              full guide to dog portrait gift ideas
            </Link>{" "}
            for occasion ideas and how to keep it a surprise.
          </p>
        </section>

        <section className="mt-16" aria-labelledby="gift-faq-heading">
          <h2 id="gift-faq-heading" className="mb-6 text-4xl font-semibold sm:text-5xl">
            Questions about gift portraits
          </h2>
          <FaqList faqs={faqs} />
        </section>

        <div className="mt-16 text-center">
          <ButtonLink href={COMMISSION_HREF}>{COMMISSION_LABEL}</ButtonLink>
        </div>
      </Container>

      <JsonLdGraph nodes={[faqSchema(faqs)]} />
      <BreadcrumbJsonLd trail={[{ name: "Gift Portraits", path: "/gift-dog-portraits" }]} />
    </>
  );
}
