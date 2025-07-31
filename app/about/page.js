import Link from 'next/link'

export const metadata = {
  title: 'About - Moyahug 소개',
  description: 'Moyahug는 여행과 IT 정보를 제공하는 블로그 매거진입니다. 실용적인 팁과 경험을 공유합니다.',
  robots: {
    index: true,
    follow: true,
  },
}

export default function About() {
  return (
    <div className="mainContainer">
      <div style={{ maxWidth: '800px', margin: '0 auto', padding: '2rem' }}>
        <h1>About Moyahug</h1>
        <p>최종 업데이트: 2024년 12월 15일</p>
        
        <h2>Moyahug는 누구인가요?</h2>
        <p>Moyahug는 &apos;생활의 지혜&apos;를 모토로 하는 블로그 매거진입니다. 여행과 IT 분야에서 실용적이고 유용한 정보를 제공하여 독자들의 일상에 도움이 되고자 합니다.</p>
        
        <h2>우리의 미션</h2>
        <p>복잡한 정보를 쉽고 이해하기 쉽게 전달하여, 누구나 쉽게 접근할 수 있는 지식의 공유 플랫폼을 만드는 것입니다.</p>
        
        <h2>주요 콘텐츠</h2>
        <h3>여행 카테고리</h3>
        <ul>
          <li>해외여행 가이드 및 팁</li>
          <li>크루즈 여행 정보</li>
          <li>오로라 관찰 가이드</li>
          <li>비즈니스 클래스 항공권 구매 팁</li>
          <li>해외 렌트카 이용 가이드</li>
          <li>디지털 노마드 라이프스타일</li>
          <li>여행 준비 체크리스트</li>
        </ul>
        
        <h3>IT 카테고리</h3>
        <ul>
          <li>애자일 방법론 및 개발 철학</li>
          <li>KISS 원칙과 실무 적용</li>
          <li>Fail Fast, Fail Often 개념</li>
          <li>IT 트렌드 및 기술 동향</li>
          <li>개발자 라이프스타일</li>
        </ul>
        
        <h2>콘텐츠 품질</h2>
        <p>모든 콘텐츠는 실제 경험과 검증된 정보를 바탕으로 작성됩니다. 독자들이 실제로 활용할 수 있는 실용적인 정보를 제공하는 것을 최우선으로 합니다.</p>
        
        <h2>커뮤니티</h2>
        <p>Moyahug는 독자들과의 소통을 중요하게 생각합니다. 여러분의 피드백과 제안은 더 나은 콘텐츠를 만드는 원동력이 됩니다.</p>
        
        <h2>광고 정책</h2>
        <p>이 웹사이트는 Google AdSense를 통해 광고를 제공합니다. 광고는 독자 경험을 해치지 않는 선에서 적절히 배치되며, 모든 광고는 관련 법령을 준수합니다.</p>
        
        <h2>연락처</h2>
        <p>문의사항이나 제안사항이 있으시면 웹사이트를 통해 연락해 주세요.</p>
        
        <div style={{ marginTop: '3rem', textAlign: 'center' }}>
          <Link href="/" style={{ 
            display: 'inline-block', 
            padding: '1rem 2rem', 
            backgroundColor: '#191960', 
            color: 'white', 
            textDecoration: 'none',
            borderRadius: '5px'
          }}>
            홈으로 돌아가기
          </Link>
        </div>
      </div>
    </div>
  )
} 