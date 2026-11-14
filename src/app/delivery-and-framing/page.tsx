import Link from "next/link";
import { ButtonLink } from "@/components/ButtonLink";
import { Container } from "@/components/Container";
import { FaqList } from "@/components/FaqList";
import { BreadcrumbJsonLd, JsonLdGraph } from "@/components/JsonLd";
import { PageHeader } from "@/components/PageHeader";
import { FINAL_PAYMENT, PAYMENT_SPLIT, SHIPPING, TURNAROUND_TEXT } from "@/lib/policies";
import { faqSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/seo";
import { COMMISSION_HREF, COMMISSION_LABEL } from "@/lib/site";

export const metadata = pageMetadata({
  title: "Delivery & Framing",
  description:
    "How your hand-painted oil dog portrait is shipped, and your framed or unframed options. UK shipping, once your portrait is complete.",
  path: "/delivery-and-framing",
});

const faqs = [
  {
    question: "Do you ship outside the UK?",
    answer: `No. ${SHIPPING} Customers across England, Scotland, Wales and Northern Ireland are very welcome.`,
  },
  {
    question: "When is my portrait shipped?",
    answer:
      "Once your portrait is complete and the final 50% payment has been made, it's carefully packed and shipped to your UK address.",
  },
  {
    question: "Can I have my portrait framed?",
    answer:
      "Sindy's portraits can be supplied either framed or unframed, so you can choose what suits your space and budget, or match a frame you already have. Let her know your preference when you enquire and she'll talk through the options with you.",
  },
  {
    question: "Does framing cost extra or add to the turnaround time?",
    answer:
      "It can. Framing isn't included in the from-prices shown on the pricing page, and it may add to the timeline. Mention it in your enquiry and Sindy will confirm the cost and timing for your portrait before any work begins.",
  },
];

export default function DeliveryAndFramingPage() {
  return (
    <>
      <PageHeader eyebrow="Delivery & framing" title="Delivery and framing">
        <p>
          How your finished portrait reaches you, and your options for
          having it framed.
        </p>
      </PageHeader>

      <Container narrow className="py-16">
        <section aria-labelledby="delivery-heading">
          <h2 id="delivery-heading" className="mb-3 text-4xl font-semibold">
            Delivery
          </h2>
          <p className="text-ink-soft">
            {TURNAROUND_TEXT} {PAYMENT_SPLIT} {FINAL_PAYMENT} Once your
            portrait is complete and the final payment has been made, it&apos;s
            carefully packed and shipped to your UK address. {SHIPPING}
          </p>
        </section>

        <section className="mt-14" aria-labelledby="framing-heading">
          <h2 id="framing-heading" className="mb-3 text-4xl font-semibold">
            Framed or unframed
          </h2>
          <p className="text-ink-soft">
            Sindy&apos;s portraits can be supplied either framed or unframed, so
            you can choose what suits your space and budget, or match an
            existing frame you already have. Let her know your preference
            when you enquire, and she&apos;ll talk through the options and any
            cost or timing it adds before any work begins.
          </p>
          <p className="mt-4 text-ink-soft">
            Once your portrait arrives, our guide to{" "}
            <Link
              href="/guides/caring-for-and-hanging-your-oil-portrait"
              className="underline decoration-sage underline-offset-4 hover:text-sage-deep"
            >
              caring for and hanging your new oil portrait
            </Link>{" "}
            covers unpacking it, choosing where to hang it, and keeping it
            looking its best for years to come.
          </p>
        </section>

        <section className="mt-14" aria-labelledby="delivery-faq-heading">
          <h2 id="delivery-faq-heading" className="mb-6 text-4xl font-semibold sm:text-5xl">
            Delivery &amp; framing questions
          </h2>
          <FaqList faqs={faqs} />
        </section>

        <div className="mt-16 text-center">
          <ButtonLink href={COMMISSION_HREF}>{COMMISSION_LABEL}</ButtonLink>
        </div>
      </Container>

      <JsonLdGraph nodes={[faqSchema(faqs)]} />
      <BreadcrumbJsonLd trail={[{ name: "Delivery & Framing", path: "/delivery-and-framing" }]} />
    </>
  );
}
