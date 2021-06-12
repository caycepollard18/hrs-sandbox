import {
  disableBodyScroll,
  enableBodyScroll,
  clearAllBodyScrollLocks,
} from 'body-scroll-lock'
import PropTypes from 'prop-types'
import Portal from '@reach/portal'
import { useEffect, useRef } from 'react'
import { Box, Container, Flex } from 'theme-ui'

const propTypes = {
  children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
  ]),
  open: PropTypes.bool,
  onClose: PropTypes.func,
}

const defaultProps = {
  children: null,
  open: false,
  onClose: () => void(0),
}

// todo: add ReactTransitionGroup

const Sidebar = ({ children, open, onClose }) => {
  const ref = useRef()

  useEffect(() => {
    if (ref.current) {
      if (open) {
        disableBodyScroll(ref.current, {
          reserveScrollBarGap: true,
        })
        console.log('disabled scroll')
      } else {
        enableBodyScroll(ref.current)
        console.log('enabled scroll')
      }
    }
    return () => {
      clearAllBodyScrollLocks()
      console.log('cleared scroll')
    }
  }, [open])

  return (
    <Portal>
      {open ? (
        <Container
          as="div"
          ref={ref}
          sx={{
            width: '100%', height: '100vh',
            overflowX: 'hidden',
            overflowY: 'hidden',
            position: 'absolute',
            top: 0, right: 0,
            zIndex: 50,
          }}
        >
          <Box
            as="div"
            onClick={onClose}
            sx={{
              width: '100%', height: '100%',
              backgroundColor: 'black',
              cursor: 'pointer',
              opacity: 0.3,
              overflowX: 'hidden',
              overflowY: 'hidden',
              position: 'absolute',
              top: 0, right: 0,
            }}
          />
          <Flex
            as="section"
            sx={{
              width: ['100%', 'unset'],
              height: '100%',
              position: 'absolute',
              top: 0, right: 0,
              transitionDelay: '250ms',
              transform: open ? 'translateX(0%)' : 'translateX(100%)',
            }}
          >
            {children}
          </Flex>
        </Container>
      ) : null}
    </Portal>
  )
}

Sidebar.propTypes = propTypes
Sidebar.defaultProps = defaultProps

export default Sidebar