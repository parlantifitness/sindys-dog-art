import Link from "next/link";
import { BreadcrumbJsonLd } from "@/components/JsonLd";
import { LegalPage, LegalSection } from "@/components/LegalPage";
import { POLICY_UPDATED, PRIVACY_EMAIL } from "@/lib/policies";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Privacy Policy",
  description:
    "How Sindy’s Dog Art handles the details and photos you send through the enquiry form: what we collect, why, how long we keep it, and your rights.",
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <>
      <LegalPage
        eyebrow="Privacy"
        title="Privacy policy"
        intro="What we do with the details and photos you send us, in plain English."
        updated={POLICY_UPDATED}
      >
        <LegalSection title="The short version">
          <ul>
            <li>We only use your details to reply to your enquiry and to paint and deliver your portrait.</li>
            <li>We never sell your data, and we don’t share it with anyone for their own purposes, such as advertising.</li>
            <li>We delete things when we no longer need them (details below).</li>
            <li>You can ask to see, correct or delete your data at any time.</li>
          </ul>
        </LegalSection>

        <LegalSection title="Who we are">
          <p>
            Sindy’s Dog Art is a small UK business run by Sindy as a sole
            trader. When this page says “we”, that’s us. We decide how your
            data is used, so we are responsible for looking after it.
          </p>
        </LegalSection>

        <LegalSection title="What we collect">
          <p>When you use the <Link href="/commission">commission form</Link> we collect:</p>
          <ul>
            <li>your dog’s name</li>
            <li>the photos you upload</li>
            <li>the type of portrait (memorial, gift or multi-pet) and the size you choose</li>
            <li>your occasion and deadline, if you give them</li>
            <li>your background and style notes, and a budget range, if you give them</li>
            <li>your name and email address, and your phone number if you give one</li>
            <li>your confirmation that the portrait will be delivered to a UK address</li>
          </ul>
          <p>
            If we speak or email afterwards, we also keep what you tell us,
            along with your delivery address when your portrait is ready to
            post.
          </p>
        </LegalSection>

        <LegalSection title="What we use it for">
          <ul>
            <li>replying to your enquiry and agreeing a quote with you</li>
            <li>painting your portrait, sharing sketches with you and delivering the finished painting</li>
            <li>keeping records of payments, as the law requires for tax</li>
          </ul>
          <p>
            We won’t add you to a mailing list or contact you about anything
            else unless you ask us to.
          </p>
        </LegalSection>

        <LegalSection title="Why we’re allowed to">
          <p>
            We use your details because you asked us to: to answer your
            enquiry, and to carry out a commission if you go ahead. We also keep
            some records because the law requires it.
          </p>
        </LegalSection>

        <LegalSection title="Who sees it">
          <p>
            We don’t sell your data, and we don’t share it with anyone for
            their own purposes. We use a few trusted services to run the
            business: the companies that host this website and deliver the
            enquiry emails to us, and a courier or postal service that needs
            your delivery address when your portrait ships. They can only use
            your data to provide their service to us.
          </p>
        </LegalSection>

        <LegalSection title="How long we keep it">
          <ul>
            <li><strong>Enquiries that don’t go ahead:</strong> deleted after 12 months.</li>
            <li><strong>Your photos:</strong> deleted within 12 months of your portrait being delivered, or sooner if you ask.</li>
            <li><strong>Commission and payment records:</strong> kept for 6 years, because tax rules require it.</li>
          </ul>
        </LegalSection>

        <LegalSection title="Your rights">
          <p>You can ask us at any time to:</p>
          <ul>
            <li>tell you what data we hold about you</li>
            <li>correct anything that’s wrong</li>
            <li>delete your data (we may need to keep payment records for tax)</li>
            <li>stop using your data in a particular way</li>
          </ul>
          <p>
            Email <a href={`mailto:${PRIVACY_EMAIL}`}>{PRIVACY_EMAIL}</a> and
            we’ll reply within a month. If you’re unhappy with how we’ve
            handled your data, you can complain to the Information
            Commissioner’s Office at{" "}
            <a href="https://ico.org.uk/make-a-complaint/">ico.org.uk</a>.
          </p>
        </LegalSection>

        <LegalSection title="Cookies">
          <p>
            This website doesn’t use advertising or tracking cookies, and we
            don’t run analytics on it at the moment. If that changes, we’ll
            update this page.
          </p>
        </LegalSection>

        <LegalSection title="Changes">
          <p>
            If we change this policy we’ll update the date at the top of the
            page. See also our <Link href="/terms">Terms</Link>.
          </p>
        </LegalSection>
      </LegalPage>
      <BreadcrumbJsonLd trail={[{ name: "Privacy Policy", path: "/privacy" }]} />
    </>
  );
}
