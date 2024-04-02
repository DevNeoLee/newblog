
import { getCatalogue, getMetadata, getKorean } from './travel/utils/getData';

const site_url = process.env.NODE_ENV === "production" ? "https://moyahug.com" : "http://localhost:3000";

const catalogue = getCatalogue();

const urlList = [];

export default function getSitemap() {
   //add main home page
   urlList.push({
    url: `${site_url}`,
    lastModified: new Date(),
    changeFrequency: 'daily',
    priority: 1,
  })

  //add main travel page
  urlList.push({
    url: `${site_url}/travel`,
    lastModified: new Date(),
    changeFrequency: 'daily',
    priority: 1,
  })

  //add continent pages
  catalogue.forEach(continent => {
    urlList.push({
      url: `${site_url}/travel/${continent}`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.9,
    })
  })

  //add detail pages
  catalogue.forEach(continent => {
    const trimedKorean = getKorean(continent).split(" ").join("");
    // console.log('continent, trimedKorean: ',continent, trimedKorean)
    const posts = getMetadata(trimedKorean);
    // console.log('posts: ', posts)
    posts.forEach(post => {
      urlList.push({
        url: `${site_url}/travel/${continent}/${post.link}`,
        lastModified: new Date(),
        changeFrequency: 'daily',
        priority: 0.8,
      })
    })
  })

  return urlList
}