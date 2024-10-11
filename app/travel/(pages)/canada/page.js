
import Link from 'next/link'
import { getMetadata } from '@/app/travel/utils/getData'; 

export const metadata = {
  title: '  캐나다 꿀팁',
  description: '캐나다 배낭 여행  꿀팁 및 주의 사항, 가이드 등, 최신자료를 엄선하여 소개합니다. 벤쿠버, 캘거리, 토론토, 나이아가라 폭포, 록키 산맥, 오타와, 천섬, 로컬',
  alternates: {
    canonical: 'https://moyahug.com/travel/canada/',
  }
}

export default function CanadaHome() {
  const metaInfo = getMetadata('캐나다');
  console.log("metadata: ", metadata)
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
