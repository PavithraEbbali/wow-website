import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";
import { legalDocs } from "@/lib/legalDocs";

const doc = legalDocs["tcpa"];

export const metadata: Metadata = {
  title: doc.title,
  description: doc.description,
  alternates: { canonical: "/legal/tcpa/" },
};

export default function Page() {
  return <LegalPage slug="tcpa" />;
}
