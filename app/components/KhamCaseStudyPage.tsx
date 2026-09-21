"use client";

import Image from "next/image";
import Link from "next/link";

import { copy, khamCaseStudy } from "../content/siteContent";
import { useLanguage } from "./LanguageProvider";
import { SiteFrame } from "./SiteFrame";

function Arrow({ external = false }: { external?: boolean }) {
  return <span aria-hidden="true" className="v2-arrow">{external ? "↗" : "→"}</span>;
}

function StoreLink() {
  const { language } = useLanguage();
  const text = khamCaseStudy[language];

  return (
    <a aria-label={text.visitLabel} className="v2-button v2-button-ghost v2-external-button" href={khamCaseStudy.website} rel="noopener noreferrer" target="_blank">
      {text.visit}<Arrow external />
    </a>
  );
}

export default function KhamCaseStudyPage() {
  const { language } = useLanguage();
  const text = khamCaseStudy[language];

  return (
    <SiteFrame>
      <main className="v2-case-detail v2-kham-case">
        <section className="v2-kham-hero">
          <div className="v2-shell">
            <nav aria-label={language === "ar" ? "مسار الصفحة" : "Breadcrumb"} className="v2-breadcrumb">
              <Link href="/case-studies">{text.breadcrumb}</Link><span aria-hidden="true">/</span><span>Kham Al Jamal</span>
            </nav>
            <div className="v2-kham-hero-grid">
              <div className="v2-kham-hero-copy">
                <p className="v2-kicker">{text.badge}</p>
                <h1>{text.title}</h1>
                <p>{text.subtitle}</p>
                <div className="v2-case-tags">{khamCaseStudy.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
                <StoreLink />
              </div>
              <div className="v2-kham-hero-image"><Image alt={text.imageAlt} fill priority sizes="(max-width: 800px) calc(100vw - 32px), 430px" src={khamCaseStudy.coverImage} /></div>
            </div>
          </div>
        </section>

        <section className="v2-section v2-shell v2-case-overview">
          <div><p className="v2-kicker">KHAM AL JAMAL</p><h2>{text.overviewTitle}</h2></div>
          <div><p>{text.overview}</p><StoreLink /></div>
        </section>

        <section className="v2-section v2-kham-challenge">
          <div className="v2-shell"><p className="v2-kicker">{text.challengeTitle}</p><h2>{text.challenge}</h2></div>
        </section>

        <section className="v2-section v2-shell v2-kham-concept">
          <div><p className="v2-kicker">{text.conceptEyebrow}</p><h2>{text.conceptTitle}</h2></div>
          <p>{text.conceptCopy}</p>
        </section>

        <section className="v2-section v2-kham-funnel-section">
          <div className="v2-shell">
            <div className="v2-section-heading"><h2>{text.funnelTitle}</h2></div>
            <div className="v2-kham-funnel">
              {text.funnel.map((stage) => <article key={stage.stage}><span>{stage.stage}</span><h3>{stage.title}</h3><p>{stage.copy}</p></article>)}
            </div>
          </div>
        </section>

        <section className="v2-section v2-kham-mechanics">
          <div className="v2-shell">
            <div className="v2-section-heading"><h2>{text.mechanicsTitle}</h2></div>
            <div className="v2-kham-mechanics-grid">{text.mechanics.map((item) => <div key={item}>{item}</div>)}</div>
          </div>
        </section>

        <section className="v2-section v2-shell">
          <div className="v2-section-heading"><h2>{text.operationsTitle}</h2></div>
          <div className="v2-kham-operations">
            {text.operations.map((item) => <article key={item.title}><h3>{item.title}</h3><p>{item.copy}</p></article>)}
          </div>
        </section>

        <section className="v2-section v2-kham-impact">
          <div className="v2-shell">
            <div className="v2-section-heading"><div><h2>{text.impactTitle}</h2><p>{text.impactIntro}</p></div></div>
            <div className="v2-kham-results">
              {text.results.map((result) => <article key={result.label}><h3>{result.label}</h3><p>{result.copy}</p></article>)}
            </div>
          </div>
        </section>

        <section className="v2-section v2-shell v2-takeaway v2-kham-takeaway">
          <p className="v2-kicker">{text.takeawayTitle}</p><blockquote>{text.takeaway}</blockquote>
        </section>

        <section className="v2-final-cta v2-shell v2-case-final">
          <p className="v2-kicker v2-kicker-light">Habiba Dapour</p>
          <h2>{text.consultationTitle}</h2><p>{text.consultationCopy}</p>
          <div className="v2-actions"><Link className="v2-button v2-button-pink" href="/contact">{copy[language].book}<Arrow /></Link><StoreLink /></div>
        </section>
      </main>
    </SiteFrame>
  );
}
