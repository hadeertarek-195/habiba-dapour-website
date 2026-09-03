"use client";

import { FormEvent, useState } from "react";

import { auditAreas, copy } from "../content/siteContent";
import { useLanguage } from "./LanguageProvider";
import { SiteFrame } from "./SiteFrame";

const defaults = ["profile", "direction", "performance", "priorities"];

export default function AuditPageV2() {
  const { language } = useLanguage();
  const text = copy[language].audit;
  const [selected, setSelected] = useState<string[]>(defaults);
  const [submitted, setSubmitted] = useState(false);
  const [summary, setSummary] = useState("");

  function toggle(id: string) {
    setSelected((items) => items.includes(id) ? items.filter((item) => item !== id) : [...items, id]);
  }

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const selectedLabels = selected.map((id) => auditAreas.find((area) => area.id === id)?.[language]).filter(Boolean);
    const lines = text.labels.map((label, index) => `${label}: ${data.get(`field-${index}`) || "—"}`);
    lines.push(`${text.areasTitle}: ${selectedLabels.join(", ")}`);
    setSummary(lines.join("\n"));
    setSubmitted(true);
    window.setTimeout(() => document.getElementById("audit-result")?.scrollIntoView({ behavior: "smooth" }), 30);
  }

  function sendEmail() {
    window.location.href = `mailto:habiba.dapour@gmail.com?subject=${encodeURIComponent(text.formTitle)}&body=${encodeURIComponent(summary)}`;
  }

  return (
    <SiteFrame>
      <main>
        <section className="v2-page-hero v2-shell">
          <p className="v2-kicker">{text.eyebrow}</p><h1>{text.title}</h1><p className="v2-lead">{text.intro}</p>
        </section>
        <section className="v2-section v2-tint">
          <div className="v2-shell"><div className="v2-section-heading"><h2>{text.areasTitle}</h2></div><div className="v2-audit-areas">{auditAreas.map((area) => <div key={area.id}><span>✓</span>{area[language]}</div>)}</div></div>
        </section>
        <section className="v2-section v2-shell v2-audit-form-section">
          <div className="v2-form-intro"><p className="v2-kicker">{text.eyebrow}</p><h2>{text.formTitle}</h2><p>{text.formIntro}</p></div>
          {submitted ? (
            <div className="v2-success" id="audit-result" role="status"><span aria-hidden="true">✓</span><h2>{text.success}</h2><pre>{summary}</pre><div className="v2-actions"><button className="v2-button v2-button-primary" onClick={sendEmail} type="button">{text.actions[0]}</button><button className="v2-button v2-button-ghost" onClick={() => window.print()} type="button">{text.actions[1]}</button><button className="v2-text-button" onClick={() => setSubmitted(false)} type="button">{text.actions[2]}</button></div></div>
          ) : (
            <form className="v2-form v2-audit-form" onSubmit={submit}>
              <fieldset><legend>{text.sections[0]}</legend><div className="v2-form-grid"><label>{text.labels[0]}<input autoComplete="name" name="field-0" required /></label><label>{text.labels[1]}<input autoComplete="organization" name="field-1" required /></label><label>{text.labels[2]}<input autoComplete="email" inputMode="email" name="field-2" required type="email" /></label><label>{text.labels[3]}<input autoComplete="tel" inputMode="tel" name="field-3" type="tel" /></label><label className="wide">{text.labels[4]}<input autoComplete="country-name" name="field-4" /></label></div></fieldset>
              <fieldset><legend>{text.sections[1]}</legend><div className="v2-form-grid"><label>{text.labels[5]}<select name="field-5">{text.platforms.map((item) => <option key={item}>{item}</option>)}</select></label><label>{text.labels[6]}<input inputMode="url" name="field-6" required type="url" /></label><label className="wide">{text.labels[7]}<textarea name="field-7" required rows={3} /></label><label className="wide">{text.labels[8]}<textarea name="field-8" required rows={3} /></label></div></fieldset>
              <fieldset><legend>{text.sections[2]}</legend><p>{text.help}</p><div className="v2-check-grid">{auditAreas.map((area) => <label className={selected.includes(area.id) ? "checked" : ""} key={area.id}><input checked={selected.includes(area.id)} onChange={() => toggle(area.id)} type="checkbox" /><span>{area[language]}</span></label>)}</div><label className="v2-block-label">{text.labels[9]}<textarea name="field-9" rows={4} /></label></fieldset>
              <label className="v2-consent"><input required type="checkbox" /><span>{text.consent}</span></label>
              <button className="v2-button v2-button-primary" type="submit">{text.submit}<span aria-hidden="true">↗</span></button>
            </form>
          )}
        </section>
      </main>
    </SiteFrame>
  );
}
