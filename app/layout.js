
import './globals.css'
import Image from 'next/image'


export const metadata = {
  title: '생활의 지혜, 현명한 블로그 매거진',
  description: '생활의 지혜, 현명한 블로그 매거진은 여행, 음식, 수필, 경험담, 썰, 주식, 투자 등에 대해서 실제 응용이 가능한 꼭 도움이 될 팁들과 경험을 쓰는 웹 매거진 입니다.',
}


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link rel="preconnect" href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@400;600&family=Noto+Serif+KR:wght@200;700&display=swap" />
        <link rel="preconnect" href="https://fonts.googleapis.com/css2?family=Nanum+Myeongjo:wght@700&display=swap" />
        <meta content='width=device-width, initial-scale=1'></meta>
        <link rel="icon" href="/icon1.png" sizes="any"></link>
        <link rel="apple-touch-icon" href="/icon1.png" type="image/png" sizes="any"
/>
        <meta name="google-adsense-account" content="ca-pub-6056246968519257"></meta>
        <meta name="naver-site-verification" content="68f53be6eb08c4d8c8e212c7245fcadfd933fa7d" />
        <meta name="google-site-verification" content="I_9zf4wYx3f6QQl-1h77XZ0EGppANsViDrLtNSvxvnA" />
      </head>
      <body>
        {children}
      </body>
    </html>
  )
}
