import { seoMap } from "../server/seoMap.ts";
import fs from "node:fs";
import path from "node:path";

const BASE_URL = "https://nextlevelwindowsnc.com";
const OUTPUT = path.resolve(import.meta.dirname, "../dist/public/sitemap.xml");

// Routes to exclude from sitemap
const EXCLUDE = new Set(["/404", "/privacy", "/terms"]);

const routes = Object.keys(seoMap).filter((r) => !EXCLUDE.has(r));

function canonicalPath(route: string): string {
  return route === "/" ? "/" : `${route.replace(/\/+$/, "")}/`;
}

function getPriority(route: string): string {
  if (route === "/") return "1.0";
  if (route === "/get-a-free-estimate") return "1.0";
  if (route.startsWith("/residential/") || route === "/commercial" || route === "/residential") return "0.9";
  if (route.startsWith("/service-areas/")) return "0.8";
  if (route === "/service-areas" || route === "/contact") return "0.8";
  return "0.7";
}

function getChangefreq(route: string): string {
  if (route === "/" || route === "/our-work") return "weekly";
  return "monthly";
}

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes
  .map(
    (route) => `  <url>
    <loc>${BASE_URL}${canonicalPath(route)}</loc>
    <changefreq>${getChangefreq(route)}</changefreq>
    <priority>${getPriority(route)}</priority>
  </url>`
  )
  .join("\n")}
</urlset>
`;

fs.mkdirSync(path.dirname(OUTPUT), { recursive: true });
fs.writeFileSync(OUTPUT, xml);
console.log(`Sitemap generated: ${OUTPUT} (${routes.length} routes)`);
