"use client";

import Image from "next/image";
import Link from "next/link";

import {
  featuredCaseAssets,
  featuredCaseStudy,
} from "../content/featuredCaseStudy";
import { siteCopy } from "../content/siteCopy";
import { useLanguage } from "./LanguageProvider";
import { Footer, Header } from "./SiteChrome";

export default function PortfolioPageContent() {
  const { language } = useLanguage();
  const copy = siteCopy[language].portfolio;
  const feature = featuredCaseStudy[language].portfolio;
  const tableHeaders =
    language === "ar"
      ? ["المقياس", feature.beforeLabel, feature.afterLabel, "النمو"]
      : ["Metric", feature.beforeLabel, feature.afterLabel, "Growth"];

  return (
    <>
      <Header active="portfolio" />
      <main>
        <section className="page-hero shell">
          <p className="eyebrow">
            <span /> {copy.eyebrow}
          </p>
          <h1>
            {copy.titleTop}
            <br />
            <em>{copy.titleBottom}</em>
          </h1>
          <p>{feature.heroTitle}</p>
        </section>

        <section className="shell featured-case" id={feature.caseId}>
          <div className="featured-case-hero">
            <div className="featured-copy">
              <span className="featured-tag">{feature.caseTag}</span>
              <h2>{feature.caseTitle}</h2>
              <p>{feature.caseIntro}</p>
              <div className="badge-row">
                {feature.badges.map((badge) => (
                  <span className="badge-pill" key={badge}>
                    {badge}
                  </span>
                ))}
              </div>
            </div>
            <div className="impact-panel">
              <span className="mini-label">{feature.impactTitle}</span>
              <strong className="impact-main">{feature.impactValue}</strong>
              <p>{feature.impactCopy}</p>
            </div>
          </div>

          <div className="featured-case-grid">
            <section className="case-block">
              <h3>{feature.startingPointTitle}</h3>
              <ul className="bullet-list">
                {feature.startingPoints.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </section>
            <section className="case-block">
              <h3>{feature.changesTitle}</h3>
              <ul className="bullet-list">
                {feature.changes.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </section>
          </div>

          <section className="script-showcase">
            <div className="script-copy">
              <h3>{feature.scriptTitle}</h3>
              <p>{feature.scriptCopy}</p>
              <div className="script-card" dir="rtl" lang="ar">
                <p>{feature.scriptExcerpt}</p>
              </div>
            </div>
            <div className="script-breakdown">
              {feature.scriptBreakdown.map((item) => (
                <article className="breakdown-card" key={item.title}>
                  <strong>{item.title}</strong>
                  <p>{item.copy}</p>
                </article>
              ))}
            </div>
          </section>

          <section className="comparison-section">
            <div className="comparison-head">
              <h3>{feature.comparisonTitle}</h3>
              <p>{feature.comparisonCopy}</p>
            </div>

            <div className="media-comparison">
              <article className="media-card">
                <span>{feature.beforeLabel}</span>
                <div className="video-frame">
                  <Image
                    alt={feature.beforeAlt}
                    height={1536}
                    loading="lazy"
                    src={featuredCaseAssets.earlierContent}
                    width={864}
                  />
                </div>
              </article>
              <article className="media-card">
                <span>{feature.afterLabel}</span>
                <div className="video-frame">
                  <Image
                    alt={feature.afterAlt}
                    height={1536}
                    loading="lazy"
                    src={featuredCaseAssets.highPerformingContent}
                    width={864}
                  />
                </div>
              </article>
            </div>

            <div className="metrics-block">
              <h3>{feature.metricsTitle}</h3>
              <div className="comparison-table" role="table" aria-label={feature.metricsTitle}>
                <div className="comparison-row comparison-head-row" role="row">
                  {tableHeaders.map((label) => (
                    <span key={label} role="columnheader">
                      {label}
                    </span>
                  ))}
                </div>
                {feature.metrics.map(([metric, before, after, growth]) => (
                  <div className="comparison-row" key={metric} role="row">
                    <span role="cell">{metric}</span>
                    <span className="inline-ltr" role="cell">{before}</span>
                    <span className="inline-ltr" role="cell">{after}</span>
                    <span className="growth-pill" role="cell">{growth}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="case-impact">
            <h3>{feature.impactTitle}</h3>
            <strong className="impact-transform">{feature.impactValue}</strong>
            <p>{feature.impactCopy}</p>
            <p>{feature.impactNote}</p>
          </section>

          <section className="case-closing">
            <div>
              <h3>{feature.closingTitle}</h3>
              <p>{feature.closingCopy}</p>
            </div>
            <Link className="button primary" href="/#consultation">
              {feature.closingButton} <span>↗</span>
            </Link>
          </section>
        </section>

        <section className="shell cases">
          {copy.cases.map((item) => (
            <article className={`case-study ${item.color}`} key={item.index}>
              <div className="case-side">
                <span>{item.index}</span>
                <p>{item.tag}</p>
              </div>
              <div className="case-main">
                <h2>{item.title}</h2>
                <div className="case-metric">
                  <strong>{item.metric}</strong>
                  <span>{item.metricLabel}</span>
                </div>
                <div className="case-details">
                  <div>
                    <span>{copy.challenge}</span>
                    <p>{item.challenge}</p>
                  </div>
                  <div>
                    <span>{copy.move}</span>
                    <p>{item.move}</p>
                  </div>
                  <div>
                    <span>{copy.result}</span>
                    <p>{item.result}</p>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </section>

        <section className="section shell portfolio-cta">
          <div>
            <p className="eyebrow light">
              <span /> {copy.ctaEyebrow}
            </p>
            <h2>{copy.ctaTitle}</h2>
          </div>
          <Link className="button white" href="/social-media-audit">
            {copy.ctaButton} <span>↗</span>
          </Link>
        </section>
      </main>
      <Footer />
    </>
  );
}
