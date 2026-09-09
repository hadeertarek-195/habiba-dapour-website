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

test("all required public routes exist", () => {
  for (const route of ["services", "who-we-help", "case-studies", "case-studies/abq-al-hayat", "about", "contact", "social-media-audit"]) {
    assert.equal(existsSync(new URL(`../app/${route}/page.tsx`, import.meta.url)), true, route);
  }
});

test("legacy claims and unsupported figures are absent", () => {
  assert.doesNotMatch(source, /10\s*(?:to|→|–|-)\s*50|1[,.]?699|250\+|SAR\s*7\s*(?:to|→|–|-)|6\.5K|6500|60K|333%\s*(?:growth|نمو)/i);
  assert.match(source, /18 in December 2025 to 60 in July 2026/);
  assert.match(source, /3\.3×/);
  assert.match(source, /4–5×/);
});

test("case-study set contains only the approved projects", () => {
  const content = readFileSync(new URL("../app/content/siteContent.ts", import.meta.url), "utf8");
  const slugs = [...content.matchAll(/slug: "([^"]+)"/g)].map((match) => match[1]);
  assert.deepEqual(slugs, ["abq-al-hayat", "kham-al-jamal", "lina"]);
  assert.match(content, /slug: "abq-al-hayat"[\s\S]*?featured: true[\s\S]*?published: true/);
  for (const image of ["Untitled-1-01.webp", "Untitled-1-02.webp", "Untitled-1-03.webp"]) {
    assert.match(content, new RegExp(image.replace(".", "\\.")));
  }
});

test("ABQ AL HAYAT case study has secure external linking and structured metadata", () => {
  assert.match(source, /https:\/\/abqalhayat\.com\//);
  assert.match(source, /target="_blank"/);
  assert.match(source, /rel="noopener noreferrer"/);
  assert.match(source, /CreativeWork/);
  assert.match(source, /BreadcrumbList/);
});

test("ABQ AL HAYAT case study embeds the approved Shorts for direct preview", () => {
  const component = readFileSync(new URL("../app/components/AbqCaseStudyPage.tsx", import.meta.url), "utf8");
  const content = readFileSync(new URL("../app/content/siteContent.ts", import.meta.url), "utf8");
  assert.match(content, /dXSrWXwzc3M/);
  assert.match(content, /4Dh3DvfOGNU/);
  assert.match(component, /youtube-nocookie\.com\/embed/);
  assert.match(component, /allowFullScreen/);
  assert.match(component, /loading="lazy"/);
});

test("customer-facing copy uses first-person singular voice", () => {
  const content = readFileSync(new URL("../app/content/siteContent.ts", import.meta.url), "utf8");
  const visibleStrings = [...content.matchAll(/"([^"\n]*)"/g)]
    .map((match) => match[1])
    .filter((value) => !value.startsWith("/") && !value.startsWith("http"))
    .join("\n");
  assert.doesNotMatch(visibleStrings, /\b(?:we|our)\b/i);
  assert.doesNotMatch(visibleStrings, /بنساعد|هنساعد|بنبدأ|بنراجع|بنخطط|بندير|بنقيس|بنطور|نقدر نساعد|إحنا|عندنا|طريقتنا|خدماتنا|شغلنا|أعمالنا|شاركنا|هنراجع|نتواصل معاك/);
});

test("decorative section numbering is absent", () => {
  const pageComponents = ["SitePages.tsx", "AuditPageV2.tsx"]
    .map((file) => readFileSync(new URL(`../app/components/${file}`, import.meta.url), "utf8"))
    .join("\n");
  assert.doesNotMatch(pageComponents, /v2-number|v2-index|>0[1-5]</);
});

test("analytics and bilingual language state remain wired", () => {
  assert.match(source, /@vercel\/analytics\/next/);
  assert.match(source, /habiba-language/);
  assert.match(source, /document\.documentElement\.dir/);
});
