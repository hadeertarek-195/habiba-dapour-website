import type { Metadata } from "next";
import { cookies } from "next/headers";

import AbqCaseStudyPage from "../../components/AbqCaseStudyPage";
import { siteUrlString } from "../../content/siteConfig";
import { abqCaseStudy, type Language } from "../../content/siteContent";

const path = "/case-studies/abq-al-hayat";

export async function generateMetadata(): Promise<Metadata> {
  const cookieStore = await cookies();
  const language: Language = cookieStore.get("habiba-language")?.value === "ar" ? "ar" : "en";
  const isArabic = language === "ar";
  const title = isArabic ? "دراسة حالة عبق الحياة | استراتيجية محتوى ونمو B2B" : "ABQ AL HAYAT Case Study | B2B Content-Led Growth";
  const description = isArabic
    ? "دراسة حالة توضح كيف بنيت منظومة تربط استراتيجية المحتوى، بيانات المبيعات، الإعلانات وفهم الجمهور لدعم نمو عبق الحياة."
    : "A case study showing how I connected content strategy, sales insights, paid media, and audience research to support ABQ AL HAYAT’s growth.";

  return {
    title,
    description,
    alternates: { canonical: path, languages: { en: path, ar: path } },
    openGraph: {
      type: "article",
      title,
      description,
      url: path,
      locale: isArabic ? "ar_EG" : "en_US",
      alternateLocale: [isArabic ? "en_US" : "ar_EG"],
      images: [{ url: abqCaseStudy.coverImage, alt: abqCaseStudy[language].imageAlt }],
    },
    twitter: { card: "summary_large_image", title, description, images: [abqCaseStudy.coverImage] },
  };
}

export default async function Page() {
  const cookieStore = await cookies();
  const language: Language = cookieStore.get("habiba-language")?.value === "ar" ? "ar" : "en";
  const text = abqCaseStudy[language];
  const canonical = new URL(path, siteUrlString).toString();
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CreativeWork",
        name: text.title,
        alternateName: "ABQ AL HAYAT Case Study",
        description: text.subtitle,
        url: canonical,
        image: abqCaseStudy.coverImage,
        inLanguage: language === "ar" ? "ar-EG" : "en",
        author: { "@type": "Person", name: "Habiba Dapour" },
        about: { "@type": "Organization", name: "ABQ AL HAYAT", url: abqCaseStudy.website },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: text.breadcrumb, item: new URL("/case-studies", siteUrlString).toString() },
          { "@type": "ListItem", position: 2, name: "ABQ AL HAYAT", item: canonical },
        ],
      },
    ],
  };

  return <><AbqCaseStudyPage /><script dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} type="application/ld+json" /></>;
}
