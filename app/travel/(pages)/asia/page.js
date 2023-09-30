
import Link from 'next/link'
import { getMetadata } from '@/app/travel/utils/getData'; 

export default function AsiaHome(props) {
  const metadata = getMetadata('asia');
  return (
    <div className="countryContainer">
      <div className="countryCategory">
        <h2>Asia </h2>
      </div>
      <div className="countryBottom">
          {metadata.map((post, id) => (
            <Link href={`asia/${post.link}`} key={id}>

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
