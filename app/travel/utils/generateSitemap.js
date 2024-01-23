const fs = require('fs');
const Sitemap = require('sitemap');

const generateSitemap = () => {
  const articles = fs.readdirSync('./travelData').map(foldername => 
    foldername.map(filename => ({
    url: `/travel/${foldername}/${filename.replace('.md', '')}`,  // Adjust the path as needed
    changefreq: 'daily',  // Modify as per your content update frequency
    priority: 0.7,        // Adjust priority based on importance
  })));

  const sitemap = Sitemap.createSitemap({
    hostname: 'https://newblog-beta.vercel.app/',
    urls: [
      { url: '/', changefreq: 'daily', priority: 1.0 },
      ...articles,
    ],
  });

  fs.writeFileSync('public/sitemap.xml', sitemap.toString());
};

module.exports = generateSitemap;
