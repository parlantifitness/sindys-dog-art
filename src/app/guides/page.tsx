import Link from "next/link";
import { Container } from "@/components/Container";
import { BreadcrumbJsonLd } from "@/components/JsonLd";
import { PageHeader } from "@/components/PageHeader";
import { readingMinutes } from "@/lib/guide-types";
import { GUIDES } from "@/lib/guides";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Guides to Dog Portraits",
  description:
    "Guides to commissioning a hand-painted dog portrait: choosing photos, memorial portrait ideas, gift ideas and what a custom oil portrait costs.",
  path: "/guides",
});

export default function GuidesPage() {
  return (
    <>
      <PageHeader eyebrow="Guides" title="Dog portrait guides">
        <p>
          Practical advice on commissioning a portrait, choosing the right
          photo and finding the perfect idea.
        </p>
      </PageHeader>

      <Container narrow className="py-16">
        <ul className="divide-y divide-line border-y border-line">
          {GUIDES.map((guide) => (
            <li key={guide.slug}>
              <article className="py-8">
                <h2 className="text-3xl">
                  <Link
                    href={`/guides/${guide.slug}`}
                    className="hover:text-sage-deep"
                  >
                    {guide.title}
                  </Link>
                </h2>
                <p className="mt-2 text-ink-soft">{guide.description}</p>
                <p className="mt-3 text-xs font-medium uppercase tracking-[0.2em] text-sage-deep">
                  {guide.status === "draft"
                    ? "Coming soon"
                    : `${readingMinutes(guide)} min read`}
                </p>
              </article>
            </li>
          ))}
        </ul>
      </Container>
      <BreadcrumbJsonLd trail={[{ name: "Guides", path: "/guides" }]} />
    </>
  );
}
