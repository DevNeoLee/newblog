
import Nav from './components/Nav'
import Footer from "./components/Footer"
import { getPages } from './utils/getData';

export const metadata = {
  title: '세계여행 고수들의 현지 노하우 팁 대방출~!',
  description: '세계 여행 고수들의 현지 노하우와 팁 대방출~! 아프리카, 아시아, 캐나다, 유럽, 미국, 일본, 여행일정, 배낭여행, 호스텔, 주의점, 환율 등등',
  alternates: {
    canonical: 'https://www.moyahug.com/travel',
  }
}

export default function RootLayout({ children }) {
  return (
    <>
      <Nav links={getPages()}/>
      <div className='mainContainer'>
          {children}
      </div>
      <Footer />
    </>
  )
}
