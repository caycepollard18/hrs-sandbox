/** @jsxImportSource theme-ui */
import {
  Container
} from 'theme-ui'
import { Header, Footer } from './index'

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
      }}
    >
      <Header />
      <main
        sx={{
          width: ['100%'],
          display: 'flex',
          flex: '1',
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
  )
}