/** @jsxImportSource theme-ui */
import { Logo, useUI } from '@components/ui'
import Link from 'next/link'
import PropTypes from 'prop-types'
import {
  Box,
  Flex,
  Text
} from 'theme-ui'

const propTypes = {
  links: PropTypes.array,
}

const defaultProps = {
  links: [],
}

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
      mt: [4, 5],
      mb: [3, 0],
      alignItems: 'flex-start',
      flexDirection: 'column',
      flexWrap: 'wrap',
      position: 'relative',
    }}
    {...props}
  >
    {children}
  </Flex>
)

const NavLink = ({ href, onClick, title, ...props }) => (
  <Box
    sx={{
      height: '28px',
      width: ['100%', 'auto'],
      alignItems: 'center',
      display: ['flex', 'block'],
      variant: 'links.footer',
      zIndex: 1,
    }}
    {...props}
  >
    { href ? (
      <Link
        key={href}
        href={href}
      >
        {title}
      </Link>
    ) : (
      <a onClick={onClick}>
        {title}
      </a>
    )}
  </Box>
)

const Copyright = ({ ...props }) => (
  <Text
    as="span"
    sx={{
      textAlign: ['left', 'right'],
    }}
    variant="text.tiny"
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
    variant="text.tiny"
    {...props}
  >
    <Link href='/policy/accessibility'>
      <a>Accessibility Statement</a>
    </Link>
  </Text>
)

const Footer = ({ links, ...props }) => {
  const { openModal } = useUI()

  return (
    <footer
      sx={{
        minHeight: ['750px', '100%'],
        width: ['100%'],
        px: [4, 7],
        pt: [4, 9],
        pb: [4, 6],
        display: 'flex',
        flexDirection: ['column', 'row'],
        justifyContent: ['flex-start', 'center'],
        alignItems: 'stretch',
        variant: 'layout.footer',
      }}
      {...props}
    >
      <InnerContainer
        sx={{
          justifyContent: ['flex-start', 'space-between'],
          minWidth: ['100%', '400px', 0],
        }}
      >
        <Logo href="/" variant="text" />
        <FooterNav>
          {links.map(
            ({ url, page }) => (
              <NavLink
                key={url}
                href={url}
                title={page}
              />
            ))
          }
          <NavLink
            onClick={openModal}
            title="Newsletter"
          />
        </FooterNav>
      </InnerContainer>
      <InnerContainer
        sx={{
          alignItems: ['flex-start', 'flex-end'],
          justifyContent: 'space-between',
        }}
      >
        <Logo href="/" variant="badge" />
        <Flex
          sx={{
            flexDirection: 'column',
            order: [-1, 2],
            maxWidth: ['100%', '170px', '100%'],
            mb: [5, 0],
          }}
        >
          <Copyright />
          { /* <Accessibility /> */ }
        </Flex>
      </InnerContainer>
    </footer>
  )
}

Footer.propTypes = propTypes
Footer.defaultProps = defaultProps

export default Footer