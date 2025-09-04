
import Link from 'next/link'
import { getMetadata, getCatalogue, getKorean } from './utils/getData';
import fs from 'fs'
import Image from 'next/image';
import { formatDateShort } from '@/app/utils/functions';
import { generateCollectionPageStructuredData } from '../utils/structuredData';

export default function it() {
  const catalogues = getCatalogue();

  const metaInfo = getMetadata("IT철학");
  
  return (
    <>
      <div className="travelMenu">
        {catalogues.map((ele, eleIdx)=> (
          <Link href={`it/${ele}`} key={`it/${eleIdx}`} className="countryLink" > 
            <div id="blur" className="country" key={`it/${eleIdx}`}>{getKorean(ele)}</div>
          </Link>
        ))}
      </div>
      <div className="marketingCopyPhrase">
        <div><h1>노하우</h1> <h2>를</h2><h5>더 쉽게</h5></div>
      </div>
      <div className="travelMain">
        {/* <Image 
          priority
          alt="it main image"
          src="/background_image_mesut-kaya.jpg"
          fill
          quality={60}
          style={{ zIndex: "-12", position: "absolute", objectFit: "cover"}}
        /> */}
        <div className="mainPagePrologues">
          {metaInfo.map((post, id) => (
            <Link href={`it/thought/${post.link}`} key={id} className="countryCardLink">
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
  const metaInfo = getMetadata("IT철학");
  
  const structuredData = generateCollectionPageStructuredData(
    'thought', 
    metaInfo, 
    'IT철학'
  );

  return {
    title: '쉽게 더쉽게 IT - Moyahug',
    description: '애자일 방법론, KISS 원칙, 린 스타트업 등 IT 관련 실용 정보를 제공합니다.',
    alternates: {
      canonical: 'https://moyahug.com/it',
      languages: {
        'ko': 'https://moyahug.com/it',
        'x-default': 'https://moyahug.com/it',
      },
    },
    openGraph: {
      title: '쉽게 더쉽게 IT - Moyahug',
      description: '애자일 방법론, KISS 원칙, 린 스타트업 등 IT 관련 실용 정보를 제공합니다.',
      type: 'website',
      url: 'https://moyahug.com/it',
      siteName: 'Moyahug',
      images: [
        {
          url: 'https://moyahug.com/icon1.png',
          width: 1200,
          height: 630,
          alt: 'Moyahug - 쉽게 더쉽게 IT',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: '쉽게 더쉽게 IT - Moyahug',
      description: '애자일 방법론, KISS 원칙, 린 스타트업 등 IT 관련 실용 정보를 제공합니다.',
      images: ['https://moyahug.com/icon1.png'],
    },
    other: {
      'application/ld+json': JSON.stringify(structuredData),
    },
  };
}
