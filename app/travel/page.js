
import Link from 'next/link'
import { getMetadata, getCatalogue } from './utils/getData';
import fs from 'fs'



export default function Home() {
  const catalogues = getCatalogue();

  const metadata = getMetadata("prologue");
    return (
      <div className="cataloguePage">
        <div className="catalogueFrameTop">
          {catalogues.map((ele, eleIdx)=> (
            <Link href={`travel/${ele}`} key={`travel/${eleIdx}`} className="catalogueMenuLink"> 
              <div  key={`travel/${eleIdx}`}>{ele.toUpperCase()}</div>
            </Link>
          ))}
        </div>
        <div className="countryMain">
        <div className="countryBottom">
          {metadata.map((post, id) => (
            <Link href={`travel/prologue/${post.title}`}>
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
      </div>
    )
  }
