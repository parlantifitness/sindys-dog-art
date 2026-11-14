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
  title: "Multi-Pet Dog Portraits",
  description: `Two or more dogs painted together in one hand-painted oil portrait. Prices from ${formatPrice(LOWEST_PRICE)}, painted from your photos, UK shipping.`,
  path: "/multi-pet-dog-portraits",
});

const faqs = [
  {
    question: "How many dogs can be in one portrait?",
    answer:
      "Sindy paints multi-pet portraits with two or more dogs. Mention how many in your enquiry and she'll advise on sizing and composition.",
  },
  {
    question: "Can you paint a dog who has passed away alongside a dog I still have?",
    answer:
      "Yes, this is a common and treasured request. Send the best photo you have of each, even from different times, and mention this in your enquiry.",
  },
  {
    question: "Do I need one perfect photo with all the dogs looking at the camera?",
    answer:
      "No. It helps, but it's not essential. Send your best group photo along with individual photos of each dog, and Sindy can often combine the best of each.",
  },
  {
    question: "Does a multi-pet portrait cost more?",
    answer:
      "There isn't a separate multi-pet price list. The cost depends on the size you choose, and Sindy will advise on the best size and price for your photos.",
  },
  {
    question: "Can you include a cat alongside the dogs?",
    answer:
      "Yes, Sindy has painted dogs together with their feline housemates. Mention this in your enquiry and she'll talk through what works best.",
  },
];

export default function MultiPetPortraitsPage() {
  const items = getGalleryItems()
    .filter((item) => item.category === "multi-pet" && item.painting)
    .slice(0, 6);

  return (
    <>
      <PageHeader eyebrow="Multi-pet portraits" title="Your whole pack, in one painting">
        <p>
          Two dogs, three dogs, or dogs and their feline housemates, brought
          together in a single hand-painted oil portrait.
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
            href="/gallery#multi-pet"
            className="underline decoration-sage underline-offset-4 hover:text-sage-deep"
          >
            See more multi-pet portraits in the full gallery
          </Link>
        </div>

        <section className="mt-16 space-y-5 text-ink-soft" aria-labelledby="how-it-works-heading">
          <h2 id="how-it-works-heading" className="text-4xl font-semibold text-ink">
            How it works
          </h2>
          <p>
            Choose &ldquo;Multi-pet&rdquo; on the enquiry form and tell Sindy
            about your pets. Send your best group photo plus individual
            photos of each dog, and she&apos;ll advise on the best size and
            composition for your photos. {TURNAROUND_TEXT}
          </p>
          <p>
            Prices start from {formatPrice(LOWEST_PRICE)}, depending on size.
            See our{" "}
            <Link href="/pricing" className="underline decoration-sage underline-offset-4 hover:text-sage-deep">
              full pricing page
            </Link>{" "}
            or read our{" "}
            <Link
              href="/guides/photographing-multiple-dogs-for-a-portrait"
              className="underline decoration-sage underline-offset-4 hover:text-sage-deep"
            >
              guide to photographing multiple dogs together
            </Link>{" "}
            for tips on getting a usable photo.
          </p>
        </section>

        <section className="mt-16" aria-labelledby="multi-pet-faq-heading">
          <h2 id="multi-pet-faq-heading" className="mb-6 text-4xl font-semibold sm:text-5xl">
            Questions about multi-pet portraits
          </h2>
          <FaqList faqs={faqs} />
        </section>

        <div className="mt-16 text-center">
          <ButtonLink href={COMMISSION_HREF}>{COMMISSION_LABEL}</ButtonLink>
        </div>
      </Container>

      <JsonLdGraph nodes={[faqSchema(faqs)]} />
      <BreadcrumbJsonLd trail={[{ name: "Multi-Pet Portraits", path: "/multi-pet-dog-portraits" }]} />
    </>
  );
}
