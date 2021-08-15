/** @jsxImportSource theme-ui */
import { useCart } from '@framework/cart'
import { NavMenu } from '@components/common'
import {
  Bag as BagLogo,
  Search as SearchLogo
} from '@components/icons'
import { Logo, useUI } from '@components/ui'
import Link from 'next/link'
import PropTypes from 'prop-types'
import { Flex } from 'theme-ui'

const propTypes = {
  links: PropTypes.array,
  active: PropTypes.string,
}

const defaultProps = {
  links: [],
  active: '',
}

const Search = () => (
  <Flex
    sx={{
      display: ['none', 'none', 'block'],
    }}
  >
    <Link href="#">
      <a>
        <SearchLogo />
      </a>
    </Link>
  </Flex>
)

const UserMenu = ({ count, onClick }) => (
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
    <Flex
      as="a"
      sx={{ cursor: 'pointer', position: 'relative' }}
      onClick={onClick}
    >
      <BagLogo />
      <Flex
        as="div"
        sx={{
          width: '11px',
          height: '11px',
          borderRadius: '11px',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'absolute',
          bottom: '2px', left: '8.5px',
          variant: 'layout.header.menu.count',
        }}
      >
        {count || '0'}
      </Flex>
    </Flex>
  </Flex>
)

const Header = ({ links, active }) => {
  const { toggleSidebar } = useUI()
  const { itemCount } = useCart()
  
  const isHome = active === '/'
  
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
        top: 0, left: 0,
        px: [4, 4, 6],
        py: isHome ? 4 : 3,
        variant: 'layout.header'
      }}
    >
      <NavMenu active={active} links={links} />
      <Logo
        href="/"
        variant="badge"
        sx={{
          height: ['20px', '20px', '30px'],
          width: ['20px', '20px', '30px'],
          zIndex: '10',
        }}
      />
      <UserMenu count={itemCount} onClick={() => toggleSidebar()} />
    </Flex>
  )
}

Header.propTypes = propTypes
Header.defaultProps = defaultProps

export default Header