import Link from "next/link";
import { ButtonLink } from "@/components/ButtonLink";
import { Container } from "@/components/Container";
import { BreadcrumbJsonLd, JsonLdGraph } from "@/components/JsonLd";
import { PageHeader } from "@/components/PageHeader";
import { SHIPPING } from "@/lib/policies";
import { organizationSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/seo";
import { COMMISSION_HREF, COMMISSION_LABEL, CONTACT_EMAIL, TRUSTPILOT_URL } from "@/lib/site";

export const metadata = pageMetadata({
  title: "Contact",
  description:
    "Get in touch with Sindy, a dog portrait artist based in Epsom, Surrey, about a custom hand-painted oil dog portrait, or a data protection or general enquiry.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <PageHeader eyebrow="Contact" title="Get in touch">
        <p>
          Sindy is based in Epsom, Surrey, and paints for dog owners across
          the UK. For a new portrait, the quickest way to reach her is the
          commission enquiry form. For anything else, email is best.
        </p>
      </PageHeader>

      <Container narrow className="py-16">
        <section aria-labelledby="commission-heading">
          <h2 id="commission-heading" className="mb-3 text-4xl font-semibold">
            Commissioning a portrait
          </h2>
          <p className="text-ink-soft">
            Tell Sindy about your dog, share your photos and choose a size on
            the enquiry form. It&apos;s an enquiry, not a commitment: you&apos;ll
            approve a sketch before any painting begins. See{" "}
            <Link href="/how-it-works" className="underline decoration-sage underline-offset-4 hover:text-sage-deep">
              how it works
            </Link>{" "}
            for the full process.
          </p>
          <div className="mt-6">
            <ButtonLink href={COMMISSION_HREF}>{COMMISSION_LABEL}</ButtonLink>
          </div>
        </section>

        <section className="mt-14" aria-labelledby="email-heading">
          <h2 id="email-heading" className="mb-3 text-4xl font-semibold">
            Email
          </h2>
          <p className="text-ink-soft">
            For anything that isn&apos;t a new commission, such as an existing
            order, a data protection request or a general question, email{" "}
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="underline decoration-sage underline-offset-4 hover:text-sage-deep"
            >
              {CONTACT_EMAIL}
            </a>
            . Sindy reads and replies to every message personally.
          </p>
        </section>

        <section className="mt-14" aria-labelledby="other-heading">
          <h2 id="other-heading" className="mb-3 text-4xl font-semibold">
            Elsewhere
          </h2>
          <ul className="ml-5 list-disc space-y-2 text-ink-soft">
            <li>
              Read genuine customer reviews on{" "}
              <a
                href={TRUSTPILOT_URL}
                target="_blank"
                rel="noopener"
                className="underline decoration-sage underline-offset-4 hover:text-sage-deep"
              >
                Trustpilot
                <span className="sr-only"> (opens in a new tab)</span>
              </a>
              , or see a few on our{" "}
              <Link href="/testimonials" className="underline decoration-sage underline-offset-4 hover:text-sage-deep">
                testimonials page
              </Link>
              .
            </li>
            <li>
              Have a question before you enquire? Check the{" "}
              <Link href="/faq" className="underline decoration-sage underline-offset-4 hover:text-sage-deep">
                FAQ
              </Link>{" "}
              or the{" "}
              <Link href="/pricing" className="underline decoration-sage underline-offset-4 hover:text-sage-deep">
                pricing page
              </Link>
              .
            </li>
          </ul>
          <p className="mt-4 text-ink-soft">{SHIPPING} Customers across England, Scotland, Wales and Northern Ireland are very welcome.</p>
        </section>
      </Container>

      <JsonLdGraph nodes={[organizationSchema()]} />
      <BreadcrumbJsonLd trail={[{ name: "Contact", path: "/contact" }]} />
    </>
  );
}
