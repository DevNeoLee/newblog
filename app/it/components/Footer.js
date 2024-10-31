import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer>
      <div className="row">
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
              <div className="logoKorean" id="blur">뭐</div>
              <div className="logoIT">IT</div>
            </div>
          </div>
        </Link>
        {/* <div className="attribution"><div></div><a style={{ textDecoration: "none"}} target="_blank" href="https://unsplash.com/photos/man-taking-photo-of-hot-air-balloons-eOcyhe5-9sQ">Photo by <strong>Mesut Kaya </strong>from Unsplash</a></div> */}
       
      </div>
      <div className="copyright">
        <div style={{ color: "gray"}}>© Copyright {new Date().getFullYear()} 
        <Link href="/" style={{ textDecoration: "none", backgroundColor: "lightgreen", width: "270px", justifyContent: "space-between", alignItems: "center"  }}>
             <div className="logoMoyahug" id="blur" >MoyaHug</div>
          </Link>          All rights reserved.</div> 
        {/* <p><strong>PCB</strong> is owned and operated by <strong>Pacific Customs Brokers Ltd., Pacific Customs Brokers Inc.</strong>, and <strong>PCB Freight Management Ltd.</strong></p> */}
      </div>
    </footer>    
  )
}
