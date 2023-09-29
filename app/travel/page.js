
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
        {/* <div className="catalogueMain">
          { 
            metadata.map((post, id) => (
            <div className="catalogueMiddle" key={id}>
              <Link 
                className="catalogueTitle" 
                href={`travel/prologue/${post.title}`}>
                <h2>{post.title}</h2>
              </Link>
              <p className="catalogueSubtitle" >{post.subtitle}</p>
              <p className="catalogueDate" >{post.date}</p>
              <div className="catalogueContentBorder"></div>
            </div>
            ))
          }
        </div> */}
            <div className="countryMain">
        <div className="countryBottom">
          {metadata.reverse().map((post, id) => (
            <Link href={`prologue/${post.title}`}>
              <div className="countryCard" key={id}>
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
