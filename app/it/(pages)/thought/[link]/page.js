import { getMetadata, getPostContent } from '@/app/it/utils/getData';
import Markdown from 'markdown-to-jsx';
import { notFound } from 'next/navigation';
import { formatKoreanDate } from '@/app/utils/functions';
import { generateArticleStructuredData } from '@/app/utils/structuredData';
import { generateITArticleMetadata } from '@/app/utils/metadata';
import Breadcrumb from '@/app/components/Breadcrumb';
import RelatedPosts from '@/app/components/RelatedPosts';
import { calculateReadingTime } from '@/app/utils/readingTime';

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

  // Calculate reading time
  const readingTime = calculateReadingTime(post.content);
  
  // Get related posts (other IT thought posts)
  const allThoughtPosts = getMetadata('IT철학');
  const relatedPosts = allThoughtPosts
    .filter(p => p.link !== link)
    .slice(0, 3)
    .map(p => {
      // Get actual content for reading time calculation
      const postContent = getPostContent(p.link, 'thought');
      return {
        ...p,
        href: `/it/thought/${p.link}`,
        content: postContent.content, // Include actual content
        data: postContent.data // Include data object with subtitle
      };
    });

  // Breadcrumb items
  const breadcrumbItems = [
    { name: 'IT', href: '/it' },
    { name: 'IT철학', href: '/it/thought' },
    { name: post.data.title }
  ];

  return (
    <>
      {/* Breadcrumb Navigation - Outside main content frame */}
      <Breadcrumb items={breadcrumbItems} />
      
      <div className="continentContainer">
          <div className="continentMain">
            <div className="detailTitle"><h1>{post.data.title}</h1></div>
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom: '20px',
              fontSize: '14px',
              color: '#666'
            }}>
              <p className="countryDateDetailPage" style={{ margin: 0 }}>{formatKoreanDate(post.data.date)}</p>
              <span>읽는 시간: {readingTime.text}</span>
            </div>
            <article>
              <Markdown>{post.content}</Markdown>
            </article>
          </div>
        </div>
        
        {/* Related Posts - Outside main content frame */}
        <RelatedPosts 
          posts={relatedPosts}
          currentPostId={link}
          title="다른 IT철학 글"
        />
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
 
