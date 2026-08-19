import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";
import { CpraOptOut } from "@/components/CpraOptOut";
import { legalDocs } from "@/lib/legalDocs";

const doc = legalDocs["do-not-sell"];

export const metadata: Metadata = {
  title: doc.title,
  description: doc.description,
  alternates: { canonical: "/legal/do-not-sell/" },
};

export default function Page() {
  return <LegalPage slug="do-not-sell" extra={<CpraOptOut />} />;
}
