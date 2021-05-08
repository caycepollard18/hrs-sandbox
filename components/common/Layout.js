/** @jsxImportSource theme-ui */
import Head from 'next/head'
import {
  BaseStyles,
  Container
} from 'theme-ui'
import Footer from './Footer'

export default function Layout({ children, home }) {
  return (
    <BaseStyles>
      <Container
        sx={{
          width: ['100%'],
          minHeight: '100vh',

          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-start',
          alignItems: 'center',
        }}
      >
        <Head />
        <main
          sx={{
            width: ['100%'],
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-start',
            alignItems: 'center',
            variant: 'layout.main',
          }}
        >
          {children}
        </main>
        <Footer />
      </Container>
    </BaseStyles>
  )
}