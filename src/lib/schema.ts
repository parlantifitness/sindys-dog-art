import type { GalleryItem } from "./gallery";
import { HIGHEST_PRICE, LOWEST_PRICE } from "./policies";
import { SIZES } from "./pricing";
import { SITE } from "./site";

export const ORG_ID = `${SITE.url}/#organization`;
export const PERSON_ID = `${SITE.url}/#sindy`;
export const abs = (path: string) => `${SITE.url}${path}`;

export function organizationSchema() {
  return {
    "@type": "Organization",
    "@id": ORG_ID,
    name: SITE.name,
    url: SITE.url,
    logo: { "@type": "ImageObject", url: abs("/logo.png"), width: 512, height: 512 },
    image: abs("/og/og-default.jpg"),
    slogan: SITE.tagline,
    description: SITE.description,
    founder: { "@id": PERSON_ID },
    areaServed: { "@type": "Country", name: "United Kingdom" },
    knowsAbout: [
      "Custom dog portraits",
      "Oil painting",
      "Pet memorial portraits",
      "Dog portrait gifts",
    ],
    priceRange: `£${LOWEST_PRICE}–£${HIGHEST_PRICE}`,
  };
}

export function websiteSchema() {
  return {
    "@type": "WebSite",
    "@id": `${SITE.url}/#website`,
    url: SITE.url,
    name: SITE.name,
    inLanguage: "en-GB",
    publisher: { "@id": ORG_ID },
  };
}

export function personSchema() {
  return {
    "@type": "Person",
    "@id": PERSON_ID,
    name: "Sindy",
    jobTitle: "Artist",
    description:
      "UK-based artist who has been painting dogs in oils for over 20 years.",
    image: abs("/about/sindy.jpg"),
    url: abs("/about"),
    worksFor: { "@id": ORG_ID },
    knowsAbout: ["Dog portraits", "Oil painting", "Pet portraits"],
  };
}

export function breadcrumbSchema(trail: { name: string; path: string }[]) {
  const items = [{ name: "Home", path: "/" }, ...trail];
  return {
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: abs(item.path),
    })),
  };
}

export function howToSchema(name: string, steps: { name: string; text: string }[]) {
  return {
    "@type": "HowTo",
    name,
    inLanguage: "en-GB",
    step: steps.map((s, i) => ({
      "@type": "HowToStep",
      position: i + 1,
      name: s.name,
      text: s.text,
    })),
  };
}

export function serviceSchema() {
  return {
    "@type": "Service",
    name: "Custom hand-painted oil dog portrait",
    serviceType: "Pet portrait painting",
    provider: { "@id": ORG_ID },
    areaServed: { "@type": "Country", name: "United Kingdom" },
    description:
      "A one-of-a-kind oil portrait of your dog, hand-painted from your photos by Sindy. Memorial portraits, gift portraits and multi-pet paintings, shipped across the UK.",
    offers: {
      "@type": "AggregateOffer",
      priceCurrency: "GBP",
      lowPrice: LOWEST_PRICE,
      highPrice: HIGHEST_PRICE,
      offerCount: SIZES.length,
      offers: SIZES.map((s) => ({
        "@type": "Offer",
        name: `${s.name} portrait (${s.dimensions})`,
        priceSpecification: {
          "@type": "PriceSpecification",
          priceCurrency: "GBP",
          minPrice: s.from,
        },
      })),
    },
  };
}

export function imageGallerySchema(items: GalleryItem[]) {
  return {
    "@type": "ImageGallery",
    name: "Hand-painted dog portraits by Sindy’s Dog Art",
    url: abs("/gallery"),
    image: items
      .filter((item) => item.painting)
      .map((item) => ({
        "@type": "ImageObject",
        contentUrl: abs(item.painting as string),
        name: item.title,
        description: item.paintingAlt,
        creator: { "@id": PERSON_ID },
        creditText: SITE.name,
      })),
  };
}

export function faqSchema(items: { question: string; answer: string }[]) {
  return {
    "@type": "FAQPage",
    mainEntity: items.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };
}

export function articleSchema(a: {
  slug: string;
  title: string;
  description: string;
  published: string;
  updated: string;
  image: string;
  words: number;
}) {
  const url = abs(`/guides/${a.slug}`);
  return {
    "@type": "Article",
    "@id": `${url}#article`,
    headline: a.title,
    description: a.description,
    datePublished: a.published,
    dateModified: a.updated,
    inLanguage: "en-GB",
    wordCount: a.words,
    mainEntityOfPage: url,
    image: [abs(a.image)],
    author: { "@id": PERSON_ID },
    publisher: { "@id": ORG_ID },
  };
}
