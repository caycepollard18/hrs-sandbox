import React from 'react'

import Layout from '../components/common/Layout'

import { Global, css } from '@emotion/react'
import { ThemeProvider } from 'theme-ui'
import fonts from '../styles/fonts.css'
import theme from '../theme/theme.js'

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Global
        styles={css`
          ${fonts}
        `}
      />
      <ThemeProvider theme={theme}>
        <Layout pageProps={pageProps}>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </>
  )
}
