import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";
import { legalDocs } from "@/lib/legalDocs";

const doc = legalDocs["contact"];

export const metadata: Metadata = {
  title: doc.title,
  description: doc.description,
  alternates: { canonical: "/legal/contact/" },
};

export default function Page() {
  return <LegalPage slug="contact" />;
}
