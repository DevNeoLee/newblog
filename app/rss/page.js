import fs from 'fs'
import matter from 'gray-matter';
import RSS from "rss";
import { getMetadata, getCatalogue, getKorean } from '../travel/utils/getData';


console.log('hello world from generateRss! ')

async function generateRss(allPosts) {
  const site_url =
    process.env.NODE_ENV === "production"
    ? 
    "https://newblog-beta.vercel.app/"
    : 
    "http://localhost:3000";

  const feedOptions = {
    title: "생활의 지혜, 현명한 블로그 매거진, 세계 여행 팁, 경험담, 여행 철학",
    description: "즐겁고 뜻깊은 세계여행을 위한 소소한 노하우와 꿀팁을 모은 매거진 입니다",
    site_url: site_url,
    feed_url: `${site_url}/rss.xml`,
    image_url: `${site_url}/icon1.png`,
    pubDate: new Date(),
    copyright: `All rights reserved ${new Date().getFullYear()}`,
  };

  const feed = new RSS(feedOptions);

  // Add each individual post to the feed.
  allPosts.map(catalogue => {
    console.log('catalogue generate rss: ', catalogue)
    catalogue.posts.forEach(post => {
        console.log('post: ', post)
        feed.item({
        title: post.title,
        description: post.excerpt,
        url: `${site_url}/travel/${catalogue.name}/${post.content}`,
        date: post.date,
        });
    });

  // Write the RSS feed to a file as XML.
  fs.writeFileSync("./public/rss.xml", feed.xml({ indent: true }));
})

}


const getPostContent = (catalogue, link) => {
  const folder= `travelData/${catalogue}`;
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
    const catalogueEnglishName = getKorean(catalogue).replace(/ /g, '')
    const postList = getMetadata(catalogueEnglishName)
    console.log('rss postList rss: ', postList);

    const listObject = {
    posts: [], name: catalogueEnglishName
    }
      postList.forEach(post => {
        const content = getPostContent(catalogueEnglishName, post.link)
        listObject.posts.push(content)
      })
    posts.push(listObject)
  })
  // console.log("posts: ", posts)
  await generateRss(posts)
}

generateRSSFeed();

export default generateRSSFeed;