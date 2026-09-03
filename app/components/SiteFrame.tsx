"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

import { copy, navigation, profileImageUrl } from "../content/siteContent";
import { useLanguage } from "./LanguageProvider";

export function Header() {
  const pathname = usePathname();
  const { language, toggleLanguage } = useLanguage();
  const text = copy[language];

  return (
    <header className="v2-header">
      <div className="v2-shell v2-nav">
        <Link className="v2-brand" href="/" aria-label="Habiba Dapour home">
          <span className="v2-brand-image"><Image alt="" height={44} src={profileImageUrl} width={44} /></span>
          <span>Habiba Dapour<small>Social Media Account Manager</small></span>
        </Link>

        <nav className="v2-desktop-links" aria-label="Primary navigation">
          {navigation[language].map(([label, href]) => (
            <Link className={pathname === href ? "active" : ""} href={href} key={href}>{label}</Link>
          ))}
        </nav>

        <div className="v2-nav-actions">
          <button className="v2-language" type="button" onClick={toggleLanguage}>{text.languageLabel}</button>
          <Link className="v2-button v2-button-primary" href="/contact">{text.book}<span aria-hidden="true">↗</span></Link>
        </div>

        <details className="v2-mobile-menu">
          <summary aria-label={text.menu}><span /><span /><span /></summary>
          <div>
            <button className="v2-language" type="button" onClick={toggleLanguage}>{text.languageLabel}</button>
            {navigation[language].map(([label, href]) => (
              <Link className={pathname === href ? "active" : ""} href={href} key={href}>{label}</Link>
            ))}
            <Link className="v2-button v2-button-primary" href="/contact">{text.book}</Link>
          </div>
        </details>
      </div>
    </header>
  );
}

export function Footer() {
  const { language } = useLanguage();
  const text = copy[language];

  return (
    <footer className="v2-footer">
      <div className="v2-shell v2-footer-grid">
        <div>
          <p className="v2-kicker v2-kicker-light">Habiba Dapour</p>
          <h2>{text.footer.heading}</h2>
          <p>{text.footer.copy}</p>
          <Link className="v2-button v2-button-pink" href="/contact">{text.book}<span aria-hidden="true">↗</span></Link>
        </div>
        <nav aria-label={text.footer.explore}>
          <strong>{text.footer.explore}</strong>
          {navigation[language].slice(1).map(([label, href]) => <Link href={href} key={href}>{label}</Link>)}
        </nav>
        <div className="v2-footer-contact">
          <strong>{text.footer.contact}</strong>
          <a href="mailto:habiba.dapour@gmail.com">habiba.dapour@gmail.com</a>
          <a href="tel:+201004658868">+20 100 465 8868</a>
          <span>{text.footer.location}</span>
        </div>
      </div>
      <div className="v2-shell v2-footer-bottom"><span>© 2026 Habiba Dapour</span></div>
    </footer>
  );
}

export function StickyConsultation() {
  const { language } = useLanguage();
  return <Link className="v2-mobile-sticky" href="/contact">{copy[language].book}<span aria-hidden="true">↗</span></Link>;
}

export function SiteFrame({ children }: { children: React.ReactNode }) {
  return <><Header />{children}<StickyConsultation /><Footer /></>;
}
