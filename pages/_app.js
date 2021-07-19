import { Head, Layout } from '@components/common'
import { ManagedUIContext } from '@components/ui/context'
import * as gtag from '@lib/gtag'
import { useRouter } from 'next/router'
import React, { useEffect } from 'react'
import theme from '@theme'
import { ThemeProvider } from 'theme-ui'

// Seems to work best with theme-ui to import fonts as global CSS
import '@styles/fonts.css'

export default function MyApp({ Component, pageProps }) {
  // gtag.js implementation
  // see https://github.com/vercel/next.js/blob/canary/examples/with-google-analytics/pages/_app.js

  const router = useRouter()

  useEffect(() => {
    const handleRouteChange = (url) => {
      gtag.pageview(url)
    }

    if (process.env.NODE_ENV === "production" && process.browser) {
      router.events.on('routeChangeComplete', handleRouteChange)

      return () => {
        router.events.off('routeChangeComplete', handleRouteChange)
      }
    }

    return null
  }, [router.events])

  useEffect(() => {
    document.body.classList?.remove('loading')
  }, [])

  return (
    <ManagedUIContext>
      <ThemeProvider theme={theme}>
        <Layout pageProps={pageProps}>
          <Head />
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </ManagedUIContext>
  )
}
