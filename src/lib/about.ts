/** Photos of Sindy and her own dogs (Lulu, Millie and Nellie), colour-graded to sit with the site palette. */
export interface AboutPhoto {
  src: string;
  width: number;
  height: number;
  alt: string;
  caption?: string;
}

export const SINDY_PHOTO: AboutPhoto = {
  src: "/about/sindy.jpg",
  width: 1000,
  height: 1333,
  alt: "Sindy, the artist, smiling on a windswept beach in a blue dress",
};

export const DOG_PHOTOS: readonly AboutPhoto[] = [
  {
    src: "/about/dogs-boa.jpg",
    width: 1000,
    height: 1333,
    alt: "Lulu, a scruffy white Westie, dressed up in a pink feather boa and a party sash",
    caption: "Lulu",
  },
  {
    src: "/about/dogs-harnesses.jpg",
    width: 1000,
    height: 1183,
    alt: "Millie the Yorkshire terrier and Nellie the French bulldog side by side in matching red harnesses",
    caption: "Millie and Nellie",
  },
  {
    src: "/about/dogs-sunhat.jpg",
    width: 1000,
    height: 1250,
    alt: "Millie, a Yorkshire terrier, in a pale blue sun hat resting on a pebble beach",
    caption: "Millie",
  },
];
