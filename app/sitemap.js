
import { getCatalogue as getTravelCatalogue, getMetadata as getTravelMetadata, getKorean as getTravelKorean, getPages as getTravelPages } from './travel/utils/getData';
import { getCatalogue as getITCatalogue, getMetadata as getITMetadata, getKorean as getITKorean, getPages as getITPages } from './it/utils/getData';

const site_url = process.env.NODE_ENV === "production" ? "https://moyahug.com" : "http://localhost:3000";

const catalogueTravel = getTravelCatalogue();
const catalogueIT = getITCatalogue();

// 날짜 유효성 검사 및 ISO 형식 변환 함수
function formatDateForSitemap(dateString) {
  try {
    const date = new Date(dateString);
    // 유효한 날짜인지 확인
    if (isNaN(date.getTime())) {
      console.warn(`Invalid date: ${dateString}, using current date`);
      return new Date().toISOString();
    }
    return date.toISOString();
  } catch (error) {
    console.warn(`Error parsing date: ${dateString}, using current date`);
    return new Date().toISOString();
  }
}

const urlList = [];

export default function getSitemap() {
  //add main home page
  urlList.push({
    url: `${site_url}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'daily',
    priority: 1,
  })

  //add main travel page
  urlList.push({
    url: `${site_url}/travel`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'daily',
    priority: 1,
  })

  //add main it page
  urlList.push({
    url: `${site_url}/it`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'daily',
    priority: 1,
  })

  //add legal pages
  urlList.push({
    url: `${site_url}/about`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'monthly',
    priority: 0.7,
  })

  urlList.push({
    url: `${site_url}/privacy`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'monthly',
    priority: 0.5,
  })

  urlList.push({
    url: `${site_url}/terms`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'monthly',
    priority: 0.5,
  })

  //add travel continent pages
  catalogueTravel.forEach(continent => {
    urlList.push({
      url: `${site_url}/travel/${continent}`,
      lastModified: new Date().toISOString(),
      changeFrequency: 'daily',
      priority: 0.9,
    })
  })

  //add it category pages
  catalogueIT.forEach(continent => {
    urlList.push({
      url: `${site_url}/it/${continent}`,
      lastModified: new Date().toISOString(),
      changeFrequency: 'daily',
      priority: 0.9,
    })
  })

  //add all travel posts
  catalogueTravel.forEach(continent => {
    const trimedKorean = getTravelKorean(continent).split(" ").join("");
    const posts = getTravelMetadata(trimedKorean);
    posts.forEach(post => {
      urlList.push({
        url: `${site_url}/travel/${continent}/${post.link}`,
        lastModified: formatDateForSitemap(post.date),
        changeFrequency: 'weekly',
        priority: 0.8,
      })
    })
  })

  //add all IT posts
  catalogueIT.forEach(catalogue => {
    const trimedKorean = getITKorean(catalogue).split(" ").join("");
    const posts = getITMetadata(trimedKorean);
    posts.forEach(post => {
      urlList.push({
        url: `${site_url}/it/${catalogue}/${post.link}`,
        lastModified: formatDateForSitemap(post.date),
        changeFrequency: 'weekly',
        priority: 0.8,
      })
    })
  })

  return urlList.sort(function(a,b){
    return new Date(b.lastModified) - new Date(a.lastModified);
  });
}