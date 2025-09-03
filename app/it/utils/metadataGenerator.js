/**
 * Centralized IT Metadata Generator
 * Provides consistent metadata generation for all IT dynamic pages
 * Fixes streaming metadata issues and ensures proper SSR rendering
 */

import { generateArticleStructuredData } from '@/app/utils/structuredData';
import { generateITArticleMetadata } from '@/app/utils/metadata';
import { getPostContent } from './getData';

/**
 * Generate metadata for IT dynamic pages with comprehensive error handling
 * @param {string} link - Post URL slug
 * @param {string} category - Category (ai, coding, thought, etc.)
 * @returns {Object} Complete metadata object
 */
export const generateITPageMetadata = async (link, category) => {
  try {
    // Validate input parameters
    if (!link || !category) {
      console.error('Invalid parameters for generateITPageMetadata:', { link, category });
      return {
        title: '페이지 오류 | Moyahug',
        description: '페이지를 불러오는 중 오류가 발생했습니다.',
        robots: { index: false, follow: false },
        metadataBase: new URL('https://moyahug.com'),
      };
    }

    // Get post content with error handling
    const details = getPostContent(link, category);

    if (!details || !details.data) {
      return {
        title: '페이지를 찾을 수 없습니다 | Moyahug',
        description: '요청하신 페이지를 찾을 수 없습니다.',
        robots: { index: false, follow: false },
        metadataBase: new URL('https://moyahug.com'),
      };
    }

    // Generate structured data for the article
    const structuredData = generateArticleStructuredData(details, link, category, 'it');

    // Generate standardized metadata
    const metadata = generateITArticleMetadata(details, link, category, structuredData);
    
    // Return metadata with Next.js 15 specific fixes
    return {
      ...metadata,
      // Ensure proper title template for consistency
      title: {
        default: metadata.title,
        template: '%s | Moyahug'
      },
      // Explicit metadataBase to prevent streaming issues
      metadataBase: new URL('https://moyahug.com'),
      // Next.js 15 specific: Force metadata to render in head
      robots: {
        ...metadata.robots,
        // Ensure proper indexing
        index: true,
        follow: true,
      },
      // Additional metadata properties for Next.js 15
      verification: {
        google: 'I_9zf4wYx3f6QQl-1h77XZ0EGppANsViDrLtNSvxvnA',
      },
    };
  } catch (error) {
    console.error(`Error generating metadata for IT ${category} page:`, error);
    return {
      title: '페이지 오류 | Moyahug',
      description: '페이지를 불러오는 중 오류가 발생했습니다.',
      robots: { index: false, follow: false },
      metadataBase: new URL('https://moyahug.com'),
    };
  }
};
