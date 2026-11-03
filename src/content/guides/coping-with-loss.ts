import { note, p, ul, type Guide } from "@/lib/guide-types";

const TODAY = "2026-11-03";

export const guide: Guide = {
  slug: "coping-with-the-loss-of-a-dog",
  title: "Gentle ways to navigate the loss of a dog",
  metaTitle: "Coping with the loss of a dog",
  description:
    "Gentle, supportive guidance on grieving the loss of a dog: why it hurts, ways to navigate the early days, how to honour their memory, and where to find further support in the UK.",
  quickAnswer:
    "Grieving a dog is a real and valid grief, and there is no right way or right timeline to move through it. Be patient with yourself, lean on people who understand, and find small ways to honour the place your dog held in your life, whenever feels right for you.",
  published: TODAY,
  updated: TODAY,
  status: "published",
  related: [
    "dog-memorial-portrait-ideas",
    "best-photos-for-a-dog-portrait",
  ],
  sections: [
    {
      id: "its-real-grief",
      title: "It is a real grief",
      blocks: [
        p(
          "If you are grieving a dog, what you are feeling is real grief, not something smaller because it was “only a pet”. For many people, a dog is a daily companion for years: the first face in the morning, a steady presence through everything else that happens in a life. Losing that leaves a genuine gap, and it is allowed to hurt as much as it does."
        ),
        p(
          "There is no set timeline for this. Some days will feel easier than others, and that is normal too, not a sign you are doing it wrong."
        ),
      ],
    },
    {
      id: "early-days",
      title: "In the early days",
      blocks: [
        p("A few gentle things that help many people through the hardest early days:"),
        ul(
          "Let yourself feel whatever comes up, without judging it. Sadness, relief if they were unwell, guilt, anger: grief rarely arrives in one neat feeling.",
          "Talk to someone who understands. Not everyone will, and that is alright, but the people who do can make a real difference.",
          "Keep their routines around you for as long as feels right, or change them when you are ready. Either way is okay.",
          "Be patient with the quiet moments, like reaching for their lead or listening for them at the door. These catch most people off guard, even a long time afterwards."
        ),
      ],
    },
    {
      id: "honouring-them",
      title: "Finding ways to honour them",
      blocks: [
        p(
          "When you feel ready, and only then, some people find comfort in marking the space a dog held in their life. There is no right way to do this, and no obligation to do it at all. A few ideas that others have found meaningful:"
        ),
        ul(
          "Looking back through old photos, when it feels right rather than forced.",
          "Keeping something of theirs close, such as a collar, a favourite toy or a blanket.",
          "Planting something in the garden, or visiting a place they loved.",
          "Writing down memories or stories about them, for yourself or to share.",
          "Commissioning a portrait from a photo you love, as a lasting way to keep their face and character close."
        ),
        p(
          "None of these need to happen on any particular schedule. Some people do one of these things within days, others years later, and some not at all. All of it is valid."
        ),
      ],
    },
    {
      id: "talking-to-others",
      title: "Talking to people who understand",
      blocks: [
        p(
          "Not everyone around you will understand the scale of this loss, and that can be one of the hardest parts. If the people close to you do understand, let them in. If they don't, it can help to find others who do. Online communities of people who have lost a pet are often a kind, understanding place when you need one."
        ),
      ],
    },
    {
      id: "further-support",
      title: "Further support in the UK",
      blocks: [
        p(
          "If you would like to talk to someone trained in supporting people through pet loss, the Blue Cross Pet Bereavement Support Service offers a free, confidential phone line and email support, run by people who understand what losing a pet means."
        ),
        note(
          "Blue Cross Pet Bereavement Support Service: 0800 096 6606, open 8.30am to 8.30pm every day. More information at bluecross.org.uk.",
          "Free and confidential"
        ),
        p(
          "If grief for your dog is affecting your wider wellbeing and you would like to talk to someone more broadly, your GP is a good place to start, or you can reach out to a bereavement support service such as Cruse Bereavement Support."
        ),
      ],
    },
    {
      id: "no-rush",
      title: "There is no rush",
      blocks: [
        p(
          "Whatever you choose to do, and whenever you choose to do it, take your time. There is no deadline on grief, and no version of “moving on” that you owe anyone, including yourself."
        ),
      ],
    },
  ],
  faqs: [
    {
      question: "Is it normal to grieve a dog as much as a person?",
      answer:
        "Yes. For many people a dog is a close daily companion for years, and grief for that loss is real and valid. There is no need to minimise or compare it.",
    },
    {
      question: "How long does grief for a dog usually last?",
      answer:
        "There is no fixed timeline, and it is different for everyone. Be patient with yourself rather than measuring your grief against any expectation of how long it should take.",
    },
    {
      question: "Is there support available specifically for pet loss in the UK?",
      answer:
        "Yes. The Blue Cross Pet Bereavement Support Service offers a free, confidential phone line (0800 096 6606, 8.30am to 8.30pm daily) and email support from people who understand pet loss specifically.",
    },
    {
      question: "When is the right time to think about a memorial portrait?",
      answer:
        "Whenever feels right to you, if at all. Some people commission one in the first weeks, others years later. There is no right time, and no obligation to do it at all.",
    },
  ],
};
