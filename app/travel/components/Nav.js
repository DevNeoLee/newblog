'use client'

import Link from "next/link"
import Image from "next/image"
import { useRouter } from 'next/navigation'

import { useEffect } from "react";


export default function Nav({ links }) {

  // const links = getPages().map(ele => ele.url)

  const router = useRouter()
  const handlePlaneClick = () => {
    // 클라이언트 사이드에서만 랜덤 계산
    const randomIndex = Math.floor(Math.random() * links.length);
    router.push(links[randomIndex].url);
  }

  return (
    <div className="nav">
      <div className="navCenter">
        <Link href="/travel" style={{ textDecoration: "none"}}>
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
          <div className="menuButtonPlane">
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
