import { Hamburger as HamburgerLogo } from '@components/icons'
import { useUI } from '@components/ui'
import Link from 'next/link'
import { useRouter } from 'next/router'
import PropTypes from 'prop-types'
import React, { useEffect, useState } from 'react'
import {
  Box,
  Flex,
} from 'theme-ui'

// todo: update to use Sidebar.js
// todo: update to SidebarNavMenu and HeaderNavMenu

const propTypes = {
  links: PropTypes.array,
}

const defaultProps = {
  links: [],
}

const MainMenu = ({ active, links, onClick }) => (
  <Flex
    sx={{
      flex: 1,
      flexDirection: 'row',
      zIndex: '10',
    }}
  >
    <Flex
      as="a"
      sx={{
        cursor: 'pointer',
        display: ['block', 'block', 'none'],
        zIndex: ['inherit', 'inherit', '-1'],
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
      {links.filter(link => link.displayHeader).map(
        ({ url, page, variant }) => (
          <Link
            key={url}
            href={url}
            passHref
          >
            <Box
              as="a"
              sx={{
                alignItems: 'center',
                display: 'flex',
                pb: variant === 'outline' ? '2px' : '0px',
                pt: '2px',
                px: variant ? '4px' : '0px',
              }}
              variant={`layout.header.links${variant ? '.' + variant : ''}${url === active ? '.active' : ''}`}
            >
              {page}
            </Box>
          </Link>
        ))
      }
    </Box>
  </Flex>
)

const HamburgerMenu = ({ links, open, openModal }) => (
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
    {links.map(
      ({ url, page }) => (
        <Link
          key={url}
          href={url}
        >
          {page}
        </Link>
      ))
    }
    {/* <a onClick={openModal}>Newsletter</a> */}
  </Flex>
)

const NavMenu = ({ active, links }) => {
  const [isOpen, setIsOpen] = useState(false)
  const { openModal } = useUI()
  
  const handleOnClick = () => {
    setIsOpen(!isOpen)
  }

  const handleOnModalOpen = () => {
    setIsOpen(false)
    openModal()
  }

  const router = useRouter()

  useEffect(() => {
    const handleRouteChange = (url) => {
      setIsOpen(false)
    }

    router.events.on('routeChangeStart', handleRouteChange)
    
    return () => {
      router.events.off('routeChangeStart', handleRouteChange)
    }
  }, [])
  
  useEffect(() => {
    const body = document.querySelector('body')
    body.style.overflowY = isOpen ? 'hidden' : 'auto'
  }, [isOpen])

  return (
    <>
      <MainMenu active={active} links={links} onClick={() => handleOnClick()} />
      <HamburgerMenu links={links} open={isOpen} openModal={handleOnModalOpen} />
    </>    
  )
}

NavMenu.propTypes = propTypes
NavMenu.defaultProps = defaultProps

export default NavMenu