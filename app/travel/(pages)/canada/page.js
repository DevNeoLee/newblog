
import Link from 'next/link'
import { getMetadata } from '@/app/travel/utils/getData'; 
import { formatKoreanDate } from '@/app/utils/functions';
import { generateCollectionPageStructuredData } from '@/app/utils/structuredData';

export default function CanadaHome() {
  const metaInfo = getMetadata('캐나다');
  return (
    <div className="continentContainer">
      <div className="continentCategory">
        <h1>캐나다 </h1>
      </div>
      <div className="mainPagePrologues">
          {metaInfo.map((post, id) => (
            <Link href={`canada/${post.link}`} key={id}>

              <div className="countryCard" key={id}>
                <div className="countryImage" style={{ backgroundColor: post.color}}></div>
                <h2 className="countryTitle" >{ post.title.length > 60 ? post.title.slice(0, 60) + "..." : post.title} </h2>
                <p className="countryDate" >{formatKoreanDate(post.date)}</p>
                <div className="countryParagraph" >
                  <p className="countrySubtitle" >{post.subtitle}</p>
                </div>
              </div>
            </Link>
          ))}
      </div>
  </div>
  )
}

export async function generateMetadata() {
  const metaInfo = getMetadata('캐나다');
  
  const structuredData = generateCollectionPageStructuredData(
    'canada', 
    metaInfo, 
    '캐나다'
  );

  return {
    title: '캐나다 꿀팁 - Moyahug',
    description: '캐나다 배낭 여행 꿀팁 및 주의 사항, 가이드 등, 최신자료를 엄선하여 소개합니다. 벤쿠버, 캘거리, 토론토, 나이아가라 폭포, 록키 산맥, 오타와, 천섬, 로컬',
    alternates: {
      canonical: 'https://moyahug.com/travel/canada/',
    },
    openGraph: {
      title: '캐나다 꿀팁 - Moyahug',
      description: '캐나다 배낭 여행 꿀팁 및 주의 사항, 가이드 등, 최신자료를 엄선하여 소개합니다.',
      type: 'website',
      url: 'https://moyahug.com/travel/canada/',
      siteName: 'Moyahug',
      images: [
        {
          url: 'https://moyahug.com/icon1.png',
          width: 1200,
          height: 630,
          alt: 'Moyahug - 캐나다 꿀팁',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: '캐나다 꿀팁 - Moyahug',
      description: '캐나다 배낭 여행 꿀팁 및 주의 사항, 가이드 등, 최신자료를 엄선하여 소개합니다.',
      images: ['https://moyahug.com/icon1.png'],
    },
    other: {
      'application/ld+json': JSON.stringify(structuredData),
    },
  };
}
