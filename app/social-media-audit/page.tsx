import type { Metadata } from "next";
import AuditPageContent from "../components/AuditPageContent";

export const metadata: Metadata = {
  title: "Social Media Audit",
  description:
    "Request a practical social media audit covering content, profile, audience, performance and next-step priorities.",
  alternates: { canonical: "/social-media-audit" },
};

export default function AuditPage() {
  return <AuditPageContent />;
}
