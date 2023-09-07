
import Link from 'next/link'
import getMetadata from '../../utils/getMetadata';

export default function CanadaHome() {
  const metadata = getMetadata('canada');
  console.log("metadata: ", metadata)
  const postPreviews = metadata.map((post, id) => (
    <div key={id}>
      <Link href={`canada/${post.title}`}>
        <h2>{post.title}</h2>
      </Link>
      <p>{post.subtitle}</p>
      <p>{post.date}</p>

    </div>
  ))

  return (
    <div>
      {postPreviews}
    </div>
  )
}
