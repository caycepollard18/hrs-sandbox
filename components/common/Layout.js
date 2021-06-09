/** @jsxImportSource theme-ui */
import {
  Footer,
  Header
 } from '@components/common'
import { Container } from 'theme-ui'

export default function Layout({ children, home }) {
  return (
    <Container
      sx={{
        width: ['100%'],
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        // overflowX: 'hidden', this breaks position: 'sticky'
      }}
    >
      <Header />
      <main
        sx={{
          width: ['100%'],
          alignItems: 'center',
          display: 'flex',
          flex: 1,
          flexDirection: 'column',
          justifyContent: 'flex-start',
          variant: 'layout.main',
        }}
      >
        {children}
      </main>
      <Footer />
    </Container>
  )
}