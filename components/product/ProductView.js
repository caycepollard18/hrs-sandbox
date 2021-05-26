/** @jsxImportSource theme-ui */
import { Button } from '@components/ui'
import { Selector } from '@components/product'
import Image from 'next/image'
import PropTypes from 'prop-types'
import {
  Flex,
  Heading,
  Text
} from 'theme-ui'

const propTypes = {
  product: PropTypes.object.isRequired,
}

const ProductContainer = ({ children, ...props }) => (
  <Flex
    sx={{
      flex: 1,
      flexBasis: '50%',
      flexDirection: 'column',
    }}
    {...props}
  >
    {children}
  </Flex>
)

const Description = ({ children }) => (
  <Flex
    sx={{
      width: '252px',
      alignItems: 'stretch',
      flexDirection: 'column',
      justifyContent: 'center',
      mt: 2,
      mb: 4,
      'h2, button': {
        alignSelf: ['center', 'flex-start'],
      }
    }}
  >
    {children}
  </Flex>
)

const ProductView = ({ product }) => {
  console.log(product)
  return (
    <Flex
      sx={{
        alignSelf: 'stretch',
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
      }}
    >
      <ProductContainer>
        {product.images?.map((image) => (
          <Image
            key={image.id}
            src={image.src}
            alt={image.alt}
            height={image.height}
            width={image.width}
          />
        ))}
      </ProductContainer>
      <ProductContainer
        p={5}
        sx={{
          borderLeft: '1px solid #16161620',
        }}
        variant="layout.product"
      >
        <Description>
          <Heading as="h1" mt={0} mb={2} variant="styles.h1">{product.style}</Heading>
          <Selector
            colors={product.colors}
            size="large"
          />
          <Flex sx={{
            flexDirection: 'row',
            gap: 2,
            mt: 3,
            mb: 2,
            }}
          >
            {product.variants?.map((variant) => (
              <Text key={variant.id}>
                {variant.title}
              </Text>
            )
            )}
          </Flex>
          <Text as="div" sx={{ textAlign: ['center', 'left'] }}>{product.description}</Text>
        </Description>
      </ProductContainer>
    </Flex>
  )
}

ProductView.propTypes = propTypes

export default ProductView