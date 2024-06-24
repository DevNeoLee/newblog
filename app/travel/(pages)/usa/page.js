
import Link from 'next/link'
import { getMetadata } from '@/app/travel/utils/getData'; 

export const metadata = {
  title: '현지 여행 고수들의 현지 가이드 미국 꿀팁',
  description: '미국 배낭 여행 현지 여행 고수들의 꿀팁 및 주의 사항, 가이드 등, 최신자료를 엄선하여 소개합니다. 워싱톤, 록키 산, 뉴욕, 시에틀, 샌프란시스코, 샌디에고, 플로리다, 엘에이, 해변, 등산, 낚시, 로컬',
  alternates: {
    canonical: 'https://www.moyahug.com/travel/usa/',
  }
}

export default function USAHome(props) {
  const metaInfo = getMetadata('미국');
  return (
    <div className="continentContainer">
      <div className="continentCategory">
        <h1>미국 </h1>
      </div>
      <div className="mainPagePrologues">
          {metaInfo.map((post, id) => (
            <Link href={`usa/${post.link}`} key={id}>

              <div className="countryCard" key={id}>
                <div className="countryImage" style={{ backgroundColor: post.color}}></div>
                <h2 className="countryTitle" >{ post.title?.length > 60 ? post.title.slice(0, 60) + "..." : post.title} </h2>
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