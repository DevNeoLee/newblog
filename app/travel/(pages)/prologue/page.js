
import Link from 'next/link'
import { getMetadata, getCatalogue } from '../../utils/getData';

export const metadata = {
  title: '나를 찾는 배움의 여행,  꿀팁',
  description: '배낭 여행  꿀팁 및 주의 사항, 가이드 등, 최신자료를 엄선하여 소개합니다. 역사, 철학, 삶과 죽음, 사랑과 미움, 희노애락의 자아실현의 배낭여행, 로컬',
  alternates: {
    canonical: 'https://moyahug.com/travel/prologue/',
  }
}

export default function PrologueHome(props) {
  const catalogues = getCatalogue();  
  console.log('catalogues: ', catalogues)

  const metaInfo = getMetadata('나를찾는세계여행');

  return (
    <div className="continentContainer">
      <div className="continentCategory">
        <h1>나를 찾는 세계여행 </h1>
      </div>
      <div className="mainPagePrologues">
          {metaInfo.map((post, id) => (
            <Link href={`prologue/${post.link}`} key={id}> 
              <div className="countryCard">
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
