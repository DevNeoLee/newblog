
import Link from 'next/link'
import { getMetadata, getCatalogue } from '../../utils/getData';

export default function PrologueHome(props) {
  const catalogues = getCatalogue();  
  console.log('catalogues: ', catalogues)

  const metadata = getMetadata('prologue');

  return (
    <div className="countryContainer">
      <div className="countryCategory">
        <h2>Prologue </h2>
      </div>
      <div className="countryBottom">
          {metadata.map((post, id) => (
            <Link href={`prologue/${post.link}`}>
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
