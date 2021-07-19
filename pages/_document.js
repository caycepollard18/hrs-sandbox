import { GA_TRACKING_ID } from '@lib/gtag'
import Document, { Head, Html, Main, NextScript } from 'next/document'

// todo: consider preloading GranbyEF fonts rel="preload"
// see: https://stackoverflow.com/questions/63023946/preload-custom-font-with-next-js

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        {process.env.NODE_ENV === "production" && process.browser ?
          <Head>
            {/* Global Site Tag (gtag.js) - Google Analytics */}
            <script
              async
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
            />
            <script
              dangerouslySetInnerHTML={{
                __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${GA_TRACKING_ID}', {
                page_path: window.location.pathname,
              });
            `,
              }}
            />
          {/* End Global Site Tag (gtag.js) - Google Analytics */}
          </Head> : null}
        <Head>
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="true"
          />
          <link
            rel="preload"
            as="style"
            href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap"
          />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap"
            media="print"
            onLoad="this.media='all'"
          />
          <noscript>
            <link
              rel="stylesheet"
              href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap"
            />
          </noscript>
        </Head>
        <body className="loading">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument