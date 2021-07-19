import { Head, Layout } from '@components/common'
import { ManagedUIContext } from '@components/ui/context'
import * as analytics from '@lib/analytics'
import { useRouter } from 'next/router'
import React, { useEffect } from 'react'
import theme from '@theme'
import { ThemeProvider } from 'theme-ui'

// Seems to work best with theme-ui to import fonts as global CSS
import '@styles/fonts.css'

export default function MyApp({ Component, pageProps }) {
  const router = useRouter()

  useEffect(() => {
    const handleRouteChange = (url) => {
      analytics.pageview(url)
    }

    // While the component is mounted, subscribe to router changes
    // and log those as pageviews in Analytics
    router.events.on('routeChangeComplete', handleRouteChange)

    // When the component unmounts, unsubscribe from router
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
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
