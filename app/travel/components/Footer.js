import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer>
      <div className="row">
        <Link href="/travel" className="logo">
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
        </Link>
        <div className="imageLink"><div></div><a target="_blank" href="https://unsplash.com/photos/man-taking-photo-of-hot-air-balloons-eOcyhe5-9sQ">Photo by Mesut Kaya from Unsplash</a></div>
      </div>
    </footer>    
  )
}
