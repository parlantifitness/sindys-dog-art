import { cta, h3, note, p, painting, ul, type Guide } from "@/lib/guide-types";
import {
  FINAL_PAYMENT,
  LOWEST_PRICE,
  PAYMENT_SPLIT,
  REVISIONS,
  SHIPPING,
  TURNAROUND_TEXT,
} from "@/lib/policies";
import { formatPrice } from "@/lib/pricing";
import { PUBLISHED } from "./shared";

export const guide: Guide = {
  slug: "dog-memorial-portrait-ideas",
  title: "Dog memorial portrait ideas",
  description:
    "Thoughtful ideas for a memorial portrait of a much-loved dog: favourite places, treasured collars, the right photo, remembering pets together, and giving one as a gift.",
  quickAnswer:
    "A dog memorial portrait is a hand-painted oil portrait that keeps your dog’s face and personality close. Ideas include painting them in a favourite place, wearing a treasured collar, or in the expression you remember best. Choose the photo that looks most like them to you, and Sindy will paint from the photos you send.",
  published: PUBLISHED,
  updated: PUBLISHED,
  status: "published",
  related: [
    "best-photos-for-a-dog-portrait",
    "how-to-commission-a-dog-portrait-from-a-photo",
    "dog-portrait-gift-ideas",
  ],
  sections: [
    {
      id: "what-is-a-memorial-portrait",
      title: "What is a dog memorial portrait?",
      blocks: [
        p(
          "A memorial portrait is a painting made in memory of a dog who has passed away. Sindy paints each one by hand in oils from the photos you send, so you do not need anything more than the pictures you already have."
        ),
        p(
          "There is no right or wrong way to remember a dog, and no right time to do it. Some people commission a portrait soon after their loss. Others wait months or years, when they are ready. The ideas below are here to help you think about what would feel most like them."
        ),
        painting(
          "memorial-01",
          "A hand-painted oil portrait: a fluffy white dog among blue flowers."
        ),
      ],
    },
    {
      id: "ideas",
      title: "Ideas for your portrait",
      blocks: [
        h3("Paint them in their favourite place"),
        p(
          "A favourite spot says a lot about a dog: the sofa corner, the garden, a woodland path, the beach. If you have a photo of them there, mention it to Sindy, and the setting can become part of the painting."
        ),
        h3("Capture the expression you remember"),
        p(
          "Think about the look that was most them: the head tilt, the hopeful eyes, the open-mouthed smile after a walk. The best portrait is not always the most formal one. Choose the photo where you can almost hear them."
        ),
        h3("Include something that was theirs"),
        p(
          "A favourite collar, a name tag, a harness or a bandana can make a portrait feel personal. Tell Sindy about any detail like this when you enquire, and look for it in the sketch."
        ),
        h3("Use the colours of their world"),
        p(
          "Sometimes the background can hold the memory: the green of the park they loved, the blue of the sea, the warm tones of the room where they slept. Say what comes to mind and Sindy can talk through what might work."
        ),
        h3("Remember them together"),
        p(
          "If your dog lived with another pet, you may want to remember them side by side. Sindy paints multi-pet portraits too. Choose “Multi-pet” on the enquiry form and tell her about your pets."
        ),
        painting(
          "memorial-09",
          "A hand-painted oil portrait: a cream cocker spaniel with long, soft ears."
        ),
        h3("Keep it small, or make it a centrepiece"),
        p(
          `A smaller portrait can sit on a shelf or desk, while a larger one can become a focal point on a wall. Portraits start from ${formatPrice(LOWEST_PRICE)} for A5, and Sindy will confirm the final price before any work begins. See [how much a custom oil dog portrait costs](/guides/how-much-does-a-custom-oil-dog-portrait-cost) for the full list.`
        ),
      ],
    },
    {
      id: "choosing-the-photo",
      title: "Choosing the right photo",
      blocks: [
        p(
          "The photo you love most is the right one, even if it is not technically perfect. A slightly soft phone photo that shows their true expression can be better than a sharp but stiff one."
        ),
        ul(
          "Send several if you have them, so Sindy can see their face from different angles.",
          "Include a photo that shows their eyes and markings clearly, even if it is not your favourite.",
          "Tell Sindy what you remember about their colours and personality. It helps.",
          "If your photos are old prints, scan them or photograph them flat in daylight, without glare."
        ),
        p(
          "Our guide to the [best photos to use for a dog portrait](/guides/best-photos-for-a-dog-portrait) has more detail, including what to do with old or imperfect photos."
        ),
      ],
    },
    {
      id: "as-a-gift",
      title: "A memorial portrait as a gift",
      blocks: [
        p(
          "A portrait can be a lasting, thoughtful gesture for someone who has lost a dog. If you are giving one, you are in charge of the process: you send the photos, you approve the sketch, and you tell Sindy that the portrait is a memorial for someone else."
        ),
        ul(
          "Ask family or friends for the best photos, and look through any you have yourself.",
          "Mention the dog’s name, and any details that would mean something to the person receiving it.",
          "Allow plenty of time. There is more on timing in our guide to [dog portrait gift ideas](/guides/dog-portrait-gift-ideas)."
        ),
      ],
    },
    {
      id: "what-happens-next",
      title: "What happens next",
      blocks: [
        p(
          `You send an enquiry with your photos and Sindy shares a sketch for your approval. ${REVISIONS} Once you are happy, she paints your portrait in oils. ${PAYMENT_SPLIT} ${FINAL_PAYMENT}`
        ),
        p(`${TURNAROUND_TEXT} ${SHIPPING}`),
        note(
          "You can ask Sindy any questions before you decide, and the enquiry is not a commitment. You approve a sketch before any painting begins. The details are on the [How It Works](/how-it-works) page.",
          "Take your time"
        ),
        cta("When you are ready, tell Sindy about your dog and send the photos you treasure most."),
      ],
    },
  ],
  faqs: [
    {
      question: "How long after losing a dog should I commission a portrait?",
      answer:
        "There is no right time. Some people commission a portrait soon after, others wait until they feel ready. A portrait can be painted from your photos whenever you decide.",
    },
    {
      question: "Can you paint from old or blurry photos?",
      answer:
        "Often, yes. Send the best photos you have, along with any that show details like eye colour and markings, and tell Sindy what you remember. She will talk through what is possible.",
    },
    {
      question: "Can I include more than one pet in a memorial portrait?",
      answer:
        "Yes. Choose “Multi-pet” on the enquiry form and tell Sindy about your pets. She will talk through the best size and price for your photos.",
    },
    {
      question: "Can I give a memorial portrait as a gift?",
      answer:
        "Yes. You deal with Sindy directly, send the photos and approve the sketch, so the person receiving the portrait does not need to be involved.",
    },
  ],
};
