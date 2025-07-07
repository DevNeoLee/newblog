import { getMetadata, getPostContent, generateStructuredData } from '@/app/travel/utils/getData';
import Markdown from 'markdown-to-jsx';
import { notFound } from 'next/navigation';
import { formatKoreanDate } from '@/app/utils/functions';

export const generateStaticParams = async () => {
    try {
        const posts = getMetadata('유럽');
        return posts.map(post => ({
            link: post.link,
        }))
    } catch (error) {
        console.error('Error generating static params:', error);
        return [];
    }
}

export default async function PostPage(props) {
  const link = props.params.link;
  const post = getPostContent(link, 'europe');

  if (!post) {
    notFound();
  }

  const structuredData = generateStructuredData(post, link, 'europe');

  return (
      <>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData)
          }}
        />
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

export function generateMetadata({ params, searchParams }) {
  const details = getPostContent(params.link, 'europe');

  if (!details) {
    return {
      title: '페이지를 찾을 수 없습니다',
      description: '요청하신 페이지를 찾을 수 없습니다.',
    };
  }

  return { 
    title: details.data.title,
    description: details.data.subtitle || details.content.slice(1, 175),   
    alternates: {
      canonical: `https://moyahug.com/travel/europe/${params.link}`,
    },
    openGraph: {
      title: details.data.title,
      description: details.data.subtitle || details.content.slice(1, 175),
      type: 'article',
      publishedTime: details.data.date,
      modifiedTime: details.data.date,
      authors: ['생활의 지혜'],
      images: [
        {
          url: 'https://moyahug.com/icon1.png',
          width: 512,
          height: 512,
          alt: '생활의 지혜',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: details.data.title,
      description: details.data.subtitle || details.content.slice(1, 175),
      images: ['https://moyahug.com/icon1.png'],
    },
  };
}