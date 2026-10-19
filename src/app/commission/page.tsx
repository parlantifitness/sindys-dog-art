import { CommissionForm } from "@/components/CommissionForm";
import { Container } from "@/components/Container";
import { PageHeader } from "@/components/PageHeader";
import { BreadcrumbJsonLd, JsonLdGraph } from "@/components/JsonLd";
import { HIGHEST_PRICE, LOWEST_PRICE } from "@/lib/policies";
import { serviceSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Commission a Dog Portrait",
  description:
    `Commission a hand-painted oil portrait of your dog. Share your photo, choose a size from A5 (from £${LOWEST_PRICE}) to Large (from £${HIGHEST_PRICE}) and tell Sindy about your memorial or gift portrait.`,
  path: "/commission",
  image: "/og/og-commission.jpg",
});

export default function CommissionPage() {
  return (
    <>
      <PageHeader eyebrow="Enquiry" title="Commission a portrait">
        <p>
          Tell Sindy about your dog and the portrait you have in mind. This is
          an enquiry, not a commitment: you will approve a sketch before any
          painting begins.
        </p>
      </PageHeader>
      <Container narrow className="py-14">
        <CommissionForm />
      </Container>
      <JsonLdGraph nodes={[serviceSchema()]} />
      <BreadcrumbJsonLd trail={[{ name: "Commission a Portrait", path: "/commission" }]} />
    </>
  );
}
