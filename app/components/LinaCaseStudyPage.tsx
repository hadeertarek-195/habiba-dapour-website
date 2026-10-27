"use client";

import Link from "next/link";
import Image from "next/image";

import { caseStudyWebCopy } from "../content/caseStudyContent";
import { copy, linaCaseStudy } from "../content/siteContent";
import { useLanguage } from "./LanguageProvider";
import { SiteFrame } from "./SiteFrame";

function Arrow({ external = false }: { external?: boolean }) {
  return <span aria-hidden="true" className="v2-arrow">{external ? "↗" : "→"}</span>;
}

function StoreLink() {
  const { language } = useLanguage();
  const text = caseStudyWebCopy.lina[language];
  return <a aria-label={text.visitLabel} className="v2-button v2-button-ghost v2-external-button" href={linaCaseStudy.website} rel="noopener noreferrer" target="_blank">{text.visit}<Arrow external /></a>;
}

export default function LinaCaseStudyPage() {
  const { language } = useLanguage();
  const text = caseStudyWebCopy.lina[language];

  return (
    <SiteFrame><main className="v2-case-detail v2-lina-case">
      <section className="v2-lina-hero"><div className="v2-shell">
        <nav aria-label={language === "ar" ? "مسار الصفحة" : "Breadcrumb"} className="v2-breadcrumb"><Link href="/case-studies">{text.breadcrumb}</Link><span aria-hidden="true">/</span><span>Lina</span></nav>
        <div className="v2-case-hero-grid"><div className="v2-lina-hero-copy"><p className="v2-kicker">{text.badge}</p><h1>{text.title}</h1><p>{text.subtitle}</p><div className="v2-case-tags">{linaCaseStudy.tags.map((tag) => <span key={tag}>{tag}</span>)}</div><StoreLink /></div><div className="v2-case-visual"><Image alt={language === "ar" ? "هوية براند لينا" : "Lina brand identity"} fill priority sizes="(max-width: 800px) 100vw, 42vw" src={linaCaseStudy.coverImage} /></div></div>
      </div></section>

      <section className="v2-section v2-shell v2-case-overview"><div><p className="v2-kicker">LINA</p><h2>{text.overviewTitle}</h2></div><div><p>{text.overview}</p><StoreLink /></div></section>
      <section className="v2-section v2-lina-challenge"><div className="v2-shell"><p className="v2-kicker">{text.challengeTitle}</p><h2>{text.challenge}</h2></div></section>
      <section className="v2-section v2-shell v2-case-strategy"><div><p className="v2-kicker">{text.narrativeTitle}</p><h2>{text.narrative}</h2></div></section>
      <section className="v2-section v2-tint"><div className="v2-shell"><div className="v2-section-heading"><h2>{text.contentTitle}</h2></div><div className="v2-case-text-grid">{text.content.map(([title, body], index) => <article key={title}><span>{String(index + 1).padStart(2, "0")}</span><h3>{title}</h3><p>{body}</p></article>)}</div></div></section>
      <section className="v2-section v2-shell"><div className="v2-section-heading"><h2>{text.storeTitle}</h2></div><div className="v2-case-text-grid">{text.store.map(([title, body], index) => <article key={title}><span>{String(index + 1).padStart(2, "0")}</span><h3>{title}</h3><p>{body}</p></article>)}</div></section>
      <section className="v2-section v2-impact-section"><div className="v2-shell"><div className="v2-section-heading"><h2>{text.outcomeTitle}</h2></div><p className="v2-case-outcome">{text.outcome}</p></div></section>
      <section className="v2-section v2-lina-gallery-section"><div className="v2-shell"><div className="v2-section-heading"><div><h2>{language === "ar" ? "العالم البصري للينا" : "Lina's Visual World"}</h2><p>{language === "ar" ? "صور الشخصية والقصة والمنتجات التي دعمت هوية البراند." : "Persona, storytelling, and product visuals that supported the brand identity."}</p></div></div><div className="v2-case-gallery">{linaCaseStudy.gallery.map((image) => <figure key={image.src}><Image alt={image.alt[language]} fill sizes="(max-width: 800px) 100vw, 33vw" src={image.src} /></figure>)}</div></div></section>
      <section className="v2-section v2-lina-national-day"><div className="v2-shell"><div className="v2-section-heading"><div><p className="v2-kicker">{language === "ar" ? "حملة موسمية" : "Seasonal Campaign"}</p><h2>{language === "ar" ? "اليوم الوطني: كل عباية تعبر عن قيمة" : "National Day: Every Abaya Represents a Value"}</h2><p>{language === "ar" ? "طابقت ألوان العبايات مع هوية اليوم الوطني، وربطت كل تصميم بقيمة وطنية." : "Each abaya color was matched with the National Day identity and connected to a national value."}</p></div></div><div className="v2-case-gallery v2-case-gallery-square">{linaCaseStudy.nationalDayCampaign.map((image) => <figure key={image.src}><Image alt={image.alt[language]} fill sizes="(max-width: 800px) 100vw, 33vw" src={image.src} /></figure>)}</div></div></section>
      <section className="v2-section v2-shell"><div className="v2-section-heading"><div><h2>{language === "ar" ? "فيديوهات لينا" : "Lina Videos"}</h2><p>{language === "ar" ? "أعددت الـstoryboards لهذه الفيديوهات وكتبت السكريبتات التي تقود قصتها ورسائلها." : "I developed the storyboards for these videos and wrote the scripts that shape their story and messaging."}</p></div></div><div className="v2-lina-video-grid">{linaCaseStudy.videos.map((video) => <video controls key={video.src} playsInline preload="metadata" title={video.title[language]}><source src={video.src} type="video/mp4" /></video>)}</div></section>
      <section className="v2-section v2-case-media"><div className="v2-shell"><div className="v2-section-heading"><div><p className="v2-kicker">{language === "ar" ? "عمل الفيديو" : "Video Direction"}</p><h2>{language === "ar" ? "معاينات الفيديوهات المنشورة" : "Published Video Previews"}</h2><p>{language === "ar" ? "أعددت الـstoryboards وكتبت السكريبتات لهذه الفيديوهات، ثم حوّلت الفكرة إلى سرد بصري متسق مع عالم لينا." : "I developed the storyboards and wrote the scripts for these videos, translating each idea into visual storytelling consistent with Lina's world."}</p></div></div><div className="v2-video-grid">{linaCaseStudy.youtubeVideos.map((video) => <div className="v2-video-frame" key={video.youtubeId}><iframe allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen loading="lazy" referrerPolicy="strict-origin-when-cross-origin" src={`https://www.youtube-nocookie.com/embed/${video.youtubeId}?rel=0`} title={video.title[language]} /></div>)}</div></div></section>
      <section className="v2-final-cta v2-shell v2-case-final"><p className="v2-kicker v2-kicker-light">Habiba Dapour</p><h2>{text.consultationTitle}</h2><p>{text.consultationCopy}</p><div className="v2-actions"><Link className="v2-button v2-button-pink" href="/contact">{copy[language].book}<Arrow /></Link><StoreLink /></div></section>
    </main></SiteFrame>
  );
}
