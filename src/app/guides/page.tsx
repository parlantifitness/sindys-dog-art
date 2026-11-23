import Link from "next/link";
import { Container } from "@/components/Container";
import { BreadcrumbJsonLd } from "@/components/JsonLd";
import { PageHeader } from "@/components/PageHeader";
import { readingMinutes } from "@/lib/guide-types";
import { getGuideTopics } from "@/lib/guides";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Guides to Dog Portraits",
  description:
    "Guides to commissioning a hand-painted oil dog portrait from a photograph: the best photos to send, memorial painting ideas, gift ideas and costs.",
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

      <Container className="py-16">
        <div className="space-y-16">
          {getGuideTopics().map((topic) => (
            <section key={topic.id} aria-labelledby={`topic-${topic.id}`}>
              <h2 id={`topic-${topic.id}`} className="text-4xl font-semibold sm:text-5xl">
                {topic.title}
              </h2>
              <p className="mt-2 max-w-2xl text-ink-soft">{topic.blurb}</p>
              <ul className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {topic.guides.map((guide) => (
                  <li key={guide.slug}>
                    <article className="group relative flex h-full flex-col border border-line bg-white/50 p-6 transition-colors hover:border-sage-deep">
                      <h3 className="font-display text-3xl font-semibold leading-tight">
                        <Link
                          href={`/guides/${guide.slug}`}
                          className="decoration-sage decoration-2 underline-offset-4 after:absolute after:inset-0 group-hover:text-sage-deep group-hover:underline"
                        >
                          {guide.title}
                        </Link>
                      </h3>
                      <p className="mt-3 flex-1 text-ink-soft">{guide.description}</p>
                      <p className="mt-4 text-xs font-medium uppercase tracking-[0.2em] text-sage-deep">
                        {guide.status === "draft"
                          ? "Coming soon"
                          : `${readingMinutes(guide)} min read`}
                      </p>
                    </article>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>
      </Container>
      <BreadcrumbJsonLd trail={[{ name: "Guides", path: "/guides" }]} />
    </>
  );
}
