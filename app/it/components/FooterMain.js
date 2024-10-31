import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function FooterMain() {
  return (
    <footer>
      <div className="rowFooter">
        <Link href="/" className="logo" style={{ textDecoration: "none"}}>
            <div className="logoCompass" >
              <Image 
                priority
                alt="main menu icon"
                src="/compass.png"
                width="30"
                height="34"
              />
            </div>
             <div className="logoMoyahug" id="blur" >MoyaHug</div>
        </Link>
        <div className="attribution"><div></div></div>
       
      </div>
      <div className="copyright">
        <div style={{ color: "gray"}}>© Copyright {new Date().getFullYear()} <span className="logoMoyahug" id="blur" style={{ fontSize: "20px"}}>MoyaHug</span> All rights reserved.</div> 
      </div>
    </footer>    
  )
}
