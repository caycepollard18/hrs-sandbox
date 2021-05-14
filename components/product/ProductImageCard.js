/** @jsxImportSource theme-ui */
import Link from 'next/link'
import {
  Flex,
  Heading,
  Text
} from 'theme-ui'
import { Selector } from '@components/product'
import { Button } from '@components/ui'

const Description = ({
  color = 'default',
  layout,
  children
}) => {
  return (
  <Flex
    sx={{
      width: '252px',
      alignItems: 'stretch',
      flexDirection: 'column',
      flexShrink: 1,
      justifyContent: 'center',
      mt: 2,
      mb: 4,
      'h2, button': {
        alignSelf: ['center', layout.includes('left') ? 'flex-start' : 'flex-end'],
      },
      '& > div, h2': {
        color: color != 'default' ? color : 'inherit',
      }
    }}
  >
    {children}
  </Flex>
)}

const ProductImageCard = ({
  color = 'default',
  image,
  layout = 'top left',
  product,
  ...props
}) => {
  return (
    <div
      sx={{
        backgroundImage: `url(${image})`,
        backgroundPosition: 'left center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        alignItems: layout.includes('left') ? 'flex-start' : 'flex-end',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: layout.includes('top') ? 'flex-start' : 'flex-end',
        p: [4, 4, 5],
      }}
    >
      <Description color={color} layout={layout}>
        <Heading as="h2" my={0} variant="styles.h2">{product.name}</Heading>
        <Text
          as="div"
          mt={1}
          mb={2}
          sx={{
            textAlign: ['center', layout.includes('left') ? 'left' : 'right']
          }}
        >
          {product.description}
        </Text>
        <Link href={'/product/${product.slug}'} passHref>
          <Button>
            Shop {product.name}
          </Button>
        </Link>
        <Selector
          colors={product.variants.map((variant) => variant.color)}
          mt={2}
          mb={2}
          sx={{
            alignSelf: layout.includes('left') ? 'flex-start' : 'flex-end',
          }}
        />
        <Flex
          sx={{
            alignItems: 'center',
            flexDirection: 'row',
            justifyContent: 'space-between',
            mb: 3,
          }}
        >
          <Text as="div" variant="text.micro">{product.variants[0].name}</Text>
          <Text as="div">{product.variants[0].price} USD</Text>
        </Flex>
      </Description>
    </div>
  )
}

export default ProductImageCard