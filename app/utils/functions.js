/**
 * Korean date formatting function with server/client consistency
 * Ensures consistent output between server and client rendering
 */
export const formatKoreanDate = (date) => {
  try {
    // Ensure consistent date parsing
    const d = new Date(date);
    if (isNaN(d.getTime())) {
      return '날짜 오류';
    }
    
    const year = d.getFullYear();
    const month = (d.getMonth() + 1).toString().padStart(2, '0');
    const day = d.getDate().toString().padStart(2, '0');
    
    return `${year}년 ${month}월 ${day}일`;
  } catch (error) {
    return '날짜 오류';
  }
};

/**
 * Short date format for consistent display
 */
export const formatDateShort = (date) => {
  try {
    const d = new Date(date);
    if (isNaN(d.getTime())) {
      return '날짜 오류';
    }
    
    const year = d.getFullYear();
    const month = (d.getMonth() + 1).toString().padStart(2, '0');
    const day = d.getDate().toString().padStart(2, '0');
    
    return `${year}.${month}.${day}`;
  } catch (error) {
    return '날짜 오류';
  }
};

/**
 * Long date format with Korean month names
 * Ensures consistent server/client rendering
 */
export const formatDateLong = (date) => {
  try {
    const d = new Date(date);
    if (isNaN(d.getTime())) {
      return '날짜 오류';
    }
    
    const year = d.getFullYear();
    const month = d.getMonth() + 1;
    const day = d.getDate();
    
    // Static month names array for consistency
    const monthNames = [
      '1월', '2월', '3월', '4월', '5월', '6월',
      '7월', '8월', '9월', '10월', '11월', '12월'
    ];
    
    return `${year}년 ${monthNames[month - 1]} ${day}일`;
  } catch (error) {
    return '날짜 오류';
  }
};

/**
 * Relative date formatting (disabled for hydration consistency)
 * Returns absolute date instead to prevent server/client mismatches
 */
export const formatDateRelative = (date) => {
  try {
    const d = new Date(date);
    if (isNaN(d.getTime())) {
      return '날짜 오류';
    }
    
    // Return absolute date instead of relative to prevent hydration issues
    return formatDateShort(date);
  } catch (error) {
    return '날짜 오류';
  }
};

/**
 * Clean markdown content to prevent hydration issues
 * Converts className to class and ensures consistent HTML structure
 */
export const cleanMarkdownContent = (content) => {
  if (typeof content !== 'string') {
    return content;
  }
  
  return content
    .replace(/className=/g, 'class=')
    .replace(/<a class="linkBold"/g, '<a class="linkBold" style="color:#006dd7"')
    .replace(/<span style="color: #([^"]+)">/g, '<span style="color: #$1">')
    .replace(/<p><span style="color: #([^"]+)">/g, '<p><span style="color: #$1">');
};