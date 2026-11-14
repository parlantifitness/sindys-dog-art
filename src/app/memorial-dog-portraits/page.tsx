import Link from "next/link";
import { ButtonLink } from "@/components/ButtonLink";
import { Container } from "@/components/Container";
import { FaqList } from "@/components/FaqList";
import { GalleryCard } from "@/components/GalleryCard";
import { BreadcrumbJsonLd, JsonLdGraph } from "@/components/JsonLd";
import { PageHeader } from "@/components/PageHeader";
import { getGalleryItems } from "@/lib/gallery";
import { LOWEST_PRICE, TURNAROUND_TEXT } from "@/lib/policies";
import { formatPrice } from "@/lib/pricing";
import { faqSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/seo";
import { COMMISSION_HREF, COMMISSION_LABEL } from "@/lib/site";

export const metadata = pageMetadata({
  title: "Memorial Dog Portraits",
  description: `Hand-painted oil memorial portraits of a dog who has passed, painted from your photos by Sindy. Prices from ${formatPrice(LOWEST_PRICE)}, UK shipping.`,
  path: "/memorial-dog-portraits",
});

const faqs = [
  {
    question: "How long after losing a dog should I commission a memorial portrait?",
    answer:
      "There is no right time. Some people commission a portrait soon after their loss, others wait until they feel ready, even years later. A portrait can be painted from your photos whenever you decide.",
  },
  {
    question: "Can you paint a memorial portrait from an old or imperfect photo?",
    answer:
      "Often, yes. Send the best photos you have, even if they're old, slightly blurry or taken on a phone, along with anything that shows details like eye colour and markings. Sindy will talk through what's possible.",
  },
  {
    question: "Can a memorial portrait include more than one pet?",
    answer:
      "Yes. Choose “Multi-pet” on the enquiry form and tell Sindy about your pets, including if you'd like a dog who has passed painted alongside one you still have. She'll talk through the best size and price.",
  },
  {
    question: "Does a memorial portrait cost more than a gift portrait?",
    answer:
      "No. Price depends on the size you choose, not the occasion. See our pricing page for the full price list.",
  },
];

export default function MemorialPortraitsPage() {
  const items = getGalleryItems()
    .filter((item) => item.category === "memorial" && item.painting)
    .slice(0, 6);

  return (
    <>
      <PageHeader eyebrow="Memorial portraits" title="A lasting tribute to your dog">
        <p>
          A hand-painted oil portrait, painted from your photos, to keep the
          face and the look in their eyes that you remember best.
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
            href="/gallery#memorial"
            className="underline decoration-sage underline-offset-4 hover:text-sage-deep"
          >
            See more memorial portraits in the full gallery
          </Link>
        </div>

        <section className="mt-16 space-y-5 text-ink-soft" aria-labelledby="how-it-works-heading">
          <h2 id="how-it-works-heading" className="text-4xl font-semibold text-ink">
            How it works
          </h2>
          <p>
            You send the photos you treasure most, along with anything you&apos;d
            like included, such as a favourite collar, a particular spot, or
            the expression you remember. Sindy shares a sketch for your
            approval before any painting begins, so you can be confident
            it&apos;s right before she starts. {TURNAROUND_TEXT}
          </p>
          <p>
            Prices start from {formatPrice(LOWEST_PRICE)}. See our{" "}
            <Link href="/pricing" className="underline decoration-sage underline-offset-4 hover:text-sage-deep">
              full pricing page
            </Link>{" "}
            or read our guide to{" "}
            <Link
              href="/guides/dog-memorial-portrait-ideas"
              className="underline decoration-sage underline-offset-4 hover:text-sage-deep"
            >
              memorial oil painting ideas for a dog
            </Link>{" "}
            for inspiration. If you&apos;re finding the loss hard, our{" "}
            <Link
              href="/guides/coping-with-the-loss-of-a-dog"
              className="underline decoration-sage underline-offset-4 hover:text-sage-deep"
            >
              gentle guide on coping with the loss of a dog
            </Link>{" "}
            may help too.
          </p>
        </section>

        <section className="mt-16" aria-labelledby="memorial-faq-heading">
          <h2 id="memorial-faq-heading" className="mb-6 text-4xl font-semibold sm:text-5xl">
            Questions about memorial portraits
          </h2>
          <FaqList faqs={faqs} />
        </section>

        <div className="mt-16 text-center">
          <ButtonLink href={COMMISSION_HREF}>{COMMISSION_LABEL}</ButtonLink>
        </div>
      </Container>

      <JsonLdGraph nodes={[faqSchema(faqs)]} />
      <BreadcrumbJsonLd trail={[{ name: "Memorial Portraits", path: "/memorial-dog-portraits" }]} />
    </>
  );
}
