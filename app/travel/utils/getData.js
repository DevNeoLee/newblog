import matter from "gray-matter";
import fs from 'fs'

export const getCatalogue = () => {
  const files = fs.readdirSync(`app/travel/(pages)`)
  return files
}

export const getMetadata = (path) => {
  const files = fs.readdirSync(`travelData/${path}`);
  const markdownPosts = files.filter(file => file.endsWith('.md'))

  const posts = markdownPosts.map(fileName => {
    console.log('fileName: ', fileName)
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