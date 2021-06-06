/** @jsxImportSource theme-ui */
import { NavMenu } from '@components/common'
import {
  Bag as BagLogo,
  Search as SearchLogo
} from '@components/icons'
import { Logo } from '@components/ui'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { Flex } from 'theme-ui'

const Bag = () => (
  <Flex>
    <Link href="">
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
    <Link href="">
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
      zIndex: '10',
    }}
  >
    <Search />
    <Bag />
  </Flex>
)

const Header = () => {
  const router = useRouter()
  
  const isHome = router.pathname === '/'
  
  return (
    <Flex
      as="header"
      sx={{
        height: isHome ? ['70px', '70px', '100px'] : ['48px', '48px', '100px'],
        width: '100%',
        alignItems: 'center',
        backgroundColor: isHome ? null : 'black',
        flexDirection: 'row',
        justifyContent: 'center',
        position: isHome ? 'absolute' : null,
        px: [4, 4, 6],
        py: isHome ? 4 : 3,
        variant: 'layout.header'
      }}
    >
      <NavMenu active={router.pathname} />
      <Logo
        href="/"
        variant="badge"
        sx={{
          height: ['20px', '20px', '30px'],
          width: ['20px', '20px', '30px'],
          zIndex: '10',
        }}
      />
      <UserMenu />
    </Flex>
  )
}

export default Header