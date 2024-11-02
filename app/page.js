
import Link from 'next/link'
import { getMetadata as getTravelData, getCatalogue as getTravelCataglogue, getKorean as getTravelKorean  } from './travel/utils/getData';
import { getMetadata as getITData, getCatalogue as getITCataglogue, getKorean as getITKorean  } from './it/utils/getData';
import fs from 'fs'
import Image from 'next/image';
import FooterMain from './travel/components/FooterMain';
import LargeCard
 from './components/LargeCard';
import SmallCard from './components/SmallCard';
import { FaArrowRightLong } from "react-icons/fa6";


function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
      // Generate a random index
      const j = Math.floor(Math.random() * (i + 1));
      
      // Swap elements at indices i and j
      [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

export default function Home() {

  const dataTravel = getTravelData("나를찾는세계여행");
  const dataIT = getITData("IT철학");
  console.log('dataTravel: ', dataTravel)
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
        {/* <Image 
          priority
          alt="travel main image"
          src="/background_image_mesut-kaya.jpg"
          fill
          quality={60}
          style={{ zIndex: "-12", position: "absolute", objectFit: "cover"}}
        /> */}
        {/* <div className="mainPagePrologues">
          {shuffleArray(metaInfo).map((post, id) => (
            <Link href={`travel/prologue/${post.link}`} key={id} className="countryCardLink">
              <div className="countryCard" key={id}>
                <h2 className="countryTitle" >{ post.title.length > 60 ? post.title.slice(0, 60) + "..." : post.title} </h2>
                <p className="countryDate" >{post.date}</p>
                <div className="countryParagraph" >
                  <p className="countrySubtitle" >{post.subtitle}</p>
                </div>
              </div>
            </Link>
          ))}
        </div> */}
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
            <div className='buttonContainer'><Link className='button' href="/travel">뭐 여행 <FaArrowRightLong  style={{ position: 'absolute', fontSize: "1rem", right: "3rem", color: "white"}} /></Link></div>
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
            <div className='buttonContainer'><Link className='button' href="/it">뭐 IT <FaArrowRightLong style={{ position: 'absolute', fontSize: "1rem", right: "3rem", color: "white"}}/></Link></div>
          </div>
        </div>
      </div>
      <FooterMain />
    </div>
  )
}
