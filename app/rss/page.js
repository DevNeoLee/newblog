import fs from 'fs'
import matter from 'gray-matter';
import RSS from "rss";
import { getMetadata, getCatalogue, getKorean } from '../travel/utils/getData';


async function generateRss(allPosts) {
  const site_url =
    process.env.NODE_ENV === "production"
    ? 
    "https://moyahug.com"
    : 
    "http://localhost:3000";

  const feedOptions = {
    title: "생활의 지혜, 현명한 블로그 매거진, 세계 여행 팁, 경험담, 여행 철학",
    description: "즐겁고 뜻깊은 세계여행을 위한 소소한 노하우와 꿀팁을 모은 매거진 입니다",
    site_url: site_url,
    id: site_url,
    link: site_url,
    language: "ko",
    feed_url: `${site_url}/rss.xml`,
    image_url: `${site_url}/icon1.png`,

    // author: {
    //   name: "John Doe",
    //   email: "john@example.com",
    //   link: "http://localhost:3000/about",
    // },
    pubDate: new Date(),
    copyright: `All rights reserved ${new Date().getFullYear()}`,
  };



  const feed = new RSS(feedOptions);

  // Add each individual post to the feed.
  allPosts.forEach(post => {
    console.log('post: ', post)
    feed.item({
    title: post.title,
    description: post.subtitle,
    url: `${site_url}/travel/${post.category}/${post.link}`,
    date: post.date,
    });
  });
  
  // Write the RSS feed to a file as XML.
  fs.writeFileSync("./public/rss.xml", feed.xml({ indent: true }));
}


const getPostContent = (catalogue, link) => {
  const folder= `dataTravel/${catalogue}`;
  const file = `${folder}/${link}.md`;
  const content = fs.readFileSync(file, 'utf8');
  const matterResult = matter(content);
  return matterResult;
}

console.log('hello world from genergenerateRSSFeedateRss! ')

const generateRSSFeed = async () => {
  const catalogues = getCatalogue();

  console.log('rss catalogues rss: ', catalogues);

  const posts = [];

  catalogues?.forEach(catalogue => {
    const catalogueKoreanName = getKorean(catalogue).replace(/ /g, '')
    let postList = getMetadata(catalogueKoreanName)
    console.log('rss postList rss catalogue: ', catalogueKoreanName, catalogue);

    const updatedPostList = postList.map(list => ({...list, category: catalogue}));

    updatedPostList.forEach(list => posts.push(list))
  })

  await generateRss(posts.sort(function(a,b){
    return new Date(b.date) - new Date(a.date)}))
}

generateRSSFeed();

export default generateRSSFeed;