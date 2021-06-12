/** @jsxImportSource theme-ui */
import { CartSidebarView } from '@components/cart'
import { Footer, Header } from '@components/common'
import { Modal, Sidebar, useUI } from '@components/ui'
import { Container } from 'theme-ui'

const sitePages = [
  {
    url: '/collection',
    page: 'Collection',
    displayHeader: true,
    displayNavMenu: true,
  },
  {
    url: '/stockists',
    page: 'Stockists',
    displayHeader: false,
    displayNavMenu: true,
  },
  {
    url: '/press',
    page: 'Press',
    displayHeader: true,
    displayNavMenu: true,
  },
  {
    url: '/about',
    page: 'About',
    displayHeader: true,
    displayNavMenu: true,
  },
  {
    url: '/contact',
    page: 'Contact',
    displayHeader: false,
    displayNavMenu: true,
  },
  {
    url: '/policy/privacy-policy',
    page: 'Privacy Policy',
    displayHeader: false,
    displayNavMenu: false,
  },
  {
    url: '/policy/terms',
    page: 'Terms of Use',
    displayHeader: false,
    displayNavMenu: false,
  },
  {
    url: '/policy/shipping-and-returns',
    page: 'Shipping & Returns',
    displayHeader: false,
    displayNavMenu: false,
  },
  {
    url: '/policy/legal',
    page: 'Legal',
    displayHeader: false,
    displayNavMenu: false,
  },
  {
    url: '/sitemap',
    page: 'Sitemap',
    displayHeader: false,
    displayNavMenu: false,
  }
]

export default function Layout({ children }) {
  const { displaySidebar, displayModal, closeSidebar, closeModal, modalView } =
    useUI()

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
      variant="layout.root"
    >
      <Header
        links={sitePages.filter(link => link.displayNavMenu || link.displayHeader)}
      />
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
      <Footer links={sitePages} />

      <Sidebar open={displaySidebar} onClose={closeSidebar}>
        <CartSidebarView onClose={closeSidebar} />
      </Sidebar>
      
    </Container>
  )
}