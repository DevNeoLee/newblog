
import Link from 'next/link'
import { getMetadata } from '@/app/travel/utils/getData'; 

export default function PrologueHome(props) {
  const metadata = getMetadata('asia');
  const postPreviews = metadata.map((post, id) => (
    <div key={id}>

      <Link href={`asia/${post.title}`}>
        <h2>{post.title}</h2>
      </Link>
      <p>{post.subtitle}</p>
      <p>{post.date}</p>

    </div>
  ))

  return (
    <div>
        <h2>Asia </h2>
        {postPreviews}
    </div>
  )
}
