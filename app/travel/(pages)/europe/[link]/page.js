import fs from 'fs';
import Markdown from 'markdown-to-jsx';
import matter from 'gray-matter';
import { getMetadata } from '@/app/travel/utils/getData';
import { formatKoreanDate } from '@/app/utils/functions';

const getPostContent = (link) => {
    const folder= 'dataTravel/유럽';
    const file = `${folder}/${link}.md`;
    const content = fs.readFileSync(file, 'utf8');
    const matterResult = matter(content);
    return matterResult;
}

export const generateStaticParams = async () => {
    const posts = getMetadata('유럽');
    console.log('유럽: ', posts)
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
          <p className="countryDateDetailPage" >{formatKoreanDate(post.data.date)}</p>
          <Markdown>{post.content}</Markdown>
        </div>
      </div>
  )
}

export function generateMetadata({ params, searchParams }) {
  const details = getPostContent(params.link);

  return { 
    title: details.data.title,
    description: details.content.slice(1, 175),   
    alternates: {
        canonical: 'https://moyahug.com/travel/europe/' + params.link,
    }
  };
}