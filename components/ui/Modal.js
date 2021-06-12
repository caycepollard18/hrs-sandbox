import { Close } from '@components/icons'
import PropTypes from 'prop-types'
import Portal from '@reach/portal'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import { Box, Container } from 'theme-ui'

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
  open: true,
  onClose: () => void(0),
}

// todo: add left & right variants (?)

const Modal = ({ children, open, onClose }) => {
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
              sx={{
                minHeight: '240px',
                minWidth: ['100%', '100%', '720px', '960px'],
                alignItems: 'center',
                display: 'flex',
                justifyContent: 'center',
                position: 'fixed',
                bottom: ['64px', '64px', 0],
                right: 0,
                zIndex: '7',
              }}
              variant="forms.newsletter.modal"
            >
              {children}
              <Close
                onClick={onClose}
                sx={{
                  m: 3,
                  p: 2,
                  position: 'absolute',
                  top: 0, right: 0,
                }}
              />
            </Box>
          </Container>
        ) : null}
      </ReactCSSTransitionGroup>
    </Portal>
  )
}

Modal.propTypes = propTypes
Modal.defaultProps = defaultProps

export default Modal