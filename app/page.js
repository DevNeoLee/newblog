import Link from 'next/link'

export default function page() {
  return (
    <div className="homeContainer">
      <h1>생활의 지혜, 현명한 블로그 웹진</h1>
      <Link href="/travel"><h2>- 세계여행 현지 꿀팁 모음집</h2></Link>
    </div>
  )
}
