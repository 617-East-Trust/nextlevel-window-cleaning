import express from "express";
import { createServer } from "http";
import path from "path";
import { fileURLToPath } from "url";
import fs from "fs/promises";
import { seoMap } from "./seoMap.js";

function canonicalPath(pathname: string): string {
  return pathname === "/" ? "/" : `${pathname.replace(/\/+$/, "")}/`;
}

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const server = createServer(app);

  // Security Headers
  app.use((_req, res, next) => {
    res.setHeader("X-Frame-Options", "SAMEORIGIN");
    res.setHeader("X-Content-Type-Options", "nosniff");
    res.setHeader("Strict-Transport-Security", "max-age=31536000; includeSubDomains; preload");
    res.setHeader("Content-Security-Policy", "default-src 'self' 'unsafe-inline' 'unsafe-eval' https: data: blob:; img-src 'self' data: https:;");
    res.setHeader("Referrer-Policy", "strict-origin-when-cross-origin");
    next();
  });

  // Serve static files from dist/public in production
  const staticPath =
    process.env.NODE_ENV === "production"
      ? path.resolve(__dirname, "public")
      : path.resolve(__dirname, "..", "dist", "public");

  // Disable index so that our wildcard route handles the root / and injects SEO tags
  app.use(express.static(staticPath, { index: false }));

  // Handle client-side routing - serve index.html for all routes with SEO injected
  app.get("*", async (req, res) => {
    try {
      const indexFile = path.join(staticPath, "index.html");
      let html = await fs.readFile(indexFile, "utf-8");
      
      const seo = seoMap[req.path] || seoMap["/"];
      const titleStr = `<title>${seo.title}</title>`;
      const descStr = `<meta name="description" content="${seo.description}" />`;
      const canonStr = `<link rel="canonical" href="https://nextlevelwindowsnc.com${canonicalPath(req.path)}" />`;

      // Replace default title
      html = html.replace(/<title>.*?<\/title>/i, titleStr);
      // Replace default description
      html = html.replace(/<meta name="description" content=".*?"\s*\/>/i, descStr);
      // Replace or add the canonical tag. The static template intentionally has no default canonical.
      const canonicalPattern = /<link rel="canonical" href=".*?"\s*\/>/i;
      html = canonicalPattern.test(html)
        ? html.replace(canonicalPattern, canonStr)
        : html.replace(/<\/head>/i, `    ${canonStr}\n  </head>`);

      res.send(html);
    } catch (e) {
      console.error(e);
      res.sendFile(path.join(staticPath, "index.html"));
    }
  });

  const port = process.env.PORT || 3000;

  server.listen(port, () => {
    console.log(`Server running on http://localhost:${port}/`);
  });
}

startServer().catch(console.error);
