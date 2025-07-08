
import Nav from './components/Nav'
import Footer from "./components/Footer"
import { getPages } from './utils/getData';

export const metadata = {
  title: '세계여행 노하우 팁',
  description: '세계 여행 노하우와 팁, 아프리카, 아시아, 캐나다, 유럽, 미국, 일본, 여행일정, 배낭여행, 호스텔, 주의점, 환율 등등',
  alternates: {
    canonical: 'https://moyahug.com/travel',
  }
}

export default function RootLayout({ children }) {
  // 서버 사이드에서만 실행되도록 수정
  const pages = getPages();
  
  return (
    <>
      <Nav links={pages}/>
      <div className='mainContainer'>
          {children}
      </div>
      <Footer />
    </>
  )
}
