
import './globals.css'

export const metadata = {
  title: '생활의 지혜, 현명한 블로그 매거진',
  description: '생활의 지혜, 현명한 블로그 매거진은 여행, 수필, 경험담, 썰, 주식, 투자 등에 대해서 실제 응용이 가능한 꼭 도움이 될 팁들과 경험을 쓰는 웹 매거진 입니다.',
}


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link rel="preconnect" href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@400;600&family=Noto+Serif+KR:wght@200;700&display=swap" />
          
        <meta content='width=device-width, initial-scale=1'></meta>
        <link rel="icon" href="/icon.png"></link>
      </head>
      <body>
        {children}
      </body>
    </html>
  )
}
