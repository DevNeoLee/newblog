
import Link from 'next/link'
import getMetadata from './utils/getMetadata';
import fs from 'fs'

const getCatalogue = () => {
  const files = fs.readdirSync(`app/travel/(pages)`)
  return files
}

export default function Home() {
  const catalogues = getCatalogue();

  const metadata = getMetadata("prologue");

  const postPreviews = metadata.map((post, id) => (
    <div className="catalogueMiddle" key={id}>
      <Link className="catalogueTitle" href={`travel/prologue/${post.title}`}>
        <h2>{post.title}</h2>
      </Link>
      <p className="catalogueSubtitle" >{post.subtitle}</p>
      <p className="catalogueDate" >{post.date}</p>
      <div className="catalogueContentBorder"></div>
    </div>
  ))

  return (
    <div className="cataloguePage">
      <div className="catalogueFrameTop">
        {catalogues.map((ele, eleIdx)=> (
          <Link href={`travel/${ele}`} key={`travel/${eleIdx}`} className="catalogueMenuLink"> 
            <div  key={`travel/${eleIdx}`}>{ele.toUpperCase()}</div>
          </Link>
        ))}
      </div>
      <div className="catalogueMain">
        {postPreviews}
      </div>
    </div>
  )
}
