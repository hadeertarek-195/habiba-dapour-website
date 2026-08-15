import type { Metadata } from "next";
import PortfolioPageContent from "../components/PortfolioPageContent";

export const metadata: Metadata = { title: "Portfolio & Case Studies", description: "Selected social media management, content and campaign results by Habiba Dapour.", alternates: { canonical: "/portfolio" } };
export default function PortfolioPage() {
  return <PortfolioPageContent />;
}
