import { cta, h3, p, painting, pricing, ul, type Guide } from "@/lib/guide-types";
import {
  FINAL_PAYMENT,
  LOWEST_PRICE,
  PAYMENT_SPLIT,
  PRICE_NOTE,
  REVISIONS,
  SHIPPING,
  priceSummary,
} from "@/lib/policies";
import { money } from "./shared";

const TODAY = "2026-11-23";

export const guide: Guide = {
  slug: "pet-portrait-prices-uk",
  title: "Pet portrait prices in the UK",
  metaTitle: "Pet Portrait Prices UK",
  description:
    "What pet portraits typically cost in the UK by medium and size, what changes the price, and Sindy's own from-prices for a hand-painted oil dog portrait.",
  quickAnswer: `UK pet portrait prices vary widely by medium: roughly £40–£120 for a digital file, £100–£550 for an original drawing, and £300–£1,200+ for an original oil, acrylic or watercolour painting. Size, number of pets, background detail and framing all affect the final price. Sindy's hand-painted oil dog portraits start from ${money(LOWEST_PRICE)}.`,
  published: TODAY,
  updated: TODAY,
  status: "published",
  related: [
    "how-much-does-a-custom-oil-dog-portrait-cost",
    "how-to-commission-a-dog-portrait-from-a-photo",
    "customising-your-dog-portrait-background-colours-details",
  ],
  sections: [
    {
      id: "what-pet-portraits-cost",
      title: "What pet portraits cost across the UK",
      blocks: [
        p(
          "Pet portrait prices in the UK vary a great deal, mostly because “pet portrait” covers very different kinds of artwork. As a rough guide to the wider market:"
        ),
        ul(
          "**Digital portrait file:** roughly £40–£120. A high-resolution digital file, usually drawn on a tablet, that you arrange to have printed yourself.",
          "**Printed canvas or framed print:** roughly £80–£200. A physical reproduction printed from a digital design, rather than an original piece.",
          "**Original drawing** (pencil, pastel or charcoal): roughly £100–£550. A one-of-a-kind hand-drawn piece on paper, usually sent unframed.",
          "**Original painting** (oil, acrylic or watercolour): roughly £300–£1,200+. A traditional hand-painted piece on canvas or fine art paper, and generally the most time-consuming to produce."
        ),
        p(
          "These are general UK market ranges, not quotes from any particular artist, and they move around depending on the individual and the commission."
        ),
      ],
    },
    {
      id: "what-changes-the-price",
      title: "What changes the price",
      blocks: [
        p("Within any of those categories, a few things consistently move the price:"),
        ul(
          "**Size.** A small head-and-shoulders study costs less than a large, full-body piece.",
          "**Number of pets.** Most prices cover a single animal; a second or third pet usually adds to the cost.",
          "**Background detail.** A plain or softly toned background is often the baseline; a detailed scenic background costs more.",
          "**Framing.** Many artists send original artwork unframed to avoid damage in transit, and charge separately for framing and mounting.",
          "**Deposits.** Independent UK artists typically ask for a deposit, often 25–50% of the price, to secure a commission slot."
        ),
      ],
    },
    {
      id: "sindys-prices",
      title: "Sindy's prices for a hand-painted oil dog portrait",
      blocks: [
        p(
          `Sindy paints exclusively in oils, by hand, from your photos. Her from-prices are ${priceSummary()}. ${PRICE_NOTE}`
        ),
        pricing,
        painting(
          "hand-painted-fawn-dog-gold-background-oil-portrait-gift",
          "A hand-painted oil portrait, one of Sindy's original paintings."
        ),
        h3("What's included"),
        ul(
          "A one-of-a-kind, hand-painted oil portrait, not a print or a digital file",
          REVISIONS,
          `${PAYMENT_SPLIT} ${FINAL_PAYMENT}`
        ),
        p(SHIPPING),
        p(
          "See our [full pricing page](/pricing) for size-by-size prices, or our guide to [what affects the cost of a custom oil dog portrait](/guides/how-much-does-a-custom-oil-dog-portrait-cost) for more detail on sizing and turnaround."
        ),
        cta("Have a photo in mind? Get a price for your dog's portrait."),
      ],
    },
    {
      id: "dogs-only",
      title: "Dogs, not other pets",
      blocks: [
        p(
          "Sindy paints dogs. If you're looking for a portrait of a cat or another animal, this isn't the right place, but the general pricing patterns above still apply wherever you commission from."
        ),
      ],
    },
  ],
  faqs: [
    {
      question: "How much does a custom pet portrait cost in the UK?",
      answer:
        "It depends heavily on the medium. Digital files tend to start around £40, original drawings from around £100, and original oil, acrylic or watercolour paintings from around £300, rising to £1,200 or more for large, detailed pieces.",
    },
    {
      question: "Why do oil paintings cost more than digital pet portraits?",
      answer:
        "A digital portrait is typically produced quickly on a tablet, while a hand-painted oil portrait is built up in layers by hand. You're also buying a single original piece rather than a reproducible file.",
    },
    {
      question: "Does Sindy offer digital portraits or prints?",
      answer:
        "No. Sindy paints exclusively in oils, by hand, from your photos. Every portrait is an original piece.",
    },
    {
      question: "Does Sindy's pricing change for a second or third dog?",
      answer:
        "There isn't a separate multi-pet price list. The price depends on the size you choose, and Sindy will advise on the best size for your dogs' photos.",
    },
  ],
};
