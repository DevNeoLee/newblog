import fs from "fs";
import RSS from "rss";

export default async function generateRss(allPosts) {
  const site_url =
    process.env.NODE_ENV === "production"
      ? "https://newblog-beta.vercel.app/"
      : "http://localhost:3000";

  const feedOptions = {
    title: "생활의 지혜, 현명한 블로그 매거진은 여행, 수필, 경험담, 썰, 주식, 투자  | RSS Feed Title",
    description: "생활의 지혜, 현명한 블로그 매거진은 여행, 수필, 경험담, 썰, 주식, 투자 | RSS FEED Description!",
    site_url: site_url,
    feed_url: `${site_url}/rss.xml`,
    image_url: `${site_url}/icon.png`,
    pubDate: new Date(),
    copyright: `All rights reserved ${new Date().getFullYear()}`,
  };

  const feed = new RSS(feedOptions);

  // Add each individual post to the feed.
  allPosts.map(catalogue => {
    console.log('catalogue: ', catalogue)
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
