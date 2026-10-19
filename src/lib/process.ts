import { FINAL_PAYMENT, NO_REVISIONS, PAYMENT_SPLIT, SHIPPING } from "./policies";

/** The commission journey. Shown on How It Works, in its HowTo schema, and in the guides. */
export const PROCESS_STEPS: readonly { title: string; text: string }[] = [
  {
    title: "Send your enquiry",
    text: "Tell Sindy about your dog, share your photos and choose a size. Say whether the portrait is a memorial or a gift, and mention any deadline.",
  },
  {
    title: "Approve the sketch",
    text: "Sindy prepares a sketch or outline for your approval. You have two rounds of revisions at this stage, so it is the time to ask for any changes.",
  },
  {
    title: "Painting begins",
    text: `Once you have approved the sketch, Sindy paints your portrait in oils. ${NO_REVISIONS}`,
  },
  {
    title: "Completion",
    text: "When the painting is finished and dry, Sindy will let you know that your portrait is ready.",
  },
  {
    title: "Payment",
    text: `${PAYMENT_SPLIT} ${FINAL_PAYMENT}`,
  },
  {
    title: "UK shipping",
    text: `Your finished portrait is carefully packed and shipped to your UK address. ${SHIPPING}`,
  },
];
