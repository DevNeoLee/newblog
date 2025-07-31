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
        <div style={{ marginTop: '1rem', fontSize: '0.9rem' }}>
          <Link href="/about" style={{ color: 'gray', marginRight: '1rem', textDecoration: 'none' }}>About</Link>
          <Link href="/privacy" style={{ color: 'gray', marginRight: '1rem', textDecoration: 'none' }}>개인정보 보호정책</Link>
          <Link href="/terms" style={{ color: 'gray', textDecoration: 'none' }}>이용약관</Link>
        </div>
        {/* <p><strong>PCB</strong> is owned and operated by <strong>Pacific Customs Brokers Ltd., Pacific Customs Brokers Inc.</strong>, and <strong>PCB Freight Management Ltd.</strong></p> */}
      </div>
    </footer>    
  )
}
