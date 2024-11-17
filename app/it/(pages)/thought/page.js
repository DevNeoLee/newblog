
import Link from 'next/link'
import { getMetadata } from '@/app/it/utils/getData'; 
import { formatKoreanDate } from '@/app/utils/functions';

export const metadata = {
  title: 'IT 철학',
  description: 'IT 에 적용된 철학, 개발된 철학, 발전하고 있는 철학들을 소개합니다.',
  alternates: {
    canonical: 'https://moyahug.com/it/thought/',
  }
}

export default function Thought(props) {
  const metaInfo = getMetadata('IT철학');
  return (
    <div className="continentContainer">
      <div className="continentCategory">
        <h1>IT철학</h1>
      </div>
      <div className="mainPagePrologues">
          {metaInfo.map((post, id) => (
            <Link href={`thought/${post.link}`} key={id}>
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
