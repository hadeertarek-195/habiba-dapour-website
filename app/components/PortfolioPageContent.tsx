"use client";

import Link from "next/link";

import { siteCopy } from "../content/siteCopy";
import { useLanguage } from "./LanguageProvider";
import { Footer, Header } from "./SiteChrome";

export default function PortfolioPageContent() {
  const { language } = useLanguage();
  const copy = siteCopy[language].portfolio;

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
          <p>{copy.intro}</p>
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
