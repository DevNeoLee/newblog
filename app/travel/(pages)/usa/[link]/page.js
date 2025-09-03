import { getMetadata, getPostContent } from '@/app/travel/utils/getData';
import Markdown from 'markdown-to-jsx';
import { notFound } from 'next/navigation';
import { formatKoreanDate } from '@/app/utils/functions';
import { generateArticleStructuredData } from '@/app/utils/structuredData';
import { generateArticleMetadata } from '@/app/utils/metadata';

export const generateStaticParams = async () => {
    try {
        const posts = getMetadata('미국');
        return posts.map(post => ({
            link: post.link,
        }))
    } catch (error) {
        console.error('Error generating static params:', error);
        return [];
    }
}

export default async function PostPage({ params }) {
  const resolvedParams = await params;
  const link = resolvedParams.link;
  const post = getPostContent(link, 'usa');

  if (!post) {
    notFound();
  }

  return (
      <div className="continentContainer">
          <div className="continentMain">
            <div className="detailTitle"><h1>{post.data.title}</h1></div>
            <p className="countryDateDetailPage">{formatKoreanDate(post.data.date)}</p>
            <article>
              <Markdown>{post.content}</Markdown>
            </article>
          </div>
        </div>
  )
}

export async function generateMetadata({ params, searchParams }) {
  const resolvedParams = await params;
  const link = resolvedParams.link;
  const details = getPostContent(link, 'usa');

  if (!details) {
    return {
      title: '페이지를 찾을 수 없습니다',
      description: '요청하신 페이지를 찾을 수 없습니다.',
    };
  }

  // Generate structured data for the article
  const structuredData = generateArticleStructuredData(details, link, 'usa', 'travel');

  // Generate standardized metadata
  return generateArticleMetadata(details, link, 'usa', structuredData);
}