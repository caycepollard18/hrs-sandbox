/** @jsxImportSource theme-ui */
import Link from 'next/link'
import {
  Box,
  Flex,
  Text
} from 'theme-ui'
import {
  Logo,
  LogoAlt,
} from '../ui/Logo'

const sitePages = [
  {
    url: '/shop',
    page: 'Shop',
  },
  {
    url: '/stockists',
    page: 'Stockists',
  },
  {
    url: '/press',
    page: 'Press'
  },
  {
    url: '/about',
    page: 'About'
  },
  {
    url: '/contact',
    page: 'Contact'
  },
  {
    url: '/policy/privacy-policy',
    page: 'Privacy Policy'
  },
  {
    url: '/policy/terms',
    page: 'Terms of Use'
  },
  {
    url: '/policy/shipping-and-returns',
    page: 'Shipping & Returns'
  },
  {
    url: '/policy/legal',
    page: 'Legal'
  },
  {
    url: '/sitemap',
    page: 'Sitemap'
  }
]

const InnerContainer = ({ children, ...props }) => (
  <Flex
    sx={{
      alignSelf: 'stretch',
      flex: [0, 1],
      flexDirection: 'column',
    }}
    {...props}
  >
    {children}
  </Flex>
)

const FooterNav = ({ children, ...props }) => (
  <Flex
    sx={{
      maxWidth: ['100%', 400],
      maxHeight: ['100%', 100],
      mt: ['24px', 4],
      mb: [3, 0],
      alignItems: 'flex-start',
      flexDirection: 'column',
      flexWrap: 'wrap',
      position: 'relative',
      variant: 'layout.footer.links',
    }}
    {...props}
  >
    {children}
  </Flex>
)

const NavLink = ({ href, page, ...props }) => (
  <Box
    sx={{
      height: 28,
      width: ['100%', 'auto'],
      alignItems: 'center',
      display: ['flex', 'block'],
      variant: 'links.footer',
    }}
    {...props}
  >
    <Link
      key={href}
      href={href}
    >
      {page}
    </Link>
  </Box>
)

const Copyright = ({ ...props }) => (
  <Text
    as="span"
    sx={{
      textAlign: ['left', 'right'],
    }}
    variant="text.small"
    {...props}
  >
    &copy; {`
    ${new Date().getFullYear()}
    Human Recreational Services. All rights reserved.
    `}
  </Text>
)

const Accessibility = ({ ...props }) => (
  <Text
    as="span"
    sx={{
      textAlign: ['left', 'right'],
    }}
    variant="text.small"
    {...props}
  >
    <Link href='/policy/accessibility'>
      <a>Accessibility Statement</a>
    </Link>
  </Text>
)

const Footer = ({ ...props }) => {
  return (
    <footer
      sx={{
        minHeight: [750, '100%'],
        width: ['100%'],
        px: [28, 60],
        pt: [28, 80],
        pb: [28, 45],
        display: 'flex',
        flexDirection: ['column', 'row'],
        justifyContent: ['flex-start', 'center'],
        alignItems: 'stretch',
        variant: 'layout.footer',
      }}
    >
      <InnerContainer
        sx={{
          justifyContent: ['flex-start', 'space-between'],
          minWidth: ['100%', 400, 0],
        }}
      >
        <LogoAlt
          sx={{
            width: 145,
            height: 50,
          }}
        />
        <FooterNav>
          {sitePages.map(
            ({ url, page }) => (
              <NavLink
                key={url}
                href={url}
                page={page}
              />
            ))
          }
        </FooterNav>
      </InnerContainer>
      <InnerContainer
        sx={{
          alignItems: ['flex-start', 'flex-end'],
          justifyContent: 'space-between',
        }}
      >
        <Logo />
        <Flex
          sx={{
            flexDirection: 'column',
            order: [-1, 2],
            maxWidth: ['100%', '170px', '100%'],
            mb: [4, 0],
          }}
        >
          <Copyright />
          <Accessibility />
        </Flex>
      </InnerContainer>
    </footer>
  )
}

export default Footer