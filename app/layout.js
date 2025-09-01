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
  description: '생활의 지혜, 현명한 블로그 매거진 Moyahug는 여행 팁, IT 노하우, 해외여행 가이드, 디지털 노마드, 애자일 방법론 등 실용적인 정보를 제공하는 웹 매거진입니다. 여행 준비부터 IT 트렌드까지 모든 것을 쉽게 배워보세요.',
  keywords: ['여행', 'IT', '블로그', '매거진', '여행팁', 'IT팁', '생활의지혜', 'Moyahug', '해외여행', '디지털노마드', '애자일', '크루즈여행', '오로라여행', '비즈니스클래스', '유심카드', '렌트카', '린스타트업', 'KISS원칙', 'FailFast'],
  authors: [{ name: 'Moyahug' }],
  creator: 'Moyahug',
  publisher: 'Moyahug',
  robots: {
    index: true,
    follow: true,
    'max-video-preview': -1,
    'max-image-preview': 'large',
    'max-snippet': -1,
    'noarchive': false,
    'nosnippet': false,
    'noimageindex': false,
    'notranslate': false,
  },
  verification: {
    google: 'I_9zf4wYx3f6QQl-1h77XZ0EGppANsViDrLtNSvxvnA',
    naver: '68f53be6eb08c4d8c8e212c7245fcadfd933fa7d',
  },
  openGraph: {
    type: 'website',
    locale: 'ko_KR',
    url: 'https://moyahug.com',
    siteName: 'Moyahug',
    title: '생활의 지혜, 현명한 블로그 매거진 Moyahug',
    description: '생활의 지혜, 현명한 블로그 매거진 Moyahug는 여행 팁, IT 노하우, 해외여행 가이드, 디지털 노마드, 애자일 방법론 등 실용적인 정보를 제공하는 웹 매거진입니다.',
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
    description: '생활의 지혜, 현명한 블로그 매거진 Moyahug는 여행 팁, IT 노하우, 해외여행 가이드, 디지털 노마드, 애자일 방법론 등 실용적인 정보를 제공하는 웹 매거진입니다.',
    images: ['https://moyahug.com/icon1.png'],
  },
  alternates: {
    canonical: 'https://moyahug.com',
  },
  other: {
    'format-detection': 'telephone=no, address=no, email=no',
  },
  metadataBase: new URL('https://moyahug.com'),
}

export default function RootLayout({ children }) {
  return (
    <html lang="ko" className={`${sen.variable} ${notoSansKR.variable}`}>
      <head>
      </head>
      <body suppressHydrationWarning={true}>
        {children}
      </body>
    </html>
  );
}
