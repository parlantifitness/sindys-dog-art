export interface PortraitSize {
  id: string;
  name: string;
  dimensions: string;
  from: number;
  blurb: string;
}

export const SIZES: readonly PortraitSize[] = [
  {
    id: "a5",
    name: "A5",
    dimensions: "148 × 210 mm",
    from: 95,
    blurb: "Small and personal. Lovely for a shelf, desk or windowsill.",
  },
  {
    id: "a4",
    name: "A4",
    dimensions: "210 × 297 mm",
    from: 175,
    blurb: "A generous size for a single-dog portrait.",
  },
  {
    id: "a3",
    name: "A3",
    dimensions: "297 × 420 mm",
    from: 320,
    blurb: "A statement piece with room for fine detail.",
  },
  {
    id: "large",
    name: "Large",
    dimensions: "Size agreed with Sindy",
    from: 480,
    blurb: "A real centrepiece, or ideal for more than one pet.",
  },
];

export const PORTRAIT_TYPES = [
  { id: "memorial", label: "Memorial", hint: "In loving memory of a dog who has passed" },
  { id: "gift", label: "Gift", hint: "For a birthday, Christmas or another occasion" },
  { id: "multi-pet", label: "Multi-pet", hint: "Two or more companions in one painting" },
] as const;

export const BUDGET_RANGES = [
  "Up to £150",
  "£150 – £250",
  "£250 – £400",
  "£400+",
  "Not sure yet",
] as const;

export function formatPrice(pounds: number): string {
  return `£${pounds}`;
}
