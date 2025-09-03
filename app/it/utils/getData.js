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
        
        // 날짜 유효성 검사 및 ISO 형식 변환
        let date;
        try {
          const parsedDate = new Date(matterResult.data.date);
          if (isNaN(parsedDate.getTime())) {
            date = new Date().toISOString();
          } else {
            date = parsedDate.toISOString();
          }
        } catch (error) {
          date = new Date().toISOString();
        }
        
        return {
          title: matterResult.data.title || '제목 없음',
          date: date,
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
    // Validate input parameters
    if (!link || !category) {
      console.error('Invalid parameters for getPostContent:', { link, category });
      return null;
    }

    const koreanCategory = getKorean(category);
    if (!koreanCategory) {
      console.error(`Unknown category: ${category}`);
      return null;
    }

    const folder = `dataIT/${koreanCategory}`;
    const file = `${folder}/${link}.md`;
    
    // Check if file exists
    if (!fs.existsSync(file)) {
      console.error(`File not found: ${file}`);
      return null;
    }
    
    // Read and parse file content
    const content = fs.readFileSync(file, 'utf8');
    if (!content || content.trim().length === 0) {
      console.error(`Empty file: ${file}`);
      return null;
    }

    const matterResult = matter(content);
    
    // Validate parsed content
    if (!matterResult || !matterResult.data) {
      console.error(`Invalid frontmatter in file: ${file}`);
      return null;
    }

    // Ensure required fields exist
    if (!matterResult.data.title) {
      console.error(`Missing title in file: ${file}`);
      matterResult.data.title = '제목 없음';
    }

    return matterResult;
  } catch (error) {
    console.error(`Error reading IT post content for ${link} in ${category}:`, error);
    return null;
  }
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
            url: `${site_url}/it/${continent}/${post.link}`,
            lastModified: lastModified,
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