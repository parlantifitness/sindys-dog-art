import { formatPrice, SIZES } from "@/lib/pricing";
import { PRICE_NOTE, RUSH_NOTE } from "@/lib/policies";

export function PricingGrid() {
  return (
    <div>
      <ul className="grid gap-px border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
        {SIZES.map((size) => (
          <li key={size.id} className="bg-cream p-6 text-center">
            <h3 className="text-3xl">{size.name}</h3>
            <p className="mt-1 text-xs uppercase tracking-[0.18em] text-ink-soft">
              {size.dimensions}
            </p>
            <p className="mt-4 font-display text-4xl text-sage-deep">
              <span className="mr-1 font-sans text-xs uppercase tracking-[0.2em] text-ink-soft">
                from
              </span>
              {formatPrice(size.from)}
            </p>
            <p className="mt-3 text-sm text-ink-soft">{size.blurb}</p>
          </li>
        ))}
      </ul>
      <p className="mt-4 text-center text-sm text-ink-soft">
        {PRICE_NOTE} {RUSH_NOTE}.
      </p>
    </div>
  );
}
