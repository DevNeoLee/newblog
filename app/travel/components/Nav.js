import Link from "next/link"

export default function Nav() {
  return (
    <div className="nav">
      <Link href="/travel">
        <div className="logo">
          <div className="logoImage"><img src="/travelerDarkgray.png" width="40px" height="65px"/></div>
          <div><h1 className="logoKorean" >현지여행정보</h1></div>
        </div>
      </Link>
    </div>

  )
}
