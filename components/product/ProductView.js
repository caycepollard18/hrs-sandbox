/** @jsxImportSource theme-ui */
import { Selector } from '@components/product'
import { Button } from '@components/ui'
import addDate from 'date-fns/add'
import format from 'date-fns/format'
import Image from 'next/image'
import PropTypes from 'prop-types'
import { useState } from 'react'
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

const ProductDetailsWrapper = ({ children }) => (
  <Flex
    sx={{
      width: ['100%', '256px'],
      backgroundColor: ['white', 'none'],
      flexDirection: 'column',
      justifyContent: 'center',
      mb: [0, 5],
      p: [5, 0],
      position: ['fixed', 'static'],
      bottom: [0, null],
      left: [0, null],
      zIndex: 10,
    }}
  >
    {children}
  </Flex>
)

const ProductTitle = ({ content, ...props }) => (
  <Heading
    as="h1"
    mt={0}
    mb={2}
    variant="styles.h1"
    {...props}
  >
    {content}
  </Heading>
)

const ProductDeliveryNotice = ({ dates, ...props }) => (
  <Text
    as="div"
    mb={4}
    py="12px"
    variant="layout.product.description.notice"
    {...props}
  >
    Made to order in Italy, expected to ship between {dates[0]} and {dates[1]}.
  </Text>
)

const ProductPrice = ({ content, ...props }) => (
  <Text
    as="div"
    mb={1}
    variant="styles.h3"
    {...props}
  >
    {content}
  </Text>
)

const ProductDetails = ({ color = '', size = '', ...props }) => (
  <Flex
    sx={{
      flexDirection: 'row',
      gap: 3,
      mb: 4,
      variant: 'layout.product.description.details'
    }}
    {...props}
  >
    <Text as="div">
      {color}
    </Text>
    <Text as="div" variant="text.emphasis">
      {size}
    </Text>
  </Flex>
)

const ProductDesc = ({ content, ...props }) => (
  <Text
    as="div"
    {...props}
  >
    {content}
  </Text>
)

const ProductView = ({ product }) => {

  const [selectedColor, setColor] = useState(product.colors.find(color => color.id === product.id))
  const [selectedSize, setSize] = useState(product.variants[0])

  const deliveryDates = [
    format(
      addDate(new Date(Date.now()), { days: 90 }),
      'MMMM dd'
    ),
    format(
      addDate(new Date(Date.now()), { days: 120 }),
      'MMMM dd'
    )
  ]
  
  console.log(product)
  
  return (
    <Flex
      sx={{
        alignSelf: 'stretch',
        flex: 1,
        flexDirection: ['column', 'row'],
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
        px={[5, 5, 5, 8]}
        pt={[4, 10, 10, 11]}
        pb={4}
        variant="layout.product"
      >
        <ProductDetailsWrapper>
          <ProductTitle content={product.style} />
          <Selector
            colors={product.colors}
            createLinkProps={({ handle }) => ({
              href: '/product/[handle]',
              as: `/product/${handle}`,
              scroll: false,
              next: true,
            })}
            onChange={setColor}
            selected={selectedColor}
            iconSize="large"
          />
          <Selector
            sizes={product.variants}
            selected={selectedSize}
            onChange={setSize}
            mt={4}
            mb={2}
          />
          <ProductDeliveryNotice dates={deliveryDates} />
          <ProductPrice content={selectedSize.price} />
          <ProductDetails color={selectedColor.color} size={selectedSize.title} />
          <Button href='/'>{selectedSize.availableForSale ? "Place Order" : "Sold Out"}</Button>
        </ProductDetailsWrapper>
        <ProductDesc
          content={product.description}
        />
      </ProductContainer>
    </Flex>
  )
}

ProductView.propTypes = propTypes

export default ProductView