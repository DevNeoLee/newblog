
import Link from 'next/link'
import { getMetadata, getCatalogue } from '../../utils/getData';

export const metadata = {
  title: '코딩 꿀팁',
  description: '코딩 꿀팁, 현대 코딩, 코딩 습관, 코딩 생각',
  alternates: {
    canonical: 'https://moyahug.com/it/coding/',
  }
}

export default function codingHome(props) {
  const catalogues = getCatalogue();  
  console.log('catalogues: ', catalogues)

  const metaInfo = getMetadata('코딩');

  return (
    <div className="continentContainer">
      <div className="continentCategory">
        <h1>코딩 </h1>
      </div>
      <div className="mainPagecodings">
          {metaInfo.map((post, id) => (
            <Link href={`coding/${post.link}`} key={id}> 
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
