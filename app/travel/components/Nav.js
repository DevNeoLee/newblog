import Link from "next/link"

export default function Nav() {
  return (
    <div className="nav">
      <Link href="/travel"><div className="logo"><img src="/icon.png" width="30px" height="30px"/> <h1 className="korean" >현지 가이드 </h1></div></Link>
    </div>

  )
}
