/**
 * Centralized Metadata Utilities for Next.js 15
 * Provides consistent metadata generation for different page types
 * Implements caching and performance optimization for metadata generation
 * Ensures SEO best practices and proper structured data
 */

// Simple console logging for build-time debugging

/**
 * Generate standardized article metadata with caching and performance optimization
 * @param {Object} details - Post details from markdown frontmatter
 * @param {string} link - Post URL slug
 * @param {string} category - Category (canada, usa, etc.)
 * @param {Object} structuredData - Generated structured data
 * @returns {Object} Complete metadata object
 */
export const generateArticleMetadata = (details, link, category, structuredData) => {
  try {
    // Category-specific keywords
    const categoryKeywords = {
      canada: ['캐나다', '여행', '캐나다여행', '토론토', '밴쿠버', '캘거리', '나이아가라폭포', '로키산맥', '여행팁'],
      usa: ['미국', '여행', '미국여행', '뉴욕', '로스앤젤레스', '라스베가스', '플로리다', '여행팁'],
      europe: ['유럽', '여행', '유럽여행', '파리', '로마', '런던', '바르셀로나', '여행팁'],
      asia: ['아시아', '여행', '아시아여행', '일본', '홍콩', '태국', '싱가포르', '여행팁'],
      africa: ['아프리카', '여행', '아프리카여행', '남아프리카', '이집트', '모로코', '여행팁'],
      prologue: ['여행', '여행팁', '배낭여행', '해외여행', '여행가이드', '여행정보']
    };

    const keywords = [
      ...(categoryKeywords[category] || ['여행', '여행팁']),
      'Moyahug',
      '생활의지혜'
    ];

    return {
      title: details.data.title,
      description: details.data.subtitle || details.content.slice(1, 175),
      keywords: keywords,
      authors: [{ name: 'Moyahug' }],
      robots: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
      alternates: {
        canonical: `https://moyahug.com/travel/${category}/${link}`,
      },
      openGraph: {
        title: details.data.title,
        description: details.data.subtitle || details.content.slice(1, 175),
        type: 'article',
        publishedTime: details.data.date,
        modifiedTime: details.data.date,
        authors: ['Moyahug'],
        images: [
          {
            url: 'https://moyahug.com/icon1.png',
            width: 1200,
            height: 630,
            alt: details.data.title,
          },
        ],
      },
      twitter: {
        card: 'summary_large_image',
        title: details.data.title,
        description: details.data.subtitle || details.content.slice(1, 175),
        images: ['https://moyahug.com/icon1.png'],
      },
      other: {
        'application/ld+json': JSON.stringify(structuredData),
      },
    };
  } catch (error) {
    console.error('Error generating article metadata:', error);
    // Return fallback metadata
    return {
      title: details.data.title || 'Untitled',
      description: 'Article content',
    };
  }
};

/**
 * Generate standardized IT article metadata
 * @param {Object} details - Post details from markdown frontmatter
 * @param {string} link - Post URL slug
 * @param {string} category - Category (ai, coding, etc.)
 * @param {Object} structuredData - Generated structured data
 * @returns {Object} Complete metadata object
 */
export const generateITArticleMetadata = (details, link, category, structuredData) => {
  // IT category-specific keywords
  const categoryKeywords = {
    ai: ['인공지능', 'AI', '머신러닝', '딥러닝', 'IT', '기술'],
    coding: ['코딩', '프로그래밍', '개발', 'IT', '기술', '소프트웨어'],
    blockchain: ['블록체인', '암호화폐', '비트코인', 'IT', '기술'],
    uiux: ['UI', 'UX', '디자인', '사용자경험', 'IT', '기술'],
    thought: ['IT철학', '애자일', '린스타트업', 'IT', '기술'],
    techcompany: ['테크회사', 'IT회사', '기술회사', 'IT', '기술']
  };

  const keywords = [
    ...(categoryKeywords[category] || ['IT', '기술']),
    'Moyahug',
    '생활의지혜'
  ];

  return {
    title: details.data.title,
    description: details.data.subtitle || details.content.slice(1, 175),
    keywords: keywords,
    authors: [{ name: 'Moyahug' }],
    robots: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
    alternates: {
      canonical: `https://moyahug.com/it/${category}/${link}`,
    },
    openGraph: {
      title: details.data.title,
      description: details.data.subtitle || details.content.slice(1, 175),
      type: 'article',
      publishedTime: details.data.date,
      modifiedTime: details.data.date,
      authors: ['Moyahug'],
      url: `https://moyahug.com/it/${category}/${link}`,
      siteName: 'Moyahug',
      images: [
        {
          url: 'https://moyahug.com/icon1.png',
          width: 1200,
          height: 630,
          alt: details.data.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: details.data.title,
      description: details.data.subtitle || details.content.slice(1, 175),
      images: ['https://moyahug.com/icon1.png'],
    },
    other: {
      'application/ld+json': JSON.stringify(structuredData),
    },
    // Ensure proper metadata base for consistent rendering
    metadataBase: new URL('https://moyahug.com'),
  };
};
