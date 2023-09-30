import fs from 'fs';
import Markdown from 'markdown-to-jsx';
import matter from 'gray-matter';
import { getMetadata } from '@/app/travel/utils/getData';

const getPostContent = (title) => {
    const folder= 'travelData/europe';
    const file = `${folder}/${title}.md`;
    const content = fs.readFileSync(file, 'utf8');
    const matterResult = matter(content);
    return matterResult;
}

export const generateStaticParams = async () => {
    const posts = getMetadata('europe');
    console.log('europe: ', posts)
    return posts.map(post => ({
        title: post.title,
    }))
}

export default function PostPage(props) {
    const title = props.params.title;
    const post = getPostContent(title);

  return (
    <div className="detailContainer">
      <div className="detailMain">
        <div className="detailTitle"><h1>{post.data.title}</h1></div>
        <Markdown>{post.content}</Markdown>
      </div>
    </div>
  )
}
