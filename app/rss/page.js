import fs from 'fs'
import RSS from "rss";
import { getMetadata as getTravelMetadata, getCatalogue as getTravelCatalogue, getKorean as getTravelKorean } from '../travel/utils/getData';
import { getMetadata as getITMetadata, getCatalogue as getITCatalogue, getKorean as getITKorean } from '../it/utils/getData';

// 날짜 유효성 검사 및 ISO 형식 변환 함수
function formatDateForRSS(dateString) {
  try {
    const date = new Date(dateString);
    // 유효한 날짜인지 확인
    if (isNaN(date.getTime())) {
      console.warn(`Invalid date for RSS: ${dateString}, using current date`);
      return new Date();
    }
    return date;
  } catch (error) {
    console.warn(`Error parsing date for RSS: ${dateString}, using current date`);
    return new Date();
  }
}

async function generateRss(posts) {
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
  posts.forEach(post => {
    feed.item({
    title: post.title,
    description: post.subtitle,
    url: `${site_url}/${post.type}/${post.category}/${post.link}`,
    date: formatDateForRSS(post.date),
    });
  });
  
  // Write the RSS feed to a file as XML.
  fs.writeFileSync("./public/rss.xml", feed.xml({ indent: true }));
}

const generateRSSFeed = async () => {
  const cataloguesTravel = getTravelCatalogue();
  const cataloguesIT = getITCatalogue();

  const posts= [];

  cataloguesTravel?.forEach(catalogue => {
    const catalogueTravelKoreanName = getTravelKorean(catalogue).replace(/ /g, '')
    let postTravelList = getTravelMetadata(catalogueTravelKoreanName)

    const updatedTravelPostList = postTravelList.map(list => ({...list, category: catalogue, type: "travel"}));

    updatedTravelPostList.forEach(list => posts.push(list))

  })

  cataloguesIT?.forEach(catalogue => {
    const catalogueITKoreanName = getITKorean(catalogue).replace(/ /g, '')
    let postITList = getITMetadata(catalogueITKoreanName)

    const updatedITPostList = postITList.map(list => ({...list, category: catalogue, type: "it"}));

    updatedITPostList.forEach(list => posts.push(list))
  })

  await generateRss(posts.sort(function(a,b){
    return new Date(b.date) - new Date(a.date)}))
}

generateRSSFeed();

export default generateRSSFeed;