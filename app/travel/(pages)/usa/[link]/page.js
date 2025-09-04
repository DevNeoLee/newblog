import { getMetadata, getPostContent } from '@/app/travel/utils/getData';
import Markdown from 'markdown-to-jsx';
import { notFound } from 'next/navigation';
import { formatKoreanDate } from '@/app/utils/functions';
import { generateArticleStructuredData } from '@/app/utils/structuredData';
import { generateArticleMetadata } from '@/app/utils/metadata';
import Breadcrumb from '@/app/components/Breadcrumb';
import RelatedPosts from '@/app/components/RelatedPosts';
import { calculateReadingTime } from '@/app/utils/readingTime';

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

  // Calculate reading time
  const readingTime = calculateReadingTime(post.content);
  
  // Get related posts (other USA posts)
  const allUSAPosts = getMetadata('미국');
  const relatedPosts = allUSAPosts
    .filter(p => p.link !== link)
    .slice(0, 3)
    .map(p => {
      // Get actual content for reading time calculation
      const postContent = getPostContent(p.link, 'usa');
      return {
        ...p,
        section: 'travel',
        category: 'usa',
        href: `/travel/usa/${p.link}`,
        content: postContent.content, // Include actual content
        data: postContent.data // Include data object with subtitle
      };
    });

  // Breadcrumb items
  const breadcrumbItems = [
    { name: '여행', href: '/travel' },
    { name: '미국', href: '/travel/usa' },
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
              <p className="countryDateDetailPage" style={{ margin: 0 }}>
                {formatKoreanDate(post.data.date)}
              </p>
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
          title="다른 미국 여행 글"
        />
    </>
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