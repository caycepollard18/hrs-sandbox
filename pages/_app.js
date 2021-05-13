import React from 'react'
import Layout from '../components/common/Layout'
import { ThemeProvider } from 'theme-ui'
import fonts from '../styles/fonts.css'
import theme from '../theme/theme.js'

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Layout pageProps={pageProps}>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </>
  )
}
