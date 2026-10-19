import type { MetadataRoute } from "next";
import { SITE } from "@/lib/site";

/** AI assistants that fetch pages to answer a question: allowed, so the site can be cited. */
const ANSWER_BOTS = [
  "OAI-SearchBot",
  "ChatGPT-User",
  "PerplexityBot",
  "Perplexity-User",
  "Claude-User",
  "Claude-SearchBot",
];

/** Crawlers that collect material to train AI models: kept away from the artwork folders. */
const TRAINING_BOTS = [
  "GPTBot",
  "ClaudeBot",
  "CCBot",
  "Google-Extended",
  "Applebot-Extended",
  "Bytespider",
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", allow: "/", disallow: "/api/" },
      { userAgent: ANSWER_BOTS, allow: "/", disallow: "/api/" },
      { userAgent: TRAINING_BOTS, allow: "/", disallow: ["/api/", "/gallery/", "/about/", "/og/"] },
    ],
    sitemap: `${SITE.url}/sitemap.xml`,
  };
}
