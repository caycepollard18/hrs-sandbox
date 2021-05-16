/** @jsxImportSource theme-ui */
import { Button } from '@components/ui'
import { Selector } from '@components/product'
import {
  Flex,
  Heading,
  Text
} from 'theme-ui'

const ProductContainer = ({ children, ...props }) => (
  <Flex
    sx={{
      flex: 1,
      flexBasis: '50%',
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
  console.log(product.title)
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
        Column 1
      </ProductContainer>
      <ProductContainer
        p={5}
        variant="layout.product"
      >
        <Description>
          <Heading as="h1" mt={0} mb={2} variant="styles.h1">{product.productType}</Heading>
          <Selector
            colors={['lightblue', 'gray', 'black']}
          />
          <Text as="div" sx={{ textAlign: ['center', 'left'] }}>{product.description}</Text>
        </Description>
      </ProductContainer>
    </Flex>
  )
}

export default ProductView