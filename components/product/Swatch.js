import {
  Box
} from 'theme-ui'

const Swatch = ({
  color = '',
  size = 'small',
  variant = 'color',
  active,
  ...props
}) => (
  <Box
    sx={{
      height: '18px',
      width: '18px',
      backgroundColor: color,
      borderRadius: '18px',
      border: `${active ? '1px solid white' : 'none'}`,
      boxShadow: `${active ? '0px 3px 6px #00000029' : '1px 1px 1px #00000040'}`,
      cursor: 'pointer',
      display: 'block',
    }}
    {...props}
  />
)

export default Swatch