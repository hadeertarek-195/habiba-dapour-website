import type { Metadata } from "next";
import { cookies } from "next/headers";

import KhamCaseStudyPage from "../../components/KhamCaseStudyPage";
import { siteUrlString } from "../../content/siteConfig";
import { khamCaseStudy, type Language } from "../../content/siteContent";

const path = "/case-studies/kham-al-jamal";

export async function generateMetadata(): Promise<Metadata> {
  const cookieStore = await cookies();
  const language: Language = cookieStore.get("habiba-language")?.value === "ar" ? "ar" : "en";
  const isArabic = language === "ar";
  const title = isArabic ? "دراسة حالة خام الجمال | استراتيجية UGC ونمو عضوي" : "Kham Al Jamal Case Study | Organic UGC Growth Strategy";
  const description = isArabic
    ? "دراسة حالة توضح بناء شخصية UGC موثوقة واستراتيجية محتوى TikTok عضوية تدعم التفاعل والثقة والتحويل لخام الجمال."
    : "A case study covering the trusted UGC persona, native TikTok storytelling, community engagement, and conversion strategy built for Kham Al Jamal.";

  return {
    title,
    description,
    alternates: { canonical: path, languages: { en: path, ar: path } },
    openGraph: { type: "article", title, description, url: path, locale: isArabic ? "ar_EG" : "en_US", alternateLocale: [isArabic ? "en_US" : "ar_EG"], images: [{ url: khamCaseStudy.coverImage, alt: khamCaseStudy[language].imageAlt }] },
    twitter: { card: "summary_large_image", title, description, images: [khamCaseStudy.coverImage] },
  };
}

export default async function Page() {
  const cookieStore = await cookies();
  const language: Language = cookieStore.get("habiba-language")?.value === "ar" ? "ar" : "en";
  const text = khamCaseStudy[language];
  const canonical = new URL(path, siteUrlString).toString();
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "CreativeWork", name: text.title, alternateName: "Kham Al Jamal Organic UGC Case Study", description: text.subtitle, url: canonical, image: khamCaseStudy.coverImage, inLanguage: language === "ar" ? "ar-EG" : "en", author: { "@type": "Person", name: "Habiba Dapour" }, about: { "@type": "Brand", name: "Kham Al Jamal", url: khamCaseStudy.website } },
      { "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: text.breadcrumb, item: new URL("/case-studies", siteUrlString).toString() }, { "@type": "ListItem", position: 2, name: "Kham Al Jamal", item: canonical }] },
    ],
  };

  return <><KhamCaseStudyPage /><script dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} type="application/ld+json" /></>;
}
