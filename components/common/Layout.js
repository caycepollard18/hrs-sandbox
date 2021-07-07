/** @jsxImportSource theme-ui */
import { CartSidebarView } from '@components/cart'
import { Footer, Header, Newsletter } from '@components/common'
import { Modal, Sidebar, useUI } from '@components/ui'
import { useRouter } from 'next/router'
import { Container } from 'theme-ui'

const sitePages = [
  {
    url: '/collection',
    page: 'Collection',
    displayHeader: true,
    displayNavMenu: true,
  },
  /*{
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
  },*/
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
  /*{
    url: '/policy/terms',
    page: 'Terms of Use',
    displayHeader: false,
    displayNavMenu: false,
  },*/
  {
    url: '/shipping',
    page: 'Shipping & Returns',
    displayHeader: false,
    displayNavMenu: false,
  },
  /*{
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
  }*/
]

export default function Layout({ children }) {
  const router = useRouter()
  const home = router.pathname === '/'

  const { displaySidebar, displayModal, closeSidebar, closeModal, modalView } =
    useUI()
  
  const headerLinks = sitePages.filter(link => link.displayNavMenu || link.displayHeader)
  const footerLinks = sitePages

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
      <Header links={headerLinks} active={router.pathname} home />
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
      <Footer links={footerLinks} />

      <Sidebar open={displaySidebar} onClose={closeSidebar}>
        <CartSidebarView onClose={closeSidebar} />
      </Sidebar>

      <Modal open={displayModal} onClose={closeModal}>
        <Newsletter modal />
      </Modal>
      
    </Container>
  )
}