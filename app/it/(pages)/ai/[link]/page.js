import fs from 'fs';
import Markdown from 'markdown-to-jsx';
import matter from 'gray-matter';
import { getMetadata } from '@/app/it/utils/getData';
import { formatKoreanDate } from '@/app/utils/functions';
import { generateITPageMetadata } from '@/app/it/utils/metadataGenerator';
import Breadcrumb from '@/app/components/Breadcrumb';
import RelatedPosts from '@/app/components/RelatedPosts';
import { calculateReadingTime } from '@/app/utils/readingTime';

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

  // Calculate reading time
  const readingTime = calculateReadingTime(post.content);
  
  // Get related posts (other AI posts)
  const allAIPosts = getMetadata('인공지능');
  const relatedPosts = allAIPosts
    .filter(p => p.link !== link)
    .slice(0, 3)
    .map(p => {
      // Get actual content for reading time calculation
      const postContent = getPostContent(p.link);
      return {
        ...p,
        section: 'it',
        category: 'ai',
        href: `/it/ai/${p.link}`,
        content: postContent.content, // Include actual content
        data: postContent.data // Include data object with subtitle
      };
    });

  // Breadcrumb items
  const breadcrumbItems = [
    { name: 'IT', href: '/it' },
    { name: '인공지능', href: '/it/ai' },
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
          
          <Markdown>{post.content}</Markdown>
        </div>
      </div>
      
      {/* Related Posts - Outside main content frame */}
      <RelatedPosts 
        posts={relatedPosts}
        currentPostId={link}
        title="다른 인공지능 글"
      />
    </>
  )
}

export async function generateMetadata({ params, searchParams }) {
  const resolvedParams = await params;
  return generateITPageMetadata(resolvedParams.link, 'ai');
}