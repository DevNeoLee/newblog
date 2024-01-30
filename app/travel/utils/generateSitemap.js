import { createSitemap } from 'sitemap';

export default async function makeSitemap(allPosts) {
  const site_url =
    process.env.NODE_ENV === "production"
      ? "https://newblog-beta.vercel.app/"
      : "http://localhost:3000";

  const mapOptions = {
    hostname: site_url,
    cacheTime: 600000,
    urls: allPosts
  };

  const sitemap = await createSitemap(mapOptions).toString();

  return {'Content-Type': 'application/xml', sitemap}

}
