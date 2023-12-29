import Link from "next/link"

export default function Nav() {
  return (
    <div className="nav">
      <div className="navCenter">
        <Link href="/travel">
          <div className="logo">
            {/* <div className="logoImage"><img src="/travelerDarkgray.png" width="40px" height="65px"/></div> */}
            <h1 className="logoKorean" >세계여행 현지 꿀팁</h1>
          </div>
        </Link>
      </div>
      <h2 className="navSubTitle">즐겁고 뜻깊은 세계여행을 위한 소소한 노하우와 꿀팁을 모은 웹진 입니다.</h2>
    </div>

  )
}
