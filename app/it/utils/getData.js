import matter from "gray-matter";
import fs from 'fs'

const site_url = process.env.NODE_ENV === "production" ? "https://moyahug.com" : "http://localhost:3000";

export const getCatalogue = () => {
  const files = fs.readdirSync(`app/it/(pages)`)
  const filesFiltered = files.filter(ele => ele != "sitemap")
  return filesFiltered
}

export const getMetadata = (path) => {
  const files = fs.readdirSync(`dataIT/${path}`);
  const markdownPosts = files.filter(file => file.endsWith('.md'))

  const posts = markdownPosts.map(fileName => {
    const fileContents = fs.readFileSync(`dataIT/${path}/${fileName}`, 'utf8');
    const matterResult = matter(fileContents);
    return {
      title: matterResult.data.title,
      date: matterResult.data.date,
      subtitle: matterResult.data.subtitle,
      link: fileName.replace('.md', ''),
      color: matterResult.data.color,
    }
  })
  return posts.sort((a, b) => new Date(b.date) - new Date(a.date));
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
}