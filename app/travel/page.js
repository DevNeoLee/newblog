
import Link from 'next/link'
import { getMetadata, getCatalogue, getKorean } from './utils/getData';
import fs from 'fs'
import Image from 'next/image';
import { formatDateShort } from '../utils/functions';
import { generateCollectionPageStructuredData } from '../utils/structuredData';

export default function Travel() {
  const catalogues = getCatalogue();

  const metaInfo = getMetadata("나를찾는세계여행");
  
  return (
    <>
      <div className="travelMenu">
        {catalogues.map((ele, eleIdx)=> (
          <Link href={`travel/${ele}`} key={`travel/${eleIdx}`} className="countryLink" > 
            <div id="blur" className="country" key={`travel/${eleIdx}`}>{getKorean(ele)}</div>
          </Link>
        ))}
      </div>
      <div className="marketingCopyPhrase">
        <div><h1> 꿈 </h1><h4>에서</h4> <h2>보았던</h2><h3>그곳</h3></div>
      </div>
      <div className="travelMain">
        {/* <Image 
          priority
          alt="travel main image"
          src="/background_image_mesut-kaya.jpg"
          fill
          quality={60}
          style={{ zIndex: "-12", position: "absolute", objectFit: "cover"}}
        /> */}
        <div className="mainPagePrologues">
          {metaInfo.map((post, id) => (
            <Link href={`travel/prologue/${post.link}`} key={id} className="countryCardLink">
              <div className="countryCard" key={id}>
                {/* <div className="countryImage" style={{ backgroundColor: post.color}}></div> */}
                <h2 className="countryTitle" >{ post.title.length > 60 ? post.title.slice(0, 60) + "..." : post.title} </h2>
                <p className="countryDate" >{formatDateShort(post.date)}</p>
                <div className="countryParagraph" >
                  <p className="countrySubtitle" >{post.subtitle}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  )
}

export async function generateMetadata() {
  const catalogues = getCatalogue();
  const metaInfo = getMetadata("나를찾는세계여행");
  
  const structuredData = generateCollectionPageStructuredData(
    'prologue', 
    metaInfo, 
    '나를찾는세계여행'
  );

  return {
    title: '여행과 나 - Moyahug',
    description: '해외여행, 크루즈여행, 오로라여행, 디지털노마드 등 여행 관련 실용 정보를 제공합니다.',
    alternates: {
      canonical: 'https://moyahug.com/travel',
      languages: {
        'ko': 'https://moyahug.com/travel',
        'x-default': 'https://moyahug.com/travel',
      },
    },
    openGraph: {
      title: '여행과 나 - Moyahug',
      description: '해외여행, 크루즈여행, 오로라여행, 디지털노마드 등 여행 관련 실용 정보를 제공합니다.',
      type: 'website',
      url: 'https://moyahug.com/travel',
      siteName: 'Moyahug',
      images: [
        {
          url: 'https://moyahug.com/icon1.png',
          width: 1200,
          height: 630,
          alt: 'Moyahug - 여행과 나',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: '여행과 나 - Moyahug',
      description: '해외여행, 크루즈여행, 오로라여행, 디지털노마드 등 여행 관련 실용 정보를 제공합니다.',
      images: ['https://moyahug.com/icon1.png'],
    },
    other: {
      'application/ld+json': JSON.stringify(structuredData),
    },
  };
}
