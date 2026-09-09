"use client";

import Image from "next/image";
import Link from "next/link";

import { abqCaseStudy, copy } from "../content/siteContent";
import { useLanguage } from "./LanguageProvider";
import { SiteFrame } from "./SiteFrame";

function Arrow({ external = false }: { external?: boolean }) {
  return <span aria-hidden="true" className="v2-arrow">{external ? "↗" : "→"}</span>;
}

function WebsiteLink() {
  const { language } = useLanguage();
  const text = abqCaseStudy[language];

  return (
    <a
      aria-label={text.visitLabel}
      className="v2-button v2-button-ghost v2-external-button"
      href={abqCaseStudy.website}
      rel="noopener noreferrer"
      target="_blank"
    >
      {text.visit}<Arrow external />
    </a>
  );
}

function MediaGallery({ media }: { media: ReadonlyArray<{ youtubeId: string; title: { en: string; ar: string } }> }) {
  const { language } = useLanguage();
  const text = abqCaseStudy[language];
  if (media.length === 0) return null;

  return (
    <section className="v2-section v2-case-media">
      <div className="v2-shell">
        <div className="v2-section-heading">
          <div><p className="v2-kicker">ABQ AL HAYAT</p><h2>{text.mediaTitle}</h2><p>{text.mediaIntro}</p></div>
        </div>
        <div className="v2-video-grid">
          {media.map((video) => (
            <div className="v2-video-frame" key={video.youtubeId}>
              <iframe
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
                src={`https://www.youtube-nocookie.com/embed/${video.youtubeId}?rel=0`}
                title={video.title[language]}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function AbqCaseStudyPage() {
  const { language } = useLanguage();
  const text = abqCaseStudy[language];

  return (
    <SiteFrame>
      <main className="v2-case-detail">
        <section className="v2-case-hero">
          <div className="v2-shell">
            <nav aria-label={language === "ar" ? "مسار الصفحة" : "Breadcrumb"} className="v2-breadcrumb">
              <Link href="/case-studies">{text.breadcrumb}</Link><span aria-hidden="true">/</span><span>ABQ AL HAYAT</span>
            </nav>
            <div className="v2-case-hero-grid">
              <div>
                <p className="v2-kicker v2-kicker-light">{text.badge}</p>
                <h1>{text.title}</h1>
                <p className="v2-case-subtitle">{text.subtitle}</p>
                <div className="v2-case-tags">{abqCaseStudy.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
                <WebsiteLink />
              </div>
              <div className="v2-case-hero-image"><Image alt={text.imageAlt} fill priority sizes="(max-width: 800px) calc(100vw - 32px), 430px" src={abqCaseStudy.coverImage} /></div>
            </div>
          </div>
        </section>

        <section className="v2-section v2-shell v2-case-overview">
          <div><p className="v2-kicker">ABQ AL HAYAT</p><h2>{text.overviewTitle}</h2></div>
          <div><p>{text.overview}</p><WebsiteLink /></div>
        </section>

        <section className="v2-section v2-case-challenge">
          <div className="v2-shell"><p className="v2-kicker v2-kicker-light">{text.challengeTitle}</p><h2>{text.challenge}</h2></div>
        </section>

        <section className="v2-section v2-shell">
          <div className="v2-section-heading"><h2>{text.workstreamsTitle}</h2></div>
          <div className="v2-workstreams">
            {text.workstreams.map((workstream) => (
              <article key={workstream.title}>
                <h3>{workstream.title}</h3>
                <div className="v2-workstream-copy">
                  <div><strong>{text.challengeLabel}</strong><p>{workstream.challenge}</p></div>
                  <div><strong>{text.strategyLabel}</strong><p>{workstream.strategy}</p></div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="v2-section v2-impact-section">
          <div className="v2-shell">
            <div className="v2-section-heading"><div><p className="v2-kicker v2-kicker-light">ABQ AL HAYAT</p><h2>{text.impactTitle}</h2><p>{text.impactIntro}</p></div></div>
            <div className="v2-impact-grid">
              {text.results.map((result) => <article key={result.label}><strong>{result.metric}</strong><h3>{result.label}</h3><p>{result.copy}</p></article>)}
            </div>
          </div>
        </section>

        <section className="v2-section v2-shell">
          <div className="v2-section-heading"><h2>{text.channelsTitle}</h2></div>
          <div className="v2-channel-grid">
            {text.channels.map((channel) => <article key={channel.title}><strong>{channel.metric}</strong><h3>{channel.title}</h3><p>{channel.copy}</p></article>)}
          </div>
        </section>

        <section className="v2-section v2-tint">
          <div className="v2-shell">
            <div className="v2-section-heading"><h2>{text.assetsTitle}</h2></div>
            <div className="v2-asset-grid">
              {text.assets.map((asset) => <article key={asset.title}><h3>{asset.title}</h3><p>{asset.copy}</p></article>)}
            </div>
          </div>
        </section>

        <section className="v2-section v2-shell v2-takeaway">
          <p className="v2-kicker">{text.takeawayTitle}</p>
          <blockquote>{text.takeaway}</blockquote>
        </section>

        <MediaGallery media={abqCaseStudy.media} />

        <section className="v2-final-cta v2-shell v2-case-final">
          <p className="v2-kicker v2-kicker-light">Habiba Dapour</p>
          <h2>{text.consultationTitle}</h2><p>{text.consultationCopy}</p>
          <div className="v2-actions">
            <Link className="v2-button v2-button-pink" href="/contact">{copy[language].book}<Arrow /></Link>
            <WebsiteLink />
          </div>
        </section>
      </main>
    </SiteFrame>
  );
}
