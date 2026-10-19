import type { ReactNode } from "react";
import { Container } from "./Container";
import { PageHeader } from "./PageHeader";

export function LegalPage({
  eyebrow,
  title,
  intro,
  updated,
  children,
}: {
  eyebrow: string;
  title: string;
  intro: string;
  updated: string;
  children: ReactNode;
}) {
  return (
    <>
      <PageHeader eyebrow={eyebrow} title={title}>
        <p>{intro}</p>
      </PageHeader>
      <Container narrow className="py-14">
        <p className="mb-10 text-sm text-ink-soft">Last updated: {updated}</p>
        <div className="space-y-10">{children}</div>
      </Container>
    </>
  );
}

export function LegalSection({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <section>
      <h2 className="mb-3 text-3xl">{title}</h2>
      <div className="space-y-3 text-ink-soft [&_li]:ml-5 [&_li]:list-disc [&_a]:underline [&_a:hover]:text-sage-deep">
        {children}
      </div>
    </section>
  );
}
