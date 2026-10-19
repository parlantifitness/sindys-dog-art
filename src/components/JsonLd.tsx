import { breadcrumbSchema } from "@/lib/schema";

/** Renders JSON-LD structured data. `<` is escaped so the payload cannot close the script tag. */
export function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\\u003c"),
      }}
    />
  );
}

/** Several schema.org entities in one block. */
export function JsonLdGraph({ nodes }: { nodes: Record<string, unknown>[] }) {
  return <JsonLd data={{ "@context": "https://schema.org", "@graph": nodes }} />;
}

/** Breadcrumb trail for search engines; “Home” is added automatically. */
export function BreadcrumbJsonLd({ trail }: { trail: { name: string; path: string }[] }) {
  return <JsonLdGraph nodes={[breadcrumbSchema(trail)]} />;
}
