import fs from 'fs';
import Markdown from 'markdown-to-jsx';
import matter from 'gray-matter';
import { getMetadata } from '@/app/it/utils/getData';
import { formatKoreanDate } from '@/app/utils/functions';
import Breadcrumb from '@/app/components/Breadcrumb';
import RelatedPosts from '@/app/components/RelatedPosts';
import { calculateReadingTime } from '@/app/utils/readingTime';

const getPostContent = (link) => {
    const folder= 'dataIT/uiux';
    const file = `${folder}/${link}.md`;
    const content = fs.readFileSync(file, 'utf8');
    const matterResult = matter(content);
    return matterResult;
}

export const generateStaticParams = async () => {
    const posts = getMetadata('uiux');

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
  
  // Get related posts (other UI/UX posts)
  const allUIUXPosts = getMetadata('uiux');
  const relatedPosts = allUIUXPosts
    .filter(p => p.link !== link)
    .slice(0, 3)
    .map(p => {
      // Get actual content for reading time calculation
      const postContent = getPostContent(p.link);
      return {
        ...p,
        href: `/it/uiux/${p.link}`,
        content: postContent.content, // Include actual content
        data: postContent.data // Include data object with subtitle
      };
    });

  // Breadcrumb items
  const breadcrumbItems = [
    { name: 'IT', href: '/it' },
    { name: 'UI/UX', href: '/it/uiux' },
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
          <Markdown>{post.content}</Markdown>
        </div>
      </div>
      
      {/* Related Posts - Outside main content frame */}
      <RelatedPosts 
        posts={relatedPosts}
        currentPostId={link}
        title="다른 UI/UX 글"
      />
    </>
  )
}

export async function generateMetadata({ params, searchParams }) {
  const resolvedParams = await params;
  const link = resolvedParams.link;
  const details = getPostContent(link);

  return { 
    title: details.data.title,
    description: details.content.slice(1, 175),   
    alternates: {
        canonical: 'https://moyahug.com/it/uiux/' + link,
    }
  };
}