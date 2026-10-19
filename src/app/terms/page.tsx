import Link from "next/link";
import { LegalPage, LegalSection } from "@/components/LegalPage";
import {
  FINAL_PAYMENT,
  FINAL_PRICE_NOTE,
  LIKENESS,
  NO_REVISIONS,
  PAYMENT_SPLIT,
  POLICY_UPDATED,
  REFUND,
  REVISIONS,
  RUSH_NOTE,
  SHIPPING,
  TURNAROUND_TEXT,
  priceSummary,
} from "@/lib/policies";
import { pageMetadata } from "@/lib/seo";
import { BreadcrumbJsonLd } from "@/components/JsonLd";

export const metadata = pageMetadata({
  title: "Terms of Commission",
  description:
    "Plain-English terms for commissioning a hand-painted oil dog portrait from Sindy’s Dog Art: payment, revisions, refunds, turnaround and UK-only shipping.",
  path: "/terms",
});

export default function TermsPage() {
  return (
    <>
      <LegalPage
        eyebrow="Terms"
        title="Terms of commission"
        intro="How commissioning a portrait works, in plain English, so there are no surprises for you or for Sindy."
        updated={POLICY_UPDATED}
      >
        <LegalSection title="The short version">
          <ul>
            <li>{PAYMENT_SPLIT}</li>
            <li>{REVISIONS} {NO_REVISIONS}</li>
            <li>{REFUND} {LIKENESS}</li>
            <li>{SHIPPING}</li>
          </ul>
        </LegalSection>

        <LegalSection title="Enquiries and quotes">
          <p>
            Sending an enquiry through the{" "}
            <Link href="/commission">commission form</Link> is not a commitment
            to buy. Sindy will get in touch to talk through your portrait, and
            you will approve a sketch before any painting begins.
          </p>
          <p>
            Prices start from {priceSummary()}. All prices are “from” prices.{" "}
            {FINAL_PRICE_NOTE} If you need your portrait by a particular date,
            tell Sindy when you enquire: {RUSH_NOTE}.
          </p>
        </LegalSection>

        <LegalSection title="Payment">
          <p>{PAYMENT_SPLIT} {FINAL_PAYMENT}</p>
          <p>
            Sindy will confirm the amounts and when each payment is due when
            she sends your quote.
          </p>
        </LegalSection>

        <LegalSection title="Sketch and revisions">
          <p>
            Before painting begins, Sindy shares a sketch or outline for your
            approval. {REVISIONS}
          </p>
          <p>
            {NO_REVISIONS} Please take your time with the sketch and raise any
            changes at that stage.
          </p>
        </LegalSection>

        <LegalSection title="Refunds and likeness">
          <p>{REFUND}</p>
          <p>
            {LIKENESS} Please get in touch as soon as you receive your portrait.
          </p>
          <p>
            None of this affects your legal rights. For example, if your
            portrait arrives damaged or is not as described, your statutory
            rights still apply.
          </p>
        </LegalSection>

        <LegalSection title="Turnaround">
          <p>{TURNAROUND_TEXT}</p>
          <p>
            These are estimates, not guarantees. If you need your portrait for
            a particular date, mention it in your enquiry and Sindy will tell
            you whether it is possible. {RUSH_NOTE}.
          </p>
        </LegalSection>

        <LegalSection title="Shipping">
          <p>
            {SHIPPING} Your portrait is shipped to your UK address once it is
            complete and the final payment has been made.
          </p>
        </LegalSection>

        <LegalSection title="Your photos">
          <p>
            Please only send photos you took or have permission to use. Sindy
            uses them to paint your portrait, and how your photos and details
            are handled is covered in our{" "}
            <Link href="/privacy">Privacy Policy</Link>.
          </p>
        </LegalSection>
      </LegalPage>
      <BreadcrumbJsonLd trail={[{ name: "Terms", path: "/terms" }]} />
    </>
  );
}
