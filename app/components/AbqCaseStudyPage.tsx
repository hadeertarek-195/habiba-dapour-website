"use client";

import Link from "next/link";
import Image from "next/image";

import { caseStudyWebCopy } from "../content/caseStudyContent";
import { abqCaseStudy, copy } from "../content/siteContent";
import { useLanguage } from "./LanguageProvider";
import { SiteFrame } from "./SiteFrame";

function Arrow({ external = false }: { external?: boolean }) {
  return <span aria-hidden="true" className="v2-arrow">{external ? "↗" : "→"}</span>;
}

function WebsiteLink() {
  const { language } = useLanguage();
  const text = caseStudyWebCopy.abq[language];
  return <a aria-label={text.visitLabel} className="v2-button v2-button-ghost v2-external-button" href={abqCaseStudy.website} rel="noopener noreferrer" target="_blank">{text.visit}<Arrow external /></a>;
}

export default function AbqCaseStudyPage() {
  const { language } = useLanguage();
  const text = caseStudyWebCopy.abq[language];

  return (
    <SiteFrame><main className="v2-case-detail">
      <section className="v2-case-hero"><div className="v2-shell">
        <nav aria-label={language === "ar" ? "مسار الصفحة" : "Breadcrumb"} className="v2-breadcrumb"><Link href="/case-studies">{text.breadcrumb}</Link><span aria-hidden="true">/</span><span>ABQ AL HAYAT</span></nav>
        <div className="v2-case-hero-grid"><div className="v2-case-hero-copy"><p className="v2-kicker v2-kicker-light">{text.badge}</p><h1>{text.title}</h1><p className="v2-case-subtitle">{text.subtitle}</p><div className="v2-case-tags">{abqCaseStudy.tags.map((tag) => <span key={tag}>{tag}</span>)}</div><WebsiteLink /></div><div className="v2-case-visual"><Image alt={language === "ar" ? "هوية عبق الحياة" : "ABQ AL HAYAT visual identity"} fill priority sizes="(max-width: 800px) 100vw, 42vw" src={abqCaseStudy.coverImage} /></div></div>
      </div></section>

      <section className="v2-section v2-shell v2-case-overview"><div><p className="v2-kicker">ABQ AL HAYAT</p><h2>{text.overviewTitle}</h2></div><div><p>{text.overview}</p><WebsiteLink /></div></section>
      <section className="v2-section v2-shell v2-case-facts"><article><span>01</span><h2>{text.marketTitle}</h2><p>{text.market}</p></article><article><span>02</span><h2>{text.roleTitle}</h2><p>{text.role}</p></article></section>
      <section className="v2-section v2-case-challenge"><div className="v2-shell"><p className="v2-kicker v2-kicker-light">{text.challengeTitle}</p><h2>{text.challenge}</h2></div></section>
      <section className="v2-section v2-shell v2-case-strategy"><div><p className="v2-kicker">{text.strategyTitle}</p><h2>{text.strategy}</h2></div></section>

      <section className="v2-section v2-tint"><div className="v2-shell"><div className="v2-section-heading"><h2>{text.implementationTitle}</h2></div><div className="v2-case-text-grid">{text.implementation.map(([title, body], index) => <article key={title}><span>{String(index + 1).padStart(2, "0")}</span><h3>{title}</h3><p>{body}</p></article>)}</div></div></section>

      <section className="v2-section v2-impact-section"><div className="v2-shell"><div className="v2-section-heading"><div><h2>{text.outcomesTitle}</h2><p>{text.outcomesIntro}</p></div></div><div className="v2-impact-grid">{text.outcomes.map(([title, body]) => <article key={title}><h3>{title}</h3><p>{body}</p></article>)}</div></div></section>

      <section className="v2-section v2-impact-section"><div className="v2-shell"><div className="v2-section-heading"><div><h2>{language === "ar" ? "لقطة من التعاقدات" : "Contracts Snapshot"}</h2><p>{language === "ar" ? "صورة موثقة من لوحة المتابعة خلال سبتمبر 2026." : "A documented operations dashboard snapshot from September 2026."}</p></div></div><figure className="v2-contracts-proof-image"><Image alt={abqCaseStudy.contractsSnapshot.alt[language]} fill sizes="(max-width: 1200px) 100vw, 1100px" src={abqCaseStudy.contractsSnapshot.src} /></figure></div></section>

      <section className="v2-section v2-shell"><div className="v2-section-heading"><h2>{text.impactTitle}</h2></div><div className="v2-case-text-grid">{text.impact.map(([title, body], index) => <article key={title}><span>{String(index + 1).padStart(2, "0")}</span><h3>{title}</h3><p>{body}</p></article>)}</div></section>

      <section className="v2-section v2-shell"><div className="v2-section-heading"><div><h2>{text.examplesTitle}</h2><p>{text.examplesIntro}</p></div></div><div className="v2-media-links">{text.examples.map(([title, href]) => <a href={href} key={href} rel="noopener noreferrer" target="_blank"><span aria-hidden="true">▶</span><strong>{title}</strong><Arrow external /></a>)}</div></section>

      <section className="v2-section v2-case-media"><div className="v2-shell"><div className="v2-section-heading"><div><h2>{language === "ar" ? "معاينات الفيديو" : "Video Previews"}</h2><p>{language === "ar" ? "معاينات مباشرة للفيديوهات المنشورة ضمن المنظومة." : "Direct previews of published videos from the content system."}</p></div></div><div className="v2-video-grid">{abqCaseStudy.media.map((video) => <div className="v2-video-frame" key={video.youtubeId}><iframe allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen loading="lazy" referrerPolicy="strict-origin-when-cross-origin" src={`https://www.youtube-nocookie.com/embed/${video.youtubeId}?rel=0`} title={video.title[language]} /></div>)}</div></div></section>

      <section className="v2-section v2-shell"><div className="v2-section-heading"><div><p className="v2-kicker">{language === "ar" ? "حملة موسمية" : "Seasonal Campaign"}</p><h2>{language === "ar" ? "حملة اليوم الوطني السعودي" : "Saudi National Day Campaign"}</h2></div></div><div className="v2-case-gallery v2-case-gallery-square">{abqCaseStudy.nationalDayCampaign.map((image) => <figure key={image.src}><Image alt={image.alt[language]} fill sizes="(max-width: 800px) 100vw, 33vw" src={image.src} /></figure>)}</div></section>

      <section className="v2-final-cta v2-shell v2-case-final"><p className="v2-kicker v2-kicker-light">Habiba Dapour</p><h2>{text.consultationTitle}</h2><p>{text.consultationCopy}</p><div className="v2-actions"><Link className="v2-button v2-button-pink" href="/contact">{copy[language].book}<Arrow /></Link><WebsiteLink /></div></section>
    </main></SiteFrame>
  );
}
