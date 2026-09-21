import type { MetadataRoute } from "next";
import { siteUrlString } from "./content/siteConfig";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "services", "who-we-help", "case-studies", "case-studies/abq-al-hayat", "case-studies/kham-al-jamal", "case-studies/lina", "about", "contact", "social-media-audit"];

  return routes.map((route, index) => ({
    url: `${siteUrlString}${route}`,
    changeFrequency: "monthly",
    priority: index === 0 ? 1 : 0.8,
  }));
}
