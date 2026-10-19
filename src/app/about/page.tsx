import { existsSync } from "node:fs";
import path from "node:path";
import { ArtImage } from "@/components/ArtImage";
import { ButtonLink } from "@/components/ButtonLink";
import { Container } from "@/components/Container";
import { PageHeader } from "@/components/PageHeader";
import { PlaceholderNote } from "@/components/PlaceholderNote";
import { pageMetadata } from "@/lib/seo";
import { COMMISSION_HREF, COMMISSION_LABEL } from "@/lib/site";

export const metadata = pageMetadata({
  title: "About Sindy",
  description:
    "Meet Sindy, a UK artist who has been painting dogs for over 20 years, creating hand-painted oil portraits for dog lovers across the country.",
  path: "/about",
});

/** Drop a photo of Sindy at public/about/sindy.jpg and it appears here automatically. */
const SINDY_PHOTO = "/about/sindy.jpg";

export default function AboutPage() {
  const hasPhoto = existsSync(path.join(process.cwd(), "public", SINDY_PHOTO));
  return (
    <>
      <PageHeader eyebrow="About" title="Meet Sindy">
        <p>
          Sindy has been painting dogs for over 20 years, and she still can’t
          resist a good face.
        </p>
      </PageHeader>

      <Container className="grid gap-12 py-16 md:grid-cols-[2fr_3fr] md:items-start">
        <ArtImage
          src={hasPhoto ? SINDY_PHOTO : undefined}
          alt="Sindy, the artist, with her paintings"
          label="Photo of Sindy coming soon"
          sizes="(min-width: 768px) 40vw, 100vw"
        />
        <div className="space-y-5 text-ink-soft">
          <h2 className="text-4xl text-ink">Painting dogs for over 20 years</h2>
          <p>
            Sindy is a UK-based artist who hand-paints custom oil portraits of
            dogs. For more than twenty years she has painted much-loved
            companions for customers across the UK, as lasting memorials and as
            gifts for the dog lovers in their lives.
          </p>
          <PlaceholderNote>
            Sindy’s full bio goes here: how she started painting, what draws
            her to dogs, her studio and materials, and a personal anecdote or
            two.
          </PlaceholderNote>
          <div className="pt-2">
            <ButtonLink href={COMMISSION_HREF}>{COMMISSION_LABEL}</ButtonLink>
          </div>
        </div>
      </Container>
    </>
  );
}
