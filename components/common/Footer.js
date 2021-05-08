/** @jsxImportSource theme-ui */
import Link from 'next/link'
import {
  Box,
  Flex,
  Text,
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
    url: '/privacy',
    page: 'Privacy Policy'
  },
  {
    url: '/terms',
    page: 'Terms of Use'
  },
  {
    url: '/refunds',
    page: 'Sales & Refunds'
  },
  {
    url: '/legal',
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

const NavLink = ({ key, href, page, ...props }) => (
  <Box
    sx={{
      height: 28,
      width: ['100%', 'auto'],
      alignItems: 'center',
      borderBottom: ['1px solid #434343', 'none'],
      display: ['flex', 'block'],
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
    sx={{
      variant: 'text.small',
      textAlign: ['left', 'right'],
    }}
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
    sx={{
      variant: 'text.small',
      textAlign: ['left', 'right'],
    }}
    {...props}
  >
    <Link href='/'>
      Accessibility Statement
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