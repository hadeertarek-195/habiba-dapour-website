"use client";

import Link from "next/link";

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
        <div className="v2-case-hero-grid"><div className="v2-lina-hero-copy"><p className="v2-kicker">{text.badge}</p><h1>{text.title}</h1><p>{text.subtitle}</p><div className="v2-case-tags">{linaCaseStudy.tags.map((tag) => <span key={tag}>{tag}</span>)}</div><StoreLink /></div><div className="v2-case-monogram">L<small>LINA</small></div></div>
      </div></section>

      <section className="v2-section v2-shell v2-case-overview"><div><p className="v2-kicker">LINA</p><h2>{text.overviewTitle}</h2></div><div><p>{text.overview}</p><StoreLink /></div></section>
      <section className="v2-section v2-lina-challenge"><div className="v2-shell"><p className="v2-kicker">{text.challengeTitle}</p><h2>{text.challenge}</h2></div></section>
      <section className="v2-section v2-shell v2-case-strategy"><div><p className="v2-kicker">{text.narrativeTitle}</p><h2>{text.narrative}</h2></div></section>
      <section className="v2-section v2-tint"><div className="v2-shell"><div className="v2-section-heading"><h2>{text.contentTitle}</h2></div><div className="v2-case-text-grid">{text.content.map(([title, body], index) => <article key={title}><span>{String(index + 1).padStart(2, "0")}</span><h3>{title}</h3><p>{body}</p></article>)}</div></div></section>
      <section className="v2-section v2-shell"><div className="v2-section-heading"><h2>{text.storeTitle}</h2></div><div className="v2-case-text-grid">{text.store.map(([title, body], index) => <article key={title}><span>{String(index + 1).padStart(2, "0")}</span><h3>{title}</h3><p>{body}</p></article>)}</div></section>
      <section className="v2-section v2-impact-section"><div className="v2-shell"><div className="v2-section-heading"><h2>{text.outcomeTitle}</h2></div><p className="v2-case-outcome">{text.outcome}</p></div></section>
      <section className="v2-final-cta v2-shell v2-case-final"><p className="v2-kicker v2-kicker-light">Habiba Dapour</p><h2>{text.consultationTitle}</h2><p>{text.consultationCopy}</p><div className="v2-actions"><Link className="v2-button v2-button-pink" href="/contact">{copy[language].book}<Arrow /></Link><StoreLink /></div></section>
    </main></SiteFrame>
  );
}
