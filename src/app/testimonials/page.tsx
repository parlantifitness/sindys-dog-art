import { ButtonLink } from "@/components/ButtonLink";
import { Container } from "@/components/Container";
import { BreadcrumbJsonLd } from "@/components/JsonLd";
import { PageHeader } from "@/components/PageHeader";
import { PlaceholderNote } from "@/components/PlaceholderNote";
import { pageMetadata } from "@/lib/seo";
import {
  COMMISSION_HREF,
  COMMISSION_LABEL,
  TRUSTPILOT_REVIEW_URL,
  TRUSTPILOT_URL,
} from "@/lib/site";
import { ALL_PLACEHOLDERS, TESTIMONIALS } from "@/lib/testimonials";

export const metadata = pageMetadata({
  title: "Testimonials",
  description:
    "Read what customers across the UK say about their hand-painted oil dog portraits from Sindy, from memorial tributes to birthday and Christmas gifts.",
  path: "/testimonials",
  // Keep out of search results until the placeholder reviews are replaced.
  noindex: ALL_PLACEHOLDERS,
});

const KIND_LABEL = {
  memorial: "Memorial portrait",
  gift: "Gift portrait",
  "multi-pet": "Multi-pet portrait",
} as const;

export default function TestimonialsPage() {
  return (
    <>
      <PageHeader eyebrow="Testimonials" title="In their own words">
        <p>
          What customers say about their portraits, and the occasions that led
          them to commission one.
        </p>
      </PageHeader>

      <Container className="py-14">
        <section
          aria-labelledby="trustpilot-heading"
          className="mb-12 border border-line bg-sage-soft/50 p-8 text-center"
        >
          <h2 id="trustpilot-heading" className="text-3xl">
            Reviews on Trustpilot
          </h2>
          <p className="mx-auto mt-2 max-w-xl text-ink-soft">
            Independent reviews from customers are on Trustpilot. If Sindy has
            painted your dog, she would love to hear what you think.
          </p>
          <div className="mt-5 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href={TRUSTPILOT_URL}
              target="_blank"
              rel="noopener"
              className="inline-flex min-h-12 items-center justify-center border border-ink px-7 py-3 text-sm font-medium uppercase tracking-[0.14em] transition-colors hover:bg-ink hover:text-cream"
            >
              Read our reviews
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
            <a
              href={TRUSTPILOT_REVIEW_URL}
              target="_blank"
              rel="noopener"
              className="inline-flex min-h-12 items-center justify-center bg-ink px-7 py-3 text-sm font-medium uppercase tracking-[0.14em] text-cream transition-colors hover:bg-sage-deep"
            >
              Write a review
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
          </div>
        </section>

        {ALL_PLACEHOLDERS ? (
          <PlaceholderNote>
            These are layout placeholders. Replace each entry in
            src/lib/testimonials.ts with a real review (the buyer’s own words
            and what prompted the commission). This page stays hidden from
            search engines until you do.
          </PlaceholderNote>
        ) : null}

        <ul className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {TESTIMONIALS.map((review) => (
            <li key={review.id}>
              <figure className="flex h-full flex-col border border-line bg-white/50 p-7">
                {review.placeholder ? (
                  <span className="mb-3 self-start text-xs font-medium uppercase tracking-[0.2em] text-sage-deep">
                    Placeholder
                  </span>
                ) : null}
                <blockquote className="flex-1 font-display text-xl italic leading-snug">
                  <p>“{review.quote}”</p>
                </blockquote>
                <figcaption className="mt-5 border-t border-line pt-4 text-sm">
                  <span className="block font-medium">{review.buyer}</span>
                  <span className="block text-ink-soft">
                    {KIND_LABEL[review.kind]} · {review.occasion}
                  </span>
                </figcaption>
              </figure>
            </li>
          ))}
        </ul>

        <div className="mt-16 text-center">
          <ButtonLink href={COMMISSION_HREF}>{COMMISSION_LABEL}</ButtonLink>
        </div>
      </Container>
      <BreadcrumbJsonLd trail={[{ name: "Testimonials", path: "/testimonials" }]} />
    </>
  );
}
