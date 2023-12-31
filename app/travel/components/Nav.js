import Link from "next/link"
import Image from "next/image"

export default function Nav() {
  return (
    <div className="nav">
      <div className="navCenter">
        <Link href="/travel">
          <div className="logo" id="blur">
            <h1 className="logoKorean" >뭐여행</h1>
          </div>
        </Link>
        <div className="menuButtonPlane">
          <Image 
            priority
            alt="main menu icon"
            src="/icon.png"
            width="45"
            height="45"
          />
        </div>
      </div>
      <h2 className="navSubTitle">즐겁고 뜻깊은 세계여행을 위한 소소한 노하우와 꿀팁을 모은 매거진 입니다.</h2>
    </div>

  )
}
