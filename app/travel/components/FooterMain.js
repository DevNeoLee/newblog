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
             <div className="logoKorean" id="blur" >MOYAHUG</div>
        </Link>
        <div className="attribution"><div></div></div>
       
      </div>
      <div className="copyright">
        <p style={{ color: "gray"}}>© Copyright {new Date().getFullYear()} <strong style={{ color: "black", margin: "0 1rem"}}> MOYAHUG</strong> All rights reserved.</p> 
        {/* <p><strong>PCB</strong> is owned and operated by <strong>Pacific Customs Brokers Ltd., Pacific Customs Brokers Inc.</strong>, and <strong>PCB Freight Management Ltd.</strong></p> */}
      </div>
    </footer>    
  )
}
