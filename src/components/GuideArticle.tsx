import { ArtImage } from "@/components/ArtImage";
import { ButtonLink } from "@/components/ButtonLink";
import { KeyFacts } from "@/components/KeyFacts";
import { PricingGrid } from "@/components/PricingTable";
import { RichText } from "@/components/RichText";
import type { Block, GuideSection } from "@/lib/guide-types";
import type { GalleryItem } from "@/lib/gallery";
import { PROCESS_STEPS } from "@/lib/process";
import { COMMISSION_HREF, COMMISSION_LABEL } from "@/lib/site";

export function GuideArticle({
  sections,
  paintings,
}: {
  sections: GuideSection[];
  paintings: Map<string, GalleryItem>;
}) {
  return (
    <div className="space-y-14">
      {sections.map((section) => (
        <section key={section.id} id={section.id} aria-labelledby={`${section.id}-h`} className="scroll-mt-8">
          <h2 id={`${section.id}-h`} className="mb-4 text-4xl">
            {section.title}
          </h2>
          <div className="space-y-4 text-ink-soft">
            {section.blocks.map((block, i) => (
              <BlockView key={i} block={block} paintings={paintings} />
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}

function BlockView({ block, paintings }: { block: Block; paintings: Map<string, GalleryItem> }) {
  switch (block.type) {
    case "p":
      return <p><RichText text={block.text} /></p>;
    case "h3":
      return <h3 className="pt-2 text-2xl text-ink">{block.text}</h3>;
    case "ul":
      return (
        <ul className="ml-5 list-disc space-y-2">
          {block.items.map((item) => (
            <li key={item}><RichText text={item} /></li>
          ))}
        </ul>
      );
    case "ol":
      return (
        <ol className="ml-5 list-decimal space-y-2">
          {block.items.map((item) => (
            <li key={item}><RichText text={item} /></li>
          ))}
        </ol>
      );
    case "note":
      return (
        <aside className="border border-line bg-sage-soft/50 p-5">
          {block.title ? <p className="mb-1 font-display text-xl text-ink">{block.title}</p> : null}
          <p><RichText text={block.text} /></p>
        </aside>
      );
    case "steps":
      return (
        <ol className="space-y-4">
          {PROCESS_STEPS.map((step, i) => (
            <li key={step.title} className="flex gap-4">
              <span aria-hidden="true" className="font-script text-4xl leading-none text-sage">{i + 1}</span>
              <p>
                <strong className="font-medium text-ink">{step.title}.</strong> {step.text}
              </p>
            </li>
          ))}
        </ol>
      );
    case "pricing":
      return <PricingGrid />;
    case "facts":
      return <KeyFacts heading="Key facts" />;
    case "painting": {
      const item = paintings.get(block.id);
      const src = block.photo ? item?.photo : item?.painting;
      if (!item || !src) return null;
      return (
        <figure className="mx-auto max-w-md">
          <ArtImage
            src={src}
            alt={block.photo ? item.photoAlt : item.paintingAlt}
            width={block.photo ? item.photoWidth : item.width}
            height={block.photo ? item.photoHeight : item.height}
            sizes="(min-width: 768px) 448px, 100vw"
          />
          <figcaption className="mt-2 text-center text-sm">{block.caption}</figcaption>
        </figure>
      );
    }
    case "cta":
      return (
        <div className="pt-2">
          <p className="mb-3"><RichText text={block.text} /></p>
          <ButtonLink href={COMMISSION_HREF}>{COMMISSION_LABEL}</ButtonLink>
        </div>
      );
  }
}
