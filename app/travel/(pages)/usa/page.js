
import Link from 'next/link'
import { getMetadata } from '@/app/travel/utils/getData'; 

export default function USAHome(props) {
  const metadata = getMetadata('usa');
  return (
    <div className="countryContainer">
      <div className="countryCategory">
        <h2>USA </h2>
      </div>
      <div className="countryBottom">
          {metadata.map((post, id) => (
            <Link href={`usa/${post.link}`} key={id}>

              <div className="countryCard" key={id}>
                <div className="countryImage" style={{ backgroundColor: post.color}}></div>
                <h2 className="countryTitle" >{ post.title.length > 24 ? post.title.slice(0, 24) + "..." : post.title} </h2>
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