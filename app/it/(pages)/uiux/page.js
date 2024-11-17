
import Link from 'next/link'
import { getMetadata, getCatalogue } from '../../utils/getData';
import { formatKoreanDate } from '@/app/utils/functions';

export const metadata = {
  title: 'uiux',
  description: 'uiux 에 대한 정보',
  alternates: {
    canonical: 'https://moyahug.com/it/uiux/',
  }
}

export default function codingHome(props) {
  const metaInfo = getMetadata('uiux');
  return (
    <div className="continentContainer">
      <div className="continentCategory">
        <h1>UI/UX </h1>
      </div>
      <div className="mainPagePrologues">
          {metaInfo.map((post, id) => (
            <Link href={`uiux/${post.link}`} key={id}> 
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
