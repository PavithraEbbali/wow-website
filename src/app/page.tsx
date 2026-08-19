import { Hero } from "@/components/Hero";
import { TrustBar } from "@/components/TrustBar";
import { Plans } from "@/components/Plans";
import { Products } from "@/components/Products";
import { AddOns } from "@/components/AddOns";
import { FineFacts } from "@/components/FineFacts";
import { Features } from "@/components/Features";
import { Fiber } from "@/components/Fiber";
import { Coverage } from "@/components/Coverage";
import { Steps } from "@/components/Steps";
import { CTASection } from "@/components/CTASection";
import { FAQ } from "@/components/FAQ";
import { faqLd, offersLd, jsonLdScript } from "@/lib/jsonld";

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustBar />
      <Plans />
      <Products />
      <AddOns />
      <FineFacts />
      <Features />
      <Fiber />
      <Coverage />
      <Steps />
      <CTASection />
      {/* FAQ is the FINAL content section (§2.8) — nothing after it but the footer. */}
      <FAQ />

      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLdScript(offersLd)} />
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLdScript(faqLd)} />
    </>
  );
}
