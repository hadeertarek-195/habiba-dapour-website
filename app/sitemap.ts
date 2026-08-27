import type { MetadataRoute } from "next";
import { siteUrlString } from "./content/siteConfig";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: siteUrlString, changeFrequency: "monthly", priority: 1 },
    { url: `${siteUrlString}portfolio`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${siteUrlString}social-media-audit`, changeFrequency: "yearly", priority: 0.7 },
  ];
}
