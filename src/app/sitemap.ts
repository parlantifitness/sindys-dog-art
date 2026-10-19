import type { MetadataRoute } from "next";
import { getGalleryItems } from "@/lib/gallery";
import { GUIDES } from "@/lib/guides";
import { SITE } from "@/lib/site";
import { ALL_PLACEHOLDERS } from "@/lib/testimonials";

export default function sitemap(): MetadataRoute.Sitemap {
  const paintings = getGalleryItems()
    .filter((item) => item.painting)
    .map((item) => `${SITE.url}${item.painting}`);

  const entries: { path: string; images?: string[] }[] = [
    { path: "" },
    { path: "/gallery", images: paintings },
    { path: "/commission" },
    { path: "/how-it-works" },
    { path: "/about" },
    { path: "/guides" },
    { path: "/faq" },
    { path: "/terms" },
    { path: "/privacy" },
    // Hidden from search until real reviews are in.
    ...(ALL_PLACEHOLDERS ? [] : [{ path: "/testimonials" }]),
    ...GUIDES.filter((g) => g.status === "published").map((g) => ({ path: `/guides/${g.slug}` })),
  ];

  return entries.map(({ path, images }) => ({
    url: `${SITE.url}${path}`,
    ...(images ? { images } : {}),
  }));
}
