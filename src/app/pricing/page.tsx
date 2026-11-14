import Link from "next/link";
import { ButtonLink } from "@/components/ButtonLink";
import { Container } from "@/components/Container";
import { FaqList } from "@/components/FaqList";
import { BreadcrumbJsonLd, JsonLdGraph } from "@/components/JsonLd";
import { PageHeader } from "@/components/PageHeader";
import { PricingGrid } from "@/components/PricingTable";
import { FAQ_GROUPS } from "@/lib/faq";
import {
  FINAL_PAYMENT,
  PAYMENT_SPLIT,
  REVISIONS,
  RUSH_NOTE,
  SHIPPING,
  priceSummary,
} from "@/lib/policies";
import { faqSchema, serviceSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/seo";
import { COMMISSION_HREF, COMMISSION_LABEL } from "@/lib/site";

export const metadata = pageMetadata({
  title: "Dog Portrait Prices & Sizes",
  description: `Prices for a custom hand-painted oil dog portrait, from ${priceSummary()}. See what's included, how the deposit works, and expedited turnaround.`,
  path: "/pricing",
});

const pricingFaqs = FAQ_GROUPS.find((g) => g.title === "Pricing & payment")!.items;

export default function PricingPage() {
  return (
    <>
      <PageHeader eyebrow="Pricing" title="Prices & sizes">
        <p>
          Four sizes, from a small keepsake to a statement wall piece.{" "}
          Every price shown is a starting point, and Sindy confirms the
          final figure before any painting begins.
        </p>
      </PageHeader>

      <Container narrow className="py-16">
        <PricingGrid />

        <section className="mt-14" aria-labelledby="included-heading">
          <h2 id="included-heading" className="mb-4 text-4xl font-semibold">
            What&apos;s included
          </h2>
          <ul className="ml-5 list-disc space-y-2 text-ink-soft">
            <li>A hand-painted oil portrait, painted by Sindy from your photos</li>
            <li>A sketch or outline for your approval before painting starts. {REVISIONS}</li>
            <li>{PAYMENT_SPLIT} {FINAL_PAYMENT}</li>
          </ul>
          <p className="mt-4 text-ink-soft">{SHIPPING}</p>
        </section>

        <section className="mt-12" aria-labelledby="rush-heading">
          <h2 id="rush-heading" className="mb-3 text-4xl font-semibold">
            Need it sooner?
          </h2>
          <p className="text-ink-soft">
            Mention your deadline in your enquiry and Sindy will let you know
            what&apos;s possible. {RUSH_NOTE}. See our guide to{" "}
            <Link
              href="/guides/how-much-does-a-custom-oil-dog-portrait-cost"
              className="underline decoration-sage underline-offset-4 hover:text-sage-deep"
            >
              what affects the price
            </Link>{" "}
            for more detail.
          </p>
        </section>

        <section className="mt-12" aria-labelledby="multi-pet-heading">
          <h2 id="multi-pet-heading" className="mb-3 text-4xl font-semibold">
            More than one dog?
          </h2>
          <p className="text-ink-soft">
            There isn&apos;t a separate multi-pet price list: the cost
            depends on the size you choose, and Sindy will advise on the
            best size and price for your photos. See our guide to{" "}
            <Link
              href="/guides/photographing-multiple-dogs-for-a-portrait"
              className="underline decoration-sage underline-offset-4 hover:text-sage-deep"
            >
              photographing multiple dogs together
            </Link>{" "}
            to get started.
          </p>
        </section>

        <section className="mt-14" aria-labelledby="pricing-faq-heading">
          <h2 id="pricing-faq-heading" className="mb-6 text-4xl font-semibold sm:text-5xl">
            Pricing questions
          </h2>
          <FaqList faqs={pricingFaqs} />
        </section>

        <div className="mt-16 text-center">
          <ButtonLink href={COMMISSION_HREF}>{COMMISSION_LABEL}</ButtonLink>
        </div>
      </Container>

      <JsonLdGraph nodes={[serviceSchema(), faqSchema(pricingFaqs)]} />
      <BreadcrumbJsonLd trail={[{ name: "Pricing", path: "/pricing" }]} />
    </>
  );
}
