import assert from "node:assert/strict";
import { existsSync, readdirSync, readFileSync } from "node:fs";
import { extname, join } from "node:path";
import test from "node:test";
import { fileURLToPath } from "node:url";

const appRoot = fileURLToPath(new URL("../app/", import.meta.url));

function sourceFiles(directory) {
  return readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const path = join(directory, entry.name);
    if (entry.isDirectory()) return sourceFiles(path);
    return [".ts", ".tsx", ".css"].includes(extname(entry.name)) ? [path] : [];
  });
}

const source = sourceFiles(appRoot).map((file) => readFileSync(file, "utf8")).join("\n");
const siteContent = readFileSync(new URL("../app/content/siteContent.ts", import.meta.url), "utf8");
const caseContent = readFileSync(new URL("../app/content/caseStudyContent.ts", import.meta.url), "utf8");
const components = sourceFiles(fileURLToPath(new URL("../app/components/", import.meta.url))).map((file) => readFileSync(file, "utf8")).join("\n");

test("all required public routes exist", () => {
  for (const route of ["services", "who-we-help", "case-studies", "case-studies/abq-al-hayat", "case-studies/kham-al-jamal", "case-studies/lina", "about", "contact", "social-media-audit"]) {
    assert.equal(existsSync(new URL(`../app/${route}/page.tsx`, import.meta.url)), true, route);
  }
});

test("service architecture contains the four approved pillars in both languages", () => {
  const serviceBlock = siteContent.slice(siteContent.indexOf("export const services"), siteContent.indexOf("export const audiences"));
  for (const id of ["strategy", "content", "management", "performance"]) {
    assert.equal((serviceBlock.match(new RegExp(`id: "${id}"`, "g")) || []).length, 2, id);
  }
  assert.match(siteContent, /Social Media Strategy/);
  assert.match(siteContent, /Content Strategy & Creation/);
  assert.match(siteContent, /استراتيجية وصناعة المحتوى/);
  assert.doesNotMatch(siteContent, /Tally ERP/);
});

test("who-I-help content covers seven client situations in each language", () => {
  assert.match(siteContent, /Businesses Entering the Saudi Market/);
  assert.match(siteContent, /Brands Seeking Stronger Organic Growth/);
  assert.match(siteContent, /بيزنس داخل أو بيتوسع في السوق السعودي/);
  assert.match(siteContent, /براند بيدور على نمو عضوي أقوى/);
  assert.match(components, /audiences\[language\]\.slice\(0, 4\)/);
});

test("public case-study set contains only the three approved projects", () => {
  const slugs = [...siteContent.matchAll(/slug: "([^"]+)"/g)].map((match) => match[1]);
  assert.deepEqual(slugs, ["abq-al-hayat", "kham-al-jamal", "lina"]);
  assert.doesNotMatch(caseContent, /Al-Waha|Heaven Caf/i);
});

test("case studies combine approved narrative with secure media", () => {
  for (const component of ["AbqCaseStudyPage.tsx", "KhamCaseStudyPage.tsx", "LinaCaseStudyPage.tsx"]) {
    const value = readFileSync(new URL(`../app/components/${component}`, import.meta.url), "utf8");
    assert.match(value, /rel="noopener noreferrer"/);
    assert.match(value, /target="_blank"/);
    assert.match(value, /v2-case-visual/);
    assert.match(value, /next\/image/);
    assert.match(value, /<Image/);
  }
  assert.match(caseContent, /Project Overview/);
  assert.match(caseContent, /Market & Industry/);
  assert.match(caseContent, /Audience Segments/);
  assert.match(caseContent, /Strategy in Progress/);
});

test("ABQ keeps approved evidence and script links without restoring deleted claims", () => {
  assert.match(caseContent, /65 clients under completed contracts/);
  assert.match(caseContent, /dXSrWXwzc3M/);
  assert.match(caseContent, /4Dh3DvfOGNU/);
  assert.doesNotMatch(caseContent, /10\s*(?:to|→|–|-)\s*50|1[,.]?699/i);
});

test("Kham content avoids deceptive identity and diagnostic claims", () => {
  assert.match(caseContent, /natural, audience-led UGC content/);
  assert.match(caseContent, /without presenting a fictional specialist identity/);
  assert.doesNotMatch(caseContent, /personal diagnosis|diagnoses|fake beauty blogger/i);
  assert.match(caseContent, /product-related questions/);
});

test("Lina stays consistently named and positioned as an evolving project", () => {
  assert.match(caseContent, /Lina: Story-Led Communication/);
  assert.match(caseContent, /لينا: تواصل قصصي/);
  assert.match(caseContent, /This is an evolving strategy, not a completed success story/);
  assert.doesNotMatch(caseContent, /\b(?:Leen|Lena)\b/);
});

test("case-study visual evidence and video previews are restored", () => {
  assert.ok((components.match(/<Image\b/g) || []).length >= 4);
  assert.equal((components.match(/src={profileImageUrl}/g) || []).length, 1);
  assert.match(components, /<Image[^>]*priority[^>]*src={profileImageUrl}/);
  assert.match(components, /youtube-nocookie\.com/);
  assert.match(components, /referrerPolicy="strict-origin-when-cross-origin"/);
  assert.match(components, /<video controls/);
  assert.match(siteContent, /lina-video-1\.mp4/);
  assert.match(siteContent, /contracts-september-2026\.png/);
});

test("customer-facing copy avoids collective voice", () => {
  const content = `${siteContent}\n${caseContent}`;
  const visibleStrings = [...content.matchAll(/"([^"\n]*)"/g)].map((match) => match[1]).filter((value) => !value.startsWith("/") && !value.startsWith("http")).join("\n");
  assert.doesNotMatch(visibleStrings, /\b(?:we|our team)\b/i);
  assert.doesNotMatch(visibleStrings, /نحن|بنساعد|فريقنا|إحنا|عندنا|طريقتنا|خدماتنا|شغلنا|أعمالنا|شاركنا|هنراجع|نتواصل معاك/);
});

test("major bilingual pages expose matching content structures", () => {
  for (const key of ["experienceTitle", "marketTitle", "storyTitle", "fitTitle", "deliverTitle", "processTitle", "nextTitle", "nextStep"]) {
    assert.ok((siteContent.match(new RegExp(`${key}:`, "g")) || []).length >= 2, key);
  }
});

test("SEO, analytics, forms, and language state remain wired", () => {
  assert.match(source, /@vercel\/analytics\/next/);
  assert.match(source, /habiba-language/);
  assert.match(source, /document\.documentElement\.dir/);
  assert.match(source, /generateMetadata/);
  assert.match(source, /alternates: \{ canonical/);
  assert.match(components, /onSubmit={submit}/);
  assert.match(components, /window\.print\(\)/);
});
