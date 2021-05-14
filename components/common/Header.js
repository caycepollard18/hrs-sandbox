/** @jsxImportSource theme-ui */
import {
  Bag as BagLogo,
  Hamburger as HamburgerLogo,
  Search as SearchLogo
} from '@components/icons'
import { Logo } from '@components/ui'
import Link from 'next/link'
import {
  Box,
  Flex
} from 'theme-ui'

const sitePages = [
  {
    url: '/shop',
    page: 'Shop',
  },
  {
    url: '/collection',
    page: 'Collection',
  },
  {
    url: '/about',
    page: 'About',
  }
]

const Hamburger = ({...props}) => (
  <Flex
    sx={{
      display: ['block', 'block', 'none'],
    }}
    {...props}
  >
    <Link href="/">
      <a>
        <HamburgerLogo />
      </a>
    </Link>
  </Flex>
)

const HeaderContainer = ({ children }) => (
  <Flex
    as="header"
    sx={{
      height: '70px',
      width: '100%',
      alignItems: 'center',
      flexDirection: 'row',
      justifyContent: 'center',
      position: 'absolute',
      px: ['24px', '24px', 5],
      py: '24px',
      variant: 'layout.header'
    }}
  >
    { children }
  </Flex>
)

const NavMenu = () => (
  <Flex
    sx={{
      flex: 1,
      flexDirection: 'row',
    }}
  >
    <Hamburger />
    <Flex
      sx={{
        flexDirection: 'row',
        display: ['none', 'none', 'block'],
        'a': {
          pr: '24px',
        },
      }}
    >
      {sitePages.map(
        ({ url, page }) => (
          <Link
            key={url}
            href={url}
          >
            {page}
          </Link>
        ))
      }
    </Flex>
  </Flex>
)

const Bag = ({...props}) => (
  <Flex
    {...props}
  >
    <Link href="/">
      <a>
        <BagLogo />
      </a>
    </Link>
  </Flex>
)

const Search = ({...props}) => (
  <Flex
    sx={{
      display: ['none', 'none', 'block'],
    }}
    {...props}
  >
    <Link href="/">
      <a>
        <SearchLogo />
      </a>
    </Link>
  </Flex>
)

const UserMenu = () => (
  <Flex
    sx={{
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'flex-end',
    }}
  >
    <Search
      sx={{
        mr: 4,
      }}
    />
    <Bag />
  </Flex>
)

const Header = ({ ...props }) => {
  return (
    <HeaderContainer>
        <NavMenu />
      <Logo
        sx={{
          height: [20, 20, 30],
          width: [20, 20, 30],
        }}
      />
      <UserMenu />
    </HeaderContainer>
  )
}

export default Header