import fs from 'fs';
import Markdown from 'markdown-to-jsx';
import matter from 'gray-matter';
import { getMetadata } from '@/app/travel/utils/getData';

const getPostContent = (title) => {
    const folder= 'travelData/prologue';
    const file = `${folder}/${title}.md`;
    const content = fs.readFileSync(file, 'utf8');
    const matterResult = matter(content);
    return matterResult;
}

export const generateStaticParams = async () => {
    const posts = getMetadata('prologue');
    console.log('prologue: ', posts)
    return posts.map(post => ({
        title: post.title,
    }))
}

export default function PostPage(props) {
    const title = props.params.title;
    const post = getPostContent(title);

    return (
        <div className="countryContainer">
          <div className="detailMain">
            <div className="detailTitle">{post.data.title}</div>
            <Markdown>{post.content}</Markdown>
          </div>
        </div>
  )
}
