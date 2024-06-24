import fs from "fs";
import RSS from "rss";

console.log('hello world from generateRss! ')

export default async function generateRss(allPosts) {
  const site_url =
    process.env.NODE_ENV === "production"
    ? 
    "https://www.moyahug.com"
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
        console.log('post rss: ', post)
        feed.item({
        title: post.title,
        description: post.excerpt,
        url: `${site_url}/travel/${catalogue.name}/${post.content}`,
        date: post.date,
        });

        // title: "My Website's RSS Feed",
        // description: "Stay up to date with my latest content",
        // id: "http://localhost:3000",
        // link: "http://localhost:3000",
        // language: "en",
        // image: "http://localhost:3000/logo.png",
        // favicon: "http://localhost:3000/favicon.png",
        // author: {
        //   name: "John Doe",
        //   email: "john@example.com",
        //   link: "http://localhost:3000/about",
        // },

    });

  // Write the RSS feed to a file as XML.
  fs.writeFileSync("./public/rss.xml", feed.xml({ indent: true }));
})

}
