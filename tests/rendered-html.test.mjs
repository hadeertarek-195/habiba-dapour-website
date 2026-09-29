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
  for (const route of ["services", "who-we-help", "case-studies", "case-studies/abq-al-hayat", "case-studies/kham-al-jamal", "case-studies/lina", "about", "contact", "social-media-audit"]) {
    assert.equal(existsSync(new URL(`../app/${route}/page.tsx`, import.meta.url)), true, route);
  }
});

test("Lina case study includes bilingual content, media, store link, and structured metadata", () => {
  const content = readFileSync(new URL("../app/content/siteContent.ts", import.meta.url), "utf8");
  const component = readFileSync(new URL("../app/components/LinaCaseStudyPage.tsx", import.meta.url), "utf8");
  const page = readFileSync(new URL("../app/case-studies/lina/page.tsx", import.meta.url), "utf8");
  assert.match(content, /https:\/\/linnaaa\.com\//);
  assert.match(content, /لينا: بناء براند أزياء سعودي/);
  assert.match(content, /national-day\/asalatuna\.webp/);
  assert.match(content, /national-day\/ambition\.webp/);
  assert.match(content, /اليوم الوطني السعودي: كل عباية تعبر عن قيمة وطنية/);
  assert.match(content, /lina-video-3\.mp4/);
  assert.match(content, /الصفحة الأولى من نتائج بحث Google/);
  assert.match(component, /playsInline/);
  assert.match(component, /rel="noopener noreferrer"/);
  assert.match(page, /CreativeWork/);
  assert.match(page, /BreadcrumbList/);
});

test("Kham Al Jamal case study is published with bilingual strategy content and metadata", () => {
  const content = readFileSync(new URL("../app/content/siteContent.ts", import.meta.url), "utf8");
  const component = readFileSync(new URL("../app/components/KhamCaseStudyPage.tsx", import.meta.url), "utf8");
  const page = readFileSync(new URL("../app/case-studies/kham-al-jamal/page.tsx", import.meta.url), "utf8");
  assert.match(content, /https:\/\/kham-aljamal\.com\//);
  assert.match(content, /خام الجمال: نمو عضوي تقوده شخصية UGC موثوقة/);
  assert.match(content, /saudi-national-day-1\.jpeg/);
  assert.match(content, /saudi-national-day-2\.jpeg/);
  assert.match(content, /حملة اليوم الوطني السعودي/);
  assert.match(content, /slug: "kham-al-jamal"[\s\S]*?published: true/);
  assert.match(component, /rel="noopener noreferrer"/);
  assert.match(page, /CreativeWork/);
  assert.match(page, /BreadcrumbList/);
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
  for (const image of ["covers/abq-al-hayat.webp", "covers/kham-al-jamal.webp", "covers/lina.webp"]) {
    assert.match(content, new RegExp(image.replace(".", "\\.")));
  }
});

test("ABQ AL HAYAT case study has secure external linking and structured metadata", () => {
  assert.match(source, /https:\/\/abqalhayat\.com\//);
  assert.match(source, /target="_blank"/);
  assert.match(source, /rel="noopener noreferrer"/);
  assert.match(source, /CreativeWork/);
  assert.match(source, /BreadcrumbList/);
  assert.equal(existsSync(new URL("../public/case-studies/abq-al-hayat/contracts-september-2026.png", import.meta.url)), true);
  assert.match(source, /contracts-september-2026\.png/);
  assert.match(source, /v2-contracts-proof/);
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

test("ABQ AL HAYAT includes the Saudi National Day campaign gallery", () => {
  const component = readFileSync(new URL("../app/components/AbqCaseStudyPage.tsx", import.meta.url), "utf8");
  const content = readFileSync(new URL("../app/content/siteContent.ts", import.meta.url), "utf8");
  const campaignDirectory = fileURLToPath(new URL("../public/case-studies/abq-al-hayat/national-day/", import.meta.url));
  assert.equal(readdirSync(campaignDirectory).filter((file) => file.endsWith(".jpeg")).length, 6);
  assert.match(content, /nationalDayCampaign/);
  assert.match(content, /اليوم الوطني السعودي: 96 عامًا من النمو والبناء والانتماء/);
  assert.match(component, /v2-abq-campaign-grid/);
});

test("Habiba's portrait is rendered once and prioritized in the home hero", () => {
  const components = sourceFiles(fileURLToPath(new URL("../app/components/", import.meta.url)))
    .map((file) => readFileSync(file, "utf8"))
    .join("\n");
  assert.equal((components.match(/src={profileImageUrl}/g) || []).length, 1);
  assert.match(components, /<Image[^>]*priority[^>]*src={profileImageUrl}/);
  assert.match(components, /<iframe\b/);
  assert.match(components, /<video\b/);
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

test("cards use ordered numbering instead of decorative glyphs", () => {
  const pageComponents = readFileSync(new URL("../app/components/SitePages.tsx", import.meta.url), "utf8");
  const styles = readFileSync(new URL("../app/site-v2.css", import.meta.url), "utf8");
  assert.match(pageComponents, /function NumberBadge/);
  assert.match(pageComponents, /padStart\(2, "0"\)/);
  assert.doesNotMatch(pageComponents, /[✦◇○＋]/);
  assert.match(styles, /\.v2-services-preview,\.v2-service-list\{grid-template-columns:repeat\(2/);
  assert.match(styles, /\.v2-case-grid\.compact\{grid-template-columns:repeat\(3/);
  assert.match(styles, /featured project is highlighted by color, not size/);
});

test("analytics and bilingual language state remain wired", () => {
  assert.match(source, /@vercel\/analytics\/next/);
  assert.match(source, /habiba-language/);
  assert.match(source, /document\.documentElement\.dir/);
});
