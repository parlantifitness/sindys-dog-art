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
hand-painted-german-shepherd-oil-portrait-memorial.jpg         finished painting
hand-painted-german-shepherd-oil-portrait-memorial-photo.jpg   original dog photo (optional, enables the Painting / Photo toggle)
hand-painted-westie-oil-portrait-gift.jpg
multi-pet-01.jpg                                                (simple numbered names also work)
```

Categories are `memorial`, `gift` and `multi-pet`. JPG, PNG, WebP and AVIF work. Paintings are shown at their natural proportions (no cropping). A category with no paintings is hidden; to show empty “coming soon” frames instead, raise `SLOTS_PER_CATEGORY` in `src/lib/gallery.ts`.

Descriptive file names help image search: use the breed only when you are sure of it, otherwise a plain description (`hand-painted-fluffy-white-dog-oil-portrait-gift.jpg`). Add a title and alt text for each file in the `DETAILS` map in `src/lib/gallery.ts` (keyed by file name without the extension); the order of that map is the gallery order. If you rename a file, add a redirect for the old URL to `LEGACY_GALLERY_IMAGES` in `next.config.ts`.

## Enquiry form

`/commission` posts to `src/app/api/commission/route.ts`, which emails the business inbox (`CONTACT_EMAIL` in `src/lib/site.ts`, currently sindysdogart@gmail.com) with the photos attached, through [Resend](https://resend.com). Replying to an enquiry email replies to the customer. The one required setting is:

```
RESEND_API_KEY=...                  # from the Resend dashboard
```

Optional:

```
ENQUIRY_TO_EMAIL=...                # defaults to CONTACT_EMAIL
ENQUIRY_FROM_EMAIL="Sindy’s Dog Art <enquiries@sindysdogart.com>"   # defaults to Resend's test sender
NEXT_PUBLIC_SITE_URL=https://sindysdogart.com
```

The default test sender (`onboarding@resend.dev`) only delivers to the email address the Resend account was created with, so create the Resend account with sindysdogart@gmail.com. For better deliverability later, verify sindysdogart.com in Resend and set `ENQUIRY_FROM_EMAIL`.

Without `RESEND_API_KEY`, enquiries are logged to the server console in development and rejected with a 503 in production. Photos are shrunk in the browser (max 4, 4 MB combined) so the upload fits typical serverless request limits.

## Keeping the site consistent

Prices live in `src/lib/pricing.ts`. Every other business rule (payment split, revisions, refunds, shipping, turnaround, the expedited surcharge) lives in `src/lib/policies.ts`, and the FAQ, How It Works, Terms, commission form, structured data and `llms.txt` all read from it. **Never retype a price or policy in a page or guide; import it.** To change the typical turnaround, edit `TURNAROUND_ESTIMATE` (currently a placeholder estimate to confirm with Sindy).

## Guides

The five articles live in `src/content/guides/` as typed content (see `src/lib/guide-types.ts`). They quote prices, payment, revisions, refunds, shipping and turnaround by importing from `src/lib/policies.ts` and `src/lib/pricing.ts`, and the process steps from `src/lib/process.ts`; never retype those. Each guide has a quick-answer box, contents list, FAQs and Article/FAQ/HowTo structured data. A guide with `status: "draft"` is noindexed and left out of the sitemap.

## Search and AI visibility

- Every page sets a title, description, canonical URL and a 1200×630 share image (`public/og/`). Regenerate those images, and `public/logo.png`, with `scripts/generate-og-images.py` (see the script header for the fonts it needs).
- Structured data (Organization, WebSite, Person, FAQPage, HowTo, Service, ImageGallery, BreadcrumbList) is built in `src/lib/schema.ts`.
- `/llms.txt` summarises the business for AI assistants. `robots.ts` lets AI search/answer bots in, and keeps AI-training crawlers away from the artwork folders.
- `/privacy` and `/terms` are plain-English drafts; have them checked before relying on them.

## Content still to supply

- `src/lib/testimonials.ts`: real customer reviews (three so far). Add more as they come in; only use reviews from genuine, independent customers, with their permission. With no reviews, the Testimonials page falls back to the Trustpilot links and stays out of search results.
- Turnaround time: `TURNAROUND_ESTIMATE` in `src/lib/policies.ts` is a placeholder estimate to confirm with Sindy.
