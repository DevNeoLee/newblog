
import Link from 'next/link'
import { getMetadata } from '@/app/travel/utils/getData'; 

export default function CanadaHome() {
  const metadata = getMetadata('canada');
  console.log("metadata: ", metadata)
  return (
    <div className="countryContainer">
      <div className="countryCategory">
        <h2>Canada </h2>
      </div>
      <div className="countryBottom">
          {metadata.map((post, id) => (
            <Link href={`canada/${post.title}`}>
              <div className="countryCard" key={id}>
                <div className="countryImage" style={{ backgroundColor: post.color}}></div>
                <h2 className="countryTitle" >{post.title}</h2>
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
