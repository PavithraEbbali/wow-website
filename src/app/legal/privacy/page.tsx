import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";
import { legalDocs } from "@/lib/legalDocs";

const doc = legalDocs["privacy"];

export const metadata: Metadata = {
  title: doc.title,
  description: doc.description,
  alternates: { canonical: "/legal/privacy/" },
};

export default function Page() {
  return <LegalPage slug="privacy" />;
}
