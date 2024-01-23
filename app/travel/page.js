
import Link from 'next/link'
import { getMetadata, getCatalogue, getKorean } from './utils/getData';
import fs from 'fs'
import Image from 'next/image';

export default function Travel() {
  const catalogues = getCatalogue();

  const metadata = getMetadata("나를찾는세계여행");
  
  return (
    <div className="travelContainer">
      <div className="travelMenu">
        {catalogues.map((ele, eleIdx)=> (
          <Link href={`travel/${ele}`} key={`travel/${eleIdx}`} className="countryLink" > 
            <div id="blur" className="country" key={`travel/${eleIdx}`}>{getKorean(ele)}</div>
          </Link>
        ))}
      </div>
    
  
      <div className="travelMain">
        <Image 
          priority
          alt="travel main image"
          src="/background-temp.jpg"
          layout="fill"
          objectFit="cover"
          quality={100}
          style={{ marginTop: "4rem", zIndex: "-1",   position: "absolute",}}
        />
        <div className="continentMain">
          {metadata.map((post, id) => (
            <Link href={`travel/prologue/${post.link}`} key={id} className="countryCardLink">
              <div className="countryCard" key={id}>
                {/* <div className="countryImage" style={{ backgroundColor: post.color}}></div> */}
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
