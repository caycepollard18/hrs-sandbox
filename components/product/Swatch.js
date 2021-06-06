import Link from 'next/link'
import PropTypes from 'prop-types'
import { Box, Text } from 'theme-ui'

const propTypes = {
  active: PropTypes.bool,
  color: PropTypes.string,
  createLinkProps: PropTypes.object,
  disabled: PropTypes.bool,
  iconSize: PropTypes.oneOf(['small', 'large']),
  onClick: PropTypes.func,
  size: PropTypes.string,
}

const defaultProps = {
  active: false,
  color: '#ffffff',
  createLinkProps: null,
  disabled: false,
  iconSize: 'small',
  onClick: null,
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
  onClick,
  size,
  ...props
}) => {
  const productColor = color != undefined ? color : ''
  
  return (
    <LinkWrapper
      condition={!disabled && createLinkProps}
      {...createLinkProps}
    >
      { size === '' ? (
        <Box
          sx={{
            height: iconSize === 'large' ? '24px' : '19px',
            width: iconSize === 'large' ? '24px' : '19px',
            backgroundColor: productColor.includes('/swatches/') ? '#ffffff' : 'none',
            backgroundImage: productColor.includes('/swatches/') && `url("${productColor}")`,
            backgroundOrigin: 'border-box',
            backgroundPosition: 'left center',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            borderRadius: iconSize === 'large' ? '24px' : '19px',
            display: 'block',
            variant: active ? 'layout.selector.swatch.active' : 'layout.selector.swatch',
          }}
          onClick={disabled ? null : onClick}
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
          onClick={disabled ? null : onClick}
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