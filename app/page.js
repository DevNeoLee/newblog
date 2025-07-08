
import Link from 'next/link'
import { getMetadata as getTravelData } from './travel/utils/getData';
import { getMetadata as getITData } from './it/utils/getData';

import Image from 'next/image';
import FooterMain from './travel/components/FooterMain';
import LargeCard from './components/LargeCard';
import { FaArrowRight } from "react-icons/fa";

// shuffleArray 함수 제거 - hydration mismatch 방지

export default function Home() {

  const dataTravel = getTravelData("나를찾는세계여행");
  const dataIT = getITData("IT철학");

  return (
    <div className="main">
      <div className="mainMenu">
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
        <div className="mainMenuLink">
          <Link href={`travel/`} className="countryLink" > 
            <div className="country">여행과 나</div>
          </Link>
          <Link href={`it/`} className="countryLink" > 
            <div className="country">쉽게 더쉽게 IT</div>
          </Link>
        </div>
      </div>
      <div className="travelMain">
        <div className="mainHomePage">
          <div className="categoryHomeSection">
            <div className="homeSectionTitle">
              <h2>여행과 나</h2>
            </div>
            <div className="homeSectionMain">
              {dataTravel.map((post, id) => (

                  <LargeCard key={id} title={post.title} date={post.date} content={post.subtitle} link={`travel/prologue/${post.link}`}/>

              ))}
            </div>
            <div className='buttonContainer'><Link className='button' href="/travel">뭐 여행 <FaArrowRight  style={{ position: 'absolute', fontSize: "1rem", right: "3rem", color: "white"}} /></Link></div>
          </div>
          <div className="categoryHomeSection">
            <div className="homeSectionTitle">
              <h2>쉽게 더쉽게 IT</h2>
            </div>
            <div className="homeSectionMain">
              {dataIT.map((post, id) => (
                  <LargeCard key={id} title={post.title} date={post.date} content={post.subtitle} link={`it/thought/${post.link}`}/>
              ))}
            </div>
            <div className='buttonContainer'><Link className='button' href="/it">뭐 IT <FaArrowRight style={{ position: 'absolute', fontSize: "1rem", right: "3rem", color: "white"}}/></Link></div>
          </div>
        </div>
      </div>
      <FooterMain />
    </div>
  )
}
