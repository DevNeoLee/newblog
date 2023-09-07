
import Link from 'next/link'
import getMetadata from './utils/getMetadata';
import fs from 'fs'

const getCatalogue = () => {
  const files = fs.readdirSync(`app/travel/(pages)`);
  console.log('files: ', files)

  return files
}

export default function Home() {
  const catalogues = getCatalogue();

  const metadata = getMetadata("prologue");
  const postPreviews = metadata.map((post, id) => (
    <div key={id}>
      <Link href={`travel/prologue/${post.title}`}>
        <h2>{post.title}</h2>
      </Link>
      <p>{post.subtitle}</p>
      <p>{post.date}</p>

    </div>
  ))

  return (
    <div>
      <div>
        {catalogues.map((ele, eleIdx)=> (
          <Link href={`travel/${ele}`} key={`travel/${eleIdx}`}>
            <span key={eleIdx}>{ele}</span>
          </Link>
        ))}
        </div>
        {metadata.map((post, id) => (
      <div key={id}>
        <Link href={`travel/prologue/${post.title}`}>
          <h2>{post.title}</h2>
        </Link>
        <p>{post.subtitle}</p>
        <p>{post.date}</p>

      </div>))}
    </div>
  )
}
