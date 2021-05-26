/** @jsxImportSource theme-ui */
import { Selector } from '@components/product'
import { Button } from '@components/ui'
import PropTypes from 'prop-types'
import {
  Flex,
  Heading,
  Text
} from 'theme-ui'

const DescriptionContainer = ({
  children,
  color,
  layout,
  variant,
}) => {
  const baseStyles = {
    width: '252px',
    flexDirection: 'column',
    justifyContent: 'center',
    mt: 2,
    mb: 5,
    '& > div, h2': {
      color: color != '' ? color : 'inherit',
    }
  }
  const productImageStyles = {
    ...baseStyles,
    'h2, button': {
      alignSelf: ['center', 'flex-start'],
    },
  }
  const lifestyleImageStyles = {
    ...baseStyles,
    flexShrink: 1,
    'h2, button': {
      alignSelf: layout.includes('left') ? 'flex-start' : 'flex-end',
    },      
  }
  return (
    <Flex
      sx={variant === 'product-image' ? {
        ...productImageStyles
      } : {
        ...lifestyleImageStyles
      }
      }
    >
      {children}
    </Flex>
  )
}

const propTypes = {
  color: PropTypes.string,
  featuredImage: PropTypes.number,
  layout: PropTypes.oneOf([
    'top left',
    'top right',
    'bottom left',
    'bottom right',
  ]),
  product: PropTypes.object.isRequired,
  variant: PropTypes.oneOf([
    'description',
    'product-image',
    'lifestyle-image',
  ]),
}

const defaultProps = {
  color: '',
  layout: 'top left',
  variant: 'product-image',
}

const ProductCardDescription = ({
  color,
  layout,
  product,
  variant,
}) => {
  const isProductImage = variant === 'product-image'
  
  return (
    <DescriptionContainer color={color} layout={layout} variant={variant}>
      <Heading as="h2" my={0} variant="styles.h2">
        {product.style || ' '}
      </Heading>
      <Text
        as="div"
        sx={{
          mt: 1,
          mb: 2,
          textAlign: isProductImage ? ['center', 'left'] : layout.includes('left') ? 'left' : 'right',
        }}
      >
        {product.shortDescription || ' '}
      </Text>
      <Button
        href={`/product/${product.handle}`}
        sx={{
          order: isProductImage && 1,
        }}
      >
        Shop {product.style}
      </Button>
      <Selector
        colors={product.colors}
        mt={2}
        mb={1}
        variant={isProductImage ? "borders" : "no-borders"}
      />
      <Flex
        sx={{
          alignItems: 'center',
          flexDirection: 'row',
          justifyContent: 'space-between',
          mb: 3,
        }}
      >
        <Text as="div" variant="text.micro">{product.color}</Text>
        <Text as="div">{product.variants[0].price}</Text>
      </Flex>
      
    </DescriptionContainer>
  )
}

ProductCardDescription.propTypes = propTypes
ProductCardDescription.defaultProps = defaultProps

export default ProductCardDescription