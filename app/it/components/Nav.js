'use client'

import Link from "next/link"
import Image from "next/image"
import { useRouter } from 'next/navigation'

import { useEffect } from "react";


export default function Nav({ links }) {

  // const links = getPages().map(ele => ele.url)

  // console.log('links: ...', links)
  const router = useRouter()
  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

  const handlePlaneClick = () => {

    router.push( links[getRandomInt(links.length)].url)
  }

  return (
    <div className="nav">
      <div className="navCenter">
        <Link href="/it" style={{ textDecoration: "none"}}>
          <div className="logo" >
            <div className="logoCompass" >
              <Image 
                priority
                alt="main menu icon"
                src="/compass.png"
                width="30"
                height="34"
              />
            </div>
            <div className="logoITContainer">
              <div className="logoKorean" id="blur" >뭐</div>
              <div className="logoIT">IT</div>
            </div>
          </div>
        </Link>
        <div className="menuButtonPlaneContainer" onClick={handlePlaneClick}>
          <div className="menuButtonPlane" onMouseEnter={() => console.log('enter')} onMouseLeave={() => console.log('leave')}>
            <Image 
              priority
              alt="main menu icon"
              src="/icon1.png"
              width="47"
              height="50"
            />

            <div className="planeButtonSign">
              랜덤 뭐IT
            </div>
          </div>
        </div>
      </div>
      <h2 className="navSubTitle">쉬운 언어로 IT의 꿀팁과 노하우를 이해할수 있게 알꽉찬 정보를 모은 매거진 입니다</h2>
    </div>

  )
}
