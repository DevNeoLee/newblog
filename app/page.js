
import Link from 'next/link'
import { getMetadata as getTravelData } from './travel/utils/getData';
import { getMetadata as getITData } from './it/utils/getData';
import { getCatalogue as getTravelCatalogue } from './travel/utils/getData';
import { getCatalogue as getITCatalogue } from './it/utils/getData';

import Image from 'next/image';
import FooterMain from './travel/components/FooterMain';
import LargeCard from './components/LargeCard';
import { FaArrowRight } from "react-icons/fa";

// shuffleArray 함수 제거 - hydration mismatch 방지

export default function Home() {

  const dataTravel = getTravelData("나를찾는세계여행");
  const dataIT = getITData("IT철학");
  
  // 전체 카테고리 정보 가져오기
  const travelCategories = getTravelCatalogue();
  const itCategories = getITCatalogue();

  // 전체 글 수 동적 계산
  const getTotalPostCount = () => {
    let totalCount = 0;
    
    // 여행 카테고리 글 수 계산
    travelCategories.forEach(category => {
      const koreanCategory = category === 'prologue' ? '나를찾는세계여행' : 
                            category === 'africa' ? '아프리카' :
                            category === 'asia' ? '아시아' :
                            category === 'europe' ? '유럽' :
                            category === 'canada' ? '캐나다' :
                            category === 'usa' ? '미국' : category;
      const posts = getTravelData(koreanCategory);
      totalCount += posts.length;
    });
    
    // IT 카테고리 글 수 계산
    itCategories.forEach(category => {
      const koreanCategory = category === 'thought' ? 'IT철학' :
                            category === 'coding' ? '코딩' :
                            category === 'techcompany' ? '테크회사들' :
                            category === 'ai' ? '인공지능' :
                            category === 'uiux' ? 'uiux' :
                            category === 'blockchain' ? '블록체인' : category;
      const posts = getITData(koreanCategory);
      totalCount += posts.length;
    });
    
    return totalCount;
  };

  const totalPostCount = getTotalPostCount();

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
      
      {/* 전체 콘텐츠 개요 섹션을 풋터 바로 위로 이동 */}
      <div className="contentOverview" style={{ 
        padding: '2rem', 
        backgroundColor: '#f8f9fa', 
        marginBottom: '2rem',
        borderRadius: '10px',
        margin: '0 1rem 2rem 1rem'
      }}>
        <h2 style={{ textAlign: 'center', marginBottom: '1.5rem', color: '#191960' }}>
          📚 Moyahug 전체 콘텐츠 라이브러리
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
          <div>
            <h3 style={{ color: '#191960', marginBottom: '1rem' }}>🌍 여행 카테고리 (총 {totalPostCount - getITData('IT철학').length - getITData('코딩').length - getITData('테크회사들').length - getITData('인공지능').length - getITData('uiux').length - getITData('블록체인').length}개 글)</h3>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              {travelCategories.map((category, index) => (
                <li key={index} style={{ marginBottom: '0.5rem' }}>
                  <Link href={`/travel/${category}`} style={{ 
                    color: '#191960', 
                    textDecoration: 'none',
                    fontSize: '1rem'
                  }}>
                    📂 {category === 'prologue' ? '나를찾는세계여행' : 
                        category === 'africa' ? '아프리카' :
                        category === 'asia' ? '아시아' :
                        category === 'europe' ? '유럽' :
                        category === 'canada' ? '캐나다' :
                        category === 'usa' ? '미국' : category}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 style={{ color: '#191960', marginBottom: '1rem' }}>💻 IT 카테고리 (총 {getITData('IT철학').length + getITData('코딩').length + getITData('테크회사들').length + getITData('인공지능').length + getITData('uiux').length + getITData('블록체인').length}개 글)</h3>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              {itCategories.map((category, index) => (
                <li key={index} style={{ marginBottom: '0.5rem' }}>
                  <Link href={`/it/${category}`} style={{ 
                    color: '#191960', 
                    textDecoration: 'none',
                    fontSize: '1rem'
                  }}>
                    📂 {category === 'thought' ? 'IT철학' :
                        category === 'coding' ? '코딩' :
                        category === 'techcompany' ? '테크회사들' :
                        category === 'ai' ? '인공지능' :
                        category === 'uiux' ? 'UI/UX' :
                        category === 'blockchain' ? '블록체인' : category}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div style={{ textAlign: 'center', marginTop: '1.5rem' }}>
          <p style={{ fontSize: '1.1rem', color: '#666' }}>
            총 <strong>{totalPostCount}개의 실용적인 글</strong>로 구성된 Moyahug의 지식 라이브러리입니다.
          </p>
        </div>
        
        {/* 사용자 상호작용 섹션 추가 */}
        <div style={{ 
          marginTop: '2rem', 
          padding: '1.5rem', 
          backgroundColor: 'white', 
          borderRadius: '8px',
          border: '1px solid #e0e0e0'
        }}>
          <h3 style={{ textAlign: 'center', marginBottom: '1rem', color: '#191960' }}>
            💡 여러분의 의견을 들려주세요
          </h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1rem' }}>
            <div style={{ textAlign: 'center' }}>
              <p style={{ marginBottom: '0.5rem', fontSize: '0.9rem', color: '#666' }}>
                어떤 주제의 글이 더 필요하신가요?
              </p>
              <div style={{ display: 'flex', justifyContent: 'center', gap: '0.5rem', flexWrap: 'wrap' }}>
                <span style={{ 
                  padding: '0.3rem 0.8rem', 
                  backgroundColor: '#f0f0f0', 
                  borderRadius: '15px', 
                  fontSize: '0.8rem',
                  cursor: 'pointer',
                  transition: 'background-color 0.2s'
                }}>더 많은 여행 팁</span>
                <span style={{ 
                  padding: '0.3rem 0.8rem', 
                  backgroundColor: '#f0f0f0', 
                  borderRadius: '15px', 
                  fontSize: '0.8rem',
                  cursor: 'pointer',
                  transition: 'background-color 0.2s'
                }}>IT 기술 동향</span>
                <span style={{ 
                  padding: '0.3rem 0.8rem', 
                  backgroundColor: '#f0f0f0', 
                  borderRadius: '15px', 
                  fontSize: '0.8rem',
                  cursor: 'pointer',
                  transition: 'background-color 0.2s'
                }}>실용적인 라이프스타일</span>
              </div>
            </div>
            <div style={{ textAlign: 'center' }}>
              <p style={{ marginBottom: '0.5rem', fontSize: '0.9rem', color: '#666' }}>
                이 사이트가 도움이 되었나요?
              </p>
              <div style={{ display: 'flex', justifyContent: 'center', gap: '0.5rem' }}>
                <span style={{ 
                  padding: '0.3rem 0.8rem', 
                  backgroundColor: '#e8f5e8', 
                  borderRadius: '15px', 
                  fontSize: '0.8rem',
                  cursor: 'pointer',
                  transition: 'background-color 0.2s'
                }}>👍 매우 도움됨</span>
                <span style={{ 
                  padding: '0.3rem 0.8rem', 
                  backgroundColor: '#fff3cd', 
                  borderRadius: '15px', 
                  fontSize: '0.8rem',
                  cursor: 'pointer',
                  transition: 'background-color 0.2s'
                }}>😊 도움됨</span>
                <span style={{ 
                  padding: '0.3rem 0.8rem', 
                  backgroundColor: '#f8d7da', 
                  borderRadius: '15px', 
                  fontSize: '0.8rem',
                  cursor: 'pointer',
                  transition: 'background-color 0.2s'
                }}>😐 보통</span>
              </div>
            </div>
          </div>
          <div style={{ textAlign: 'center', marginTop: '1rem' }}>
            <p style={{ fontSize: '0.8rem', color: '#999' }}>
              여러분의 피드백은 더 나은 콘텐츠를 만드는 원동력이 됩니다.
            </p>
          </div>
        </div>
      </div>
      
      <FooterMain />
    </div>
  )
}
