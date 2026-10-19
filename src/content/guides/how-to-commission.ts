import { MAX_PHOTOS } from "@/lib/commission";
import { cta, painting, p, steps, ul, type Guide } from "@/lib/guide-types";
import {
  FINAL_PAYMENT,
  LIKENESS,
  LOWEST_PRICE,
  NO_REVISIONS,
  PAYMENT_SPLIT,
  PRICE_NOTE,
  REFUND,
  REVISIONS,
  RUSH_NOTE,
  SHIPPING,
  TURNAROUND_TEXT,
} from "@/lib/policies";
import { PROCESS_STEPS } from "@/lib/process";
import { formatPrice } from "@/lib/pricing";
import { PUBLISHED, sizeBullets } from "./shared";

export const guide: Guide = {
  slug: "how-to-commission-a-dog-portrait-from-a-photo",
  title: "How to commission a dog portrait from a photo",
  description:
    "A step-by-step guide to commissioning a hand-painted oil portrait of your dog from a photo, from first enquiry and sketch approval to payment and UK delivery.",
  quickAnswer: `Send Sindy an enquiry with your best photos of your dog, choose a size (from ${formatPrice(LOWEST_PRICE)} for A5) and say whether the portrait is a memorial or a gift. She shares a sketch for your approval, paints your portrait in oils once you are happy, and ships it to your UK address. ${PAYMENT_SPLIT}`,
  published: PUBLISHED,
  updated: PUBLISHED,
  status: "published",
  related: [
    "best-photos-for-a-dog-portrait",
    "how-much-does-a-custom-oil-dog-portrait-cost",
    "dog-memorial-portrait-ideas",
  ],
  howTo: {
    name: "How to commission a dog portrait from a photo",
    steps: PROCESS_STEPS.map((s) => ({ name: s.title, text: s.text })),
  },
  sections: [
    {
      id: "what-it-involves",
      title: "What a commissioned dog portrait involves",
      blocks: [
        p(
          "A commissioned dog portrait is a one-of-a-kind painting made specially for you. Sindy, a UK artist who has been painting dogs for over 20 years, paints each portrait by hand in oils from the photos you send. Your dog does not need to sit for her, and she works with customers across the UK."
        ),
        p(
          "People usually commission a portrait for one of two reasons. A **memorial portrait** keeps a much-loved dog close after they have passed. A **gift portrait** marks a birthday, Christmas, an anniversary or another occasion. You can also ask for a **multi-pet portrait** with two or more companions in one painting. For ideas, see [dog memorial portrait ideas](/guides/dog-memorial-portrait-ideas) and [dog portrait gift ideas](/guides/dog-portrait-gift-ideas)."
        ),
        painting(
          "gift-11",
          "From photo to painting: a reference photo (left) beside the finished oil portrait (right).",
          true
        ),
      ],
    },
    {
      id: "step-by-step",
      title: "The process, step by step",
      blocks: [
        p(
          "Here is the journey from your first message to the day your portrait arrives. The same steps are on the [How It Works](/how-it-works) page."
        ),
        steps,
      ],
    },
    {
      id: "choosing-photos",
      title: "Choosing your photos",
      blocks: [
        p(
          `Your photo is the starting point for the whole painting, so it is worth a few minutes to choose well. Look for a clear, sharp picture in good light where your dog’s face and eyes are easy to see. The enquiry form takes up to ${MAX_PHOTOS} photos, and Sindy can work from more than one, so send your favourites.`
        ),
        p(
          "Our guide to the [best photos to use for a dog portrait](/guides/best-photos-for-a-dog-portrait) explains what works and what to avoid. The form shrinks photos so they upload quickly, so Sindy may ask you for the originals by email."
        ),
      ],
    },
    {
      id: "choosing-size",
      title: "Choosing a size",
      blocks: [
        p(`Sindy paints in four sizes. ${PRICE_NOTE}`),
        ul(...sizeBullets()),
        p(
          "Think about where the portrait will hang or sit, and whether you want a keepsake or a centrepiece. If you are not sure, say so in your enquiry and Sindy will talk it through. For the full price breakdown, see [how much a custom oil dog portrait costs](/guides/how-much-does-a-custom-oil-dog-portrait-cost)."
        ),
      ],
    },
    {
      id: "sketch-and-revisions",
      title: "The sketch stage and your revisions",
      blocks: [
        p(
          `Before any painting starts, Sindy shares a sketch or outline for your approval. ${REVISIONS} ${NO_REVISIONS}`
        ),
        p("Use the sketch to check the things that are hardest to change later:"),
        ul(
          "**Likeness:** does the face look like your dog, especially the eyes and expression?",
          "**Pose and composition:** is your dog positioned the way you imagined?",
          "**Background and details:** is there anything you would like added, changed or left out, such as a collar or a favourite spot?"
        ),
        p("It is much easier to change a sketch than a painting, so take your time here."),
      ],
    },
    {
      id: "payment-timing-delivery",
      title: "Payment, timing and delivery",
      blocks: [
        ul(
          `**Payment:** ${PAYMENT_SPLIT} ${FINAL_PAYMENT}`,
          `**Timing:** ${TURNAROUND_TEXT}`,
          `**Need it sooner?** Mention your deadline in your enquiry. ${RUSH_NOTE}.`,
          `**Delivery:** ${SHIPPING} Your portrait is shipped once it is complete and the final payment has been made.`,
          `**If something is not right:** ${REFUND} ${LIKENESS}`
        ),
        p("The full details are in our [Terms](/terms)."),
        cta(
          "Ready to start? Send Sindy a photo and a few details. It is an enquiry, not a commitment: you approve a sketch before any painting begins."
        ),
      ],
    },
  ],
  faqs: [
    {
      question: "Can I commission a portrait from a photo of a dog who has passed away?",
      answer:
        "Yes. Memorial portraits are a big part of what Sindy does. Send the photos you treasure most and add anything you would like captured, such as a favourite spot, a collar or a particular expression.",
    },
    {
      question: "Do I need a professional photo?",
      answer:
        "No. A clear, well-lit phone photo works well. What matters most is that your dog’s face and eyes are easy to see.",
    },
    {
      question: "How many photos can I send?",
      answer: `The enquiry form takes up to ${MAX_PHOTOS} photos. Sindy can work from more than one, and she may ask for the original files by email.`,
    },
    {
      question: "Can I commission a dog portrait from outside the UK?",
      answer: `No. ${SHIPPING} Customers across England, Scotland, Wales and Northern Ireland are very welcome.`,
    },
  ],
};
