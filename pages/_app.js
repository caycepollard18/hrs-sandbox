import { Head, Layout } from '@components/common'
import React from 'react'
import theme from '@theme'
import { ThemeProvider } from 'theme-ui'

// Seems to work best with theme-ui to import fonts as global CSS
import '@styles/fonts.css'

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Layout pageProps={pageProps}>
          <Head />
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </>
  )
}
