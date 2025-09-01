
import Link from 'next/link'
import { getMetadata } from '@/app/travel/utils/getData'; 
import { formatKoreanDate } from '@/app/utils/functions';
import { generateCollectionPageStructuredData } from '@/app/utils/structuredData';

export default function 아프리카(props) {
  const metaInfo = getMetadata('아프리카');
  return (
    <div className="continentContainer">
      <div className="continentCategory">
        <h1>아프리카 </h1>
      </div>
      <div className="mainPagePrologues">
          {metaInfo.map((post, id) => (
            <Link href={`africa/${post.link}`} key={id}>
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
  const metaInfo = getMetadata('아프리카');
  
  const structuredData = generateCollectionPageStructuredData(
    'africa', 
    metaInfo, 
    '아프리카'
  );

  return {
    title: '아프리카 꿀팁 가이드 - Moyahug',
    description: '아프리카 배낭 여행 현지 꿀팁 및 주의 사항, 가이드 등, 최신자료를 엄선하여 소개합니다. 케냐, 사우스아프리카, 사파리, 로컬',
    alternates: {
      canonical: 'https://moyahug.com/travel/africa/',
    },
    openGraph: {
      title: '아프리카 꿀팁 가이드 - Moyahug',
      description: '아프리카 배낭 여행 현지 꿀팁 및 주의 사항, 가이드 등, 최신자료를 엄선하여 소개합니다.',
      type: 'website',
      url: 'https://moyahug.com/travel/africa/',
      siteName: 'Moyahug',
      images: [
        {
          url: 'https://moyahug.com/icon1.png',
          width: 1200,
          height: 630,
          alt: 'Moyahug - 아프리카 꿀팁',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: '아프리카 꿀팁 가이드 - Moyahug',
      description: '아프리카 배낭 여행 현지 꿀팁 및 주의 사항, 가이드 등, 최신자료를 엄선하여 소개합니다.',
      images: ['https://moyahug.com/icon1.png'],
    },
    other: {
      'application/ld+json': JSON.stringify(structuredData),
    },
  };
}
