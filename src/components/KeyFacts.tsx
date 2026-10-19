import { KEY_FACTS } from "@/lib/policies";

/** Short, quotable facts. Read from the shared policies so they always match the rest of the site. */
export function KeyFacts({ heading = "At a glance" }: { heading?: string }) {
  return (
    <section aria-label={heading} className="border border-line bg-sage-soft/50 p-6 sm:p-8">
      <h2 className="mb-4 text-3xl">{heading}</h2>
      <dl className="grid gap-x-8 gap-y-3 sm:grid-cols-[auto_1fr]">
        {KEY_FACTS.map((fact) => (
          <div key={fact.label} className="contents">
            <dt className="font-medium text-ink">{fact.label}</dt>
            <dd className="text-ink-soft">{fact.value}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
