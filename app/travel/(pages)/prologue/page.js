
import Link from 'next/link'
import getMetadata from '../../utils/getMetadata';

export default function PrologueHome(props) {
  const metadata = getMetadata('prologue');
  const postPreviews = metadata.map((post, id) => (
    <div key={id}>

      <Link href={`prologue/${post.title}`}>
        <h2>{post.title}</h2>
      </Link>
      <p>{post.subtitle}</p>
      <p>{post.date}</p>

    </div>
  ))

  return (
    <div>
        <h2>Prologue </h2>
        {postPreviews}
    </div>
  )
}
