// import RSS from "rss"

// export async function GET() {

//     const feed = new RSS({
//         title: '뭐여행 - 세계여행 꿀팁 노하우',
//         description: "즐겁고 뜻깊은 세계여행을 위한 소소한 노하우와 꿀팁을 모은 매거진 입니다.",
//         generator: 'RSS for Node and Next.js',
//         feed_url: 'https://newblog-beta.vercel.app/travel/feed.xml',
//         site_url: 'https://newblog-beta.vercel.app/',
//         copyright: `Copyright ${new Date().getFullYear().toString()}, 뭐여행`,
//         language: 'en-US',
//         pubDate: new Date().toUTCString(),
//         ttl: 60,
//     });

//     return new Response('', {
//         headers: {
//             'Content-Type': 'application/xml; charset=utf-8',
//         },
//     });
// }