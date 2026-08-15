import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://habiba-dapour-portfolio.hadeer-tarek26.chatgpt.site";
  return [
    { url: base, changeFrequency: "monthly", priority: 1 },
    { url: `${base}/portfolio`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/social-media-audit`, changeFrequency: "yearly", priority: 0.7 },
  ];
}
