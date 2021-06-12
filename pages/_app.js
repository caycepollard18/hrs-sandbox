import { Head, Layout } from '@components/common'
import { ManagedUIContext } from '@components/ui/context'
import React, { useEffect } from 'react'
import theme from '@theme'
import { ThemeProvider } from 'theme-ui'

// Seems to work best with theme-ui to import fonts as global CSS
import '@styles/fonts.css'

export default function MyApp({ Component, pageProps }) {
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
