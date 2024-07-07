
import Link from 'next/link'
import { getMetadata } from '@/app/travel/utils/getData'; 

export const metadata = {
  title: '현지 여행 고수들의 현지 가이드 아프리카 꿀팁',
  description: '아프리카 배낭 여행 현지 여행 고수들의 꿀팁 및 주의 사항, 가이드 등, 최신자료를 엄선하여 소개합니다. 케냐, 사우스아프리카, 사파리, 로컬',
  alternates: {
    canonical: 'https://moyahug.com/travel/africa/',
  }
}

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
                <p className="countryDate" >{post.date}</p>
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
