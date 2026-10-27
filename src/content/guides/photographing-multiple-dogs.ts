import { MAX_PHOTOS } from "@/lib/commission";
import { cta, h3, note, painting, p, ul, type Guide } from "@/lib/guide-types";

const TODAY = "2026-10-27";

const HOW_TO_STEPS = [
  {
    name: "Pick a calm moment, not a chaotic one",
    text: "Photograph your dogs when they're settled — after a walk or during a quiet moment indoors — rather than when they're excited or wound up.",
  },
  {
    name: "Get a second pair of hands",
    text: "One person to hold treats and get attention, one to take the photo. Trying to do both alone with two or more dogs rarely works.",
  },
  {
    name: "Use a lead or a familiar spot",
    text: "A short lead or sitting them on a sofa or bed keeps dogs from wandering out of frame while you compose the shot.",
  },
  {
    name: "Get down to their level, together",
    text: "Crouch so the camera is roughly level with the dogs' eyes, close enough together that both faces are clear and in focus.",
  },
  {
    name: "Take far more shots than you think you need",
    text: "With two or more dogs, the odds of everyone looking good in the same frame are lower. Take a long burst and pick afterwards.",
  },
  {
    name: "Don't worry if one shot isn't perfect for everyone",
    text: "Sindy can often work from a group photo for the pose plus the best individual shot of each dog. Send your best group photo and your best individual ones.",
  },
];

export const guide: Guide = {
  slug: "photographing-multiple-dogs-for-a-portrait",
  title: "How to photograph multiple dogs together for a portrait",
  metaTitle: "Photographing multiple dogs for a portrait",
  description:
    "How to get a usable reference photo of two or more dogs together for a multi-pet oil portrait: managing the dogs, framing, light, and what to send if a single perfect group shot isn't possible.",
  quickAnswer:
    "The easiest way to photograph multiple dogs for a portrait is with a second person helping, in a calm moment rather than an excited one, with both dogs close together and level with the camera. If you can't get one perfect group shot, send your best individual photos of each dog as well — Sindy can work from a combination.",
  published: TODAY,
  updated: TODAY,
  status: "published",
  related: [
    "best-photos-for-a-dog-portrait",
    "how-to-commission-a-dog-portrait-from-a-photo",
    "dog-portrait-gift-ideas",
  ],
  howTo: {
    name: "How to photograph multiple dogs together for a portrait",
    steps: HOW_TO_STEPS,
  },
  sections: [
    {
      id: "why-its-different",
      title: "Why group photos are harder",
      blocks: [
        p(
          "Getting one dog to sit still, look at the camera and show their personality is hard enough. With two or more, you're waiting for several things to line up at once — which is why group photos are so often someone looking away, or one dog mid-blink. It's normal, and it doesn't mean you can't get a usable photo."
        ),
        p(
          "If you haven't already, our guide to [the best photos for a dog portrait](/guides/best-photos-for-a-dog-portrait) covers the basics of light, angle and focus that apply here too."
        ),
      ],
    },
    {
      id: "get-help",
      title: "Get a second pair of hands",
      blocks: [
        p(
          "This is the single biggest difference between a frustrating session and an easy one. Have one person hold treats or a toy just above the camera lens to get both dogs looking the same way, while the other takes the photo. Trying to manage two excitable dogs and a camera alone rarely ends well."
        ),
      ],
    },
    {
      id: "setting-the-scene",
      title: "Choose a calm moment and a contained space",
      blocks: [
        p(
          "Photograph your dogs after a walk or during a settled moment, rather than when they're full of energy. A sofa, bed, or a short stretch of garden with a lead keeps them from wandering out of frame while you compose the shot."
        ),
        p(
          "Natural daylight still matters here, just as with a single dog — a bright room or a soft, overcast spot outside works best. Avoid flash, which flattens detail and can cause red-eye in more than one dog at once."
        ),
      ],
    },
    {
      id: "framing",
      title: "Framing and distance",
      blocks: [
        p(
          "Get down to the dogs' eye level and keep them close together in the frame, rather than spread far apart, so both faces are clear and roughly the same size. Step back and zoom in rather than moving the camera close, which can distort whichever dog is nearest the lens."
        ),
        h3("Different sizes or breeds"),
        p(
          "If your dogs are very different in size, try sitting or lying them at a similar height — side by side on a sofa, for example — so neither one is dramatically larger in the frame than the other."
        ),
        painting(
          "hand-painted-brown-spaniel-and-scruffy-white-dog-oil-portrait-multi-pet",
          "The reference photo: two dogs side by side on a sofa, close together and at their own eye level.",
          true
        ),
        painting(
          "hand-painted-brown-spaniel-and-scruffy-white-dog-oil-portrait-multi-pet",
          "The finished multi-pet oil portrait, painted from that photo."
        ),
      ],
    },
    {
      id: "take-plenty",
      title: "Take far more photos than you think you need",
      blocks: [
        ul(
          "Take a long burst rather than single shots — with two or more dogs, you need more attempts to catch everyone looking good at once.",
          "It's fine if no single photo is perfect. Note which shot has the best expression for each dog, even if they're not all from the same frame.",
          "If one dog is much harder to photograph than the other, get a few photos of them alone too, in addition to any group shots."
        ),
      ],
    },
    {
      id: "what-to-send",
      title: "What to send if you can't get the perfect group shot",
      blocks: [
        p(
          "Don't hold out for one flawless photo with every dog looking ideal — it's a lot to ask for naturally. Send your best group photo, plus the best individual photo of each dog, and let Sindy know in your enquiry. She can often work from a combination: using the pose and composition from the group photo with the clearest expression of each dog taken from their individual shots."
        ),
        note(
          "Portraits are priced by size, and a larger size often suits more than one dog. Choose “Multi-pet” on the enquiry form and Sindy will talk through the best size and price. See the [pricing guide](/guides/how-much-does-a-custom-oil-dog-portrait-cost) for current prices.",
          "Pricing"
        ),
      ],
    },
    {
      id: "sending-photos",
      title: "Sending your photos",
      blocks: [
        p(
          `Send the original files where you can, not screenshots. The enquiry form takes up to ${MAX_PHOTOS} photos, so choose the best group shot and the best individual shot of each dog. If you have more, mention it in your enquiry and Sindy can ask for them by email.`
        ),
        cta("Have photos of your dogs together? Send them to Sindy and she'll talk through the options."),
      ],
    },
  ],
  faqs: [
    {
      question: "Do I need one perfect photo with both dogs looking at the camera?",
      answer:
        "No. It helps, but it's not essential. Send your best group photo along with individual photos of each dog, and Sindy can often combine the best of each.",
    },
    {
      question: "How many dogs can be in one portrait?",
      answer:
        "Sindy paints multi-pet portraits with two or more dogs. Mention how many in your enquiry and she'll advise on sizing and composition.",
    },
    {
      question: "What if my dogs are very different sizes?",
      answer:
        "Try photographing them at a similar height, such as both sitting on a sofa, so neither is dramatically larger in the frame. If that's not possible, send what you have and mention it in your enquiry — Sindy will advise.",
    },
    {
      question: "Can I include a dog who has passed away alongside a dog I still have?",
      answer:
        "Yes, this is a common and treasured request. Send the best photo you have of each, even from different times, and mention this in your enquiry.",
    },
  ],
};
