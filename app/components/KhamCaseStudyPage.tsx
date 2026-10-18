"use client";

import Link from "next/link";
import Image from "next/image";

import { caseStudyWebCopy } from "../content/caseStudyContent";
import { copy, khamCaseStudy } from "../content/siteContent";
import { useLanguage } from "./LanguageProvider";
import { SiteFrame } from "./SiteFrame";

function Arrow({ external = false }: { external?: boolean }) {
  return <span aria-hidden="true" className="v2-arrow">{external ? "↗" : "→"}</span>;
}

function StoreLink() {
  const { language } = useLanguage();
  const text = caseStudyWebCopy.kham[language];
  return <a aria-label={text.visitLabel} className="v2-button v2-button-ghost v2-external-button" href={khamCaseStudy.website} rel="noopener noreferrer" target="_blank">{text.visit}<Arrow external /></a>;
}

export default function KhamCaseStudyPage() {
  const { language } = useLanguage();
  const text = caseStudyWebCopy.kham[language];

  return (
    <SiteFrame><main className="v2-case-detail v2-kham-case">
      <section className="v2-kham-hero"><div className="v2-shell">
        <nav aria-label={language === "ar" ? "مسار الصفحة" : "Breadcrumb"} className="v2-breadcrumb"><Link href="/case-studies">{text.breadcrumb}</Link><span aria-hidden="true">/</span><span>Kham Al-Jamal</span></nav>
        <div className="v2-case-hero-grid"><div className="v2-kham-hero-copy"><p className="v2-kicker">{text.badge}</p><h1>{text.title}</h1><p>{text.subtitle}</p><div className="v2-case-tags">{khamCaseStudy.tags.map((tag) => <span key={tag}>{tag}</span>)}</div><StoreLink /></div><div className="v2-case-visual"><Image alt={language === "ar" ? "هوية خام الجمال" : "Kham Al-Jamal visual identity"} fill priority sizes="(max-width: 800px) 100vw, 42vw" src={khamCaseStudy.coverImage} /></div></div>
      </div></section>

      <section className="v2-section v2-shell v2-case-overview"><div><p className="v2-kicker">KHAM AL-JAMAL</p><h2>{text.overviewTitle}</h2></div><div><p>{text.overview}</p><StoreLink /></div></section>
      <section className="v2-section v2-kham-challenge"><div className="v2-shell"><p className="v2-kicker">{text.challengeTitle}</p><h2>{text.challenge}</h2></div></section>
      <section className="v2-section v2-shell"><div className="v2-section-heading"><h2>{text.audienceTitle}</h2></div><div className="v2-case-text-grid">{text.audiences.map(([title, body], index) => <article key={title}><span>{String(index + 1).padStart(2, "0")}</span><h3>{title}</h3><p>{body}</p></article>)}</div></section>
      <section className="v2-section v2-shell v2-case-strategy"><div><p className="v2-kicker">{text.strategyTitle}</p><h2>{text.strategy}</h2></div></section>
      <section className="v2-section v2-tint"><div className="v2-shell"><div className="v2-section-heading"><h2>{text.journeyTitle}</h2></div><div className="v2-case-text-grid">{text.journey.map(([title, body], index) => <article key={title}><span>{String(index + 1).padStart(2, "0")}</span><h3>{title}</h3><p>{body}</p></article>)}</div></div></section>
      <section className="v2-section v2-kham-impact"><div className="v2-shell"><div className="v2-section-heading"><h2>{text.outcomesTitle}</h2></div><div className="v2-kham-results">{text.outcomes.map(([title, body]) => <article key={title}><h3>{title}</h3><p>{body}</p></article>)}</div></div></section>
      <section className="v2-section v2-kham-campaign"><div className="v2-shell"><div className="v2-section-heading"><div><p className="v2-kicker">{language === "ar" ? "حملة موسمية" : "Seasonal Campaign"}</p><h2>{language === "ar" ? "حملة اليوم الوطني السعودي" : "Saudi National Day Campaign"}</h2><p>{language === "ar" ? "صور الحملة التي وضعت الشخصيات والمنتج داخل أجواء سعودية دافئة." : "Campaign visuals placing the characters and product in a warm Saudi setting."}</p></div></div><div className="v2-case-gallery">{khamCaseStudy.nationalDayCampaign.map((image) => <figure key={image.src}><Image alt={image.alt[language]} fill sizes="(max-width: 800px) 100vw, 50vw" src={image.src} /></figure>)}</div></div></section>
      <section className="v2-section v2-shell v2-takeaway"><p className="v2-kicker">{text.valueTitle}</p><blockquote>{text.value}</blockquote></section>
      <section className="v2-final-cta v2-shell v2-case-final"><p className="v2-kicker v2-kicker-light">Habiba Dapour</p><h2>{text.consultationTitle}</h2><p>{text.consultationCopy}</p><div className="v2-actions"><Link className="v2-button v2-button-pink" href="/contact">{copy[language].book}<Arrow /></Link><StoreLink /></div></section>
    </main></SiteFrame>
  );
}
