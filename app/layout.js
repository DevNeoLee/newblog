import './globals.css'
import { Noto_Sans_KR, Noto_Serif_KR, Nanum_Myeongjo } from 'next/font/google'

const notoSansKR = Noto_Sans_KR({
  subsets: ['latin'],
  weight: ['400', '600'],
  display: 'swap',
})

const notoSerifKR = Noto_Serif_KR({
  subsets: ['latin'],
  weight: ['200', '700'],
  display: 'swap',
})

const nanumMyeongjo = Nanum_Myeongjo({
  subsets: ['latin'],
  weight: ['400', '700', '800'],
  display: 'swap',
})

export const metadata = {
  title: '생활의 지혜, 현명한 블로그 매거진 Moyahug',
  description: '생활의 지혜, 현명한 블로그 매거진 Moyahug 는 여행, 음식, 수필, 경험담, 썰, 주식, 투자 등에 대해서 실제 응용이 가능한 꼭 도움이 될 팁들과 경험을 쓰는 웹 매거진 입니다.',
  alternates: {
    canonical: 'https://moyahug.com',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'I_9zf4wYx3f6QQl-1h77XZ0EGppANsViDrLtNSvxvnA',
    other: {
      'naver-site-verification': '68f53be6eb08c4d8c8e212c7245fcadfd933fa7d',
    },
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="ko" className={`${notoSansKR.variable} ${notoSerifKR.variable} ${nanumMyeongjo.variable}`}>
      <head>
        <meta content='width=device-width, initial-scale=1'></meta>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />

        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="theme-color" content="#191960" />
  
        <meta name="google-adsense-account" content="ca-pub-6056246968519257"></meta>
        <meta name="naver-site-verification" content="68f53be6eb08c4d8c8e212c7245fcadfd933fa7d" />
        <meta name="google-site-verification" content="I_9zf4wYx3f6QQl-1h77XZ0EGppANsViDrLtNSvxvnA" />
        
        {/* 키워드 메타 태그 추가 */}
        <meta name="keywords" content="여행, 해외여행, 여행가이드, 음식, 맛집, 요리, 수필, 경험담, 에세이, 투자, 주식, 금융, 생활팁, 꿀팁, 정보, 블로그, 매거진, 문화체험, 여행정보" />
        
        {/* 구조화된 데이터 추가 */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "생활의 지혜, 현명한 블로그 매거진 Moyahug",
              "description": "생활의 지혜, 현명한 블로그 매거진 Moyahug 는 여행, 음식, 수필, 경험담, 썰, 주식, 투자 등에 대해서 실제 응용이 가능한 꼭 도움이 될 팁들과 경험을 쓰는 웹 매거진 입니다.",
              "keywords": "여행, 해외여행, 여행가이드, 음식, 맛집, 요리, 수필, 경험담, 에세이, 투자, 주식, 금융, 생활팁, 꿀팁, 정보, 블로그, 매거진, 문화체험, 여행정보",
              "url": "https://moyahug.com",
              "publisher": {
                "@type": "Organization",
                "name": "생활의 지혜"
              },
              "inLanguage": "ko-KR"
            })
          }}
        />
      </head>
      <body>
        {children}
      </body>
    </html>
  )
}
