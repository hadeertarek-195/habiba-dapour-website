"use client";

import Link from "next/link";

import { siteCopy, profileImageUrl } from "../content/siteCopy";
import { useLanguage } from "./LanguageProvider";
import { Footer, Header } from "./SiteChrome";

export default function HomePageContent() {
  const { isArabic, language } = useLanguage();
  const copy = siteCopy[language].home;
  const whatsappHref = `https://wa.me/201065813654?text=${encodeURIComponent(copy.whatsappMessage)}`;

  return (
    <>
      <Header active="home" />
      <main>
        <section className="hero shell">
          <div className="hero-copy reveal">
            <p className="eyebrow">
              <span /> {copy.eyebrow}
            </p>
            <h1>
              {copy.titleTop}
              <br />
              <em>{copy.titleBottom}</em>
            </h1>
            <p className="hero-intro">{copy.intro}</p>
            <div className="hero-actions">
              <a className="button primary" href="#consultation">
                {copy.primaryCta} <span aria-hidden="true">↗</span>
              </a>
              <Link className="button ghost" href="/portfolio">
                {copy.secondaryCta}
              </Link>
            </div>
          </div>
          <div className="hero-visual reveal delay-1" aria-label="Selected career highlights">
            <div className="orbit orbit-one" />
            <div className="orbit orbit-two" />
            <div className="hero-photo-frame">
              <img alt="Habiba Dapour portrait" src={profileImageUrl} />
            </div>
            <div className="metric-card metric-a">
              <strong>{copy.metrics[0][0]}</strong>
              <span>{copy.metrics[0][1]}</span>
            </div>
            <div className="metric-card metric-b">
              <strong>{copy.metrics[1][0]}</strong>
              <span>{copy.metrics[1][1]}</span>
            </div>
            <div className="metric-card metric-c">
              <strong>{copy.metrics[2][0]}</strong>
              <span>{copy.metrics[2][1]}</span>
            </div>
          </div>
        </section>

        <section className="marquee" aria-label="Areas of expertise">
          <div>
            {copy.marquee.concat(copy.marquee).map((item, index) => (
              <span key={`${item}-${index}`}>
                {item}
                <i>✦</i>
              </span>
            ))}
          </div>
        </section>

        <section className="section shell about-grid" id="about">
          <div>
            <p className="eyebrow">
              <span /> {copy.aboutEyebrow}
            </p>
            <h2>
              {copy.aboutTitleTop}
              <br />
              {copy.aboutTitleBottom}
            </h2>
          </div>
          <div className="about-copy">
            <p className="lead">{copy.aboutLead}</p>
            {copy.aboutBody.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </section>

        <section className="section soft-section" id="services">
          <div className="shell">
            <div className="section-heading">
              <div>
                <p className="eyebrow">
                  <span /> {copy.servicesEyebrow}
                </p>
                <h2>
                  {copy.servicesTitleTop}
                  <br />
                  {copy.servicesTitleBottom}
                </h2>
              </div>
              <p>{copy.servicesIntro}</p>
            </div>
            <div className="service-grid">
              {copy.services.map((service) => (
                <article className="service-card" key={service.number}>
                  <span>{service.number}</span>
                  <div className="service-icon" aria-hidden="true">
                    ↗
                  </div>
                  <h3>{service.title}</h3>
                  <p>{service.copy}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section shell proof-section">
          <div className="proof-card featured">
            <p className="eyebrow light">
              <span /> {copy.proofEyebrow}
            </p>
            <h2>
              {copy.proofTitleTop}
              <br />
              {copy.proofTitleBottom}
            </h2>
            <p>{copy.proofCopy}</p>
            <Link href="/portfolio">
              {copy.proofLink} <span aria-hidden="true">→</span>
            </Link>
          </div>
          <div className="proof-stack">
            <div className="proof-card compact pink">
              <strong>250+</strong>
              <span>{copy.proofCards[0]}</span>
            </div>
            <div className="proof-card compact lavender">
              <strong>{isArabic ? "وضوح." : "People first."}</strong>
              <span>{copy.proofCards[1]}</span>
            </div>
          </div>
        </section>

        <section className="section shell process-section">
          <div className="section-heading">
            <div>
              <p className="eyebrow">
                <span /> {copy.processEyebrow}
              </p>
              <h2>{copy.processTitle}</h2>
            </div>
          </div>
          <div className="steps">
            {copy.steps.map(([number, title, details]) => (
              <article key={number}>
                <span>{number}</span>
                <h3>{title}</h3>
                <p>{details}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section shell consultation" id="consultation">
          <div className="consultation-copy">
            <p className="eyebrow light">
              <span /> {copy.consultationEyebrow}
            </p>
            <h2>
              {copy.consultationTitleTop}
              <br />
              {copy.consultationTitleBottom}
            </h2>
            <p>{copy.consultationCopy}</p>
          </div>
          <div className="booking-card">
            <span className="mini-label">{copy.consultationLabel}</span>
            <ul>
              {copy.consultationList.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <a
              className="button primary wide"
              href={whatsappHref}
              rel="noreferrer"
              target="_blank"
            >
              {copy.consultationButton} <span aria-hidden="true">↗</span>
            </a>
            <a className="email-link" href="mailto:habiba.dapour@gmail.com?subject=Consultation%20request">
              {copy.consultationEmail}
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
