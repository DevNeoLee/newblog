// import './globals.css'
import Nav from './components/Nav'
import Footer from "./components/Footer"

export const metadata = {
  title: '세계여행 고수들의 현지 노하우 팁 대방출~!',
  description: '세계 여행 고수들의 현지 노하우와 팁 대방출~! 아프리카, 아시아, 캐나다, 유럽, 미국, 일본, 여행일정, 배낭여행, 호스텔, 주의점, 환율 등등',
}

export default function RootLayout({ children }) {
  return (
    <>
      <Nav />
      <div className='mainContainer'>
          {children}
      </div>
      <Footer />
    </>
  )
}
