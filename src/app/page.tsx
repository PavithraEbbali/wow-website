import { Hero } from "@/components/Hero";
import { TrustBar } from "@/components/TrustBar";
import { Plans } from "@/components/Plans";
import { ProductLine } from "@/components/Products";
import { Mobile } from "@/components/Mobile";
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
      {/* §2.3 canonical order: Internet → TV → Mobile → Home Phone, each its own section. */}
      <ProductLine
        line="tv"
        id="tv"
        kicker="Television"
        segments={[{ text: "WOW! TV &" }, { text: "YouTube TV", flow: true }]}
        intro="Two ways to watch: WOW!'s own digital cable on the tv+ box, or streaming through the YouTube TV partnership. Pick whichever fits your household."
      />
      <Mobile />
      <ProductLine
        line="phone"
        id="phone"
        kicker="Home Phone"
        segments={[{ text: "WOW! Home Phone" }, { text: "plans", flow: true }]}
        intro="A dependable landline on one bill with your internet. Choose the base plan or add unlimited long distance with Home Phone Plus."
      />
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
