import { ArtImage } from "@/components/ArtImage";
import { ButtonLink } from "@/components/ButtonLink";
import { Container } from "@/components/Container";
import { PageHeader } from "@/components/PageHeader";
import { PricingGrid } from "@/components/PricingTable";
import { getGalleryItems } from "@/lib/gallery";
import { RUSH_NOTE, TURNAROUND_NOTE } from "@/lib/pricing";
import { pageMetadata } from "@/lib/seo";
import { COMMISSION_HREF, COMMISSION_LABEL } from "@/lib/site";

export const metadata = pageMetadata({
  title: "How Commissioning a Dog Portrait Works",
  description:
    "From enquiry and sketch approval to painting, payment and UK shipping: how commissioning a custom hand-painted oil dog portrait from Sindy works.",
  path: "/how-it-works",
});

const STEPS = [
  {
    title: "Send your enquiry",
    text: "Tell Sindy about your dog, share your photos and choose a size. Say whether the portrait is a memorial or a gift, and mention any deadline.",
  },
  {
    title: "Approve the sketch",
    text: "Sindy prepares a sketch or outline for your approval. You have two rounds of revisions at this stage, so it is the time to ask for any changes.",
  },
  {
    title: "Painting begins",
    text: "Once you have approved the sketch, Sindy paints your portrait in oils. No further revisions can be made once painting is underway.",
  },
  {
    title: "Completion",
    text: "When the painting is finished and dry, Sindy will let you know that your portrait is ready.",
  },
  {
    title: "Payment",
    text: "Payment is split into a 50% deposit and the remaining 50% on completion. The final payment is due before your portrait is shipped.",
  },
  {
    title: "UK shipping",
    text: "Your finished portrait is carefully packed and shipped to your UK address. Shipping is UK only.",
  },
];

export default function HowItWorksPage() {
  const example = getGalleryItems().find((item) => item.id === "gift-11");
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
          {STEPS.map((step, index) => (
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
            {TURNAROUND_NOTE} Need it by a particular date? {RUSH_NOTE}.
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
    </>
  );
}
