import fs from 'fs'
import RSS from "rss";
import { getMetadata as getTravelMetadata, getCatalogue as getTravelCatalogue, getKorean as getTravelKorean } from '../travel/utils/getData';
import { getMetadata as getITMetadata, getCatalogue as getITCatalogue, getKorean as getITKorean } from '../it/utils/getData';


async function generateRss(allPostsTravel, allPostsIT) {
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

  // Add each travel individual post to the feed.
  allPostsTravel.forEach(post => {
    feed.item({
    title: post.title,
    description: post.subtitle,
    url: `${site_url}/travel/${post.category}/${post.link}`,
    date: post.date,
    });
  });

  // Add each it individual post to the feed.
  allPostsIT.forEach(post => {
    feed.item({
    title: post.title,
    description: post.subtitle,
    url: `${site_url}/it/${post.category}/${post.link}`,
    date: post.date,
    });
  });
  
  // Write the RSS feed to a file as XML.
  fs.writeFileSync("./public/rss.xml", feed.xml({ indent: true }));
}

const generateRSSFeed = async () => {
  const cataloguesTravel = getTravelCatalogue();
  const cataloguesIT = getITCatalogue();
  console.log('rss catalogues rss: ', cataloguesTravel, cataloguesIT);

  const postsTravel = [];
  const postsIT = [];

  cataloguesTravel?.forEach(catalogue => {
    const catalogueTravelKoreanName = getTravelKorean(catalogue).replace(/ /g, '')
    let postTravelList = getTravelMetadata(catalogueTravelKoreanName)
    console.log('rss travel catalogue: ', catalogueTravelKoreanName, catalogue);

    const updatedTravelPostList = postTravelList.map(list => ({...list, category: catalogue}));

    updatedTravelPostList.forEach(list => postsTravel.push(list))

  })

  cataloguesIT?.forEach(catalogue => {
    const catalogueITKoreanName = getITKorean(catalogue).replace(/ /g, '')
    let postITList = getITMetadata(catalogueITKoreanName)
    console.log('rss IT catalogue: ', catalogueITKoreanName, catalogue);

    const updatedITPostList = postITList.map(list => ({...list, category: catalogue}));

    updatedITPostList.forEach(list => postsIT.push(list))
  })

  console.log('!!postsTravel: ', postsTravel)
  console.log('!!postsIT: ', postsIT)


  await generateRss(postsTravel.sort(function(a,b){
    return new Date(b.date) - new Date(a.date)}), postsIT.sort(function(a,b){
      return new Date(b.date) - new Date(a.date)}))
}

generateRSSFeed();

export default generateRSSFeed;