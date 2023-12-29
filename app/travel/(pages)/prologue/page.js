
import Link from 'next/link'
import { getMetadata, getCatalogue } from '../../utils/getData';

export const metadata = {
  title: '나를 찾는 배움의 여행, 고수들의 현지 가이드 꿀팁',
  description: '배낭 여행 현지 여행 고수들의 꿀팁 및 주의 사항, 가이드 등, 최신자료를 엄선하여 소개합니다. 역사, 철학, 삶과 죽음, 사랑과 미움, 희노애락의 자아실현의 배낭여행, 로컬',
}

export default function PrologueHome(props) {
  const catalogues = getCatalogue();  
  console.log('catalogues: ', catalogues)

  const metadata = getMetadata('prologue');

  return (
    <div className="countryContainer">
      <div className="countryCategory">
        <h2>나를 찾는 세계여행 </h2>
      </div>
      <div className="countryBottom">
          {metadata.map((post, id) => (
            <Link href={`prologue/${post.link}`} key={id}> 
              <div className="countryCard">
                <div className="countryImage" style={{ backgroundColor: post.color}}></div>
                <h2 className="countryTitle" >{ post.title.length > 24 ? post.title.slice(0, 24) + "..." : post.title} </h2>
                <p className="countryDate" >{post.date}</p>
                <div className="countryParagraph" >
                  <p className="countrySubtitle" >{post.subtitle}</p>
                </div>
                <div>{post.link}</div>
              </div>
            </Link>
          ))}
      </div>
  </div>
  )
}
