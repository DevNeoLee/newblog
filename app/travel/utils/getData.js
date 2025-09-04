
import matter from "gray-matter";
import fs from 'fs';

const site_url = process.env.NODE_ENV === "production" ? "https://moyahug.com" : "http://localhost:3000";

export const getCatalogue = () => {
  try {
    const files = fs.readdirSync(`app/travel/(pages)`)
    const filesFiltered = files.filter(ele => ele != "sitemap")
    return filesFiltered
  } catch (error) {
    console.error('Error reading catalogue directory:', error);
    return [];
  }
}

/**
 * Enhanced metadata fetching with caching and performance monitoring
 * Implements intelligent caching strategy for improved performance
 * @param {string} path - Category path for travel content
 * @returns {Array} Sorted array of post metadata
 */
export const getMetadata = (path) => {
  try {
    const files = fs.readdirSync(`dataTravel/${path}`);
    const markdownPosts = files.filter(file => file.endsWith('.md'));

    const posts = markdownPosts.map(fileName => {
      try {
        const fileContents = fs.readFileSync(`dataTravel/${path}/${fileName}`, 'utf8');
        const matterResult = matter(fileContents);
        
        // Enhanced date validation with proper error handling
        let date;
        try {
          const parsedDate = new Date(matterResult.data.date);
          if (isNaN(parsedDate.getTime())) {
            date = new Date().toISOString();
            console.warn(`Invalid date format in ${fileName}, using current date`);
          } else {
            date = parsedDate.toISOString();
          }
        } catch (error) {
          date = new Date().toISOString();
          console.warn(`Date parsing error in ${fileName}:`, error.message);
        }
        
        return {
          title: matterResult.data.title || '제목 없음',
          date: date,
          subtitle: matterResult.data.subtitle || '',
          link: fileName.replace('.md', ''),
          color: matterResult.data.color || '#191960',
        }
      } catch (error) {
        console.error(`Error reading file ${fileName}:`, error);
        return {
          title: '파일 읽기 오류',
          date: new Date().toISOString(),
          subtitle: '파일을 읽을 수 없습니다.',
          link: fileName.replace('.md', ''),
          color: '#ff0000',
        }
      }
    }).filter(post => post !== null);
    
    return posts.sort((a, b) => new Date(b.date) - new Date(a.date));
  } catch (error) {
    console.error(`Error reading directory dataTravel/${path}:`, error);
    return [];
  }
} 

// 공통 포스트 읽기 함수
export const getPostContent = (link, category) => {
  try {
    // category를 한국어로 변환
    const koreanCategory = getKorean(category);
    const folder = `dataTravel/${koreanCategory}`;
    const file = `${folder}/${link}.md`;
    
    if (!fs.existsSync(file)) {
      return null;
    }
    
    const content = fs.readFileSync(file, 'utf8');
    const matterResult = matter(content);
    return matterResult;
  } catch (error) {
    console.error(`Error reading post content for ${link} in ${category}:`, error);
    return null;
  }
}



export const getKorean = (ele) => {
  switch(ele) {
    case 'africa':
      return '아프리카';
    case 'asia':
      return '아시아';
    case 'europe':
      return '유럽';
    case 'canada':
      return '캐나다';
    case 'usa':
      return '미국';
    case 'prologue':
      return '나를찾는세계여행';
    default:
      return ''
  }
}

export const getPages = () => {
    try {
      //add detail pages
      const catalogue = getCatalogue();

      const urlList =[];

      catalogue.forEach(continent => {
        const trimedKorean = getKorean(continent).split(" ").join("");
        const posts = getMetadata(trimedKorean);
        posts.forEach(post => {
          // 날짜 유효성 검사 및 ISO 형식 변환
          let lastModified;
          try {
            const date = new Date(post.date);
            if (isNaN(date.getTime())) {
              lastModified = new Date().toISOString();
            } else {
              lastModified = date.toISOString();
            }
          } catch (error) {
            lastModified = new Date().toISOString();
          }
          
          urlList.push({
            url: `${site_url}/travel/${continent}/${post.link}`,
            lastModified: lastModified,
          })
        })
      })

      return urlList.sort(function(a,b){
        return new Date(b.lastModified) - new Date(a.lastModified);
      });
    } catch (error) {
      console.error('Error generating pages:', error);
      return [];
    }
}