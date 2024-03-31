
import Link from 'next/link'
import { getMetadata, getCatalogue, getKorean } from './utils/getData';
import fs from 'fs'
import Image from 'next/image';

export default function Travel() {
  const catalogues = getCatalogue();

  const metaInfo = getMetadata("나를찾는세계여행");
  
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
        <div><h1> 꿈 </h1><h4>에서</h4> <h2>보았던</h2><h3>그곳</h3></div>
      </div>
      <div className="travelMain">
        <Image 
          priority
          alt="travel main image"
          src="/background_image.jpeg"
          fill
          quality={60}
          style={{ objectFit: "cover", zIndex: "-1", position: "absolute"}}
        />
        <div className="continentMain">
          {metaInfo.map((post, id) => (
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
