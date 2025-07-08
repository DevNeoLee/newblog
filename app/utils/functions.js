export const formatKoreanDate = (date) => {
    const d = new Date(date);
    
    // Korean Year System (Dangi): Add 2333
    const koreanYear = d.getFullYear();
    
    // Extract the month and day
    const month = d.getMonth() + 1; // Months are 0-indexed
    const day = d.getDate();
  
    // Format in Korean - 서버와 클라이언트 일관성 보장
    return `${koreanYear}년 ${month.toString().padStart(2, '0')}월 ${day.toString().padStart(2, '0')}일`;
  };

// 더 예쁜 날짜 포맷팅 함수들
export const formatDateShort = (date) => {
  const d = new Date(date);
  const year = d.getFullYear();
  const month = (d.getMonth() + 1).toString().padStart(2, '0');
  const day = d.getDate().toString().padStart(2, '0');
  
  return `${year}.${month}.${day}`;
};

export const formatDateLong = (date) => {
  const d = new Date(date);
  const year = d.getFullYear();
  const month = d.getMonth() + 1;
  const day = d.getDate();
  
  const monthNames = [
    '1월', '2월', '3월', '4월', '5월', '6월',
    '7월', '8월', '9월', '10월', '11월', '12월'
  ];
  
  return `${year}년 ${monthNames[month - 1]} ${day}일`;
};

export const formatDateRelative = (date) => {
  const d = new Date(date);
  const now = new Date();
  const diffTime = Math.abs(now - d);
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  
  if (diffDays === 1) return '어제';
  if (diffDays === 2) return '그제';
  if (diffDays <= 7) return `${diffDays}일 전`;
  if (diffDays <= 30) return `${Math.floor(diffDays / 7)}주 전`;
  if (diffDays <= 365) return `${Math.floor(diffDays / 30)}개월 전`;
  
  return formatDateShort(date);
};