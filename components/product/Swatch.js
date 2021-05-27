import Link from 'next/link'
import PropTypes from 'prop-types'
import { Box, Text } from 'theme-ui'

const propTypes = {
  active: PropTypes.bool,
  color: PropTypes.string,
  createLinkProps: PropTypes.object,
  disabled: PropTypes.bool,
  iconSize: PropTypes.oneOf(['small', 'large']),
  size: PropTypes.string,
}

const defaultProps = {
  active: false,
  color: '#ffffff',
  createLinkProps: null,
  disabled: false,
  iconSize: 'small',
  size: '',
}

const LinkWrapper = ({ condition, children, ...props }) => (
  condition ? (<Link {...props}><a>{children}</a></Link>) : children
)

const Swatch = ({
  active,
  color,
  createLinkProps,
  disabled,
  iconSize,
  size,
  ...props
}) => {
  return (
    <LinkWrapper
      condition={createLinkProps}
      {...createLinkProps}
    >
      { size === '' ? (
        <Box
          sx={{
            height: iconSize === 'large' ? '24px' : '19px',
            width: iconSize === 'large' ? '24px' : '19px',
            backgroundColor: color.includes('/swatches/') ? '#ffffff' : 'none',
            backgroundImage: color.includes('/swatches/') && `url("${color}")`,
            backgroundOrigin: 'border-box',
            backgroundPosition: 'left center',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            borderRadius: iconSize === 'large' ? '24px' : '19px',
            cursor: 'pointer',
            display: 'block',
            variant: active ? 'layout.selector.swatch.active' : 'layout.selector.swatch',
          }}
          {...props}
        />
      ) : (
        <Text
          as="div"
          sx={{
            cursor: 'pointer',
            display: 'block',
            variant: disabled ? 'layout.selector.size.disabled' :
              active ? 'layout.selector.size.active' : 'layout.selector.size',
          }}
          {...props}
        >
          {size}
        </Text>
      )}
    </LinkWrapper>
  )
}

Swatch.propTypes = propTypes
Swatch.defaultProps = defaultProps

export default Swatch