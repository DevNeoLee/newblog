
import Nav from './components/Nav'
import Footer from "./components/Footer"
import { getPages } from './utils/getData';

export const metadata = {
  title: 'it 노하우 팁 철학',
  description: 'it 노하우 팁 정보 철학 쉬운 간단한 쉽게 풀어쓴, 중학생정도의 눈높이에 맞춘',
  alternates: {
    canonical: 'https://moyahug.com/it',
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
      <Footer/>
    </>
  )
}
