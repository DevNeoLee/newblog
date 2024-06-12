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
        <Link href="/travel">
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
            <div className="logoKorean" id="blur" >뭐여행</div>
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
              랜덤 뭐여행
            </div>
          </div>
        </div>
      </div>
      <h2 className="navSubTitle">즐겁고 뜻깊은 세계여행을 위한 소소한 노하우와 꿀팁을 모은 매거진 입니다</h2>
    </div>

  )
}
