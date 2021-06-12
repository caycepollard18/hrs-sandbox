import PropTypes from 'prop-types'
import { Box } from 'theme-ui'

const propTypes = {
  color: PropTypes.string,
  onClick: PropTypes.func,
  sx: PropTypes.object,
}

const defaultProps = {
  color: 'white',
  onClick: null,
  sx: {
    m: 3,
    p: 2,
  }
}

const Close = ({ color, onClick, sx }) => (
  <Box
    sx={{
      cursor: 'pointer',
      ...sx
    }}
    onClick={onClick}
  >
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
  </Box>
)

Close.propTypes = propTypes
Close.defaultProps = defaultProps

export default Close