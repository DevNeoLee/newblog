
import { getMetadata as getTravelMetadata, getCatalogue as getTravelCatalogue, getKorean as getTravelKorean } from './travel/utils/getData';
import { getMetadata as getITMetadata, getCatalogue as getITCatalogue, getKorean as getITKorean } from './it/utils/getData';

const site_url = 'https://moyahug.com'

function formatDateForSitemap(date) {
  return new Date(date).toISOString();
}

export default function sitemap() {
  const urlList = [];

  // 메인 페이지들
  urlList.push({
    url: site_url,
    lastModified: new Date().toISOString(),
    changeFrequency: 'daily',
    priority: 1.0,
  })

  urlList.push({
    url: `${site_url}/travel`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'weekly',
    priority: 0.9,
  })

  urlList.push({
    url: `${site_url}/it`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'weekly',
    priority: 0.9,
  })

  urlList.push({
    url: `${site_url}/about`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'monthly',
    priority: 0.7,
  })

  urlList.push({
    url: `${site_url}/privacy`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'yearly',
    priority: 0.5,
  })

  urlList.push({
    url: `${site_url}/terms`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'yearly',
    priority: 0.5,
  })

  // 여행 카테고리 페이지들
  const catalogueTravel = getTravelCatalogue();
  catalogueTravel.forEach(continent => {
    urlList.push({
      url: `${site_url}/travel/${continent}`,
      lastModified: new Date().toISOString(),
      changeFrequency: 'weekly',
      priority: 0.8,
    })
  })

  // IT 카테고리 페이지들
  const catalogueIT = getITCatalogue();
  catalogueIT.forEach(catalogue => {
    urlList.push({
      url: `${site_url}/it/${catalogue}`,
      lastModified: new Date().toISOString(),
      changeFrequency: 'weekly',
      priority: 0.8,
    })
  })

  // 모든 여행 글들
  catalogueTravel.forEach(continent => {
    const trimedKorean = getTravelKorean(continent).split(" ").join("");
    const posts = getTravelMetadata(trimedKorean);
    posts.forEach(post => {
      urlList.push({
        url: `${site_url}/travel/${continent}/${post.link}`,
        lastModified: formatDateForSitemap(post.date),
        changeFrequency: 'monthly',
        priority: 0.7,
      })
    })
  })

  // 모든 IT 글들
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