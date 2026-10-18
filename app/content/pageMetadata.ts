import type { Metadata } from "next";
import { cookies } from "next/headers";

import type { Language } from "./siteContent";

const pages = {
  home: {
    path: "/",
    en: ["Social Media Strategy for Saudi & GCC Markets", "I build social media strategy, content systems, and account operations connected to audience behavior and business growth."],
    ar: ["استراتيجية سوشيال ميديا للسوق السعودي والخليجي", "ببني استراتيجية سوشيال ميديا ومنظومات محتوى وإدارة حسابات مرتبطة بسلوك الجمهور ونمو البيزنس."],
  },
  services: {
    path: "/services",
    en: ["Social Media Strategy, Content & Account Management", "Explore strategy, content creation, account management, and performance improvement built around business and audience needs."],
    ar: ["استراتيجية ومحتوى وإدارة حسابات السوشيال ميديا", "استكشف الاستراتيجية وصناعة المحتوى وإدارة الحسابات وتحسين الأداء وفق احتياج البيزنس والجمهور."],
  },
  help: {
    path: "/who-we-help",
    en: ["Who I Help in Saudi & GCC Markets", "Social media support for market entry, structured communication, Saudi-dialect content, aligned teams, and stronger organic growth."],
    ar: ["مين أقدر أساعد في السوق السعودي والخليجي", "دعم سوشيال ميديا لدخول السوق وتنظيم التواصل والمحتوى السعودي وتوافق الفرق وتقوية النمو العضوي."],
  },
  cases: {
    path: "/case-studies",
    en: ["Case Studies", "Selected Habiba Dapour projects presented through challenge, strategic thinking, execution, and approved content."],
    ar: ["سابقة الأعمال", "مشروعات مختارة من Habiba Dapour تعرض التحدي وطريقة التفكير والاستراتيجية والتنفيذ والمحتوى المعتمد."],
  },
  about: {
    path: "/about",
    en: ["About Habiba Dapour", "Learn how I connect brand understanding, Saudi-market insight, content strategy, and performance with practical business goals."],
    ar: ["عن Habiba Dapour", "اتعرف على طريقتي في ربط فهم البراند والسوق السعودي واستراتيجية المحتوى والأداء بأهداف البيزنس العملية."],
  },
  contact: {
    path: "/contact",
    en: ["Contact & Consultation", "Share your business challenge and request a social media consultation with Habiba Dapour."],
    ar: ["تواصل واحجز استشارتك", "احكيلي عن تحدي البيزنس واطلب استشارة سوشيال ميديا مع Habiba Dapour."],
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
