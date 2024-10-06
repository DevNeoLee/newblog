
import Link from 'next/link'
import { getMetadata } from '@/app/it/utils/getData'; 

export const metadata = {
  title: '  ai 꿀팁',
  description: 'ai에 대한  꿀팁 및 주의 사항, 가이드 등, 최신자료를 엄선하여 소개합니다.',
  alternates: {
    canonical: 'https://moyahug.com/it/ai/',
  }
}

export default function ai(props) {
  const metaInfo = getMetadata('인공지능');
  return (
    <div className="continentContainer">
      <div className="continentCategory">
        <h1>인공지능</h1>
      </div>
      <div className="mainPagePrologues">
          {metaInfo.map((post, id) => (
            <Link href={`ai/${post.link}`} key={id}>

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
