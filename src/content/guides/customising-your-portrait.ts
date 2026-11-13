import { cta, h3, p, painting, ul, type Guide } from "@/lib/guide-types";
import { REVISIONS } from "@/lib/policies";
import { PUBLISHED } from "./shared";

export const guide: Guide = {
  slug: "customising-your-dog-portrait-background-colours-details",
  title: "Customising your dog portrait: background, colours and details",
  metaTitle: "Customising Your Dog Portrait",
  description:
    "What you can choose when you commission a dog portrait: background colour and setting, collars and accessories, and how to describe it in your enquiry.",
  quickAnswer:
    "You can choose the background colour or setting, and ask for details like a collar, harness or favourite spot to be included or left out. Mention what you have in mind in your enquiry, and you will confirm it all again at the sketch stage before any painting begins.",
  published: PUBLISHED,
  updated: PUBLISHED,
  status: "published",
  related: [
    "how-to-commission-a-dog-portrait-from-a-photo",
    "best-photos-for-a-dog-portrait",
    "dog-portrait-gift-ideas",
  ],
  sections: [
    {
      id: "what-you-can-choose",
      title: "What you can choose",
      blocks: [
        p(
          "Every portrait is painted by hand from your photos, so there is room to make it personal. The two things most people think about are the background and the little details."
        ),
        h3("Background"),
        p(
          "A plain, soft-coloured background is the most popular choice, and Sindy has painted dogs against blues, golds, greens, pinks and warm neutrals, chosen to suit the dog's colouring. If a colour or mood feels right for your dog, mention it in your enquiry."
        ),
        painting(
          "hand-painted-fawn-dog-gold-background-oil-portrait-gift",
          "A warm gold background chosen to suit this dog's colouring."
        ),
        painting(
          "hand-painted-blue-eyed-husky-oil-portrait-gift",
          "A cooler blue background works well with lighter-coloured coats and eyes."
        ),
        h3("Collars, harnesses and accessories"),
        p(
          "If your dog has a favourite collar, harness or bandana, you can ask for it to be included. Equally, if you would rather it was left out and the focus stayed on their face, that is fine too."
        ),
        h3("Pose and expression"),
        p(
          "The pose comes from your reference photo, so this is really a question of which photo you send. A happy, open expression, ears up, or looking straight at the camera all read differently as a painting. Our guide to the [best photos for a dog portrait](/guides/best-photos-for-a-dog-portrait) covers what makes a photo easy to work from."
        ),
      ],
    },
    {
      id: "how-to-ask",
      title: "How to describe what you want",
      blocks: [
        p("You do not need to use any technical language. A few plain sentences in your enquiry are enough, for example:"),
        ul(
          "“She always wears a red collar, could that be included?”",
          "“He passed in the garden, could the background be green rather than a plain colour?”",
          "“I'd like it to feel warm and bright, it's a birthday gift.”"
        ),
        p(
          "Sindy will suggest what will work best with your photo and the size you have chosen, and you will see it all come together at the sketch stage."
        ),
      ],
    },
    {
      id: "changing-your-mind",
      title: "Changing your mind later",
      blocks: [
        p(
          `${REVISIONS} This is the point to ask for a different background colour, add or remove a detail, or adjust the composition. Once painting is underway, the background and details are no longer able to change, so it is worth taking a moment at the sketch stage to make sure everything is as you want it.`
        ),
        painting(
          "hand-painted-black-dog-pink-harness-oil-portrait-gift",
          "A harness kept in as a detail that mattered to the family."
        ),
        cta("Have an idea in mind for the background or details? Mention it when you enquire."),
      ],
    },
  ],
  faqs: [
    {
      question: "Can I choose the background colour for my dog's portrait?",
      answer:
        "Yes. Mention a colour or mood in your enquiry, and Sindy will suggest what will suit your dog and photo best. You will see the background at the sketch stage before painting begins.",
    },
    {
      question: "Can I ask for a collar, harness or other detail to be included?",
      answer:
        "Yes, just mention it when you enquire. You can also ask for a detail to be left out if you would rather the focus stayed on your dog's face.",
    },
    {
      question: "Can I change the background or details after the sketch stage?",
      answer: `${REVISIONS} After that, painting is underway and these details can no longer change, so it is worth confirming everything you want at the sketch stage.`,
    },
    {
      question: "Does the background affect the price?",
      answer:
        "No, the price depends on the size of your portrait, not the background or details. See our guide to the [cost of a custom oil dog portrait](/guides/how-much-does-a-custom-oil-dog-portrait-cost).",
    },
  ],
};
