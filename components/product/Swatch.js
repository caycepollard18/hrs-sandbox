import PropTypes from 'prop-types'
import { Box } from 'theme-ui'

const propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOf(['small', 'large']),
  variant: PropTypes.oneOf(['color', 'size']),
  active: PropTypes.bool,
}

const defaultProps = {
  color: '#ffffff',
  size: 'small',
  variant: 'color',
  active: true,
}

// todo: implement size variant

const Swatch = ({
  color,
  size,
  active,
  ...props
}) => (
  <Box
    sx={{
      height: size === 'large' ? '24px' : '19px',
      width: size === 'large' ? '24px' : '19px',
      backgroundColor: '#ffffff',
      backgroundImage: color.includes('/swatches/') && `url("${color}")`,
      backgroundOrigin: 'border-box',
      backgroundPosition: 'left center',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      borderRadius: size === 'large' ? '24px' : '19px',
      cursor: 'pointer',
      display: 'block',
      variant: active ? 'layout.selector.swatch.active' : 'layout.selector.swatch',
    }}
    {...props}
  />
)

Swatch.propTypes = propTypes
Swatch.defaultProps = defaultProps

export default Swatch

/*
<Box
        sx={{
          height: size === 'large' ? '24px' : '18px',
          width: size === 'large' ? '24px' : '18px',
          backgroundColor: color,
          borderRadius: size === 'large' ? '24px' : '18px',
          border: active ? '1px solid white' : 'none',
          boxShadow: active ? '0px 3px 6px #00000029' : '1px 1px 1px #00000040',
          cursor: 'pointer',
          display: 'block',
        }}
      />

      */