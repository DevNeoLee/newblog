/**
 * Centralized Structured Data Utilities
 * Provides consistent structured data generation for different page types
 * Uses Next.js metadata API for proper server-side rendering
 */

const SITE_URL = 'https://moyahug.com';
const SITE_NAME = 'Moyahug';
const SITE_DESCRIPTION = '생활의 지혜, 현명한 블로그 매거진 - 여행과 IT 정보를 제공하는 지식 라이브러리';
const SITE_LOGO = 'https://moyahug.com/icon1.png';

/**
 * Generate Website structured data for the main site
 */
export const generateWebsiteStructuredData = () => ({
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": SITE_NAME,
  "description": SITE_DESCRIPTION,
  "url": SITE_URL,
  "inLanguage": "ko-KR",
  "publisher": {
    "@type": "Organization",
    "name": SITE_NAME,
    "logo": {
      "@type": "ImageObject",
      "url": SITE_LOGO
    },
    "foundingDate": "2024-01-01",
    "description": "생활의 지혜를 모토로 하는 블로그 매거진"
  },
  "potentialAction": {
    "@type": "SearchAction",
    "target": `${SITE_URL}/search?q={search_term_string}`,
    "query-input": "required name=search_term_string"
  }
});

/**
 * Generate CollectionPage structured data for category pages
 */
export const generateCollectionPageStructuredData = (category, posts, categoryName) => {
  const itemListElement = posts.map((post, index) => ({
    "@type": "ListItem",
    "position": index + 1,
    "item": {
      "@type": "Article",
      "headline": post.title,
      "description": post.subtitle,
      "url": `${SITE_URL}/travel/${category}/${post.link}`,
      "datePublished": post.date,
      "author": {
        "@type": "Organization",
        "name": "생활의 지혜"
      }
    }
  }));

  return {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": `${categoryName} - ${SITE_NAME}`,
    "description": `${categoryName} 관련 실용적인 정보와 팁을 제공합니다`,
    "url": `${SITE_URL}/travel/${category}`,
    "inLanguage": "ko-KR",
    "mainEntity": {
      "@type": "ItemList",
      "name": `${categoryName} 콘텐츠 모음`,
      "numberOfItems": posts.length,
      "itemListElement": itemListElement
    },
    "publisher": {
      "@type": "Organization",
      "name": SITE_NAME,
      "logo": {
        "@type": "ImageObject",
        "url": SITE_LOGO
      }
    }
  };
};

/**
 * Generate Article structured data for detail pages
 * @param {Object} post - Post data from markdown frontmatter
 * @param {string} link - Post URL slug
 * @param {string} category - Category (canada, usa, ai, coding, etc.)
 * @param {string} section - Section type ('travel' or 'it')
 */
export const generateArticleStructuredData = (post, link, category, section = 'travel') => {
  // Ensure consistent date formatting
  let datePublished, dateModified;
  try {
    const parsedDate = new Date(post.data.date);
    if (isNaN(parsedDate.getTime())) {
      datePublished = new Date().toISOString();
      dateModified = new Date().toISOString();
    } else {
      datePublished = parsedDate.toISOString();
      dateModified = parsedDate.toISOString();
    }
  } catch (error) {
    datePublished = new Date().toISOString();
    dateModified = new Date().toISOString();
  }

  return {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": post.data.title,
    "description": post.data.subtitle,
    "author": {
      "@type": "Organization",
      "name": "Moyahug"
    },
    "publisher": {
      "@type": "Organization",
      "name": SITE_NAME,
      "logo": {
        "@type": "ImageObject",
        "url": SITE_LOGO
      }
    },
    "datePublished": datePublished,
    "dateModified": dateModified,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `${SITE_URL}/${section}/${category}/${link}`
    },
    "inLanguage": "ko-KR",
    "articleSection": category,
    "wordCount": post.content ? post.content.length : 0
  };
};

/**
 * Generate Organization structured data for about/privacy/terms pages
 */
export const generateOrganizationStructuredData = (pageType) => {
  const pageConfigs = {
    about: {
      name: "About - Moyahug",
      description: "Moyahug에 대한 소개와 미션",
      url: `${SITE_URL}/about`
    },
    privacy: {
      name: "Privacy Policy - Moyahug", 
      description: "개인정보 보호정책",
      url: `${SITE_URL}/privacy`
    },
    terms: {
      name: "Terms of Service - Moyahug",
      description: "이용약관",
      url: `${SITE_URL}/terms`
    }
  };

  const config = pageConfigs[pageType] || pageConfigs.about;

  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": config.name,
    "description": config.description,
    "url": config.url,
    "inLanguage": "ko-KR",
    "logo": {
      "@type": "ImageObject",
      "url": SITE_LOGO
    },
    "sameAs": [
      `${SITE_URL}/about`,
      `${SITE_URL}/privacy`, 
      `${SITE_URL}/terms`
    ]
  };
};

/**
 * Generate BreadcrumbList structured data for navigation
 */
export const generateBreadcrumbStructuredData = (breadcrumbs) => {
  const itemListElement = breadcrumbs.map((crumb, index) => ({
    "@type": "ListItem",
    "position": index + 1,
    "name": crumb.name,
    "item": crumb.url
  }));

  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": itemListElement
  };
};
