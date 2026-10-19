import type { MetadataRoute } from "next";
import { GUIDES } from "@/lib/guides";
import { SITE } from "@/lib/site";
import { ALL_PLACEHOLDERS } from "@/lib/testimonials";

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = [
    "",
    "/gallery",
    "/commission",
    "/how-it-works",
    "/about",
    "/guides",
    "/faq",
    // Hidden from search until real reviews are in.
    ...(ALL_PLACEHOLDERS ? [] : ["/testimonials"]),
    ...GUIDES.filter((g) => g.status === "published").map(
      (g) => `/guides/${g.slug}`
    ),
  ];
  return paths.map((path) => ({ url: `${SITE.url}${path}` }));
}
