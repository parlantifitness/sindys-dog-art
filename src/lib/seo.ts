import type { Metadata } from "next";
import { SITE } from "./site";

interface PageMetaInput {
  title: string;
  description: string;
  path: string;
  noindex?: boolean;
}

/** Shared per-page metadata: title (suffixed by the root template), description, canonical and social tags. */
export function pageMetadata({
  title,
  description,
  path,
  noindex,
}: PageMetaInput): Metadata {
  const fullTitle = `${title} | ${SITE.name}`;
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      locale: "en_GB",
      siteName: SITE.name,
      title: fullTitle,
      description,
      url: path,
    },
    twitter: { card: "summary_large_image", title: fullTitle, description },
    ...(noindex ? { robots: { index: false, follow: true } } : {}),
  };
}
