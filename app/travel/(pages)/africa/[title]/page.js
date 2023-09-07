import fs from 'fs';
import Markdown from 'markdown-to-jsx';
import matter from 'gray-matter';
import getMetadata from '@/app/travel/utils/getMetadata';

const getPostContent = (title) => {
    const folder= 'travelData/africa';
    const file = `${folder}/${title}.md`;
    const content = fs.readFileSync(file, 'utf8');
    const matterResult = matter(content);
    return matterResult;
}

export const generateStaticParams = async () => {
    const posts = getMetadata('africa');
    console.log('africa: ', posts)
    return posts.map(post => ({
        title: post.title,
    }))
}

export default function PostPage(props) {
    const title = props.params.title;
    const post = getPostContent(title);

  return (
    <div>
        <h2>{post.data.title}</h2>
        <h1>{post.data.title}</h1>
        <Markdown>{post.content}</Markdown>
    </div>
  )
}
