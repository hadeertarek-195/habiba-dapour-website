"use client";

import Image from "next/image";
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
            <div className="v2-lina-hero-grid">
              <div className="v2-lina-hero-copy">
                <p className="v2-kicker">{text.badge}</p>
                <h1>{text.title}</h1>
                <p>{text.subtitle}</p>
                <div className="v2-case-tags">{linaCaseStudy.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
                <StoreLink />
              </div>
              <div className="v2-lina-hero-image"><Image alt={text.imageAlt} fill priority sizes="(max-width: 800px) calc(100vw - 32px), 50vw" src={linaCaseStudy.coverImage} /></div>
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
            <div className="v2-lina-gallery">
              {linaCaseStudy.gallery.map((image, index) => <div className={index === 0 ? "wide" : ""} key={image.src}><Image alt={image.alt[language]} fill sizes={index === 0 ? "(max-width: 800px) calc(100vw - 32px), 65vw" : "(max-width: 800px) calc(100vw - 32px), 35vw"} src={image.src} /></div>)}
            </div>
          </div>
        </section>

        <section className="v2-section v2-shell v2-lina-videos">
          <div className="v2-section-heading"><div><h2>{text.videosTitle}</h2><p>{text.videosIntro}</p></div></div>
          <div className="v2-lina-video-grid">
            {linaCaseStudy.videos.map((video, index) => <video aria-label={video.title[language]} className={index === 0 ? "landscape" : "portrait"} controls key={video.src} playsInline preload="metadata"><source src={video.src} type="video/mp4" /></video>)}
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
