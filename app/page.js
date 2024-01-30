import Link from 'next/link'
import fs from 'fs'
import matter from 'gray-matter';

import { getMetadata, getCatalogue, getKorean } from './travel/utils/getData';
import generateRss from './travel/utils/generateRSS'
import { makeSitemap } from './travel/utils/generateSitemap'

const getPostContent = (catalogue, link) => {
  const folder= `travelData/${catalogue}`;
  const file = `${folder}/${link}.md`;
  const content = fs.readFileSync(file, 'utf8');
  const matterResult = matter(content);
  return matterResult;
}

const generateRSSFeed = async () => {
  const catalogues = getCatalogue();

  const posts = [];
  catalogues?.forEach(catalogue => {
      const catalogueEnglishName = getKorean(catalogue).replace(/ /g, '')
      const postList = getMetadata(catalogueEnglishName)
      console.log('data: ', postList);
      const listObject = {posts: [], name: catalogueEnglishName}
      postList.forEach(post => {
        const content = getPostContent(catalogueEnglishName, post.link)
        listObject.posts.push(content)
      })
      posts.push(listObject)
  })
  // console.log("posts: ", posts)
  await generateRss(posts)
}

// const generateSitemap = async () => {
//   const catalogues = getCatalogue();

//   const posts = [];
//   catalogues?.forEach(catalogue => {
//       const catalogueEnglishName = getKorean(catalogue).replace(/ /g, '')
//       const postList = getMetadata(catalogueEnglishName)
//       console.log('data: ', postList);
//       const listObject = {posts: [], name: catalogueEnglishName}
//       postList.forEach(post => {
//         const content = getPostContent(catalogueEnglishName, post.link)
//         listObject.posts.push(content)
//       })
//       posts.push(listObject)
//   })
//   // console.log("posts: ", posts)
//   await makeSitemap(posts)
// }


export default function page() {

  generateRSSFeed();
  // generateSitemap();
  return (
    <div className="homeContainer">
      <h1>생활의 지혜, 현명한 블로그 웹진</h1>
      <Link href="/travel"><h2>- 세계여행 현지 꿀팁 모음집</h2></Link>

    </div>
  )
}
