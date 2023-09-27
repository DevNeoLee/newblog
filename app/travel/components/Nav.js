import Link from "next/link"

export default function Nav() {
  return (
    <div className="nav">
      <Link href="/travel">
        <div className="logo">
          <div className="logoImage"><img src="/icon.png" width="80px" height="80px"/></div>
          <div className="logoText"><h1 className="logoKorean" >현지가이드 </h1></div>
        </div>
      </Link>
    </div>

  )
}
