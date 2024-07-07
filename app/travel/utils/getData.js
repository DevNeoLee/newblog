
import matter from "gray-matter";
import fs from 'fs'

const site_url = process.env.NODE_ENV === "production" ? "https://moyahug.com" : "http://localhost:3000";

export const getCatalogue = () => {
  const files = fs.readdirSync(`app/travel/(pages)`)
  const filesFiltered = files.filter(ele => ele != "sitemap")
  return filesFiltered
}

export const getMetadata = (path) => {
  const files = fs.readdirSync(`travelData/${path}`);
  const markdownPosts = files.filter(file => file.endsWith('.md'))

  const posts = markdownPosts.map(fileName => {
    const fileContents = fs.readFileSync(`travelData/${path}/${fileName}`, 'utf8');
    const matterResult = matter(fileContents);
    return {
      title: matterResult.data.title,
      date: matterResult.data.date,
      subtitle: matterResult.data.subtitle,
      link: fileName.replace('.md', ''),
      color: matterResult.data.color,
    }
  })
  return posts;
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
      return '나를 찾는 세계여행';
    default:
      return ''
  }
}

export const getPages = () => {
    //add detail pages
    const catalogue = getCatalogue();

    const urlList =[];

    catalogue.forEach(continent => {
      const trimedKorean = getKorean(continent).split(" ").join("");
      const posts = getMetadata(trimedKorean);
      posts.forEach(post => {
        urlList.push({
          url: `${site_url}/travel/${continent}/${post.link}`,
          lastModified: new Date(post.date),
        })
      })
    })

  return urlList.sort(function(a,b){
    return new Date(b.lastModified) - new Date(a.lastModified);
  });
}