import Link from "next/link";
import type { ReactNode } from "react";

/** Inline text with [links](/path) and **bold**. Nothing else, so content stays simple and safe. */
export function RichText({ text }: { text: string }) {
  const parts = text.split(/(\[[^\]]+\]\([^)]+\)|\*\*[^*]+\*\*)/g);
  return (
    <>
      {parts.map((part, i): ReactNode => {
        const link = /^\[([^\]]+)\]\(([^)]+)\)$/.exec(part);
        if (link) {
          const [, label, href] = link;
          return href.startsWith("/") ? (
            <Link key={i} href={href} className="underline decoration-sage underline-offset-4 hover:text-sage-deep">
              {label}
            </Link>
          ) : (
            <a key={i} href={href} className="underline decoration-sage underline-offset-4 hover:text-sage-deep">
              {label}
            </a>
          );
        }
        const bold = /^\*\*([^*]+)\*\*$/.exec(part);
        if (bold) return <strong key={i} className="font-medium text-ink">{bold[1]}</strong>;
        return part;
      })}
    </>
  );
}
