
import Link from 'next/link'
import { getMetadata, getCatalogue, getKorean } from './utils/getData';
import fs from 'fs'
import Image from 'next/image';

export default function Travel() {
  const catalogues = getCatalogue();

  const metadata = getMetadata("나를찾는세계여행");
  
  return (
    <>
      <div className="travelMenu">
        {catalogues.map((ele, eleIdx)=> (
          <Link href={`travel/${ele}`} key={`travel/${eleIdx}`} className="countryLink" > 
            <div id="blur" className="country" key={`travel/${eleIdx}`}>{getKorean(ele)}</div>
          </Link>
        ))}
      </div>
      <div className="homepageTitle">
        <h1> 언제 어디로.. </h1>
      </div>
      <div className="travelMain">
        {/* <Image 
          priority
          alt="travel main image"
          src="/background_image.jpeg"
          fill={true}
          quality={100}
          style={{ objectFit: "cover", zIndex: "-1", width: "100%", position: "absolute"}}
        /> */}
        <div className="continentMain">
          {metadata.map((post, id) => (
            <Link href={`travel/prologue/${post.link}`} key={id} className="countryCardLink">
              <div className="countryCard" key={id}>
                {/* <div className="countryImage" style={{ backgroundColor: post.color}}></div> */}
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
    </>
  )
}
