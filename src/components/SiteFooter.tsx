import Link from "next/link";
import { COMMISSION_HREF, COMMISSION_LABEL, NAV_LINKS, SITE } from "@/lib/site";
import { Container } from "./Container";
import { Logo } from "./Logo";

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-line bg-sage-soft/60 py-14">
      <Container className="grid gap-10 text-center md:grid-cols-3 md:text-left">
        <div className="flex flex-col items-center md:items-start">
          <Logo size="sm" />
          <p className="mt-4 max-w-xs font-display text-xl italic text-ink-soft">
            {SITE.tagline}
          </p>
        </div>

        <nav aria-label="Footer">
          <h2 className="mb-3 text-xs font-medium uppercase tracking-[0.25em] text-sage-deep">
            Explore
          </h2>
          <ul className="space-y-1">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="hover:text-sage-deep">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="mb-3 text-xs font-medium uppercase tracking-[0.25em] text-sage-deep">
            Commissions
          </h2>
          <p className="text-ink-soft">
            Hand-painted oil portraits, made to order. Shipping within the UK
            only.
          </p>
          <Link
            href={COMMISSION_HREF}
            className="mt-3 inline-block border-b border-ink pb-0.5 hover:border-sage-deep hover:text-sage-deep"
          >
            {COMMISSION_LABEL}
          </Link>
        </div>
      </Container>
      <Container className="mt-12 border-t border-line pt-6 text-center text-sm text-ink-soft">
        <p>© {SITE.name}. All paintings and images are the property of the artist.</p>
      </Container>
    </footer>
  );
}
