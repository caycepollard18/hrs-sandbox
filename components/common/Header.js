/** @jsxImportSource theme-ui */
import {
  Bag as BagLogo,
  Hamburger as HamburgerLogo,
  Search as SearchLogo
} from '@components/icons'
import { Logo } from '@components/ui'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { Flex } from 'theme-ui'

const sitePages = [
  {
    url: '/collection',
    page: 'Collection',
  },
  {
    url: '/press',
    page: 'Press',
  },
  {
    url: '/about',
    page: 'About',
  }
]

const Hamburger = () => (
  <Flex
    sx={{
      display: ['block', 'block', 'none'],
    }}
  >
    <Link href="/">
      <a>
        <HamburgerLogo />
      </a>
    </Link>
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
          pr: 4,
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

const Bag = () => (
  <Flex>
    <Link href="/">
      <a>
        <BagLogo />
      </a>
    </Link>
  </Flex>
)

const Search = () => (
  <Flex
    sx={{
      display: ['none', 'none', 'block'],
    }}
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
      alignItems: 'center',
      flex: 1,
      flexDirection: 'row',
      gap: 5,
      justifyContent: 'flex-end',
    }}
  >
    <Search />
    <Bag />
  </Flex>
)

const Header = () => {
  const router = useRouter()
  return (
    <Flex
      as="header"
      sx={{
        height: router.pathname === '/' ? ['70px', '70px', '100px'] : ['48px', '48px', '100px'],
        width: '100%',
        alignItems: 'center',
        backgroundColor: router.pathname === '/' ? null : 'black',
        flexDirection: 'row',
        justifyContent: 'center',
        position: router.pathname === '/' ? 'absolute' : null,
        px: [4, 4, 6],
        py: router.pathname === '/' ? 4 : 3,
        variant: 'layout.header'
      }}
    >
      <NavMenu />
      <Logo
        sx={{
          height: ['20px', '20px', '30px'],
          width: ['20px', '20px', '30px'],
        }}
      />
      <UserMenu />
    </Flex>
  )
}

export default Header