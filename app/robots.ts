import type { MetadataRoute } from "next";
import { siteUrlString } from "./content/siteConfig";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${siteUrlString}sitemap.xml`,
  };
}
