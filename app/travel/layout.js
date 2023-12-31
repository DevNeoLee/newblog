// import './globals.css'
import Nav from './components/Nav'

export const metadata = {
  title: '세계여행 고수들의 현지 노하우 팁 대방출~!',
  description: '세계 여행 고수들의 현지 노하우와 팁 대방출~! 아프리카, 아시아, 캐나다, 유럽, 미국, 일본, 여행일정, 배낭여행, 호스텔, 주의점, 환율 등등',
}

export default function RootLayout({ children }) {
  return (
    <div className='mainContainer'>
        <Nav />
          {children}
        <footer className="footer">
          <div style={{ display: "flex", justifyContent: "space-between"}}>
            <p>Copyright. 뭐여행 {new Date().getFullYear()}</p><p>Photo by Mesut Kaya from <a href="https://unsplash.com/">Unsplash</a></p>
          </div>
        </footer>
    </div>
  )
}
