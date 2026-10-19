import { CommissionForm } from "@/components/CommissionForm";
import { Container } from "@/components/Container";
import { PageHeader } from "@/components/PageHeader";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Commission a Dog Portrait",
  description:
    "Commission a hand-painted oil portrait of your dog. Share your photo, choose a size from A5 (from £95) to Large (from £480) and tell Sindy about your memorial or gift portrait.",
  path: "/commission",
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
    </>
  );
}
