// useSEO.ts — Next Level Window Cleaning
// Custom hook for dynamic per-route title + meta description + canonical + OG URL injection.
// Ensures each page has unique, crawlable metadata and correct self-canonical URLs.
import { useEffect } from "react";

const SITE_URL = "https://nextlevelwindowsnc.com";

function canonicalPath(pathname: string): string {
  return pathname === "/" ? "/" : `${pathname.replace(/\/+$/, "")}/`;
}

const useSEO = (title: string, description: string, path?: string) => {
  useEffect(() => {
    // 1. Update document title
    document.title = title;

    // 2. Update or create the meta description tag
    let metaDesc = document.querySelector<HTMLMetaElement>('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute("content", description);
    } else {
      metaDesc = document.createElement("meta");
      metaDesc.name = "description";
      metaDesc.content = description;
      document.head.appendChild(metaDesc);
    }

    // 3. Update Open Graph title + description for social sharing
    const ogTitle = document.querySelector<HTMLMetaElement>('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute("content", title);

    const ogDesc = document.querySelector<HTMLMetaElement>('meta[property="og:description"]');
    if (ogDesc) ogDesc.setAttribute("content", description);

    // 4. Update canonical tag to be self-canonical (critical for SEO)
    // Each page's canonical should point to itself, not the homepage
    const currentPath = path || window.location.pathname;
    const canonicalUrl = `${SITE_URL}${canonicalPath(currentPath)}`;
    
    let canonicalTag = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (canonicalTag) {
      canonicalTag.setAttribute("href", canonicalUrl);
    } else {
      canonicalTag = document.createElement("link");
      canonicalTag.rel = "canonical";
      canonicalTag.href = canonicalUrl;
      document.head.appendChild(canonicalTag);
    }

    // 5. Update OG URL to match canonical
    const ogUrl = document.querySelector<HTMLMetaElement>('meta[property="og:url"]');
    if (ogUrl) {
      ogUrl.setAttribute("content", canonicalUrl);
    } else {
      const newOgUrl = document.createElement("meta");
      newOgUrl.setAttribute("property", "og:url");
      newOgUrl.content = canonicalUrl;
      document.head.appendChild(newOgUrl);
    }

    // 6. Update Twitter URL if present
    const twitterUrl = document.querySelector<HTMLMetaElement>('meta[name="twitter:url"]');
    if (twitterUrl) {
      twitterUrl.setAttribute("content", canonicalUrl);
    }
  }, [title, description, path]);
};

export default useSEO;
