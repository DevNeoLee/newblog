
import Link from 'next/link'
import { getMetadata, getCatalogue } from '../../utils/getData';

export const metadata = {
  title: 'UIUX',
  description: 'UIUX 에 대한 정보',
  alternates: {
    canonical: 'https://moyahug.com/it/UIUX/',
  }
}

export default function codingHome(props) {
  const catalogues = getCatalogue();  
  console.log('catalogues: ', catalogues)

  const metaInfo = getMetadata('UIUX');

  return (
    <div className="continentContainer">
      <div className="continentCategory">
        <h1>UI/UX </h1>
      </div>
      <div className="mainPagecodings">
          {metaInfo.map((post, id) => (
            <Link href={`UIUX/${post.link}`} key={id}> 
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
