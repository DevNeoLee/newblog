export const formatKoreanDate = (date) => {
    const d = new Date(date);
    
    // Korean Year System (Dangi): Add 2333
    const koreanYear = d.getFullYear();
    
    // Extract the month and day
    const month = d.getMonth() + 1; // Months are 0-indexed
    const day = d.getDate();
  
    // Format in Korean
    return `${koreanYear}년 ${month}월 ${day}일`;
  };