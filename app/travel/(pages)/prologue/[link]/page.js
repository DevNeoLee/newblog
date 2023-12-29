import fs from 'fs';
import Markdown from 'markdown-to-jsx';
import matter from 'gray-matter';
import { getMetadata } from '@/app/travel/utils/getData';

const getPostContent = (link) => {
    const folder= 'travelData/나를찾는세계여행';
    const file = `${folder}/${link}.md`;
    const content = fs.readFileSync(file, 'utf8');
    const matterResult = matter(content);
    return matterResult;
}

export const generateStaticParams = async () => {
    const posts = getMetadata('나를찾는세계여행');
    console.log('나를찾는세계여행: ', posts)
    return posts.map(post => ({
        link: post.link,
    }))
}

export default async function PostPage(props) {
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

export function generateMetadata({ params, searchParams }) {
  const details = getPostContent(params.link);

  return { 
    title: details.data.title,
    description: details.content.slice(1, 175)
  };
}