import type { Metadata, Viewport } from "next";
import { DM_Sans, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CookieConsent } from "@/components/CookieConsent";
import { StickyCallBar } from "@/components/StickyCallBar";
import { Tracking } from "@/components/Tracking";
import { siteConfig } from "@/lib/site.config";
import { organizationLd, websiteLd, jsonLdScript } from "@/lib/jsonld";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dmsans",
  display: "swap",
});
const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.siteUrl),
  title: {
    default: `WOW!® Internet, TV, Mobile & Home Phone Plans — Call ${siteConfig.phoneDisplay} | Independent Authorized Dealer`,
    template: "%s | WOW! Authorized Dealer",
  },
  description:
    "Order WOW! Internet, Fiber, TV, Mobile & Home Phone by phone through an independent authorized dealer. No contracts, unlimited data, whole-home Wi-Fi and speeds up to 5 Gig. Call to confirm availability and today's pricing for your address.",
  keywords: [
    "WOW internet",
    "WOW authorized dealer",
    "WOW fiber internet",
    "internet plans no contract",
    "unlimited data internet",
    "whole home wifi",
    "WOW internet deals",
    "high speed internet",
  ],
  applicationName: siteConfig.siteName,
  authors: [{ name: siteConfig.siteName }],
  alternates: { canonical: "/" },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.siteUrl,
    siteName: siteConfig.siteName,
    title: "WOW! Internet Plans — Authorized Dealer",
    description:
      "Fast, fair-priced WOW! Internet with no contracts and unlimited data. Compare plans and check availability with an authorized dealer.",
    images: [{ url: "/og.svg", width: 1200, height: 630, alt: "WOW! Authorized Dealer" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "WOW! Internet Plans — Authorized Dealer",
    description: "No contracts. Unlimited data. Speeds up to 5 Gig. Check availability now.",
    images: ["/og.svg"],
  },
  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml" }],
    apple: [{ url: "/favicon.svg" }],
  },
  manifest: "/site.webmanifest",
  category: "technology",
};

export const viewport: Viewport = {
  themeColor: "#001a3c",
  width: "device-width",
  initialScale: 1,
  colorScheme: "light",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-US" className={`${dmSans.variable} ${jakarta.variable}`}>
      <body>
        {/* Progressive enhancement: if JS is disabled, neutralize the
            entrance-animation start states so all content is fully visible. */}
        <noscript>
          <style>{`.hero-eyebrow,.hero-sub,.hero-actions,.hero-metrics,.scroll-cue,.console-wrap{opacity:1!important;transform:none!important}.hero-title .t-word,.hero-title .t-mask{transform:none!important;opacity:1!important;overflow:visible!important}[style*="opacity:0"]{opacity:1!important}`}</style>
        </noscript>
        <a className="skip-link" href="#main">
          Skip to content
        </a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <StickyCallBar />
        <CookieConsent />

        <script type="application/ld+json" dangerouslySetInnerHTML={jsonLdScript(organizationLd)} />
        <script type="application/ld+json" dangerouslySetInnerHTML={jsonLdScript(websiteLd)} />
        <Tracking />
      </body>
    </html>
  );
}
