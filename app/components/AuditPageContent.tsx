"use client";

import { siteCopy } from "../content/siteCopy";
import { useLanguage } from "./LanguageProvider";
import { Footer, Header } from "./SiteChrome";
import AuditForm from "../social-media-audit/AuditForm";

export default function AuditPageContent() {
  const { language } = useLanguage();
  const copy = siteCopy[language].audit;

  return (
    <>
      <Header active="social-media-audit" />
      <main>
        <section className="page-hero audit-hero shell">
          <div>
            <p className="eyebrow">
              <span /> {copy.eyebrow}
            </p>
            <h1>
              {copy.titleTop}
              <br />
              <em>{copy.titleBottom}</em>
            </h1>
          </div>
          <p>{copy.intro}</p>
        </section>
        <AuditForm />
      </main>
      <Footer />
    </>
  );
}
