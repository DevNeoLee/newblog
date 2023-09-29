
import Link from 'next/link'
import { getMetadata } from '@/app/travel/utils/getData'; 

export default function AfricaHome(props) {
  const metadata = getMetadata('africa');
  return (
    <div className="countryContainer">
      <div className="countryCategory">
        <h2>Africa </h2>
      </div>
      <div className="countryBottom">
          {metadata.map((post, id) => (
            <Link href={`africa/${post.title}`}>
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
