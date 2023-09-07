import matter from "gray-matter";
import fs from 'fs'

const getMetadata = (path) => {
    const files = fs.readdirSync(`travelData/${path}`);
    const markdownPosts = files.filter(file => file.endsWith('.md'))
  
    const posts = markdownPosts.map(fileName => {
      const fileContents = fs.readFileSync(`travelData/${path}/${fileName}`, 'utf8');
      const matterResult = matter(fileContents);
      return {
        title: matterResult.data.title,
        date: matterResult.data.date,
        subtitle: matterResult.data.subtitle,
        title: fileName.replace('.md', ''),
      }
    })
    return posts;
  } 

  export default getMetadata;