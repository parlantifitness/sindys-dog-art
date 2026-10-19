import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ButtonLink } from "@/components/ButtonLink";
import { Container } from "@/components/Container";
import { PageHeader } from "@/components/PageHeader";
import { PlaceholderNote } from "@/components/PlaceholderNote";
import { getGuide, GUIDES } from "@/lib/guides";
import { pageMetadata } from "@/lib/seo";
import { COMMISSION_HREF, COMMISSION_LABEL } from "@/lib/site";

export function generateStaticParams() {
  return GUIDES.map((guide) => ({ slug: guide.slug }));
}

export async function generateMetadata(
  props: PageProps<"/guides/[slug]">
): Promise<Metadata> {
  const { slug } = await props.params;
  const guide = getGuide(slug);
  if (!guide) return {};
  return pageMetadata({
    title: guide.title,
    description: guide.description,
    path: `/guides/${guide.slug}`,
    // Drafts stay out of search results until the article is written.
    noindex: guide.status === "draft",
  });
}

export default async function GuidePage(props: PageProps<"/guides/[slug]">) {
  const { slug } = await props.params;
  const guide = getGuide(slug);
  if (!guide) notFound();

  return (
    <>
      <PageHeader eyebrow="Guide" title={guide.title}>
        <p>{guide.description}</p>
      </PageHeader>

      <Container narrow className="py-16">
        <article>
          {guide.status === "draft" ? (
            <PlaceholderNote>
              This guide is still to be written. Planned sections are listed
              below.
            </PlaceholderNote>
          ) : null}
          {guide.outline.map((heading) => (
            <section key={heading} className="mt-10">
              <h2 className="text-3xl">{heading}</h2>
            </section>
          ))}
        </article>

        <aside className="mt-16 border border-line bg-sage-soft/50 p-8 text-center">
          <p className="font-display text-3xl">
            Ready to commission a portrait of your dog?
          </p>
          <ButtonLink href={COMMISSION_HREF} className="mt-5">
            {COMMISSION_LABEL}
          </ButtonLink>
        </aside>

        <p className="mt-10 text-center">
          <Link
            href="/guides"
            className="border-b border-ink pb-0.5 text-sm uppercase tracking-[0.16em] hover:border-sage-deep hover:text-sage-deep"
          >
            All guides
          </Link>
        </p>
      </Container>
    </>
  );
}
