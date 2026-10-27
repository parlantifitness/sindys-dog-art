interface Faq {
  question: string;
  answer: string;
}

/** FAQ accordion. Native <details>, so every question starts collapsed and needs no JavaScript. */
export function FaqList({ faqs }: { faqs: readonly Faq[] }) {
  return (
    <div className="divide-y divide-line border-y border-line">
      {faqs.map((faq) => (
        <details key={faq.question} className="group">
          <summary className="flex cursor-pointer list-none items-start justify-between gap-4 py-5 marker:hidden hover:text-sage-deep [&::-webkit-details-marker]:hidden">
            <h3 className="font-display text-3xl font-semibold leading-snug">{faq.question}</h3>
            <span
              aria-hidden="true"
              className="mt-2 shrink-0 text-3xl leading-none text-sage-deep transition-transform group-open:rotate-45"
            >
              +
            </span>
          </summary>
          <p className="pb-6 text-ink-soft">{faq.answer}</p>
        </details>
      ))}
    </div>
  );
}
