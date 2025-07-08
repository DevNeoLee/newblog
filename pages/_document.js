import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="ko">
      <Head>
        {/* 폰트는 next/font/google을 통해 layout.js에서 관리 */}
        {/* 파비콘 및 기타 메타 */}
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta content="width=device-width, initial-scale=1" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
} 