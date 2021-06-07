import { Box } from 'theme-ui'

const Close = ({ color }) => (
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

export default Close