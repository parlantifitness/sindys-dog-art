import { cta, h3, note, p, ul, type Guide } from "@/lib/guide-types";

const TODAY = "2026-10-31";

export const guide: Guide = {
  slug: "caring-for-and-hanging-your-oil-portrait",
  title: "Caring for and hanging your new oil portrait",
  metaTitle: "Caring for and hanging an oil painting",
  description:
    "How to care for, unpack and hang a hand-painted oil portrait: avoiding sunlight and damp, cleaning safely, choosing a spot on the wall, and framed vs unframed options.",
  quickAnswer:
    "An oil portrait should hang away from direct sunlight, radiators and damp, and should only ever be dusted with a soft, dry brush or cloth, never water or cleaning products. Sindy's portraits can be supplied framed or unframed. Let her know your preference when you commission, and she'll talk through the options with you.",
  published: TODAY,
  updated: TODAY,
  status: "published",
  related: [
    "best-photos-for-a-dog-portrait",
    "how-to-commission-a-dog-portrait-from-a-photo",
    "dog-memorial-portrait-ideas",
  ],
  sections: [
    {
      id: "framed-or-unframed",
      title: "Framed or unframed",
      blocks: [
        p(
          "Sindy's portraits can be supplied either framed or unframed, so you can choose what suits your space and budget, or match an existing frame you already have. Let her know your preference when you commission your portrait, and she'll talk through the options and any timing it adds."
        ),
      ],
    },
    {
      id: "unpacking",
      title: "When it arrives",
      blocks: [
        p(
          "Unpack your portrait somewhere flat and clear, and handle it by the edges or the frame rather than the painted surface, which can stay slightly soft to the touch for longer than you'd expect with oil paint. Keep any packaging until you're confident the portrait has settled into your home without any issues."
        ),
      ],
    },
    {
      id: "where-to-hang",
      title: "Choosing where to hang it",
      blocks: [
        p(
          "Avoid direct sunlight, which fades oil paint over time, and keep the portrait away from radiators, fireplaces and other heat sources, which can dry and crack the paint or warp a wooden frame. A spot with stable temperature and humidity, out of direct sun, keeps a portrait looking its best for decades."
        ),
        h3("Height and placement"),
        p(
          "As a general rule of thumb, the centre of a portrait looks best at roughly eye level, around 145 to 155cm from the floor to the centre of the piece for most households. In a hallway or stairwell, slightly higher often works better."
        ),
      ],
    },
    {
      id: "care-and-cleaning",
      title: "Ongoing care and cleaning",
      blocks: [
        ul(
          "Dust gently with a soft, dry brush or a clean, dry microfibre cloth. Never use water, glass cleaner, or any household cleaning products on an oil painting.",
          "Avoid touching the painted surface directly where possible. Oils and moisture from skin can affect the paint over many years.",
          "Keep the painting away from damp or humid rooms, such as bathrooms, where moisture can affect both canvas and frame.",
          "If the painting is unframed, consider having it framed eventually for extra protection from dust and knocks."
        ),
        note(
          "Oil paint continues to cure slowly for months after painting, so it's worth taking extra care in the first few months: avoid stacking anything against the surface or touching it.",
          "A note on timing"
        ),
      ],
    },
    {
      id: "moving-house",
      title: "Moving or storing your portrait",
      blocks: [
        p(
          "If you need to move or store your portrait, wrap it in acid-free tissue or a clean cotton sheet rather than plastic, which can trap moisture against the surface. Store it upright rather than flat, somewhere dry and away from extreme temperatures, and avoid leaning anything against the painted face."
        ),
      ],
    },
    {
      id: "questions",
      title: "Not sure about your specific portrait?",
      blocks: [
        p(
          "Every portrait and frame is a little different, so if you're ever unsure about the best way to care for or hang yours, Sindy is happy to advise."
        ),
        cta("Have a question about caring for your portrait? Get in touch with Sindy."),
      ],
    },
  ],
  faqs: [
    {
      question: "Can I get my portrait framed?",
      answer:
        "Yes, Sindy's portraits can be supplied either framed or unframed. Let her know your preference when you commission, and she'll talk through the options available.",
    },
    {
      question: "Can I clean my oil painting myself?",
      answer:
        "Only with a soft, dry brush or cloth to remove dust. Never use water or cleaning products, which can damage the paint surface.",
    },
    {
      question: "Where shouldn't I hang an oil painting?",
      answer:
        "Avoid direct sunlight, which fades the paint over time, and keep it away from radiators, fireplaces and damp rooms like bathrooms, which can affect both the canvas and any frame.",
    },
    {
      question: "How long does oil paint take to fully dry?",
      answer:
        "Oil paint continues to cure slowly for months after the portrait is finished, so extra care in the first few months is worthwhile: avoid touching the surface or stacking anything against it.",
    },
  ],
};
