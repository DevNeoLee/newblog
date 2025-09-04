/**
 * Reading Time Calculator
 * Estimates reading time based on content length
 */

/**
 * Calculate estimated reading time for content
 * @param {string} content - The text content to analyze
 * @param {number} wordsPerMinute - Average reading speed (default: 300 for Korean)
 * @returns {Object} Reading time data
 */
export function calculateReadingTime(content, wordsPerMinute = 200) {
  if (!content || typeof content !== 'string') {
    return { minutes: 0, words: 0, text: '1분 미만' };
  }

  // Remove HTML tags and extra whitespace
  const cleanContent = content
    .replace(/<[^>]*>/g, '') // Remove HTML tags
    .replace(/\s+/g, ' ') // Normalize whitespace
    .trim();

  // For Korean text, count meaningful characters (excluding spaces and punctuation)
  // Korean reading speed is typically 300-400 characters per minute
  const meaningfulChars = cleanContent
    .replace(/[\s\p{P}]/gu, '') // Remove spaces and punctuation
    .length;
  
  // Calculate reading time based on meaningful characters
  const minutes = Math.ceil(meaningfulChars / wordsPerMinute);
  
  // Format display text
  let text;
  if (minutes < 1) {
    text = '1분 미만';
  } else if (minutes === 1) {
    text = '1분';
  } else {
    text = `${minutes}분`;
  }

  return {
    minutes,
    words: meaningfulChars,
    text,
    // Additional metrics
    characters: cleanContent.length,
    meaningfulCharacters: meaningfulChars,
    estimatedWords: Math.round(meaningfulChars / 2), // Rough estimate for Korean
  };
}

/**
 * Generate reading time metadata for structured data
 * @param {number} minutes - Reading time in minutes
 * @returns {Object} Schema.org TimeRequired data
 */
export function generateReadingTimeStructuredData(minutes) {
  return {
    "@type": "TimeRequired",
    "timeRequired": `PT${minutes}M`
  };
}

/**
 * Format reading time for display with additional context
 * @param {Object} readingData - Data from calculateReadingTime
 * @param {Object} options - Display options
 * @returns {string} Formatted reading time string
 */
export function formatReadingTime(readingData, options = {}) {
  const { showWordCount = false, showCharacters = false } = options;
  
  let result = readingData.text;
  
  if (showWordCount) {
    result += ` (약 ${readingData.estimatedWords}단어)`;
  }
  
  if (showCharacters) {
    result += ` (${readingData.characters}자)`;
  }
  
  return result;
}
