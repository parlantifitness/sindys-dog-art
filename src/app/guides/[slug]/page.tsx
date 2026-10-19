import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ButtonLink } from "@/components/ButtonLink";
import { Container } from "@/components/Container";
import { GuideArticle } from "@/components/GuideArticle";
import { JsonLdGraph } from "@/components/JsonLd";
import { PageHeader } from "@/components/PageHeader";
import { getGalleryItems } from "@/lib/gallery";
import { readingMinutes, wordCount } from "@/lib/guide-types";
import { getGuide, GUIDES } from "@/lib/guides";
import {
  articleSchema,
  breadcrumbSchema,
  faqSchema,
  howToSchema,
} from "@/lib/schema";
import { DEFAULT_OG_IMAGE, pageMetadata } from "@/lib/seo";
import { COMMISSION_HREF, COMMISSION_LABEL } from "@/lib/site";

export function generateStaticParams() {
  return GUIDES.map((guide) => ({ slug: guide.slug }));
}

function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  });
}

export async function generateMetadata(
  props: PageProps<"/guides/[slug]">
): Promise<Metadata> {
  const { slug } = await props.params;
  const guide = getGuide(slug);
  if (!guide) return {};
  const base = pageMetadata({
    title: guide.metaTitle ?? guide.title,
    description: guide.description,
    path: `/guides/${guide.slug}`,
    // Drafts stay out of search results until the article is ready.
    noindex: guide.status === "draft",
  });
  return {
    ...base,
    openGraph: {
      ...base.openGraph,
      type: "article",
      publishedTime: guide.published,
      modifiedTime: guide.updated,
      authors: ["Sindy"],
    } as Metadata["openGraph"],
  };
}

export default async function GuidePage(props: PageProps<"/guides/[slug]">) {
  const { slug } = await props.params;
  const guide = getGuide(slug);
  if (!guide) notFound();

  const paintings = new Map(getGalleryItems().map((item) => [item.id, item]));
  const firstPainting = guide.sections
    .flatMap((s) => s.blocks)
    .find((b) => b.type === "painting");
  const image =
    (firstPainting && firstPainting.type === "painting"
      ? paintings.get(firstPainting.id)?.painting
      : undefined) ?? DEFAULT_OG_IMAGE;
  const related = guide.related
    .map((s) => GUIDES.find((g) => g.slug === s))
    .filter((g): g is NonNullable<typeof g> => Boolean(g));

  const nodes: Record<string, unknown>[] = [
    articleSchema({
      slug: guide.slug,
      title: guide.title,
      description: guide.description,
      published: guide.published,
      updated: guide.updated,
      image,
      words: wordCount(guide),
    }),
    faqSchema(guide.faqs),
    breadcrumbSchema([
      { name: "Guides", path: "/guides" },
      { name: guide.title, path: `/guides/${guide.slug}` },
    ]),
  ];
  if (guide.howTo) nodes.push(howToSchema(guide.howTo.name, guide.howTo.steps));

  return (
    <>
      <PageHeader eyebrow="Guide" title={guide.title}>
        <p>{guide.description}</p>
      </PageHeader>

      <Container narrow className="py-14">
        <article>
          <p className="text-sm text-ink-soft">
            By Sindy · Updated {formatDate(guide.updated)} · {readingMinutes(guide)} min read
          </p>

          <section
            aria-label="Quick answer"
            className="mt-6 border-l-4 border-sage bg-sage-soft/50 p-6"
          >
            <h2 className="mb-2 text-2xl">The short answer</h2>
            <p className="text-ink">{guide.quickAnswer}</p>
          </section>

          <nav aria-label="In this guide" className="mt-10">
            <h2 className="mb-3 text-2xl">In this guide</h2>
            <ol className="ml-5 list-decimal space-y-1 text-ink-soft">
              {guide.sections.map((s) => (
                <li key={s.id}>
                  <a href={`#${s.id}`} className="underline decoration-sage underline-offset-4 hover:text-sage-deep">
                    {s.title}
                  </a>
                </li>
              ))}
              <li>
                <a href="#faq" className="underline decoration-sage underline-offset-4 hover:text-sage-deep">
                  Common questions
                </a>
              </li>
            </ol>
          </nav>

          <div className="mt-14">
            <GuideArticle sections={guide.sections} paintings={paintings} />
          </div>

          <section id="faq" aria-labelledby="faq-h" className="mt-14 scroll-mt-8">
            <h2 id="faq-h" className="mb-4 text-4xl">
              Common questions
            </h2>
            <dl className="divide-y divide-line border-y border-line">
              {guide.faqs.map((faq) => (
                <div key={faq.question} className="py-5">
                  <dt className="font-display text-3xl font-semibold leading-snug">{faq.question}</dt>
                  <dd className="mt-2 text-ink-soft">{faq.answer}</dd>
                </div>
              ))}
            </dl>
          </section>
        </article>

        {related.length > 0 ? (
          <nav aria-label="Related guides" className="mt-14">
            <h2 className="mb-4 text-3xl">Keep reading</h2>
            <ul className="space-y-3">
              {related.map((g) => (
                <li key={g.slug}>
                  <Link
                    href={`/guides/${g.slug}`}
                    className="font-display text-2xl underline decoration-sage underline-offset-4 hover:text-sage-deep"
                  >
                    {g.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        ) : null}

        <aside className="mt-14 border border-line bg-sage-soft/50 p-8 text-center">
          <p className="font-display text-3xl">Ready to commission a portrait of your dog?</p>
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
      <JsonLdGraph nodes={nodes} />
    </>
  );
}
