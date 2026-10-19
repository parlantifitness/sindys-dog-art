import { MAX_PHOTOS } from "@/lib/commission";
import { cta, h3, note, p, ul, type Guide } from "@/lib/guide-types";
import { PUBLISHED } from "./shared";

const HOW_TO_STEPS = [
  {
    name: "Find soft daylight",
    text: "Photograph your dog near a bright window or outside on a light, overcast day. Avoid harsh midday sun and flash.",
  },
  {
    name: "Get down to their level",
    text: "Crouch or lie down so the camera is at your dog’s eye level, not looking down on them.",
  },
  {
    name: "Fill the frame with the face",
    text: "Step back and zoom in rather than pushing the camera close, which can distort the nose and head.",
  },
  {
    name: "Focus on the eyes",
    text: "Tap the screen on an eye so it is sharp, and hold the camera steady.",
  },
  {
    name: "Take lots of shots",
    text: "Take plenty of photos while your dog is relaxed, so you can pick the one with the best expression.",
  },
  {
    name: "Choose your favourites and send the originals",
    text: `Pick the sharpest, most characterful photos and send the original files, up to ${MAX_PHOTOS} through the enquiry form.`,
  },
];

export const guide: Guide = {
  slug: "best-photos-for-a-dog-portrait",
  title: "Best photos to send for a dog portrait commission",
  metaTitle: "Best photos for a dog portrait commission",
  description:
    "The best photos to send for a dog portrait commission: light, angle, focus and expression, plus what to avoid and what to do with old or imperfect photos.",
  quickAnswer: `The best photo for a dog portrait is sharp, taken in natural daylight at your dog’s eye level, with their face and eyes clearly visible. Send the original file rather than a screenshot. If you have a few good ones, send them all (the form takes up to ${MAX_PHOTOS}), because Sindy can work from more than one.`,
  published: PUBLISHED,
  updated: PUBLISHED,
  status: "published",
  related: [
    "how-to-commission-a-dog-portrait-from-a-photo",
    "dog-memorial-portrait-ideas",
    "dog-portrait-gift-ideas",
  ],
  howTo: { name: "How to take a good photo of your dog for a portrait", steps: HOW_TO_STEPS },
  sections: [
    {
      id: "why-it-matters",
      title: "Why the photo matters",
      blocks: [
        p(
          "Sindy paints from your photos, so the photo decides how much she has to work with: the shape of your dog’s face, the colour and texture of their coat, and the look in their eyes. It does not need to be a professional photo. A clear phone picture in good light is often all it takes."
        ),
        p(
          "If you are still deciding whether to commission a portrait, our guide to [hand-painted oil portrait of a dog from a photograph](/guides/how-to-commission-a-dog-portrait-from-a-photo) walks through the whole process."
        ),
      ],
    },
    {
      id: "light",
      title: "Light: use soft daylight",
      blocks: [
        p(
          "Natural daylight shows your dog’s colouring and fur far better than indoor lighting. Try a spot near a bright window, or go outside on a light, overcast day, when the light is soft and even. Harsh midday sun creates strong shadows and can wash out pale coats."
        ),
        p(
          "Avoid using the flash. It flattens the face, can cause red or glowing eyes, and makes it harder to see the colour of your dog’s coat and eyes."
        ),
      ],
    },
    {
      id: "angle-and-distance",
      title: "Angle and distance: get down to their level",
      blocks: [
        p(
          "Crouch or lie down so the camera is level with your dog’s eyes. Photos taken from above make the head look small and the body look large, and they hide the expression that makes your dog look like themselves."
        ),
        p(
          "Fill the frame with the face and upper body, but do it by stepping back and zooming in rather than holding the camera very close. Very close shots can stretch the nose and make the head look out of proportion."
        ),
      ],
    },
    {
      id: "eyes-and-expression",
      title: "Eyes and expression",
      blocks: [
        p(
          "The eyes are what bring a portrait to life, so make sure they are sharp. Tap the screen on an eye before you take the photo, and take several shots, because dogs move fast."
        ),
        p("To capture personality, wait for a relaxed, natural moment rather than a posed one. Some things that help:"),
        ul(
          "Take the photo in a favourite spot, where your dog feels at ease.",
          "Hold a treat or toy just above the camera to catch their attention and lift their eyes.",
          "Be patient. A head tilt, a soft look or a half-smile is often worth waiting for.",
          "Take a burst of photos and choose the best one afterwards."
        ),
      ],
    },
    {
      id: "coat-colour",
      title: "Tips for different coats",
      blocks: [
        h3("Black and dark dogs"),
        p("Make sure light falls on the face. In dim light a dark dog can turn into a silhouette, and the eyes, nose and fur texture disappear."),
        h3("White and cream dogs"),
        p("Avoid bright, direct sun, which can burn out the detail in pale fur. Soft, slightly overcast light shows the shape and texture much better."),
        h3("Long, curly or wiry coats"),
        p("A slightly angled view, rather than straight on, shows off the texture and how the fur falls."),
      ],
    },
    {
      id: "photos-to-avoid",
      title: "Photos to avoid",
      blocks: [
        ul(
          "Blurry photos, especially where the face or eyes are out of focus.",
          "Photos taken with the flash on.",
          "Heavily filtered or edited photos, which change the colours.",
          "Photos where the face is hidden, turned away or in deep shadow.",
          "Screenshots or pictures saved from social media, which are compressed and lose detail.",
          "Photos zoomed in so far that they look pixelated."
        ),
      ],
    },
    {
      id: "old-photos",
      title: "Old or imperfect photos",
      blocks: [
        p(
          "A treasured but imperfect photo can still work, especially for a memorial portrait. Send the best you have, along with any others that show details the main photo misses, such as eye colour, markings or the way your dog held their head."
        ),
        p(
          "If your photo is a print, scan it, or photograph it flat in daylight without glare. Tell Sindy what you remember about the colours and details, and she will talk through what is possible."
        ),
        note(
          "If you are thinking about a memorial portrait, our guide to [memorial oil painting ideas for a dog](/guides/dog-memorial-portrait-ideas) has more on choosing the right photo.",
          "Planning a memorial?"
        ),
      ],
    },
    {
      id: "more-than-one-pet",
      title: "More than one pet",
      blocks: [
        p(
          "For a multi-pet portrait, a photo of your pets together is ideal. Separate photos of each pet can work too. Tell Sindy what you have, and she will talk through the options and the best size for your photos."
        ),
      ],
    },
    {
      id: "sending-photos",
      title: "Sending your photos",
      blocks: [
        p(
          `Send the original file where you can, not a screenshot. The enquiry form takes up to ${MAX_PHOTOS} photos. It shrinks them so they upload quickly, so Sindy may ask you for the originals by email.`
        ),
        cta("Have a photo in mind? Send it to Sindy with a few details about your dog."),
      ],
    },
  ],
  faqs: [
    {
      question: "Can I use a photo taken on my phone?",
      answer:
        "Yes. A clear, well-lit phone photo is often all that is needed. Make sure the face and eyes are sharp and that you send the original file rather than a screenshot.",
    },
    {
      question: "What if my dog will not sit still?",
      answer:
        "Do not worry about posing. Take a burst of photos while your dog is relaxed, perhaps with a treat or toy to catch their attention, and pick the sharpest one with the best expression.",
    },
    {
      question: "What if I only have a blurry photo?",
      answer:
        "Send it anyway, along with any other photos you have, and tell Sindy what you remember about your dog’s colouring and expression. She will talk through what is possible.",
    },
    {
      question: "Can Sindy use more than one photo?",
      answer:
        "Yes. Sindy can work from more than one photo. Tell her in your enquiry what you love about each one, such as the pose in one and the expression in another, and she will advise what is possible.",
    },
  ],
};
