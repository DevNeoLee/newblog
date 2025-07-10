import './globals.css'
import { Noto_Sans_KR, Sen } from 'next/font/google'

const notoSansKR = Noto_Sans_KR({
  subsets: ['latin'],
  weight: ['400', '600'],
  variable: '--font-noto-sans-kr',
  display: 'swap',
  preload: true,
})

const sen = Sen({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-sen',
  display: 'swap',
  preload: true,
})

export const metadata = {
  title: {
    default: '생활의 지혜, 현명한 블로그 매거진 Moyahug',
    template: '%s | Moyahug'
  },
  description: '생활의 지혜, 현명한 블로그 매거진 Moyahug 는 여행, 음식, 수필, 경험담, 썰, 주식, 투자 등에 대해서 실제 응용이 가능한 꼭 도움이 될 팁들과 경험을 쓰는 웹 매거진 입니다.',
  keywords: ['여행', 'IT', '블로그', '매거진', '여행팁', 'IT팁', '생활의지혜', 'Moyahug'],
  authors: [{ name: 'Moyahug' }],
  creator: 'Moyahug',
  publisher: 'Moyahug',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://moyahug.com'),
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
  openGraph: {
    type: 'website',
    locale: 'ko_KR',
    url: 'https://moyahug.com',
    title: '생활의 지혜, 현명한 블로그 매거진 Moyahug',
    description: '생활의 지혜, 현명한 블로그 매거진 Moyahug 는 여행, 음식, 수필, 경험담, 썰, 주식, 투자 등에 대해서 실제 응용이 가능한 꼭 도움이 될 팁들과 경험을 쓰는 웹 매거진 입니다.',
    siteName: 'Moyahug',
    images: [
      {
        url: 'https://moyahug.com/icon1.png',
        width: 1200,
        height: 630,
        alt: 'Moyahug - 생활의 지혜',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: '생활의 지혜, 현명한 블로그 매거진 Moyahug',
    description: '생활의 지혜, 현명한 블로그 매거진 Moyahug 는 여행, 음식, 수필, 경험담, 썰, 주식, 투자 등에 대해서 실제 응용이 가능한 꼭 도움이 될 팁들과 경험을 쓰는 웹 매거진 입니다.',
    images: ['https://moyahug.com/icon1.png'],
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="ko" className={`${sen.variable} ${notoSansKR.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "Moyahug",
              "description": "생활의 지혜, 현명한 블로그 매거진",
              "url": "https://moyahug.com",
              "publisher": {
                "@type": "Organization",
                "name": "Moyahug",
                "logo": {
                  "@type": "ImageObject",
                  "url": "https://moyahug.com/icon1.png"
                }
              },
              "potentialAction": {
                "@type": "SearchAction",
                "target": "https://moyahug.com/search?q={search_term_string}",
                "query-input": "required name=search_term_string"
              }
            })
          }}
        />
      </head>
      <body suppressHydrationWarning={true}>
        {children}
      </body>
    </html>
  );
}
