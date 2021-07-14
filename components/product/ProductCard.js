/** @jsxImportSource theme-ui */
import { Selector } from '@components/product'
import { Button } from '@components/ui'
import Link from 'next/link'
import PropTypes from 'prop-types'
import { useState } from 'react'
import {
  Box,
  Flex,
  Heading,
  Text,
} from 'theme-ui'

const propTypes = {
  product: PropTypes.object.isRequired,
  featuredImage: PropTypes.number,
}

const defaultProps = {
  featuredImage: 0,
}

const ProductCardWrapper = ({ children, ...props }) => (
  <Flex
    sx={{
      alignItems: 'center',
      alignSelf: 'stretch',
      flexDirection: ['column', 'row'],
      justifyContent: 'center',
      height: ['auto', '596px'],
      overflow: 'hidden',
      position: 'relative',
      'h2, button': {
        alignSelf: ['center', 'flex-start'],
      },
    }}
    {...props}
  >
    {children}
  </Flex>
)

const ImageWrapper = ({ href, src, sx, ...props }) => (
  <Link href={href}>
    <Box
      as="a"
      sx={{
        alignSelf: 'center',
        backgroundImage: `url(${src})`,
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: ['75%', 'cover'],
        height: ['0', '100%'],
        minWidth: ['100%', 'auto'],
        cursor: 'pointer',
        display: 'block',
        flexBasis: [null, '56%', '50%'],
        flexShrink: [null, 1],
        overflow: 'hidden',
        ml: [0, 0, '10%'],
        pb: ['75%', 0],
        position: 'relative',
      }}
      {...props}
    />
  </Link>
)

const ProductDetailsWrapper = ({ children, variant }) => (
  <Flex
    sx={{
      width: ['296px', '304px', '364px'],
      flexDirection: 'column',
      justifyContent: 'center',
      mr: [0, 0, 'calc(39% - 364px)'],
      pt: 2,
      pb: 5,
      px: [2, 4, '54px'],
    }}
    variant={variant}
  >
    {children}
  </Flex>
)

const ProductTitle = ({ content, ...props }) => (
  <Heading
    as="h2"
    mt={0}
    mb={[2,0]}
    variant="styles.h2"
    {...props}
  >
    {content}
  </Heading>
)

const ProductDesc = ({ content, sx }) => (
  <Text
    as="div"
    sx={{
      mt: 1,
      mb: 2,
      textAlign: ['center', 'left'],
      ...sx
    }}
  >
    {content}
  </Text>
)

const ProductDetails = ({ color = '', price = '', ...props }) => (
  <Flex
    sx={{
      alignItems: 'center',
      flexDirection: ['column', 'row'],
      gap: [1, 0],
      justifyContent: 'space-between',
      my: [2, 0],
      '& > div': {
        minHeight: ['14px', 0],
      }
    }}
    {...props}
    variant="layout.product.card.details"
  >
    <Text as="div">
      {color}
    </Text>
    <Text as="div">
      {price}
    </Text>
  </Flex>
)

const ProductButton = ({ content, href, ...props }) => (
  <Button
    href={href}
    mt={[1,4]}
    {...props}
  >
    {content}
  </Button>
)

const ProductCard = ({
  product,
  variant,
  featuredImage,
  ...props
}) => {
  const initialColor = product?.colors.find(color =>
    color.handle === product.handle
  )

  const [selectedColor, setColor] = useState(initialColor)

  return (
    <ProductCardWrapper {...props}>
      {selectedColor?.images && (
        <ImageWrapper
          href={`/product/${selectedColor?.handle}`}
          src={featuredImage ? selectedColor?.images[featuredImage].src : selectedColor?.images[0].src}
        />
      )}
      <ProductDetailsWrapper>
        <ProductTitle
          content={product?.style || ''}
        />
        <ProductDesc
          content={product?.shortDescription || ''}
        />
        <Selector
          colors={product?.colors}
          my={1}
          onChange={setColor}
          selected={selectedColor}
          variant="borders"
        />
        <ProductDetails
          color={selectedColor?.color || ''}
          price={product?.variants[0].price}
        />
        <ProductButton
          content={product?.style === "Del Rey Penny Loafer" ? "Shop Now" : "Preorder Now"}
          href={`/product/${selectedColor?.handle}`}
        />
      </ProductDetailsWrapper>
    </ProductCardWrapper>
  )
}

ProductCard.propTypes = propTypes
ProductCard.defaultProps = defaultProps

export default ProductCard