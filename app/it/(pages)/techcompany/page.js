
import Link from 'next/link'
import { getMetadata, getCatalogue } from '../../utils/getData';
import { formatKoreanDate } from '@/app/utils/functions';

export const metadata = {
  title: '테크회사들 인사이트',
  description: '테크회사들에 대한 정보와 생각 그리고 미래',
  alternates: {
    canonical: 'https://moyahug.com/it/techcompany/',
  }
}

export default function codingHome(props) {
  const metaInfo = getMetadata('테크회사들');

  return (
    <div className="continentContainer">
      <div className="continentCategory">
        <h1>테크회사들 </h1>
      </div>
      <div className="mainPagePrologues">
          {metaInfo.map((post, id) => (
            <Link href={`techcompany/${post.link}`} key={id}> 
              <div className="countryCard">
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
