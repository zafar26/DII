import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head >
          <link rel="manifest" href="/manifest.webmanifest.json" />
          <link rel="apple-touch-icon" href="/icon-192x192.png"></link>
          <meta name="theme-color" content="#d6f8d2" />

      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
