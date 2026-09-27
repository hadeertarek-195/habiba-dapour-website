"use client";

import Link from "next/link";

import { copy, linaCaseStudy } from "../content/siteContent";
import { useLanguage } from "./LanguageProvider";
import { SiteFrame } from "./SiteFrame";

function Arrow({ external = false }: { external?: boolean }) {
  return <span aria-hidden="true" className="v2-arrow">{external ? "↗" : "→"}</span>;
}

function StoreLink() {
  const { language } = useLanguage();
  const text = linaCaseStudy[language];

  return (
    <a aria-label={text.visitLabel} className="v2-button v2-button-ghost v2-external-button" href={linaCaseStudy.website} rel="noopener noreferrer" target="_blank">
      {text.visit}<Arrow external />
    </a>
  );
}

export default function LinaCaseStudyPage() {
  const { language } = useLanguage();
  const text = linaCaseStudy[language];

  return (
    <SiteFrame>
      <main className="v2-case-detail v2-lina-case">
        <section className="v2-lina-hero">
          <div className="v2-shell">
            <nav aria-label={language === "ar" ? "مسار الصفحة" : "Breadcrumb"} className="v2-breadcrumb">
              <Link href="/case-studies">{text.breadcrumb}</Link><span aria-hidden="true">/</span><span>Lina</span>
            </nav>
            <div className="v2-case-hero-grid">
              <div className="v2-lina-hero-copy">
                <p className="v2-kicker">{text.badge}</p>
                <h1>{text.title}</h1>
                <p>{text.subtitle}</p>
                <div className="v2-case-tags">{linaCaseStudy.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
                <StoreLink />
              </div>
              <div aria-hidden="true" className="v2-case-monogram">لينا<small>LINA</small></div>
            </div>
          </div>
        </section>

        <section className="v2-section v2-shell v2-case-overview">
          <div><p className="v2-kicker">LINA</p><h2>{text.overviewTitle}</h2></div>
          <div><p>{text.overview}</p><StoreLink /></div>
        </section>

        <section className="v2-section v2-lina-challenge">
          <div className="v2-shell"><p className="v2-kicker">{text.challengeTitle}</p><h2>{text.challenge}</h2></div>
        </section>

        <section className="v2-section v2-shell">
          <div className="v2-section-heading"><h2>{text.pillarsTitle}</h2></div>
          <div className="v2-lina-pillars">
            {text.pillars.map((pillar) => (
              <article key={pillar.title}>
                <div><h3>{pillar.title}</h3><ul>{pillar.points.map((point) => <li key={point}>{point}</li>)}</ul></div>
              </article>
            ))}
          </div>
        </section>

        <section className="v2-section v2-lina-benefits">
          <div className="v2-shell">
            <div className="v2-section-heading"><h2>{text.benefitsTitle}</h2></div>
            <div className="v2-lina-benefit-grid">{text.benefits.map((benefit) => <div key={benefit}>{benefit}</div>)}</div>
          </div>
        </section>

        <section className="v2-section v2-shell v2-lina-seo">
          <div><p className="v2-kicker">{text.seoEyebrow}</p><h2>{text.seoTitle}</h2></div>
          <p>{text.seoCopy}</p>
        </section>

        <section className="v2-section v2-lina-gallery-section">
          <div className="v2-shell">
            <div className="v2-section-heading"><div><h2>{text.galleryTitle}</h2><p>{text.galleryIntro}</p></div></div>
            <div className="v2-creative-list">
              {linaCaseStudy.gallery.map((image) => <div key={image.src}><span aria-hidden="true">◇</span><p>{image.alt[language]}</p></div>)}
            </div>
          </div>
        </section>

        <section className="v2-section v2-lina-national-day">
          <div className="v2-shell">
            <div className="v2-section-heading"><div><p className="v2-kicker v2-kicker-light">{text.campaignEyebrow}</p><h2>{text.campaignTitle}</h2><p>{text.campaignIntro}</p></div></div>
            <div className="v2-creative-list v2-creative-list-wide">
              {linaCaseStudy.nationalDayCampaign.map((image) => (
                <div key={image.src}><span aria-hidden="true">✦</span><p>{image.alt[language]}</p></div>
              ))}
            </div>
          </div>
        </section>

        <section className="v2-section v2-shell v2-lina-videos">
          <div className="v2-section-heading"><div><h2>{text.videosTitle}</h2><p>{text.videosIntro}</p></div></div>
          <div className="v2-media-links">
            {linaCaseStudy.videos.map((video) => <a href={video.src} key={video.src} rel="noopener noreferrer" target="_blank"><span aria-hidden="true">▶</span><strong>{video.title[language]}</strong><Arrow external /></a>)}
          </div>
        </section>

        <section className="v2-section v2-shell v2-takeaway v2-lina-takeaway">
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
