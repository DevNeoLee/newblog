import { getMetadata, getPostContent } from '@/app/it/utils/getData';
import Markdown from 'markdown-to-jsx';
import { notFound } from 'next/navigation';
import { formatKoreanDate } from '@/app/utils/functions';
import { generateArticleStructuredData } from '@/app/utils/structuredData';
import { generateITArticleMetadata } from '@/app/utils/metadata';

export const generateStaticParams = async () => {
    try {
        const posts = getMetadata('IT철학');
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
  const post = getPostContent(link, 'thought');

  if (!post) {
    notFound();
  }

  return (
    <>
      {/* Ensure metadata is properly structured for Next.js 15 */}
      <div className="continentContainer">
          <div className="continentMain">
            <div className="detailTitle"><h1>{post.data.title}</h1></div>
            <p className="countryDateDetailPage">{formatKoreanDate(post.data.date)}</p>
            <article>
              <Markdown>{post.content}</Markdown>
            </article>
          </div>
        </div>
    </>
  )
}

export async function generateMetadata({ params, searchParams }) {
  try {
    const resolvedParams = await params;
    const link = resolvedParams.link;
    
    // Ensure we have a valid link parameter
    if (!link) {
      return {
        title: '페이지를 찾을 수 없습니다 | Moyahug',
        description: '요청하신 페이지를 찾을 수 없습니다.',
        robots: {
          index: false,
          follow: false,
        },
      };
    }

    const details = getPostContent(link, 'thought');

    if (!details || !details.data) {
      return {
        title: '페이지를 찾을 수 없습니다 | Moyahug',
        description: '요청하신 페이지를 찾을 수 없습니다.',
        robots: {
          index: false,
          follow: false,
        },
      };
    }

    // Generate structured data for the article
    const structuredData = generateArticleStructuredData(details, link, 'thought', 'it');

    // Generate standardized metadata with additional safeguards
    const metadata = generateITArticleMetadata(details, link, 'thought', structuredData);
    
    // Ensure metadata is properly formatted for Next.js
    return {
      ...metadata,
      // Add explicit metadataBase to prevent streaming issues
      metadataBase: new URL('https://moyahug.com'),
      // Ensure proper title template
      title: {
        default: metadata.title,
        template: '%s | Moyahug'
      },
    };
  } catch (error) {
    console.error('Error generating metadata for IT thought page:', error);
    return {
      title: '페이지 오류 | Moyahug',
      description: '페이지를 불러오는 중 오류가 발생했습니다.',
      robots: {
        index: false,
        follow: false,
      },
      metadataBase: new URL('https://moyahug.com'),
    };
  }
}
 
