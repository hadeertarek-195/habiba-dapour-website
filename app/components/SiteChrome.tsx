"use client";

import Link from "next/link";

import { profileImageUrl, siteCopy } from "../content/siteCopy";
import { useLanguage } from "./LanguageProvider";

export function Header({
  active,
}: {
  active: "home" | "portfolio" | "social-media-audit";
}) {
  const { language, toggleLanguage } = useLanguage();
  const copy = siteCopy[language];
  const consultationHref = active === "home" ? "#consultation" : "/#consultation";

  return (
    <header className="site-header">
      <div className="shell nav-wrap">
        <Link className="brand" href="/" aria-label="Habiba Dapour home">
          <span className="brand-mark image-mark">
            <img alt="Habiba Dapour" src={profileImageUrl} />
          </span>
          <span>
            Habiba Dapour
            <small>Account Manager</small>
          </span>
        </Link>

        <nav className="desktop-nav" aria-label="Primary navigation">
          <Link className={active === "home" ? "active" : ""} href="/">
            {copy.nav.home}
          </Link>
          <Link className={active === "portfolio" ? "active" : ""} href="/portfolio">
            {copy.nav.portfolio}
          </Link>
          <Link
            className={active === "social-media-audit" ? "active" : ""}
            href="/social-media-audit"
          >
            {copy.nav.audit}
          </Link>
        </nav>

        <div className="header-actions">
          <button className="lang-toggle" onClick={toggleLanguage} type="button">
            {copy.languageLabel}
          </button>
          <a className="nav-cta" href={consultationHref}>
            {copy.nav.book} <span>↗</span>
          </a>
        </div>

        <details className="mobile-menu">
          <summary aria-label={copy.nav.menu}>{copy.nav.menu}</summary>
          <div>
            <button className="lang-toggle mobile" onClick={toggleLanguage} type="button">
              {copy.languageLabel}
            </button>
            <Link href="/">{copy.nav.home}</Link>
            <Link href="/portfolio">{copy.nav.portfolio}</Link>
            <Link href="/social-media-audit">{copy.nav.audit}</Link>
            <Link href={consultationHref}>{copy.nav.book}</Link>
          </div>
        </details>
      </div>
    </header>
  );
}

export function Footer() {
  const { language } = useLanguage();
  const copy = siteCopy[language].footer;

  return (
    <footer className="site-footer">
      <div className="shell footer-grid">
        <div>
          <span className="brand-mark image-mark large">
            <img alt="Habiba Dapour" src={profileImageUrl} />
          </span>
          <h2>{copy.heading}</h2>
        </div>
        <div className="footer-contact">
          <span>{copy.contact}</span>
          <a href="mailto:habiba.dapour@gmail.com">habiba.dapour@gmail.com</a>
          <a href="tel:+201065813654">+20 106 581 3654</a>
          <a href="tel:+201004658868">+20 100 465 8868</a>
        </div>
      </div>
      <div className="shell footer-bottom">
        <span>© 2026 Habiba Dapour</span>
        <span>{copy.location}</span>
      </div>
    </footer>
  );
}
