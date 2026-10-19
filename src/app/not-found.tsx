import type { Metadata } from "next";
import { ButtonLink } from "@/components/ButtonLink";
import { Container } from "@/components/Container";

export const metadata: Metadata = {
  title: "Page not found",
  robots: { index: false },
};

export default function NotFound() {
  return (
    <Container narrow className="py-28 text-center">
      <h1 className="text-5xl">We couldn’t find that page</h1>
      <p className="mx-auto mt-4 max-w-md text-ink-soft">
        It may have moved, or the link might be mistyped. Let’s get you back to
        the good dogs.
      </p>
      <ButtonLink href="/" className="mt-8">
        Back to home
      </ButtonLink>
    </Container>
  );
}
