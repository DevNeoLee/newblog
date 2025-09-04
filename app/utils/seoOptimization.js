/**
 * SEO Optimization Utilities for Next.js 15
 * Provides comprehensive SEO enhancements for Google Search Console
 */

/**
 * Generate comprehensive metadata for better search indexing
 * @param {Object} post - Post data object
 * @param {string} category - Category name
 * @param {string} section - Section (travel/it)
 * @returns {Object} Enhanced metadata object
 */
export const generateEnhancedMetadata = (post, category, section) => {
  const baseUrl = 'https://moyahug.com';
  const pageUrl = `${baseUrl}/${section}/${category}/${post.link}`;
  
  return {
    // Basic metadata
    title: post.data.title,
    description: post.data.description || post.content.slice(0, 160),
    
    // Canonical URL for duplicate content prevention
    alternates: {
      canonical: pageUrl,
    },
    
    // Open Graph for social sharing
    openGraph: {
      title: post.data.title,
      description: post.data.description || post.content.slice(0, 160),
      type: 'article',
      url: pageUrl,
      siteName: 'Moyahug',
      images: post.data.images ? post.data.images.map(img => ({
        url: img.url.startsWith('http') ? img.url : `${baseUrl}${img.url}`,
        width: img.width || 1200,
        height: img.height || 630,
        alt: img.alt || post.data.title,
      })) : [{
        url: `${baseUrl}/icon1.png`,
        width: 1200,
        height: 630,
        alt: post.data.title,
      }],
      publishedTime: post.data.date,
      modifiedTime: post.data.modifiedDate || post.data.date,
      authors: ['Moyahug'],
      section: section === 'travel' ? '여행' : 'IT',
      tags: post.data.tags || [],
    },
    
    // Twitter Card
    twitter: {
      card: 'summary_large_image',
      title: post.data.title,
      description: post.data.description || post.content.slice(0, 160),
      images: post.data.images ? [post.data.images[0].url] : [`${baseUrl}/icon1.png`],
      creator: '@moyahug',
      site: '@moyahug',
    },
    
    // Additional SEO metadata
    keywords: post.data.keywords || [],
    authors: [{ name: 'Moyahug' }],
    creator: 'Moyahug',
    publisher: 'Moyahug',
    
    // Robots directive for search engines
    robots: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'noarchive': false,
      'nosnippet': false,
      'noimageindex': false,
      'notranslate': false,
    },
    
    // Language and locale
    metadataBase: new URL(baseUrl),
    other: {
      'article:author': 'Moyahug',
      'article:section': section === 'travel' ? '여행' : 'IT',
      'article:tag': post.data.tags ? post.data.tags.join(', ') : '',
    },
  };
};

/**
 * Generate breadcrumb structured data for better navigation
 * @param {Array} breadcrumbs - Array of breadcrumb items
 * @returns {Object} Breadcrumb structured data
 */
export const generateBreadcrumbStructuredData = (breadcrumbs) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": breadcrumbs.map((item, index) => ({
    "@type": "ListItem",
    "position": index + 1,
    "name": item.name,
    "item": item.url ? `https://moyahug.com${item.url}` : undefined,
  })),
});

/**
 * Generate FAQ structured data for better search visibility
 * @param {Array} faqs - Array of FAQ objects
 * @returns {Object} FAQ structured data
 */
export const generateFAQStructuredData = (faqs) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqs.map(faq => ({
    "@type": "Question",
    "name": faq.question,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": faq.answer,
    },
  })),
});

/**
 * Generate HowTo structured data for step-by-step content
 * @param {Object} howTo - HowTo data object
 * @returns {Object} HowTo structured data
 */
export const generateHowToStructuredData = (howTo) => ({
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": howTo.name,
  "description": howTo.description,
  "image": howTo.image,
  "totalTime": howTo.totalTime,
  "supply": howTo.supply?.map(item => ({
    "@type": "HowToSupply",
    "name": item.name,
  })),
  "tool": howTo.tool?.map(item => ({
    "@type": "HowToTool",
    "name": item.name,
  })),
  "step": howTo.steps?.map((step, index) => ({
    "@type": "HowToStep",
    "position": index + 1,
    "name": step.name,
    "text": step.text,
    "image": step.image,
  })),
});
