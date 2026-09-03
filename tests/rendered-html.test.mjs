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
  for (const route of ["services", "who-we-help", "case-studies", "about", "contact", "social-media-audit"]) {
    assert.equal(existsSync(new URL(`../app/${route}/page.tsx`, import.meta.url)), true, route);
  }
});

test("legacy claims and unsupported figures are absent", () => {
  assert.doesNotMatch(source, /10\s*(?:to|→|–|-)\s*50|5\s*[x×]|1[,.]?699|250\+|SAR\s*(?:7|1\.99)|6\.5K|6500|60K/i);
});

test("case-study set contains only the approved projects", () => {
  const content = readFileSync(new URL("../app/content/siteContent.ts", import.meta.url), "utf8");
  const slugs = [...content.matchAll(/slug: "([^"]+)"/g)].map((match) => match[1]);
  assert.deepEqual(slugs, ["abq-al-hayah", "kham-al-jamal", "lina"]);
  assert.match(content, /slug: "abq-al-hayah"[\s\S]*?featured: true/);
  for (const image of ["Untitled-1-01.webp", "Untitled-1-02.webp", "Untitled-1-03.webp"]) {
    assert.match(content, new RegExp(image.replace(".", "\\.")));
  }
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
