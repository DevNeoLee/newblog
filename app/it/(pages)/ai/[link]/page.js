import fs from 'fs';
import Markdown from 'markdown-to-jsx';
import matter from 'gray-matter';
import { getMetadata } from '@/app/it/utils/getData';
import { formatKoreanDate } from '@/app/utils/functions';
import { generateITPageMetadata } from '@/app/it/utils/metadataGenerator';

const getPostContent = (link) => {
    const folder= 'dataIT/인공지능';
    const file = `${folder}/${link}.md`;
    const content = fs.readFileSync(file, 'utf8');
    const matterResult = matter(content);
    return matterResult;
}

export const generateStaticParams = async () => {
    const posts = getMetadata('인공지능');

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
  return generateITPageMetadata(resolvedParams.link, 'ai');
}