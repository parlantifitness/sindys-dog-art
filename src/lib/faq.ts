export interface FaqItem {
  question: string;
  answer: string;
}

export interface FaqGroup {
  title: string;
  items: FaqItem[];
}

export const FAQ_GROUPS: FaqGroup[] = [
  {
    title: "Pricing & payment",
    items: [
      {
        question: "How much does a custom oil dog portrait cost?",
        answer:
          "Prices start from £95 for an A5 portrait, £175 for A4, £320 for A3 and £480 for a Large portrait. These are “from” prices, and Sindy will confirm the final price with you before any work begins.",
      },
      {
        question: "How does payment work?",
        answer:
          "Payment is split in two: a 50% deposit, then the remaining 50% on completion. The final payment is due before your portrait is shipped.",
      },
      {
        question: "Can I get my portrait faster for a deadline?",
        answer:
          "Possibly. Expedited turnaround adds 30% to the price, so please discuss it with Sindy. Mention your deadline in your enquiry and she will let you know what is possible.",
      },
      {
        question: "Do you paint more than one pet in a portrait?",
        answer:
          "Yes. Choose “Multi-pet” on the commission form and tell Sindy about your pets. She will talk through the best size and price for your photos.",
      },
    ],
  },
  {
    title: "Photos & the process",
    items: [
      {
        question: "What kind of photo do I need to send?",
        answer:
          "A clear, sharp, well-lit photo where your dog’s face and eyes are easy to see is ideal. Daylight and a photo taken at your dog’s eye level work best. If you have several favourites, send them all and Sindy can work from more than one.",
      },
      {
        question: "Can you paint a dog who has passed away?",
        answer:
          "Of course. Memorial portraits are a big part of what Sindy does. Send the photos you treasure most and add anything you would like captured, such as a favourite spot, a collar or a particular expression.",
      },
      {
        question: "How does the commission process work?",
        answer:
          "You send an enquiry, Sindy shares a sketch or outline for your approval, and once you are happy she begins painting. When your portrait is complete, the final payment is made and it is shipped to you. See How It Works for the full journey.",
      },
      {
        question: "How many revisions are included?",
        answer:
          "Two rounds of revisions are included at the sketch/outline stage. Once painting is underway, no further revisions can be made, so please take your time with the sketch.",
      },
    ],
  },
  {
    title: "Turnaround",
    items: [
      {
        question: "How long will my portrait take?",
        answer:
          "Turnaround depends on Sindy’s current schedule and the size of your portrait. Please discuss current turnaround with Sindy when you enquire, especially if you need it for a particular date.",
      },
    ],
  },
  {
    title: "Refunds & likeness",
    items: [
      {
        question: "What is your refund policy?",
        answer:
          "Every portrait is a custom, hand-painted commission, so refunds are not available once painting has started. You approve the sketch or outline first, with two rounds of revisions, so you can be confident before the painting begins.",
      },
      {
        question: "What if the portrait doesn’t look like my dog?",
        answer:
          "If there is a genuine likeness issue, Sindy will offer a replacement or rework. Please get in touch as soon as you receive your portrait.",
      },
    ],
  },
  {
    title: "Shipping",
    items: [
      {
        question: "Do you ship outside the UK?",
        answer:
          "No. Shipping is UK only. Customers across England, Scotland, Wales and Northern Ireland are very welcome.",
      },
      {
        question: "When is my portrait shipped?",
        answer:
          "Once your portrait is complete and the final 50% payment has been made, it is shipped to your UK address.",
      },
    ],
  },
];

export const ALL_FAQS: FaqItem[] = FAQ_GROUPS.flatMap((group) => group.items);
