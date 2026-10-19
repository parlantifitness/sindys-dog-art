import { BUDGET_RANGES, SIZES } from "@/lib/pricing";
import { cta, h3, p, pricing, ul, type Guide } from "@/lib/guide-types";
import {
  FINAL_PAYMENT,
  FINAL_PRICE_NOTE,
  LOWEST_PRICE,
  PAYMENT_SPLIT,
  RUSH_NOTE,
  RUSH_PERCENT,
  SHIPPING,
  priceSummary,
} from "@/lib/policies";
import { PUBLISHED, money } from "./shared";

const A4 = SIZES.find((s) => s.id === "a4")!;
const a4Rush = A4.from * (1 + RUSH_PERCENT / 100);
const a4Half = A4.from / 2;

export const guide: Guide = {
  slug: "how-much-does-a-custom-oil-dog-portrait-cost",
  title: "How much does a custom oil dog portrait cost?",
  description:
    "What a custom oil dog portrait costs from Sindy’s Dog Art: from-prices for A5, A4, A3 and Large, what can change the final price, expedited turnaround and how payment works.",
  quickAnswer: `Sindy’s custom oil dog portraits start from ${priceSummary()}. These are “from” prices. ${FINAL_PRICE_NOTE} ${PAYMENT_SPLIT}`,
  published: PUBLISHED,
  updated: PUBLISHED,
  status: "published",
  related: [
    "how-to-commission-a-dog-portrait-from-a-photo",
    "dog-portrait-gift-ideas",
    "best-photos-for-a-dog-portrait",
  ],
  sections: [
    {
      id: "prices-by-size",
      title: "Sindy’s prices by size",
      blocks: [
        p("Every portrait is hand-painted in oils from your photos. Here are the four sizes and their from-prices."),
        pricing,
      ],
    },
    {
      id: "what-affects-the-price",
      title: "What can change the final price",
      blocks: [
        p(
          "Because these are “from” prices, the final figure depends on your portrait. Sindy confirms it with you before any work begins, so you always know what you are agreeing to."
        ),
        p("In any custom painting, a few things typically make a difference:"),
        ul(
          "**Size:** larger portraits take more time and materials.",
          "**Number of pets:** more than one animal in the painting means more to paint. Choose “Multi-pet” on the enquiry form and Sindy will talk through the best size and price for your photos.",
          "**Detail and background:** a simple backdrop and a detailed scene are different amounts of work."
        ),
        p("Tell Sindy what you have in mind when you enquire, and she will explain how it affects your quote."),
      ],
    },
    {
      id: "expedited",
      title: "Needing it sooner: expedited turnaround",
      blocks: [
        p(
          `If you need your portrait by a particular date, mention it in your enquiry. ${RUSH_NOTE}. As an example, an A4 portrait from ${money(A4.from)} would be from about ${money(a4Rush)} with expedited turnaround.`
        ),
        p("Whether a date is possible depends on Sindy’s schedule, so ask as early as you can."),
      ],
    },
    {
      id: "how-payment-works",
      title: "How payment works",
      blocks: [
        p(`${PAYMENT_SPLIT} ${FINAL_PAYMENT}`),
        p(
          `For example, on an A4 portrait priced from ${money(A4.from)}, each payment would be from about ${money(a4Half)}. Sindy will confirm the exact amounts, and when each is due, when she sends your quote.`
        ),
      ],
    },
    {
      id: "what-you-are-paying-for",
      title: "What you are paying for",
      blocks: [
        p(
          "A custom portrait is a one-of-a-kind painting. Sindy, a UK artist with over 20 years of experience painting dogs, paints each one by hand in oils from your photos. You approve a sketch first, with two rounds of revisions, so you can be confident before the painting begins."
        ),
        p(
          "Unlike a printed or mass-produced gift, no two hand-painted portraits are the same. That is what makes it something to keep, whether it is a memorial or a gift."
        ),
      ],
    },
    {
      id: "choosing-for-your-budget",
      title: "Choosing a size for your budget",
      blocks: [
        p(
          `The smallest size, A5, starts from ${money(LOWEST_PRICE)}, and it makes a lovely keepsake for a shelf or desk. If you would like something larger, A4, A3 and Large give more room for detail.`
        ),
        p(
          `The enquiry form includes an optional budget range (${BUDGET_RANGES.map((r) => `“${r}”`).join(", ")}), so you can let Sindy know what you have in mind without any pressure.`
        ),
        h3("Delivery"),
        p(`${SHIPPING} Sindy will go through delivery details with you when she sends your quote.`),
        cta("Not sure which size suits you? Tell Sindy about your dog and where the portrait will go."),
      ],
    },
  ],
  faqs: [
    {
      question: "What is the cheapest size?",
      answer: `An A5 portrait, from ${money(LOWEST_PRICE)}. ${FINAL_PRICE_NOTE}`,
    },
    {
      question: "Is the price fixed when I enquire?",
      answer: `The prices shown are “from” prices, not fixed quotes. ${FINAL_PRICE_NOTE}`,
    },
    {
      question: "Do I have to pay everything up front?",
      answer: `No. ${PAYMENT_SPLIT} ${FINAL_PAYMENT}`,
    },
    {
      question: "Do you charge extra for a rush job?",
      answer: `Expedited turnaround adds ${RUSH_PERCENT}% to the price, so please discuss it with Sindy. Mention your deadline in your enquiry and she will let you know what is possible.`,
    },
  ],
};
