import Link from "next/link";
import { ArtImage } from "@/components/ArtImage";
import { ButtonLink } from "@/components/ButtonLink";
import { BreadcrumbJsonLd, JsonLdGraph } from "@/components/JsonLd";
import { KeyFacts } from "@/components/KeyFacts";
import { Container } from "@/components/Container";
import { PageHeader } from "@/components/PageHeader";
import { PricingGrid } from "@/components/PricingTable";
import { getGalleryItems } from "@/lib/gallery";
import { RUSH_NOTE, TURNAROUND_TEXT } from "@/lib/policies";
import { PROCESS_STEPS } from "@/lib/process";
import { howToSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/seo";
import { COMMISSION_HREF, COMMISSION_LABEL } from "@/lib/site";

export const metadata = pageMetadata({
  title: "How Commissioning a Dog Portrait Works",
  description:
    "From enquiry and sketch approval to painting, payment and UK shipping: how commissioning a custom hand-painted oil dog portrait from Sindy works.",
  path: "/how-it-works",
});

export default function HowItWorksPage() {
  const example = getGalleryItems().find((item) => item.id === "hand-painted-french-bulldog-birthday-oil-portrait-gift");
  return (
    <>
      <PageHeader eyebrow="The process" title="How it works">
        <p>
          A simple, personal process from your first message to the day your
          portrait arrives.
        </p>
      </PageHeader>

      <Container narrow className="py-16">
        <ol className="space-y-10">
          {PROCESS_STEPS.map((step, index) => (
            <li key={step.title} className="flex gap-6">
              <span
                aria-hidden="true"
                className="font-script text-6xl leading-none text-sage"
              >
                {index + 1}
              </span>
              <div>
                <h2 className="text-3xl">{step.title}</h2>
                <p className="mt-2 text-ink-soft">{step.text}</p>
              </div>
            </li>
          ))}
        </ol>

        <p className="mt-10 text-ink-soft">
          New to commissioning a portrait? Read our{" "}
          <Link href="/guides/how-to-commission-a-dog-portrait-from-a-photo" className="underline decoration-sage underline-offset-4 hover:text-sage-deep">
            step-by-step guide
          </Link>{" "}
          or see{" "}
          <Link href="/guides/how-much-does-a-custom-oil-dog-portrait-cost" className="underline decoration-sage underline-offset-4 hover:text-sage-deep">
            how much a custom oil dog portrait costs
          </Link>
          .
        </p>

        <KeyFacts />

        {example?.photo ? (
          <figure className="mt-16">
            <ArtImage
              src={example.photo}
              alt={example.photoAlt}
              width={example.photoWidth}
              height={example.photoHeight}
              sizes="(min-width: 768px) 768px, 100vw"
            />
            <figcaption className="mt-3 text-center text-sm text-ink-soft">
              From photo to painting: the reference photo (left) beside the
              finished oil portrait (right).
            </figcaption>
          </figure>
        ) : null}

        <section
          aria-labelledby="turnaround-heading"
          className="mt-16 border border-line bg-sage-soft/50 p-8"
        >
          <h2 id="turnaround-heading" className="text-3xl">
            Turnaround
          </h2>
          <p className="mt-2 text-ink-soft">
            {TURNAROUND_TEXT} Need it by a particular date? {RUSH_NOTE}.
          </p>
        </section>
      </Container>

      <section
        aria-labelledby="pricing-heading"
        className="border-t border-line py-16"
      >
        <Container>
          <h2
            id="pricing-heading"
            className="mb-10 text-center text-4xl sm:text-5xl"
          >
            Sizes &amp; pricing
          </h2>
          <PricingGrid />
          <div className="mt-12 text-center">
            <ButtonLink href={COMMISSION_HREF}>{COMMISSION_LABEL}</ButtonLink>
          </div>
        </Container>
      </section>
      <JsonLdGraph
        nodes={[
          howToSchema(
            "How to commission a hand-painted oil portrait of your dog",
            PROCESS_STEPS.map((s) => ({ name: s.title, text: s.text }))
          ),
        ]}
      />
      <BreadcrumbJsonLd trail={[{ name: "How It Works", path: "/how-it-works" }]} />
    </>
  );
}
