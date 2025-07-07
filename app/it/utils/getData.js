import matter from "gray-matter";
import fs from 'fs'

const site_url = process.env.NODE_ENV === "production" ? "https://moyahug.com" : "http://localhost:3000";

export const getCatalogue = () => {
  try {
    const files = fs.readdirSync(`app/it/(pages)`)
    const filesFiltered = files.filter(ele => ele != "sitemap")
    return filesFiltered
  } catch (error) {
    console.error('Error reading IT catalogue directory:', error);
    return [];
  }
}

export const getMetadata = (path) => {
  try {
    const files = fs.readdirSync(`dataIT/${path}`);
    const markdownPosts = files.filter(file => file.endsWith('.md'))

    const posts = markdownPosts.map(fileName => {
      try {
        const fileContents = fs.readFileSync(`dataIT/${path}/${fileName}`, 'utf8');
        const matterResult = matter(fileContents);
        return {
          title: matterResult.data.title || '제목 없음',
          date: matterResult.data.date || new Date().toISOString(),
          subtitle: matterResult.data.subtitle || '',
          link: fileName.replace('.md', ''),
          color: matterResult.data.color || '#191960',
        }
      } catch (error) {
        console.error(`Error reading IT file ${fileName}:`, error);
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
    console.error(`Error reading directory dataIT/${path}:`, error);
    return [];
  }
} 

// 공통 포스트 읽기 함수
export const getPostContent = (link, category) => {
  try {
    const koreanCategory = getKorean(category);
    const folder = `dataIT/${koreanCategory}`;
    const file = `${folder}/${link}.md`;
    
    if (!fs.existsSync(file)) {
      return null;
    }
    
    const content = fs.readFileSync(file, 'utf8');
    const matterResult = matter(content);
    return matterResult;
  } catch (error) {
    console.error(`Error reading IT post content for ${link} in ${category}:`, error);
    return null;
  }
}

// 구조화된 데이터 생성 함수
export const generateStructuredData = (post, link, category) => {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": post.data.title,
    "description": post.data.subtitle,
    "author": {
      "@type": "Organization",
      "name": "생활의 지혜"
    },
    "publisher": {
      "@type": "Organization",
      "name": "생활의 지혜",
      "logo": {
        "@type": "ImageObject",
        "url": "https://moyahug.com/icon1.png"
      }
    },
    "datePublished": post.data.date,
    "dateModified": post.data.date,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://moyahug.com/it/${category}/${link}`
    },
    "inLanguage": "ko-KR"
  };
}

export const getKorean = (ele) => {
  switch(ele) {
    case 'ai':
      return '인공지능';
    case 'thought':
      return 'IT철학';
    case 'coding':
      return '코딩';
    case 'uiux':
      return 'uiux';
    case 'techcompany':
      return '테크회사들';
    case 'blockchain':
      return '블록체인';

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
          urlList.push({
            url: `${site_url}/it/${continent}/${post.link}`,
            lastModified: new Date(post.date),
          })
        })
      })

      return urlList.sort(function(a,b){
        return new Date(b.lastModified) - new Date(a.lastModified);
      });
    } catch (error) {
      console.error('Error generating IT pages:', error);
      return [];
    }
}