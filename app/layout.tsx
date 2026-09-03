import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { siteUrl, siteUrlString } from "./content/siteConfig";
import { LanguageProvider } from "./components/LanguageProvider";
import "./globals.css";

const siteTitle = "Habiba Dapour | Social Media Account Manager";
const siteDescription =
  "Social media account management, performance audits and content strategy by Habiba Dapour, an Egyptian Account Manager with 5+ years of experience.";

export async function generateMetadata(): Promise<Metadata> {
  return {
    metadataBase: siteUrl,
    title: { default: siteTitle, template: "%s | Habiba Dapour" },
    description: siteDescription,
    keywords: [
      "Habiba Dapour",
      "social media account manager",
      "social media audit",
      "content strategy",
      "Egypt",
    ],
    openGraph: {
      title: siteTitle,
      description: "Focused social media strategy, management and performance analysis.",
      type: "website",
      url: siteUrlString,
      images: ["/og.png"],
    },
    twitter: {
      card: "summary_large_image",
      title: siteTitle,
      description: "Focused social media strategy, management and performance analysis.",
      images: ["/og.png"],
    },
    other: {
      "codex-preview": "development",
    },
    alternates: {
      canonical: "/",
    },
  };
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Habiba Dapour",
    jobTitle: "Social Media Account Manager",
    email: "mailto:habiba.dapour@gmail.com",
    address: { "@type": "PostalAddress", addressLocality: "Marsa Matrouh", addressCountry: "EG" },
    knowsAbout: ["Social media management", "Content strategy", "Performance analysis", "Media buying"],
  };
  return <html lang="en" suppressHydrationWarning><body><LanguageProvider>{children}</LanguageProvider><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }} /><Analytics /></body></html>;
}
