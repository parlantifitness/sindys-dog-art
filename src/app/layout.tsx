import type { Metadata, Viewport } from "next";
import { Alex_Brush, Cormorant_Garamond, Jost } from "next/font/google";
import { JsonLdGraph } from "@/components/JsonLd";
import { DEFAULT_OG_IMAGE } from "@/lib/seo";
import { organizationSchema, personSchema, websiteSchema } from "@/lib/schema";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { SITE } from "@/lib/site";
import "./globals.css";

const alexBrush = Alex_Brush({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-alex-brush",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-cormorant",
  display: "swap",
});

const jost = Jost({
  subsets: ["latin"],
  variable: "--font-jost",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: `${SITE.name} | Hand-Painted Oil Dog Portraits, UK`,
    template: `%s | ${SITE.name}`,
  },
  description: SITE.description,
  applicationName: SITE.name,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_GB",
    siteName: SITE.name,
    title: `${SITE.name} | Hand-Painted Oil Dog Portraits, UK`,
    description: SITE.description,
    url: "/",
    images: [
      { url: DEFAULT_OG_IMAGE, width: 1200, height: 630, alt: `${SITE.name}: ${SITE.tagline}` },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE.name} | Hand-Painted Oil Dog Portraits, UK`,
    description: SITE.description,
    images: [DEFAULT_OG_IMAGE],
  },
};

export const viewport: Viewport = {
  themeColor: "#faf9f4",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en-GB"
      className={`${alexBrush.variable} ${cormorant.variable} ${jost.variable}`}
    >
      <body className="flex min-h-screen flex-col">
        <SiteHeader />
        <main id="main" className="flex-1">
          {children}
        </main>
        <SiteFooter />
        <JsonLdGraph nodes={[organizationSchema(), websiteSchema(), personSchema()]} />
      </body>
    </html>
  );
}
