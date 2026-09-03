import type { Metadata } from "next";
import { cookies } from "next/headers";

import type { Language } from "./siteContent";

const pages = {
  home: {
    path: "/",
    en: ["Strategic Social Media for Business Growth", "Social media strategy, content, management, audits, and paid media connected to clear business objectives."],
    ar: ["سوشيال ميديا استراتيجية لنمو البيزنس", "استراتيجية محتوى وإدارة حسابات وتحليل أداء وإعلانات مدفوعة مرتبطة بأهداف واضحة للبيزنس."],
  },
  services: {
    path: "/services",
    en: ["Social Media Services", "Explore social media management, content strategy, account audits, and paid media built around business needs."],
    ar: ["خدمات السوشيال ميديا", "اكتشف إدارة حسابات السوشيال ميديا واستراتيجية المحتوى وتحليل الحسابات وإدارة الإعلانات وفق احتياج البيزنس."],
  },
  help: {
    path: "/who-we-help",
    en: ["Who We Help", "Social media support for growing businesses, e-commerce brands, personal brands, experts, and local businesses."],
    ar: ["مين نقدر نساعد", "حلول سوشيال ميديا للبيزنس المتنامي والتجارة الإلكترونية والبراندات الشخصية والخبراء والأنشطة المحلية."],
  },
  cases: {
    path: "/case-studies",
    en: ["Case Studies", "Selected Habiba Dapour projects presented through challenge, strategic thinking, execution, and approved content."],
    ar: ["سابقة الأعمال", "مشروعات مختارة من Habiba Dapour تعرض التحدي وطريقة التفكير والاستراتيجية والتنفيذ والمحتوى المعتمد."],
  },
  about: {
    path: "/about",
    en: ["About", "Learn how Habiba Dapour approaches social media as a strategic, creative, transparent, and collaborative part of business growth."],
    ar: ["عن Habiba Dapour", "اتعرف على طريقة Habiba Dapour في التعامل مع السوشيال ميديا كجزء استراتيجي وإبداعي وواضح من نمو البيزنس."],
  },
  contact: {
    path: "/contact",
    en: ["Contact & Consultation", "Share your business challenge and request a social media consultation with Habiba Dapour."],
    ar: ["تواصل واحجز استشارتك", "شاركنا تحدي البيزنس واطلب استشارة سوشيال ميديا مع Habiba Dapour."],
  },
  audit: {
    path: "/social-media-audit",
    en: ["Social Media Audit", "Request a structured social media audit covering profile clarity, content direction, performance, customer journey, and improvement priorities."],
    ar: ["تحليل حسابات السوشيال ميديا", "اطلب تحليلًا منظمًا للحساب يشمل وضوح الملف واتجاه المحتوى والأداء ورحلة العميل وأولويات التحسين."],
  },
} as const;

export async function getPageMetadata(page: keyof typeof pages): Promise<Metadata> {
  const cookieStore = await cookies();
  const language: Language = cookieStore.get("habiba-language")?.value === "ar" ? "ar" : "en";
  const data = pages[page];
  const [title, description] = data[language];

  return {
    title,
    description,
    alternates: { canonical: data.path },
    openGraph: {
      title: `${title} | Habiba Dapour`,
      description,
      url: data.path,
      locale: language === "ar" ? "ar_EG" : "en_US",
      alternateLocale: [language === "ar" ? "en_US" : "ar_EG"],
    },
  };
}
