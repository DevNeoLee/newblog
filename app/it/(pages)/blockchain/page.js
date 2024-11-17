
import Link from 'next/link'
import { getMetadata } from '@/app/it/utils/getData'; 
import { formatKoreanDate } from '@/app/utils/functions';

export const metadata = {
  title: '블록체인 꿀팁',
  description: '블록체인에 대한  꿀팁 및 주의 사항, 가이드 등, 최신자료를 엄선하여 소개합니다.',
  alternates: {
    canonical: 'https://moyahug.com/it/blockchain/',
  }
}

export default function blockchain(props) {
  const metaInfo = getMetadata('블록체인');
  return (
    <div className="continentContainer">
      <div className="continentCategory">
        <h1>블록체인 </h1>
      </div>
      <div className="mainPagePrologues">
          {metaInfo.map((post, id) => (
            <Link href={`blockchain/${post.link}`} key={id}>

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
