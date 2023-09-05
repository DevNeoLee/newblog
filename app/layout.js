import './globals.css'
import { Inter } from 'next/font/google'
import Nav from './components/Nav'
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: '세계 여행은 비행기로만 가는건 아닙니다.',
  description: '즐거운 세계여행, 어는 도시로 떠나 볼까요?',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <title>세계 여행은 비행기로만 가는건 아닙니다.</title>
      <meta content='width=device-width, initial-scale=1'></meta>
      <link rel="icon" href="/favicon.ico"></link>
      <body className={inter.className}>
        <Nav />
        {children}
      </body>
    </html>
  )
}
