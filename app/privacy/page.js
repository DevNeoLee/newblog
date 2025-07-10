import Link from 'next/link'

export const metadata = {
  title: '개인정보 보호정책',
  description: 'Moyahug의 개인정보 보호정책입니다.',
  robots: {
    index: true,
    follow: true,
  },
}

export default function PrivacyPolicy() {
  return (
    <div className="mainContainer">
      <div style={{ maxWidth: '800px', margin: '0 auto', padding: '2rem' }}>
        <h1>개인정보 보호정책</h1>
        <p>최종 업데이트: 2024년 7월 10일</p>
        
        <h2>1. 개인정보 수집 및 이용</h2>
        <p>Moyahug(이하 &ldquo;당사&rdquo;)는 웹사이트 moyahug.com을 통해 제공되는 서비스와 관련하여 다음과 같이 개인정보를 수집하고 있습니다.</p>
        
        <h3>1.1 수집하는 개인정보</h3>
        <ul>
          <li>서비스 이용 기록 (접속 로그, 쿠키, 접속 IP 정보)</li>
          <li>기기 정보 (브라우저 종류, 운영체제)</li>
        </ul>
        
        <h3>1.2 개인정보의 이용 목적</h3>
        <ul>
          <li>서비스 제공 및 운영</li>
          <li>서비스 이용 통계 및 분석</li>
          <li>광고 서비스 제공</li>
          <li>보안 및 사기 방지</li>
        </ul>
        
        <h2>2. 쿠키 및 유사 기술</h2>
        <p>당사는 사용자 경험 향상을 위해 쿠키를 사용합니다. 쿠키는 다음과 같은 목적으로 사용됩니다:</p>
        <ul>
          <li>사용자 선호도 기억</li>
          <li>광고 성과 측정</li>
          <li>서비스 개선을 위한 분석</li>
        </ul>
        
        <h2>3. 제3자 서비스</h2>
        <p>당사는 다음과 같은 제3자 서비스를 사용합니다:</p>
        <ul>
          <li><strong>Google AdSense:</strong> 광고 서비스 제공</li>
          <li><strong>Google Analytics:</strong> 웹사이트 분석</li>
          <li><strong>Google Search Console:</strong> 검색 엔진 최적화</li>
        </ul>
        
        <h2>4. 개인정보 보호</h2>
        <p>당사는 개인정보 보호를 위해 다음과 같은 조치를 취하고 있습니다:</p>
        <ul>
          <li>개인정보 암호화</li>
          <li>접근 권한 관리</li>
          <li>정기적인 보안 점검</li>
        </ul>
        
        <h2>5. 개인정보의 보유 및 이용기간</h2>
        <p>개인정보는 수집 및 이용 목적이 달성된 후에는 지체 없이 파기됩니다. 단, 관련 법령에 의해 보존이 필요한 경우에는 해당 기간 동안 보관됩니다.</p>
        
        <h2>6. 이용자의 권리</h2>
        <p>이용자는 개인정보에 대해 다음과 같은 권리를 가집니다:</p>
        <ul>
          <li>개인정보 열람 요구</li>
          <li>개인정보 정정·삭제 요구</li>
          <li>개인정보 처리정지 요구</li>
        </ul>
        
        <h2>7. 개인정보 보호책임자</h2>
        <p>개인정보 처리에 관한 업무를 총괄해서 책임지고, 개인정보 처리와 관련한 정보주체의 불만처리 및 피해구제 등을 위하여 아래와 같이 개인정보 보호책임자를 지정하고 있습니다.</p>
        <p>개인정보 보호책임자: Moyahug<br/>
        연락처: moyahug.com을 통해 문의</p>
        
        <h2>8. 정책 변경</h2>
        <p>이 개인정보 보호정책은 법령 및 방침에 따른 변경내용의 추가, 삭제 및 정정이 있을 경우에는 변경사항의 시행 7일 전부터 공지사항을 통하여 고지할 것입니다.</p>
        
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