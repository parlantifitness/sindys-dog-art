import Link from "next/link";
import { ButtonLink } from "@/components/ButtonLink";
import { Container } from "@/components/Container";
import { FaqList } from "@/components/FaqList";
import { BreadcrumbJsonLd, JsonLd } from "@/components/JsonLd";
import { KeyFacts } from "@/components/KeyFacts";
import { PageHeader } from "@/components/PageHeader";
import { ALL_FAQS, FAQ_GROUPS } from "@/lib/faq";
import { GUIDES } from "@/lib/guides";
import { pageMetadata } from "@/lib/seo";
import { COMMISSION_HREF, COMMISSION_LABEL } from "@/lib/site";

export const metadata = pageMetadata({
  title: "Frequently Asked Questions",
  description:
    "Answers about pricing, turnaround, revisions, refunds and UK shipping for custom hand-painted oil dog portraits by Sindy.",
  path: "/faq",
});

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: ALL_FAQS.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: { "@type": "Answer", text: faq.answer },
  })),
};

export default function FaqPage() {
  return (
    <>
      <PageHeader eyebrow="FAQ" title="Questions, answered">
        <p>
          Everything you might want to know before commissioning a portrait. If
          you can’t find your answer, ask Sindy when you enquire.
        </p>
      </PageHeader>

      <Container narrow className="py-16">
        <KeyFacts />
        <div className="mt-14 space-y-14">
          {FAQ_GROUPS.map((group) => (
            <section key={group.title} aria-labelledby={slug(group.title)}>
              <h2 id={slug(group.title)} className="mb-6 text-4xl font-semibold sm:text-5xl">
                {group.title}
              </h2>
              <FaqList faqs={group.items} />
            </section>
          ))}
        </div>

        <nav aria-label="Guides" className="mt-14">
          <h2 className="mb-3 text-4xl font-semibold">More in our guides</h2>
          <ul className="space-y-2">
            {GUIDES.map((guide) => (
              <li key={guide.slug}>
                <Link
                  href={`/guides/${guide.slug}`}
                  className="underline decoration-sage underline-offset-4 hover:text-sage-deep"
                >
                  {guide.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="mt-16 text-center">
          <ButtonLink href={COMMISSION_HREF}>{COMMISSION_LABEL}</ButtonLink>
        </div>
      </Container>
      <JsonLd data={faqJsonLd} />
      <BreadcrumbJsonLd trail={[{ name: "FAQ", path: "/faq" }]} />
    </>
  );
}

function slug(text: string): string {
  return `faq-${text.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`;
}
