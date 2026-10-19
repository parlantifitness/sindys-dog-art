import type { Metadata } from "next";
import { SITE } from "./site";

export const DEFAULT_OG_IMAGE = "/og/og-default.jpg";

interface PageMetaInput {
  title: string;
  description: string;
  path: string;
  noindex?: boolean;
  /** Share image for this page (1200×630); defaults to the site-wide one. */
  image?: string;
}

/** Shared per-page metadata: title (suffixed by the root template), description, canonical and social tags. */
export function pageMetadata({
  title,
  description,
  path,
  noindex,
  image = DEFAULT_OG_IMAGE,
}: PageMetaInput): Metadata {
  const fullTitle = `${title} | ${SITE.name}`;
  const ogImage = { url: image, width: 1200, height: 630, alt: `${SITE.name}: ${SITE.tagline}` };
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
      images: [ogImage],
    },
    twitter: { card: "summary_large_image", title: fullTitle, description, images: [image] },
    ...(noindex ? { robots: { index: false, follow: true } } : {}),
  };
}
