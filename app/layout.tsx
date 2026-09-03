import type { Metadata } from "next";
import { cookies } from "next/headers";
import { Analytics } from "@vercel/analytics/next";
import { siteUrl, siteUrlString } from "./content/siteConfig";
import { LanguageProvider } from "./components/LanguageProvider";
import "./globals.css";
import "./site-v2.css";

const siteTitle = "Habiba Dapour | Social Media Account Manager";
const siteDescription =
  "Strategic social media management, content strategy, account audits, and paid media for business growth by Habiba Dapour.";

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
      "digital marketing consultation",
      "إدارة حسابات السوشيال ميديا",
      "استراتيجية المحتوى",
      "تحليل حسابات السوشيال ميديا",
    ],
    openGraph: {
      title: siteTitle,
      description: siteDescription,
      locale: "en_US",
      alternateLocale: ["ar_EG"],
      type: "website",
      url: siteUrlString,
      images: ["/og.png"],
    },
    twitter: {
      card: "summary_large_image",
      title: siteTitle,
      description: siteDescription,
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

export default async function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const cookieStore = await cookies();
  const initialLanguage = cookieStore.get("habiba-language")?.value === "ar" ? "ar" : "en";
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Habiba Dapour",
    jobTitle: "Social Media Account Manager",
    email: "mailto:habiba.dapour@gmail.com",
    address: { "@type": "PostalAddress", addressLocality: "Marsa Matrouh", addressCountry: "EG" },
    knowsAbout: ["Social media management", "Content strategy", "Performance analysis", "Media buying"],
  };
  return <html dir={initialLanguage === "ar" ? "rtl" : "ltr"} lang={initialLanguage}><body><LanguageProvider initialLanguage={initialLanguage}>{children}</LanguageProvider><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }} /><Analytics /></body></html>;
}
