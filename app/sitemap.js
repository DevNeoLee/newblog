
import { getCatalogue as getTravelCatalogue, getMetadata as getTravelMetadata, getKorean as getTravelKorean, getPages as getTravelPages } from './travel/utils/getData';
import { getCatalogue as getITCatalogue, getMetadata as getITMetadata, getKorean as getITKorean, getPages as getITPages } from './it/utils/getData';

const site_url = process.env.NODE_ENV === "production" ? "https://moyahug.com" : "http://localhost:3000";

const catalogueTravel = getTravelCatalogue();
const catalogueIT = getITCatalogue();

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

  //add main it page
  urlList.push({
    url: `${site_url}/it`,
    lastModified: new Date(),
    changeFrequency: 'daily',
    priority: 1,
  })

  //add travel continent pages
  catalogueTravel.forEach(continent => {
    urlList.push({
      url: `${site_url}/travel/${continent}`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.9,
    })
  })

    //add it category pages
    catalogueIT.forEach(continent => {
      urlList.push({
        url: `${site_url}/it/${continent}`,
        lastModified: new Date(),
        changeFrequency: 'daily',
        priority: 0.9,
      })
    })


  catalogueTravel.forEach(continent => {
    const trimedKorean = getTravelKorean(continent).split(" ").join("");
    // console.log('continent, trimedKorean: ',continent, trimedKorean)
    const posts = getTravelMetadata(trimedKorean);
    // console.log('posts travel sitemap: ', posts)
    posts.forEach(post => {
      urlList.push({
        url: `${site_url}/travel/${continent}/${post.link}`,
        // lastModified: new Date(),
        lastModified: new Date(post.date),
        changeFrequency: 'daily',
        priority: 0.8,
      })
    })
  })

  catalogueIT.forEach(catalogue => {
    const trimedKorean = getITKorean(catalogue).split(" ").join("");
    // console.log('catalogue, trimedKorean: ',catalogue, trimedKorean)
    const posts = getITMetadata(trimedKorean);
    // console.log('posts it sitemap: ', posts)
    posts.forEach(post => {
      urlList.push({
        url: `${site_url}/it/${catalogue}/${post.link}`,
        // lastModified: new Date(),
        lastModified: new Date(post.date),
        changeFrequency: 'daily',
        priority: 0.8,
      })
    })
  })



  //add detail pages
  const allPages = [...urlList, ...getTravelPages(), ...getITPages()]


  console.log("alll pages sorted: ", allPages.sort(function(a,b){
    return new Date(b.lastModified) - new Date(a.lastModified);
  }))

  // return urlList
  return allPages;
}