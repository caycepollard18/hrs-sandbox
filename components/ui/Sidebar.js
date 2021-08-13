import {
  disableBodyScroll,
  enableBodyScroll,
  clearAllBodyScrollLocks,
} from 'body-scroll-lock'
import PropTypes from 'prop-types'
import Portal from '@reach/portal'
import { useEffect, useRef } from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
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

// todo: add left & right variants (?)

const Sidebar = ({ children, open, onClose }) => {
  const ref = useRef()

  useEffect(() => {
    if (ref.current) {
      if (open) {
        disableBodyScroll(ref.current, {
          reserveScrollBarGap: true,
        })
        // console.log('disabled scroll')
      } else {
        enableBodyScroll(ref.current)
        // console.log('enabled scroll')
      }
    }
    return () => {
      clearAllBodyScrollLocks()
      // console.log('cleared scroll')
    }
  }, [open])

  return (
    <Portal className="portal">
      <ReactCSSTransitionGroup
        transitionName="slide"
        transitionEnterTimeout={250}
        transitionLeaveTimeout={250}
      >
        {open ? (
          <Container
            as="div"
            className="test-name"
            ref={ref}
            sx={{
              width: '100%', height: '100%',
              overflowX: 'hidden',
              overflowY: 'hidden',
              position: 'absolute',
              top: 0, right: 0,
              zIndex: 50,
            }}
            variant="layout.sidebar"
          >
            <Box
              as="div"
              onClick={onClose}
              sx={{
                width: '100%', height: '100%',
                cursor: 'pointer',
                overflowX: 'hidden',
                overflowY: 'hidden',
                position: 'absolute',
                top: 0, right: 0,
              }}
              variant="layout.sidebar.background"
            />
            <Flex
              as="section"
              sx={{
                width: ['100%', 'unset'],
                height: '100%',
                position: 'absolute',
                top: 0, right: 0,
                transitionDelay: '250ms',
              }}
            >
              {children}
            </Flex>
          </Container>
        ) : null}
      </ReactCSSTransitionGroup>
    </Portal>
  )
}

Sidebar.propTypes = propTypes
Sidebar.defaultProps = defaultProps

export default Sidebar