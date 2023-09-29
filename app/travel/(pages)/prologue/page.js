
import Link from 'next/link'
import { getMetadata, getCatalogue } from '../../utils/getData';

export default function PrologueHome(props) {
  const catalogues = getCatalogue();  
  console.log('catalogues: ', catalogues)

  const metadata = getMetadata('prologue');

  return (
    <div className="countryContainer">
      <div className="countryTitle">
        <h2>Prologue </h2>
      </div>
      <div className="countryMain">
        <div className="countryBottom">
          {metadata.map((post, id) => (
            <div className="countryCard" key={id}>
              <Link className="country" href={`prologue/${post.title}`}>
                <h2 className="country" >{post.title}</h2>
              </Link>
              <p className="country" >{post.subtitle}</p>
              <p className="country" >{post.date}</p>
            </div>
          ))}
        </div>
      </div>
  </div>
  )
}
