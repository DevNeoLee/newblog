import './globals.css'
import { Sen, Noto_Sans_KR, Noto_Serif_KR, Nanum_Myeongjo, Edu_SA_Beginner } from 'next/font/google'

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

const sen = Sen({
  subsets: ['latin'],
  weight: ['400', '700', '800'],
  variable: '--font-sen',
  display: 'swap',
})

const eduSABeginner = Edu_SA_Beginner({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
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
    <html lang="ko" className={`${sen.variable} ${notoSansKR.variable} ${notoSerifKR.variable} ${nanumMyeongjo.variable} ${eduSABeginner.variable}`}>
      <body suppressHydrationWarning={true}>
        {children}
      </body>
    </html>
  );
}
