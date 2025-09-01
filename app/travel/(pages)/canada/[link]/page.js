import { getMetadata, getPostContent } from '@/app/travel/utils/getData';
import Markdown from 'markdown-to-jsx';
import { notFound } from 'next/navigation';
import { formatDateLong, cleanMarkdownContent } from '@/app/utils/functions';
import { generateArticleStructuredData } from '@/app/utils/structuredData';

export const generateStaticParams = async () => {
    try {
        const posts = getMetadata('캐나다');
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
  const post = getPostContent(link, 'canada');

  if (!post) {
    notFound();
  }

  return (
      <div className="continentContainer">
          <div className="continentMain">
            <div className="detailTitle"><h1>{post.data.title}</h1></div>
            <p className="countryDateDetailPage">{formatDateLong(post.data.date)}</p>
            <article>
              <Markdown 
                options={{
                  forceBlock: true,
                  overrides: {
                    a: {
                      component: 'a',
                      props: {
                        className: 'linkBold',
                        style: { color: '#006dd7' }
                      }
                    },
                    span: {
                      component: 'span'
                    },
                    p: {
                      component: 'p'
                    }
                  }
                }}
              >
                {cleanMarkdownContent(post.content)}
              </Markdown>
            </article>
          </div>
        </div>
  )
}

export async function generateMetadata({ params, searchParams }) {
  const resolvedParams = await params;
  const link = resolvedParams.link;
  const details = getPostContent(link, 'canada');

  if (!details) {
    return {
      title: '페이지를 찾을 수 없습니다',
      description: '요청하신 페이지를 찾을 수 없습니다.',
    };
  }

  // Generate structured data for the article
  const structuredData = generateArticleStructuredData(details, link, 'canada');

  return { 
    title: details.data.title,
    description: details.data.subtitle || details.content.slice(1, 175),   
    alternates: {
      canonical: `https://moyahug.com/travel/canada/${link}`,
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
    other: {
      'application/ld+json': JSON.stringify(structuredData),
    },
  };
}