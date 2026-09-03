"use client";

import { FormEvent, useState } from "react";

import { copy, whatsappUrl } from "../content/siteContent";
import { useLanguage } from "./LanguageProvider";
import { SiteFrame } from "./SiteFrame";

const fieldNames = ["name", "business", "email", "phone", "country", "type", "url", "challenge", "service", "budget", "method", "details"] as const;

export default function ContactPageContent() {
  const { language } = useLanguage();
  const text = copy[language].contact;
  const [submitted, setSubmitted] = useState(false);

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const lines = fieldNames.map((name, index) => `${text.labels[index]}: ${data.get(name) || "—"}`);
    window.open(`${whatsappUrl}?text=${encodeURIComponent(lines.join("\n"))}`, "_blank", "noopener,noreferrer");
    setSubmitted(true);
  }

  return (
    <SiteFrame>
      <main>
        <section className="v2-page-hero v2-shell">
          <p className="v2-kicker">{text.eyebrow}</p><h1>{text.title}</h1><p className="v2-lead">{text.intro}</p>
        </section>
        <section className="v2-section v2-shell v2-form-wrap">
          {submitted ? (
            <div className="v2-success" role="status"><span aria-hidden="true">✓</span><h2>{text.success}</h2><p>{text.successNote}</p><button className="v2-button v2-button-ghost" onClick={() => setSubmitted(false)} type="button">{language === "ar" ? "عدل البيانات" : "Edit details"}</button></div>
          ) : (
            <form className="v2-form" onSubmit={submit}>
              <div className="v2-form-grid">
                <label>{text.labels[0]}<input autoComplete="name" name="name" required /></label>
                <label>{text.labels[1]}<input autoComplete="organization" name="business" required /></label>
                <label>{text.labels[2]}<input autoComplete="email" inputMode="email" name="email" required type="email" /></label>
                <label>{text.labels[3]}<input autoComplete="tel" inputMode="tel" name="phone" required type="tel" /></label>
                <label>{text.labels[4]}<input autoComplete="country-name" name="country" required /></label>
                <label>{text.labels[5]}<input name="type" required /></label>
                <label className="wide">{text.labels[6]}<input inputMode="url" name="url" required type="url" /></label>
                <label>{text.labels[7]}<select defaultValue="" name="challenge" required><option disabled value="">{text.select}</option>{text.challenges.map((item) => <option key={item}>{item}</option>)}</select></label>
                <label>{text.labels[8]}<select defaultValue="" name="service" required><option disabled value="">{text.select}</option>{text.serviceOptions.map((item) => <option key={item}>{item}</option>)}</select></label>
                <label>{text.labels[9]}<input inputMode="decimal" name="budget" /></label>
                <label>{text.labels[10]}<select defaultValue="" name="method" required><option disabled value="">{text.select}</option>{text.methods.map((item) => <option key={item}>{item}</option>)}</select></label>
                <label className="wide">{text.labels[11]}<textarea name="details" rows={5} /></label>
              </div>
              <button className="v2-button v2-button-primary" type="submit">{text.submit}<span aria-hidden="true">↗</span></button>
            </form>
          )}
        </section>
      </main>
    </SiteFrame>
  );
}
