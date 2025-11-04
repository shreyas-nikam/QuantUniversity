/**
 * SEO Component
 * Renders meta tags, structured data, and other SEO elements
 */

import { useEffect } from 'react';
import { pageSEO, siteSEO, PageSEO } from '../data/seo';

interface SEOProps {
  pageKey?: keyof typeof pageSEO;
  customSEO?: Partial<PageSEO>;
  structuredData?: object | object[];
  noIndex?: boolean;
}

export function SEO({ pageKey, customSEO, structuredData, noIndex = false }: SEOProps) {
  const defaultSEO = pageKey ? pageSEO[pageKey] : null;
  const seo: PageSEO = {
    ...defaultSEO,
    ...customSEO
  } as PageSEO;

  const fullTitle = seo.title || siteSEO.siteName;
  const description = seo.description || '';
  const keywords = seo.keywords?.join(', ') || '';
  const ogImage = seo.ogImage || siteSEO.defaultOgImage;
  const ogType = seo.ogType || 'website';
  const canonicalUrl = seo.canonicalUrl ? `${siteSEO.siteUrl}${seo.canonicalUrl}` : siteSEO.siteUrl;

  useEffect(() => {
    // Update document title
    document.title = fullTitle;

    // Update or create meta tags
    updateMetaTag('description', description);
    updateMetaTag('keywords', keywords);

    // Open Graph
    updateMetaTag('og:title', fullTitle, 'property');
    updateMetaTag('og:description', description, 'property');
    updateMetaTag('og:image', ogImage, 'property');
    updateMetaTag('og:url', canonicalUrl, 'property');
    updateMetaTag('og:type', ogType, 'property');
    updateMetaTag('og:site_name', siteSEO.siteName, 'property');

    // Twitter Card
    updateMetaTag('twitter:card', 'summary_large_image', 'name');
    updateMetaTag('twitter:site', siteSEO.twitterHandle, 'name');
    updateMetaTag('twitter:title', fullTitle, 'name');
    updateMetaTag('twitter:description', description, 'name');
    updateMetaTag('twitter:image', ogImage, 'name');

    // Article specific
    if (seo.author) {
      updateMetaTag('article:author', seo.author, 'property');
    }
    if (seo.publishedTime) {
      updateMetaTag('article:published_time', seo.publishedTime, 'property');
    }
    if (seo.modifiedTime) {
      updateMetaTag('article:modified_time', seo.modifiedTime, 'property');
    }
    if (seo.section) {
      updateMetaTag('article:section', seo.section, 'property');
    }
    if (seo.tags && seo.tags.length > 0) {
      // Remove existing article:tag meta tags
      const existingTags = document.querySelectorAll('meta[property="article:tag"]');
      existingTags.forEach(tag => tag.remove());
      
      // Add new tags
      seo.tags.forEach(tag => {
        const meta = document.createElement('meta');
        meta.setAttribute('property', 'article:tag');
        meta.content = tag;
        document.head.appendChild(meta);
      });
    }

    // Canonical URL
    updateLinkTag('canonical', canonicalUrl);

    // Robots
    if (noIndex) {
      updateMetaTag('robots', 'noindex, nofollow');
    } else {
      updateMetaTag('robots', 'index, follow');
    }

    // Structured Data
    if (structuredData) {
      try {
        const scriptId = 'structured-data';
        let script = document.getElementById(scriptId) as HTMLScriptElement;
        
        if (!script) {
          script = document.createElement('script');
          script.id = scriptId;
          script.type = 'application/ld+json';
          document.head.appendChild(script);
        }

        const dataArray = Array.isArray(structuredData) ? structuredData : [structuredData];
        script.textContent = JSON.stringify(dataArray);
      } catch (error) {
        console.warn('Error adding structured data:', error);
      }
    }
  }, [fullTitle, description, keywords, ogImage, ogType, canonicalUrl, seo, structuredData, noIndex]);

  return null; // This component only manages head elements
}

// Helper function to update or create meta tags
function updateMetaTag(name: string, content: string, attribute: 'name' | 'property' = 'name') {
  if (!content) return;

  let element = document.querySelector(`meta[${attribute}="${name}"]`) as HTMLMetaElement;
  
  if (!element) {
    element = document.createElement('meta');
    element.setAttribute(attribute, name);
    document.head.appendChild(element);
  }
  
  element.content = content;
}

// Helper function to update or create link tags
function updateLinkTag(rel: string, href: string) {
  if (!href) return;

  let element = document.querySelector(`link[rel="${rel}"]`) as HTMLLinkElement;
  
  if (!element) {
    element = document.createElement('link');
    element.rel = rel;
    document.head.appendChild(element);
  }
  
  element.href = href;
}

/**
 * Preconnect to external domains for performance
 */
export function PreconnectLinks() {
  useEffect(() => {
    const domains = [
      'https://www.google-analytics.com',
      'https://www.googletagmanager.com',
      'https://connect.facebook.net',
      'https://px.ads.linkedin.com',
      'https://images.unsplash.com'
    ];

    domains.forEach(domain => {
      if (!document.querySelector(`link[href="${domain}"]`)) {
        const link = document.createElement('link');
        link.rel = 'preconnect';
        link.href = domain;
        link.crossOrigin = 'anonymous';
        document.head.appendChild(link);
      }
    });
  }, []);

  return null;
}
