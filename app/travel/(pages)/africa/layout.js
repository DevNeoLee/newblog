// import './globals.css'
// import { Inter } from 'next/font/google'
// import Nav from './components/Nav'
// const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: '현지 여행 고수들의 현지 가이드 아프리카...',
  description: '즐거운 세계여행, 어는 도시로 떠나 볼까요?',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Black+Han+Sans&display=swap" rel="stylesheet" />
        <title>현지 여행 고수들의 현지 가이드 아프리카</title>
        <meta content='width=device-width, initial-scale=1'></meta>
        <link rel="icon" href="/icon.png"></link>
      </head>
      <body>
        {/* <Nav /> */}
        {children}
      </body>
    </html>
  )
}
