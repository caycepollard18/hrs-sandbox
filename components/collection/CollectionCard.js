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
}

const CollectionCardWrapper = ({ children, ...props }) => (
  <Flex
    variant="layout.collection.card"
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
          backgroundImage: `url(${src})`,
          backgroundPosition: 'center center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'contain',
          minHeight: ['320px', null],
          minWidth: 'calc(100% - 16px)',
          cursor: 'pointer',
          display: 'block',
          flexBasis: [null, '60%'],
          flexShrink: [null, 1],
          alignSelf: 'center',
          overflow: 'hidden',
          position: 'relative',
          ...sx
        }}
        {...props}
      />
  </Link>
)

const ProductDesc = ({ content, sx }) => (
  <Text
    as="div"
    sx={{
      minHeight: '180px',
      width: ['252px', null, null, '320px'],
      textAlign: 'center',
      ...sx
    }}
    variant="layout.collection.card.description"
  >
    {content}
  </Text>
)

const ProductTitle = ({ content, ...props }) => (
  <Heading
    as="h2"
    my={0}
    variant="styles.h2"
    {...props}
  >
    {content}
  </Heading>
)

const ProductDetails = ({ content, sx, ...props }) => (
  <Text
    as="div"
    sx={{
      mb: 1,
      display: ['block', 'none'],
      ...sx
    }}
    variant="text.micro"
    {...props}
  >
    {content}
  </Text>
)

const ProductButton = ({
  content,
  href,
  sx,
  ...props
}) => (
  <Button
    href={href}
    sx={{
      display: ['flex', 'none'],
      mt: 2,
      ...sx
    }}
    {...props}
  >
    {content}
  </Button>
)

const CollectionCard = ({
  product,
  ...props
}) => {
  const initialColor = product.colors.find(color =>
    color.handle === product.handle
  )

  const [selectedColor, setColor] = useState(initialColor)

  // console.log(selectedColor)

  return (
    <CollectionCardWrapper {...props}>
      {selectedColor?.images && (
        <ImageWrapper
          href={`/product/${selectedColor.handle}`}
          src={selectedColor.images[1]?.small ?? selectedColor.images[1]?.src}
          sx={{ order: [1, 2], }}
        />
      )}
      <Selector
        colors={product.colors}
        onChange={setColor}
        selected={selectedColor}
        sx={{
          maxWidth: ['252px', null, null, '300px'],
          mb: [2, 3],
          mt: 2,
          order: [4, 3],
        }}
        variant="borders"
      />
      <ProductTitle
        content={product.style || ' '}
        sx={{ order: [2, 1], }}
      />
      <ProductDesc
        content={product.shortDescription || ' '}
        sx={{ order: [3, 4], }}
      />
      <ProductDetails
        content={product.style}
        sx={{ order: [5], }}
      />
      <ProductDetails
        content={product.variants[0].price}
        sx={{ order: [6], }}
      />
      <ProductButton
        content={"Shop " + product.style}
        href={`/product/${selectedColor.handle}`}
        sx={{ order: [7], }}
      />
    </CollectionCardWrapper>
  )
}

CollectionCard.propTypes = propTypes

export default CollectionCard