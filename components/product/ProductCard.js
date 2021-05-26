/** @jsxImportSource theme-ui */
import { ProductCardDescription } from '@components/product'
import PropTypes from 'prop-types'
import {
  Box,
  Flex,
} from 'theme-ui'

const propTypes = {
  color: PropTypes.string,
  product: PropTypes.object.isRequired,
  variant: PropTypes.oneOf(['product-image', 'feature-image']),
  featuredImage: PropTypes.number,
}

const defaultProps = {
  color: '',
  variant: 'product-image',
  featuredImage: 0,
}

const ProductCardWrapper = ({ children }) => (
  <Flex
    sx={{
      alignItems: 'center',
      alignSelf: 'stretch',
      flexDirection: ['column', 'row'],
      justifyContent: 'center',
      height: ['auto', '596px'],
      overflow: 'hidden',
      position: 'relative',
    }}
  >
    {children}
  </Flex>
)

const ImageWrapper = ({ children, ...props }) => (
  <Box
    sx={{
      height: ['286px', '100%'],
      minWidth: ['100%', 'auto'],
      display: 'block',
      flexBasis: [null, '60%'],
      flexShrink: [null, 1],
      alignSelf: 'center',
      overflow: 'hidden',
      position: 'relative',
    }}
    {...props}
  >
    {children}
  </Box>
)

const ProductCard = ({
  color,
  product,
  variant,
  featuredImage,
  ...props
}) => {
  return (
    <ProductCardWrapper {...props}>
      {product?.images && (
        <ImageWrapper
          sx={{
            backgroundImage: `url(${featuredImage ? product.images[featuredImage].src : product.images[0].src})`,
            backgroundPosition: 'center center',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'contain',
          }}
        />
      )}
      <ProductCardDescription
        color={color}
        product={product}
        variant="product-image"
      />
    </ProductCardWrapper>
  )
}

ProductCard.propTypes = propTypes
ProductCard.defaultProps = defaultProps

export default ProductCard