"use client";

import Link from "next/link";
import Image from "next/image";

import { audiences, caseStudies, copy, processSteps, profileImageUrl, services } from "../content/siteContent";
import { useLanguage } from "./LanguageProvider";
import { SiteFrame } from "./SiteFrame";

function Arrow() {
  return <span className="v2-arrow" aria-hidden="true">↗</span>;
}

function PageHero({ eyebrow, title, intro }: { eyebrow: string; title: string; intro: string }) {
  return (
    <section className="v2-page-hero v2-shell">
      <p className="v2-kicker">{eyebrow}</p>
      <h1>{title}</h1>
      <p className="v2-lead">{intro}</p>
    </section>
  );
}

function Process() {
  const { language } = useLanguage();
  const text = copy[language].common;
  return (
    <section className="v2-section v2-process-section">
      <div className="v2-shell">
        <div className="v2-section-heading"><h2>{text.processTitle}</h2><p>{text.processIntro}</p></div>
        <div className="v2-process-grid">
          {processSteps[language].map(([number, title, details]) => (
            <article key={number}><span>{number}</span><h3>{title}</h3><p>{details}</p></article>
          ))}
        </div>
      </div>
    </section>
  );
}

function CaseGrid({ compact = false }: { compact?: boolean }) {
  const { language } = useLanguage();
  const text = copy[language];
  return (
    <div className={`v2-case-grid ${compact ? "compact" : ""}`}>
      {caseStudies.map((item) => (
        <article className={`v2-case-card ${item.featured ? "featured" : ""}`} key={item.slug}>
          <div className="v2-case-visual" aria-hidden="true"><span>{item.name[language].slice(0, 1)}</span></div>
          <div className="v2-case-copy">
            <div className="v2-case-meta"><span>{item.category[language]}</span>{item.featured ? <b>{text.common.featured}</b> : null}</div>
            <h3>{item.name[language]}</h3>
            <p>{text.common.caseSoon}</p>
          </div>
        </article>
      ))}
    </div>
  );
}

function Faq({ limit }: { limit?: number }) {
  const { language } = useLanguage();
  const text = copy[language].faq;
  return (
    <section className="v2-section v2-faq v2-shell">
      <div className="v2-section-heading"><h2>{text.title}</h2></div>
      <div className="v2-faq-list">
        {text.items.slice(0, limit).map(([question, answer]) => (
          <details key={question}><summary>{question}<span aria-hidden="true">+</span></summary><p>{answer}</p></details>
        ))}
      </div>
    </section>
  );
}

function FinalCta({ title, body }: { title: string; body: string }) {
  const { language } = useLanguage();
  return (
    <section className="v2-final-cta v2-shell">
      <p className="v2-kicker v2-kicker-light">Habiba Dapour</p>
      <h2>{title}</h2><p>{body}</p>
      <Link className="v2-button v2-button-pink" href="/contact">{copy[language].book}<Arrow /></Link>
    </section>
  );
}

export function HomePage() {
  const { language } = useLanguage();
  const text = copy[language];
  return (
    <SiteFrame>
      <main>
        <section className="v2-hero v2-shell">
          <div className="v2-hero-copy">
            <p className="v2-kicker">{text.home.eyebrow}</p>
            <h1>{text.home.title}</h1>
            <p className="v2-lead">{text.home.intro}</p>
            <div className="v2-actions">
              <Link className="v2-button v2-button-primary" href="/contact">{text.book}<Arrow /></Link>
              <Link className="v2-button v2-button-ghost" href="/case-studies">{text.home.work}<Arrow /></Link>
            </div>
          </div>
          <div className="v2-portrait-wrap">
            <span className="v2-portrait-label">Strategy · Content · Performance</span>
            <div className="v2-portrait"><Image alt={text.home.imageAlt} fill priority sizes="(max-width: 560px) 220px, (max-width: 800px) 280px, 340px" src={profileImageUrl} /></div>
            <span className="v2-portrait-note">Marsa Matrouh · Egypt</span>
          </div>
        </section>

        <section className="v2-section v2-problem">
          <div className="v2-shell v2-problem-grid">
            <div><p className="v2-kicker">01 · Business first</p><h2>{text.home.problemTitle}</h2></div>
            <div><ul>{text.home.problems.map((problem) => <li key={problem}>{problem}</li>)}</ul><p className="v2-callout">{text.home.problemClose}</p></div>
          </div>
        </section>

        <section className="v2-section v2-shell v2-about-preview">
          <div className="v2-number">02</div>
          <div><h2>{text.home.aboutTitle}</h2><p>{text.home.aboutCopy}</p><Link className="v2-text-link" href="/about">{text.home.aboutCta}<Arrow /></Link></div>
        </section>

        <section className="v2-section v2-tint">
          <div className="v2-shell">
            <div className="v2-section-heading"><h2>{text.home.servicesTitle}</h2><Link className="v2-text-link" href="/services">{text.common.learn}<Arrow /></Link></div>
            <div className="v2-card-grid v2-services-preview">
              {services[language].map((service, index) => (
                <Link className="v2-info-card" href={`/services#${service.id}`} key={service.id}><span>0{index + 1}</span><h3>{service.title}</h3><p>{service.preview}</p><Arrow /></Link>
              ))}
            </div>
          </div>
        </section>

        <section className="v2-section v2-shell">
          <div className="v2-section-heading"><h2>{text.home.helpTitle}</h2><Link className="v2-text-link" href="/who-we-help">{text.common.learn}<Arrow /></Link></div>
          <div className="v2-card-grid v2-audience-preview">
            {audiences[language].map((item) => <Link className="v2-audience-card" href="/who-we-help" key={item.title}><h3>{item.title}</h3><p>{item.copy}</p><Arrow /></Link>)}
          </div>
        </section>

        <section className="v2-section v2-case-section">
          <div className="v2-shell">
            <div className="v2-section-heading"><div><h2>{text.home.casesTitle}</h2><p>{text.home.casesIntro}</p></div></div>
            <CaseGrid compact />
            <Link className="v2-button v2-button-ghost v2-center-button" href="/case-studies">{text.home.casesCta}<Arrow /></Link>
          </div>
        </section>

        <Process />

        <section className="v2-section v2-shell">
          <div className="v2-section-heading"><h2>{text.home.pathwaysTitle}</h2></div>
          <div className="v2-path-grid">
            {text.home.pathways.map(([title, body, href]) => <Link href={href} key={href}><div><h3>{title}</h3><p>{body}</p></div><Arrow /></Link>)}
          </div>
        </section>

        <Faq limit={4} />
        <FinalCta title={text.home.finalTitle} body={text.home.finalCopy} />
      </main>
    </SiteFrame>
  );
}

export function ServicesPage() {
  const { language } = useLanguage();
  const text = copy[language];
  return (
    <SiteFrame><main>
      <PageHero eyebrow={text.services.eyebrow} title={text.services.title} intro={text.services.intro} />
      <section className="v2-section v2-shell v2-service-list">
        {services[language].map((service, index) => (
          <article id={service.id} key={service.id}>
            <div className="v2-service-head"><span>0{index + 1}</span><h2>{service.title}</h2><p>{service.preview}</p></div>
            <div className="v2-service-details">
              <div><strong>{text.services.labels[0]}</strong><p>{service.problem}</p></div>
              <div><strong>{text.services.labels[1]}</strong><p>{service.fit}</p></div>
              <div><strong>{text.services.labels[2]}</strong><ul>{service.covers.map((item) => <li key={item}>{item}</li>)}</ul></div>
              <div><strong>{text.services.labels[3]}</strong><p>{service.outcome}</p></div>
            </div>
            <Link className="v2-text-link" href={service.id === "audit" ? "/social-media-audit" : "/contact"}>{service.cta}<Arrow /></Link>
          </article>
        ))}
      </section>
      <FinalCta title={text.services.decisionTitle} body={text.services.decisionCopy} />
      <Faq />
    </main></SiteFrame>
  );
}

export function WhoWeHelpPage() {
  const { language } = useLanguage();
  const text = copy[language];
  return (
    <SiteFrame><main>
      <PageHero eyebrow={text.help.eyebrow} title={text.help.title} intro={text.help.intro} />
      <section className="v2-section v2-shell v2-audience-list">
        {audiences[language].map((item, index) => (
          <article key={item.title}>
            <span className="v2-index">0{index + 1}</span><h2>{item.title}</h2><p className="v2-audience-lead">{item.copy}</p>
            <div className="v2-audience-details"><div><strong>{text.help.labels[0]}</strong><p>{item.challenges}</p></div><div><strong>{text.help.labels[1]}</strong><p>{item.relevant}</p></div><div><strong>{text.help.labels[2]}</strong><p>{item.improve}</p></div></div>
            <Link className="v2-button v2-button-ghost" href="/contact">{text.book}<Arrow /></Link>
          </article>
        ))}
      </section>
    </main></SiteFrame>
  );
}

export function CaseStudiesPage() {
  const { language } = useLanguage();
  const text = copy[language];
  return <SiteFrame><main><PageHero eyebrow={text.cases.eyebrow} title={text.cases.title} intro={text.cases.intro} /><section className="v2-section v2-shell"><CaseGrid /></section><FinalCta title={text.home.finalTitle} body={text.home.finalCopy} /></main></SiteFrame>;
}

export function AboutPage() {
  const { language } = useLanguage();
  const text = copy[language];
  return (
    <SiteFrame><main>
      <section className="v2-page-hero v2-shell v2-about-hero">
        <div><p className="v2-kicker">{text.about.eyebrow}</p><h1>{text.about.title}</h1><p className="v2-lead">{text.about.body}</p></div>
        <div className="v2-about-image"><Image alt={text.about.imageAlt} fill sizes="(max-width: 800px) calc(100vw - 32px), 420px" src={profileImageUrl} /></div>
      </section>
      <section className="v2-section v2-tint"><div className="v2-shell"><div className="v2-section-heading"><h2>{text.about.valuesTitle}</h2></div><div className="v2-values-grid">{text.about.values.map(([title, body], index) => <article key={title}><span>0{index + 1}</span><h3>{title}</h3><p>{body}</p></article>)}</div></div></section>
      <Process />
      <FinalCta title={text.home.finalTitle} body={text.home.finalCopy} />
    </main></SiteFrame>
  );
}
