
import Link from 'next/link'
import { getMetadata, getCatalogue, getKorean } from './utils/getData';
import fs from 'fs'

export default function Travel() {
  const catalogues = getCatalogue();

  const metadata = getMetadata("prologue");
    return (
      <div className="travelContainer">
        <div className="travelMenu">
          {catalogues.map((ele, eleIdx)=> (
            <Link href={`travel/${ele}`} key={`travel/${eleIdx}`} className="countryLink" > 
              <div  className="country" key={`travel/${eleIdx}`}>{getKorean(ele)}</div>
            </Link>
          ))}
        </div>
        <div className="travelMain">
        <div className="countryBottom">
          {metadata.map((post, id) => (
            <Link href={`travel/prologue/${post.link}`} key={id}>

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
      </div>
    )
  }
