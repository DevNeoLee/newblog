import fs from 'fs';
import Markdown from 'markdown-to-jsx';
import matter from 'gray-matter';
import { getMetadata } from '@/app/it/utils/getData';
import { formatKoreanDate } from '@/app/utils/functions';

const getPostContent = (link) => {
    const folder= 'dataIT/코딩';
    const file = `${folder}/${link}.md`;
    const content = fs.readFileSync(file, 'utf8');
    const matterResult = matter(content);
    return matterResult;
}

export const generateStaticParams = async () => {
    const posts = getMetadata('코딩');

    return posts.map(post => ({
        link: post.link,
    }))
}

export default async function PostPage({ params }) {
  const resolvedParams = await params;
  const link = resolvedParams.link;
  const post = getPostContent(link);

  return (
      <div className="continentContainer">
        <div className="continentMain">
         <div className="detailTitle"><h1>{post.data.title}</h1></div>
          <p className="countryDateDetailPage" >{formatKoreanDate(post.data.date)}</p>
          <Markdown>{post.content}</Markdown>
        </div>
      </div>
  )
}

export async function generateMetadata({ params, searchParams }) {
  const resolvedParams = await params;
  const details = getPostContent(resolvedParams.link);

  return { 
    title: details.data.title,
    description: details.content.slice(1, 175),   
    alternates: {
        canonical: 'https://moyahug.com/it/coding/' + resolvedParams.link,
    }
  };
}