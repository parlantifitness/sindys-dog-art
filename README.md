# Sindy’s Dog Art

Website for [sindysdogart.com](https://sindysdogart.com): hand-painted custom oil portraits of dogs by Sindy, a UK-based artist. Memorial and gift portraits, shipped UK only.

Built with Next.js (App Router), TypeScript and Tailwind CSS v4.

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm run lint
```

## Brand

| | |
|---|---|
| Sage accent | `#8A9178` |
| Charcoal ink | `#232620` |
| Warm cream | `#FAF9F4` |
| Logo / headline moments | Alex Brush |
| Display headings | Cormorant Garamond |
| Body / UI | Jost |

Colours and fonts are defined in `src/app/globals.css` and `src/app/layout.tsx`. The logo is `src/components/Logo.tsx`.

## Adding gallery images

Drop files into `public/gallery/` named:

```
memorial-01.jpg          finished painting
memorial-01-photo.jpg    original dog photo (optional, enables the Painting / Photo toggle)
gift-01.jpg
multi-pet-01.jpg
```

Categories are `memorial`, `gift` and `multi-pet`. JPG, PNG, WebP and AVIF work. Paintings are shown at their natural proportions (no cropping). A category with no paintings is hidden; to show empty “coming soon” frames instead, raise `SLOTS_PER_CATEGORY` in `src/lib/gallery.ts`.

For good SEO, give each image proper alt text and a title in the `DETAILS` map in `src/lib/gallery.ts`.

## Enquiry form

`/commission` posts to `src/app/api/commission/route.ts`, which emails Sindy (with the photos attached) through [Resend](https://resend.com). Set these environment variables:

```
RESEND_API_KEY=...
ENQUIRY_TO_EMAIL=where-enquiries-go@example.com
ENQUIRY_FROM_EMAIL="Sindy’s Dog Art <enquiries@sindysdogart.com>"   # a sender verified in Resend
NEXT_PUBLIC_SITE_URL=https://sindysdogart.com
```

Without them, enquiries are logged to the server console in development and rejected with a 503 in production. Photos are shrunk in the browser (max 4, 4 MB combined) so the upload fits typical serverless request limits.

## Content still to supply

Search the codebase for `PlaceholderNote` to find copy Sindy needs to write:

- `src/lib/testimonials.ts`: 15 placeholder reviews (the page is `noindex` until they are real)
- `src/lib/guides.ts`: five guide outlines (drafts are `noindex`; set `status: "published"` once written)
- `src/app/about/page.tsx`: full bio; add a photo of Sindy as `public/about/sindy.jpg` and it appears automatically
- Turnaround time: currently “discuss with Sindy” (`src/lib/pricing.ts`)
