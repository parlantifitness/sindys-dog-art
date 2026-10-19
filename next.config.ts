import type { NextConfig } from "next";

const LEGACY_GALLERY_IMAGES: [string, string][] = [
    ["/gallery/memorial-01.jpg", "/gallery/hand-painted-fluffy-white-dog-blue-flowers-oil-portrait-memorial.jpg"],
    ["/gallery/memorial-02.jpg", "/gallery/hand-painted-german-shepherd-oil-portrait-memorial.jpg"],
    ["/gallery/memorial-03.jpg", "/gallery/hand-painted-rottweiler-oil-portrait-memorial.jpg"],
    ["/gallery/memorial-04.jpg", "/gallery/hand-painted-black-and-white-spaniel-oil-portrait-memorial.jpg"],
    ["/gallery/memorial-05.jpg", "/gallery/hand-painted-grey-wiry-coated-dog-oil-portrait-memorial.jpg"],
    ["/gallery/memorial-06.jpg", "/gallery/hand-painted-yorkshire-terrier-oil-portrait-memorial.jpg"],
    ["/gallery/memorial-07.jpg", "/gallery/hand-painted-husky-surf-oil-portrait-memorial.jpg"],
    ["/gallery/memorial-08.jpg", "/gallery/hand-painted-black-cocker-spaniel-oil-portrait-memorial.jpg"],
    ["/gallery/memorial-09.jpg", "/gallery/hand-painted-cream-cocker-spaniel-oil-portrait-memorial.jpg"],
    ["/gallery/memorial-10.jpg", "/gallery/hand-painted-black-poodle-oil-portrait-memorial.jpg"],
    ["/gallery/gift-01.jpg", "/gallery/hand-painted-black-dog-pink-harness-oil-portrait-gift.jpg"],
    ["/gallery/gift-02.jpg", "/gallery/hand-painted-black-spaniel-oil-portrait-gift.jpg"],
    ["/gallery/gift-03.jpg", "/gallery/hand-painted-blue-eyed-husky-oil-portrait-gift.jpg"],
    ["/gallery/gift-04.jpg", "/gallery/hand-painted-black-labrador-puppy-oil-portrait-gift.jpg"],
    ["/gallery/gift-05.jpg", "/gallery/hand-painted-fluffy-white-dog-oil-portrait-gift.jpg"],
    ["/gallery/gift-06.jpg", "/gallery/hand-painted-black-labrador-grass-oil-portrait-gift.jpg"],
    ["/gallery/gift-07.jpg", "/gallery/hand-painted-westie-oil-portrait-gift.jpg"],
    ["/gallery/gift-08.jpg", "/gallery/hand-painted-jack-russell-oil-portrait-gift.jpg"],
    ["/gallery/gift-09.jpg", "/gallery/hand-painted-springer-spaniel-oil-portrait-gift.jpg"],
    ["/gallery/gift-10.jpg", "/gallery/hand-painted-fawn-dog-gold-background-oil-portrait-gift.jpg"],
    ["/gallery/gift-11.jpg", "/gallery/hand-painted-french-bulldog-birthday-oil-portrait-gift.jpg"],
    ["/gallery/gift-11-photo.jpg", "/gallery/hand-painted-french-bulldog-birthday-oil-portrait-gift-photo.jpg"],
];

const nextConfig: NextConfig = {
  // Footer copyright year: set when the site is built, so it needs no runtime clock.
  env: { NEXT_PUBLIC_BUILD_YEAR: String(new Date().getFullYear()) },
  /* config options here */
  cacheComponents: true,
  // Old gallery image URLs (before files were given descriptive names) keep working.
  async redirects() {
    return LEGACY_GALLERY_IMAGES.map(([source, destination]) => ({
      source,
      destination,
      permanent: true,
    }));
  },
  partialPrefetching: true,
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
