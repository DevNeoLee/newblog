import Link from 'next/link'

export const metadata = {
  title: '404 - 페이지를 찾을 수 없습니다 | Moyahug',
  description: '요청하신 페이지를 찾을 수 없습니다. Moyahug 홈페이지로 돌아가서 다른 유용한 정보를 찾아보세요.',
  robots: {
    index: false,
    follow: true,
  },
}

export default function NotFound() {
  return (
    <div className="not-found-container" style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#f8f9fa',
      fontFamily: 'Noto Sans KR, sans-serif'
    }}>
      <div className="not-found-content" style={{
        textAlign: 'center',
        padding: '2rem',
        maxWidth: '600px',
        backgroundColor: 'white',
        borderRadius: '10px',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
      }}>
        <h1 style={{
          fontSize: '6rem',
          margin: '0',
          color: '#191960',
          fontWeight: 'bold'
        }}>
          404
        </h1>
        <h2 style={{
          fontSize: '2rem',
          margin: '1rem 0',
          color: '#333'
        }}>
          페이지를 찾을 수 없습니다
        </h2>
        <p style={{
          fontSize: '1.1rem',
          color: '#666',
          marginBottom: '2rem',
          lineHeight: '1.6'
        }}>
          요청하신 페이지가 존재하지 않거나 이동되었을 수 있습니다.
          <br />
          아래 링크를 통해 유용한 정보를 찾아보세요.
        </p>
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '1rem',
          marginBottom: '2rem'
        }}>
          <Link href="/" style={{
            display: 'block',
            padding: '1rem',
            backgroundColor: '#191960',
            color: 'white',
            textDecoration: 'none',
            borderRadius: '5px',
            transition: 'background-color 0.3s'
          }}>
            🏠 홈으로 돌아가기
          </Link>
          <Link href="/travel" style={{
            display: 'block',
            padding: '1rem',
            backgroundColor: '#28a745',
            color: 'white',
            textDecoration: 'none',
            borderRadius: '5px',
            transition: 'background-color 0.3s'
          }}>
            🌍 여행 정보 보기
          </Link>
          <Link href="/it" style={{
            display: 'block',
            padding: '1rem',
            backgroundColor: '#007bff',
            color: 'white',
            textDecoration: 'none',
            borderRadius: '5px',
            transition: 'background-color 0.3s'
          }}>
            💻 IT 정보 보기
          </Link>
        </div>
        
        <div style={{
          marginTop: '2rem',
          padding: '1rem',
          backgroundColor: '#f8f9fa',
          borderRadius: '5px'
        }}>
          <h3 style={{
            fontSize: '1.2rem',
            marginBottom: '1rem',
            color: '#333'
          }}>
            🔍 인기 검색어
          </h3>
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '0.5rem',
            justifyContent: 'center'
          }}>
            {['해외여행', '크루즈여행', '오로라여행', '애자일', 'KISS원칙', '린스타트업'].map((keyword, index) => (
              <Link key={index} href={`/search?q=${encodeURIComponent(keyword)}`} style={{
                padding: '0.5rem 1rem',
                backgroundColor: 'white',
                color: '#191960',
                textDecoration: 'none',
                borderRadius: '20px',
                border: '1px solid #ddd',
                fontSize: '0.9rem',
                transition: 'all 0.3s'
              }}>
                {keyword}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
} 