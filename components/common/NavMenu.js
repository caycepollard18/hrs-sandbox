import {
  Arrow,
  Hamburger as HamburgerLogo,
  Search as SearchLogo,
} from '@components/icons'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import {
  Box,
  Flex,
  Input
} from 'theme-ui'

const sitePages = [
  {
    url: '/collection',
    page: 'Collection',
    isFull: false,
  },
  {
    url: '/press',
    page: 'Press',
    isFull: false,
  },
  {
    url: '/stockists',
    page: 'Stockists',
    isFull: true,
  },
  {
    url: '/contact',
    page: 'Contact',
    isFull: true,
  },
  {
    url: '/about',
    page: 'About',
    isFull: false,
  },
]

const SearchBar = () => (
  <Flex
    sx={{
      alignSelf: 'stretch',
      alignItems: 'center',
      height: '32px',
      flexDirection: 'row',
      mb: 3,
      position: 'relative',
    }}
  >
    <Box
      sx={{
        left: 3,
        opacity: '0.5',
        position: 'absolute',
        top: '10px',
      }}
    >
      <SearchLogo
        height="12px"
        width="12px"
      />
    </Box>
    <Input
      placeholder="Search HRS"
      sx={{
        width: '100%',
        height: '100%',
        px: '40px',
      }}
      variant="forms.input.search"
    />
    <Flex
      sx={{
        height: '100%',
        flexDirection: 'column',
        justifyContent: 'center',
        position: 'absolute',
        right: 3,
        top: 0,
      }}
    >
      <Arrow
        color="white"
        height="11px"
        width="11px"
        variant="right"
      />
    </Flex>
  </Flex>
)

const MainMenu = ({ active, onClick }) => (
  <Flex
    sx={{
      flex: 1,
      flexDirection: 'row',
      zIndex: '10',
    }}
  >
    <Flex
      sx={{
        cursor: 'pointer',
        display: ['block', 'block', 'none'],
      }}
      onClick={onClick}
    >
      <HamburgerLogo />
    </Flex>
    <Box
      sx={{
        display: ['none', 'none', 'flex'],
        flexGrow: 1,
        flexDirection: 'row',
        gap: 4,
      }}
    >
      {sitePages.filter(page => !page.isFull).map(
        ({ url, page }) => (
          <Link
            key={url}
            href={url}
          >
            <Box as="a"
              onClick={onClick}
              variant={url === active ? "layout.header.active" : null}
            >
              {page}
            </Box>
          </Link>
        ))
      }
    </Box>
  </Flex>
)

const HamburgerMenu = ({ open }) => (
  <Flex
    sx={{
      width: '100%',
      height: '100vh',
      alignItems: 'flex-start',
      flexDirection: 'column',
      left: 0,
      px: [4, 4, 6],
      py: ['70px', '70px', '100px'],
      position: 'fixed',
      top: 0,
      transform: open ? ['translateX(0%)', null, 'translateX(-100%)'] : 'translateX(-100%)',
      zIndex: '8',
    }}
    variant="layout.header.menu"
  >
    <SearchBar />
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
)

const NavMenu = ({ active }) => {
  const [isOpen, setIsOpen] = useState(false)
  
  const handleOnClick = () => {
    setIsOpen(!isOpen)
  }
  
  useEffect(() => {
    const body = document.querySelector('body')
    body.style.overflow = isOpen ? 'hidden' : 'auto'
  }, [isOpen])

  return (
    <>
      <MainMenu active={active} onClick={() => handleOnClick()} />
      <HamburgerMenu open={isOpen} />
    </>    
  )
}

export default NavMenu