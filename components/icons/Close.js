import PropTypes from 'prop-types'
import { Box } from 'theme-ui'

const propTypes = {
  color: PropTypes.string,
  onClick: PropTypes.func,
  sx: PropTypes.object,
  variant: PropTypes.oneOf(['back', 'default'])
}

const defaultProps = {
  color: 'white',
  onClick: null,
  sx: {
    m: 3,
    p: 2,
  },
  variant: 'default'
}

const CloseIcon = ({ color }) => (
  <Box
    as="div"
    sx={{
      width: '12px',
      height: '12px',
      position: 'relative'
    }}
  >
    <Box
      as="span"
      sx={{
        height: '1px',
        width: '12px',
        backgroundColor: color || 'white',
        display: 'block',
        position: 'absolute',
        top: '25%', right: 0,
        transform: 'rotate(45deg)',
      }}
    />
    <Box
      as="span"
      sx={{
        height: '1px',
        width: '12px',
        backgroundColor: color || 'white',
        display: 'block',
        position: 'absolute',
        top: '25%', right: 0,
        transform: 'rotate(-45deg)',
      }}
    />
  </Box>
)

const CloseText = ({ color }) => (
  <Box
    as="div"
    sx={{
      position: 'relative',
    }}
    variant="text.microBold"
  >
    Close
  </Box>
)

const Close = ({ color, onClick, sx, variant }) => (
  <Box
    sx={{
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      ...sx
    }}
    onClick={onClick}
  >
    {variant === "text" ? (
      <CloseText color={color} />
    ) : (
      <CloseIcon color={color} />
    )}
  </Box>
)

Close.propTypes = propTypes
Close.defaultProps = defaultProps

export default Close