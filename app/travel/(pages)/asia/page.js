
import Link from 'next/link'
import { getMetadata } from '@/app/travel/utils/getData'; 

export const metadata = {
  title: '현지 여행 고수들의 현지 가이드 아시아 꿀팁',
  description: '아시아 배낭 여행 현지 여행 고수들의 꿀팁 및 주의 사항, 가이드 등, 최신자료를 엄선하여 소개합니다. 일본, 대만, 로컬',
}

export default function 아시아(props) {
  const metaInfo = getMetadata('아시아');
  return (
    <div className="continentContainer">
      <div className="continentCategory">
        <h1>아시아 </h1>
      </div>
      <div className="mainPagePrologues">
          {metaInfo.map((post, id) => (
            <Link href={`asia/${post.link}`} key={id}>

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
