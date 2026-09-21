import type { Metadata } from "next";
import { cookies } from "next/headers";

import LinaCaseStudyPage from "../../components/LinaCaseStudyPage";
import { siteUrlString } from "../../content/siteConfig";
import { linaCaseStudy, type Language } from "../../content/siteContent";

const path = "/case-studies/lina";

export async function generateMetadata(): Promise<Metadata> {
  const cookieStore = await cookies();
  const language: Language = cookieStore.get("habiba-language")?.value === "ar" ? "ar" : "en";
  const isArabic = language === "ar";
  const title = isArabic ? "دراسة حالة لينا | بناء براند أزياء سعودي" : "Lina Case Study | Saudi Fashion Brand Storytelling";
  const description = isArabic
    ? "دراسة حالة توضح بناء هوية لينا وقصة البراند ومحتوى الذكاء الاصطناعي وتحسين المتجر الإلكتروني وSEO."
    : "A case study covering Lina’s Saudi brand identity, audience psychology, AI content, storytelling, e-commerce optimization, and SEO.";

  return {
    title,
    description,
    alternates: { canonical: path, languages: { en: path, ar: path } },
    openGraph: { type: "article", title, description, url: path, locale: isArabic ? "ar_EG" : "en_US", alternateLocale: [isArabic ? "en_US" : "ar_EG"], images: [{ url: linaCaseStudy.coverImage, alt: linaCaseStudy[language].imageAlt }] },
    twitter: { card: "summary_large_image", title, description, images: [linaCaseStudy.coverImage] },
  };
}

export default async function Page() {
  const cookieStore = await cookies();
  const language: Language = cookieStore.get("habiba-language")?.value === "ar" ? "ar" : "en";
  const text = linaCaseStudy[language];
  const canonical = new URL(path, siteUrlString).toString();
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "CreativeWork", name: text.title, alternateName: "Lina Saudi Fashion Brand Case Study", description: text.subtitle, url: canonical, image: new URL(linaCaseStudy.coverImage, siteUrlString).toString(), inLanguage: language === "ar" ? "ar-EG" : "en", author: { "@type": "Person", name: "Habiba Dapour" }, about: { "@type": "Brand", name: "Lina", url: linaCaseStudy.website } },
      { "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: text.breadcrumb, item: new URL("/case-studies", siteUrlString).toString() }, { "@type": "ListItem", position: 2, name: "Lina", item: canonical }] },
    ],
  };

  return <><LinaCaseStudyPage /><script dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} type="application/ld+json" /></>;
}
