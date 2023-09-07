
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Black+Han+Sans&display=swap" rel="stylesheet" />
        <title>다양한 블로그</title>
        <meta content='width=device-width, initial-scale=1'></meta>
        <link rel="icon" href="/icon.png"></link>
      </head>
      <body>
        {children}
      </body>
    </html>
  )
}
