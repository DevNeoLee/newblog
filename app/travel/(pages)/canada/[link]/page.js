import fs from 'fs';
import Markdown from 'markdown-to-jsx';
import matter from 'gray-matter';
import { getMetadata } from '@/app/travel/utils/getData';

const getPostContent = (link) => {
    const folder= 'travelData/캐나다/';
    const file = `${folder}${link}.md`;
    const content = fs.readFileSync(file, 'utf8');
    const matterResult = matter(content);
    return matterResult;
}

export const generateStaticParams = async () => {
    const posts = getMetadata('캐나다');
    console.log('캐나다 posts: ', posts)
    return posts.map(post => ({
        link: post.link,
    }))
}

export default function PostPage(props) {
    const link = props.params.link;
    const post = getPostContent(link);

    return (
        <div className="continentContainer">
          <div className="continentMain">
            <div className="detailTitle"><h1>{post.data.title}</h1></div>
            <Markdown>{post.content}</Markdown>
          </div>
        </div>
      )
    }
