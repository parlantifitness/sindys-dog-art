import type { ReactNode } from "react";
import { BrushMark } from "./Logo";
import { Container } from "./Container";

export function PageHeader({
  eyebrow,
  title,
  children,
}: {
  eyebrow?: string;
  title: string;
  children?: ReactNode;
}) {
  return (
    <header className="border-b border-line bg-sage-soft/50 py-14 text-center sm:py-20">
      <Container narrow>
        <BrushMark className="mx-auto mb-4 h-7 w-10 text-sage" />
        {eyebrow ? (
          <p className="mb-3 text-xs font-medium uppercase tracking-[0.3em] text-sage-deep">
            {eyebrow}
          </p>
        ) : null}
        <h1 className="text-4xl sm:text-6xl">{title}</h1>
        {children ? (
          <div className="mx-auto mt-5 max-w-2xl text-lg text-ink-soft">
            {children}
          </div>
        ) : null}
      </Container>
    </header>
  );
}
