
import Link from 'next/link'
import { getMetadata, getCatalogue, getKorean } from './utils/getData';
import fs from 'fs'
import Image from 'next/image';
import { formatDateShort } from '@/app/utils/functions';

export default function it() {
  const catalogues = getCatalogue();

  const metaInfo = getMetadata("IT철학");
  
  return (
    <>
      <div className="travelMenu">
        {catalogues.map((ele, eleIdx)=> (
          <Link href={`it/${ele}`} key={`it/${eleIdx}`} className="countryLink" > 
            <div id="blur" className="country" key={`it/${eleIdx}`}>{getKorean(ele)}</div>
          </Link>
        ))}
      </div>
      <div className="marketingCopyPhrase">
        <div><h1>노하우</h1> <h2>를</h2><h5>더 쉽게</h5></div>
      </div>
      <div className="travelMain">
        {/* <Image 
          priority
          alt="it main image"
          src="/background_image_mesut-kaya.jpg"
          fill
          quality={60}
          style={{ zIndex: "-12", position: "absolute", objectFit: "cover"}}
        /> */}
        <div className="mainPagePrologues">
          {metaInfo.map((post, id) => (
            <Link href={`it/thought/${post.link}`} key={id} className="countryCardLink">
              <div className="countryCard" key={id}>
                {/* <div className="countryImage" style={{ backgroundColor: post.color}}></div> */}
                <h2 className="countryTitle" >{ post.title.length > 60 ? post.title.slice(0, 60) + "..." : post.title} </h2>
                <p className="countryDate" >{formatDateShort(post.date)}</p>
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
