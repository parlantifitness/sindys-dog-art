import { cta, h3, ol, p, painting, ul, type Guide } from "@/lib/guide-types";
import {
  LOWEST_PRICE,
  RUSH_NOTE,
  SHIPPING,
  TURNAROUND_ESTIMATE,
  TURNAROUND_TEXT,
} from "@/lib/policies";
import { PUBLISHED, sizeBullets } from "./shared";
import { formatPrice } from "@/lib/pricing";

export const guide: Guide = {
  slug: "dog-portrait-gift-ideas",
  title: "Dog portrait gift ideas",
  description:
    "Gift ideas for dog lovers: when a custom hand-painted dog portrait makes the perfect present, how to give one as a surprise, and how far ahead to order.",
  quickAnswer: `A hand-painted dog portrait makes a personal gift for birthdays, Christmas, anniversaries, a new puppy or just because. Order early: allow ${TURNAROUND_ESTIMATE} for a typical portrait plus time for delivery, or ask Sindy about expedited turnaround. Portraits start from ${formatPrice(LOWEST_PRICE)}.`,
  published: PUBLISHED,
  updated: PUBLISHED,
  status: "published",
  related: [
    "how-much-does-a-custom-oil-dog-portrait-cost",
    "best-photos-for-a-dog-portrait",
    "dog-memorial-portrait-ideas",
  ],
  sections: [
    {
      id: "why-a-portrait",
      title: "Why a dog portrait makes a great gift",
      blocks: [
        p(
          "For many people, their dog is family. A hand-painted portrait of them is a gift nobody else will think of, and it is truly one of a kind: Sindy paints each one by hand in oils from your photos."
        ),
        painting(
          "hand-painted-french-bulldog-birthday-oil-portrait-gift",
          "A birthday portrait: the reference photo (left) beside the finished oil painting (right).",
          true
        ),
      ],
    },
    {
      id: "occasions",
      title: "Occasions for a dog portrait",
      blocks: [
        h3("Birthdays"),
        p("A portrait of their dog is a gift that says you know what matters to them. You can even tell Sindy it is a birthday on the enquiry form."),
        h3("Christmas"),
        p("Christmas is a popular time for gifts, so order well ahead. Allow for painting time and delivery, and see the timing section below."),
        h3("Weddings and anniversaries"),
        p("If a couple’s dog is part of their family, a portrait of them makes a gift that belongs to both of them."),
        h3("A new puppy or a rescue dog"),
        p("Mark the start of a new chapter with a portrait. If the dog is a puppy, use a recent photo, as puppies change quickly."),
        h3("Retirement or a leaving gift"),
        p("For someone with more time to spend with their dog, a portrait is a lasting keepsake."),
        h3("Mother’s Day and Father’s Day"),
        p("For parents who think of their dog as a grandchild, a portrait of the family pet is a gift they will treasure."),
        h3("A housewarming or “just because”"),
        p("You do not need an occasion. A portrait of someone’s dog is a lovely surprise at any time."),
        h3("A gesture of sympathy"),
        p("If someone has lost a dog, a memorial portrait can be a thoughtful gift. See our guide to [memorial oil painting ideas for a dog](/guides/dog-memorial-portrait-ideas)."),
      ],
    },
    {
      id: "surprise",
      title: "How to give a portrait as a surprise",
      blocks: [
        p("You deal with Sindy directly, so the person receiving the portrait does not need to know anything until you give it to them."),
        ol(
          "**Gather photos.** Ask family and friends, or look through your own pictures, for clear photos of the dog. Our guide to the [best photos to send for a dog portrait commission](/guides/best-photos-for-a-dog-portrait) can help.",
          "**Send an enquiry.** Choose “Gift” on the form, add the occasion and any deadline, and say a little about the dog.",
          "**Approve the sketch.** You approve it on their behalf, with two rounds of revisions included at that stage.",
          "**Plan the delivery.** Your portrait is shipped to a UK address once it is complete and the final payment has been made. Talk to Sindy about where it should be sent."
        ),
      ],
    },
    {
      id: "planning-ahead",
      title: "Planning ahead",
      blocks: [
        p(TURNAROUND_TEXT),
        p(`Remember to add time for delivery. ${SHIPPING} If you are short of time, mention your deadline in your enquiry. ${RUSH_NOTE}.`),
      ],
    },
    {
      id: "choosing-a-size",
      title: "Choosing a size for a gift",
      blocks: [
        ul(...sizeBullets()),
        p("If you are not sure, tell Sindy where the portrait is likely to go and she will help you choose."),
        painting(
          "hand-painted-jack-russell-oil-portrait-gift",
          "A hand-painted oil portrait: a Jack Russell terrier sitting up in a cosy room."
        ),
        cta("Ready to plan a gift? Tell Sindy about the dog and the occasion."),
      ],
    },
  ],
  faqs: [
    {
      question: "How far ahead should I order a dog portrait gift?",
      answer: `${TURNAROUND_TEXT} Remember to allow time for delivery too, and mention any deadline in your enquiry.`,
    },
    {
      question: "Can I buy a dog portrait as a surprise?",
      answer:
        "Yes. You deal with Sindy directly, send the photos and approve the sketch, so the person receiving the portrait does not need to be involved.",
    },
    {
      question: "Can I get a portrait for a specific date?",
      answer: `Sindy will let you know what is possible. Mention your deadline in your enquiry. ${RUSH_NOTE}.`,
    },
    {
      question: "What size makes the best gift?",
      answer:
        "It depends on where the portrait will go. A5 is a lovely keepsake for a shelf or desk, while the larger sizes suit a wall. Tell Sindy where it will be displayed and she will help you choose.",
    },
  ],
};
