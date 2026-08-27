"use client";

import type { CSSProperties, FormEvent } from "react";
import { useMemo, useState } from "react";

import { useLanguage } from "../components/LanguageProvider";
import { auditAreas, siteCopy } from "../content/siteCopy";

type FormData = {
  name: string;
  brand: string;
  email: string;
  phone: string;
  industry: string;
  country: string;
  platforms: string;
  handles: string;
  goal: string;
  challenge: string;
  competitors: string;
  notes: string;
};

const initial: FormData = {
  name: "",
  brand: "",
  email: "",
  phone: "",
  industry: "",
  country: "",
  platforms: "Instagram",
  handles: "",
  goal: "",
  challenge: "",
  competitors: "",
  notes: "",
};

const defaultSelected = ["strategy", "reach", "plan"];

export default function AuditForm() {
  const { language } = useLanguage();
  const copy = siteCopy[language].audit;
  const [data, setData] = useState(initial);
  const [selected, setSelected] = useState<string[]>(defaultSelected);
  const [complete, setComplete] = useState(false);

  const completion = useMemo(() => {
    const required = [
      data.name,
      data.brand,
      data.email,
      data.handles,
      data.goal,
      data.challenge,
    ];

    return Math.round((required.filter(Boolean).length / required.length) * 100);
  }, [data]);

  function update(field: keyof FormData, value: string) {
    setData((current) => ({ ...current, [field]: value }));
  }

  function toggle(item: string) {
    setSelected((current) =>
      current.includes(item)
        ? current.filter((entry) => entry !== item)
        : [...current, item],
    );
  }

  function submit(event: FormEvent) {
    event.preventDefault();
    setComplete(true);
    window.setTimeout(() => {
      document
        .getElementById("audit-summary")
        ?.scrollIntoView({ behavior: "smooth" });
    }, 50);
  }

  const selectedLabels = selected
    .map((item) => auditAreas.find((area) => area.id === item))
    .filter(Boolean)
    .map((area) => (language === "ar" ? area!.ar : area!.en));

  function sendEmail() {
    const subject = encodeURIComponent(
      `${copy.summary.title} - ${data.brand || "Habiba Dapour"}`,
    );
    const body = encodeURIComponent(
      `${copy.summary.title}\n\n${copy.summary.preparedFor}: ${data.name}\n${copy.labels.brand.replace(" *", "")}: ${data.brand}\n${copy.labels.email.replace(" *", "")}: ${data.email}\n${copy.labels.phone}: ${data.phone}\n${copy.labels.industry}: ${data.industry}\n${copy.labels.country}: ${data.country}\n${copy.labels.platform}: ${data.platforms}\n${copy.summary.accountLinks}: ${data.handles}\n${copy.summary.mainGoal}: ${data.goal}\n${copy.summary.currentChallenge}: ${data.challenge}\n${copy.summary.competitors}: ${data.competitors}\n${copy.summary.requestedAnalysis}: ${selectedLabels.join(", ")}\n${copy.summary.notes}: ${data.notes}`,
    );

    window.open(
      `mailto:habiba.dapour@gmail.com?subject=${subject}&body=${body}`,
      "_self",
    );
  }

  if (complete) {
    return (
      <section className="shell audit-summary" id="audit-summary">
        <div className="summary-head">
          <span>HD</span>
          <div>
            <p>{copy.summary.title}</p>
            <h2>{data.brand}</h2>
          </div>
        </div>

        <div className="summary-grid">
          <div>
            <small>{copy.summary.preparedFor}</small>
            <strong>{data.name}</strong>
            <p>
              {data.email}
              <br />
              {data.phone}
            </p>
          </div>
          <div>
            <small>{copy.summary.brandContext}</small>
            <strong>{data.industry || copy.summary.notSpecified}</strong>
            <p>
              {data.country || copy.summary.locationNotSpecified}
              <br />
              {data.platforms}
            </p>
          </div>
        </div>

        <div className="summary-section">
          <small>{copy.summary.accountLinks}</small>
          <p>{data.handles}</p>
        </div>

        <div className="summary-section">
          <small>{copy.summary.mainGoal}</small>
          <p>{data.goal}</p>
        </div>

        <div className="summary-section">
          <small>{copy.summary.currentChallenge}</small>
          <p>{data.challenge}</p>
        </div>

        {data.competitors ? (
          <div className="summary-section">
            <small>{copy.summary.competitors}</small>
            <p>{data.competitors}</p>
          </div>
        ) : null}

        <div className="summary-section">
          <small>{copy.summary.requestedAnalysis}</small>
          <div className="summary-tags">
            {selectedLabels.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </div>

        {data.notes ? (
          <div className="summary-section">
            <small>{copy.summary.notes}</small>
            <p>{data.notes}</p>
          </div>
        ) : null}

        <div className="summary-note">
          <strong>{copy.summary.nextTitle}</strong>
          <p>{copy.summary.nextCopy}</p>
        </div>

        <div className="summary-actions no-print">
          <button className="button primary" onClick={sendEmail} type="button">
            {copy.summary.sendEmail} ↗
          </button>
          <button
            className="button ghost"
            onClick={() => window.print()}
            type="button"
          >
            {copy.summary.print}
          </button>
          <button
            className="text-button"
            onClick={() => setComplete(false)}
            type="button"
          >
            {copy.summary.edit}
          </button>
        </div>
      </section>
    );
  }

  return (
    <section className="shell audit-layout">
      <aside className="audit-aside">
        <div
          className="progress-ring"
          style={{ "--progress": `${completion * 3.6}deg` } as CSSProperties}
        >
          <span>{completion}%</span>
        </div>
        <h2>{copy.asideTitle}</h2>
        <p>{copy.asideCopy}</p>
        <div className="aside-note">
          <strong>{copy.asideNoteTitle}</strong>
          <p>{copy.asideNoteCopy}</p>
        </div>
      </aside>

      <form className="audit-form" onSubmit={submit}>
        <fieldset>
          <legend>
            <span>01</span> {copy.sections.aboutYou}
          </legend>
          <div className="form-grid">
            <label>
              {copy.labels.name}
              <input
                onChange={(event) => update("name", event.target.value)}
                placeholder={copy.placeholders.name}
                required
                value={data.name}
              />
            </label>
            <label>
              {copy.labels.brand}
              <input
                onChange={(event) => update("brand", event.target.value)}
                placeholder={copy.placeholders.brand}
                required
                value={data.brand}
              />
            </label>
            <label>
              {copy.labels.email}
              <input
                onChange={(event) => update("email", event.target.value)}
                placeholder={copy.placeholders.email}
                required
                type="email"
                value={data.email}
              />
            </label>
            <label>
              {copy.labels.phone}
              <input
                onChange={(event) => update("phone", event.target.value)}
                placeholder={copy.placeholders.phone}
                value={data.phone}
              />
            </label>
            <label>
              {copy.labels.industry}
              <input
                onChange={(event) => update("industry", event.target.value)}
                placeholder={copy.placeholders.industry}
                value={data.industry}
              />
            </label>
            <label>
              {copy.labels.country}
              <input
                onChange={(event) => update("country", event.target.value)}
                placeholder={copy.placeholders.country}
                value={data.country}
              />
            </label>
          </div>
        </fieldset>

        <fieldset>
          <legend>
            <span>02</span> {copy.sections.aboutAccounts}
          </legend>
          <div className="form-grid">
            <label>
              {copy.labels.platform}
              <select
                onChange={(event) => update("platforms", event.target.value)}
                value={data.platforms}
              >
                {copy.platforms.map((platform) => (
                  <option key={platform}>{platform}</option>
                ))}
              </select>
            </label>
            <label className="full">
              {copy.labels.handles}
              <textarea
                onChange={(event) => update("handles", event.target.value)}
                placeholder={copy.placeholders.handles}
                required
                rows={3}
                value={data.handles}
              />
            </label>
            <label className="full">
              {copy.labels.goal}
              <textarea
                onChange={(event) => update("goal", event.target.value)}
                placeholder={copy.placeholders.goal}
                required
                rows={3}
                value={data.goal}
              />
            </label>
            <label className="full">
              {copy.labels.challenge}
              <textarea
                onChange={(event) => update("challenge", event.target.value)}
                placeholder={copy.placeholders.challenge}
                required
                rows={3}
                value={data.challenge}
              />
            </label>
            <label className="full">
              {copy.labels.competitors}
              <textarea
                onChange={(event) => update("competitors", event.target.value)}
                placeholder={copy.placeholders.competitors}
                rows={2}
                value={data.competitors}
              />
            </label>
          </div>
        </fieldset>

        <fieldset>
          <legend>
            <span>03</span> {copy.sections.analyze}
          </legend>
          <p className="field-help">{copy.fieldHelp}</p>
          <div className="check-grid">
            {auditAreas.map((item) => {
              const label = language === "ar" ? item.ar : item.en;

              return (
                <label
                  className={selected.includes(item.id) ? "checked" : ""}
                  key={item.id}
                >
                  <input
                    checked={selected.includes(item.id)}
                    onChange={() => toggle(item.id)}
                    type="checkbox"
                  />
                  <span>{label}</span>
                  <i>✓</i>
                </label>
              );
            })}
          </div>
          <label className="block-label">
            {copy.labels.notes}
            <textarea
              onChange={(event) => update("notes", event.target.value)}
              placeholder={copy.placeholders.notes}
              rows={4}
              value={data.notes}
            />
          </label>
        </fieldset>

        <label className="consent">
          <input required type="checkbox" />
          <span>{copy.labels.consent}</span>
        </label>

        <button className="button primary submit-button" type="submit">
          {copy.reviewButton} <span>→</span>
        </button>
      </form>
    </section>
  );
}
