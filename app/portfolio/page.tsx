import type { Metadata } from "next";
import PortfolioPageContent from "../components/PortfolioPageContent";

export const metadata: Metadata = {
  title: "Portfolio & Case Studies",
  description:
    "Selected social media case studies by Habiba Dapour, including Saudi dialect scriptwriting, organic TikTok growth, B2B content strategy, and account management results.",
  keywords: [
    "Habiba Dapour portfolio",
    "Saudi dialect scriptwriting",
    "organic social media growth",
    "TikTok content strategy",
    "B2B social media results",
    "social media account management",
  ],
  alternates: { canonical: "/portfolio" },
};
export default function PortfolioPage() {
  return <PortfolioPageContent />;
}
