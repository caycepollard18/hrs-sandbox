/** @jsxImportSource theme-ui */
import { Selector } from '@components/product'
import { Button, TabList } from '@components/ui'
import addDate from 'date-fns/add'
import format from 'date-fns/format'
import parse from 'html-react-parser'
import Image from 'next/image'
import { NextSeo } from 'next-seo'
import PropTypes from 'prop-types'
import { useEffect, useState } from 'react'
import {
  Box,
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

const ProductDetailsWrapper = ({ children, modal = false }) => (
  <Box
    sx={{
      width: ['100%', '256px'],
      backgroundColor: modal ? ['white', 'none'] : 'none',
      display: modal ? ['flex', 'none'] : ['none', 'flex'],
      flexDirection: 'column',
      justifyContent: 'center',
      mb: [0, 5],
      p: [5, 0],
      position: 'sticky',
      bottom: '-1px',
      left: '0',
      zIndex: 7,
    }}
  >
    {children}
  </Box>
)

const ProductTitle = ({ content, ...props }) => (
  <Heading
    as="h1"
    mt={0}
    mb={[0, 2]}
    variant="layout.product.description.title"
    {...props}
  >
    {content}
  </Heading>
)

const ProductDeliveryNotice = ({ dates, ...props }) => (
  <Text
    as="div"
    mb={4}
    py={[0, '12px']}
    variant="layout.product.description.notice"
    {...props}
  >
    Made to order in Italy, expected to ship between {dates[0]} and {dates[1]}.
  </Text>
)

const ProductPrice = ({ content, ...props }) => (
  <Text
    as="div"
    mb={[0, 1]}
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
      mb: [1, 4],
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

const ProductView = ({ product }) => {

  const deliveryDates = [
    format(
      addDate(new Date('1 Aug 2021'), { days: 106 }),
      'MMMM dd'
    ),
    format(
      addDate(new Date('1 Aug 2021'), { days: 136 }),
      'MMMM dd'
    )
  ]

  const [loading, setLoading] = useState(false)
  const [selectedColor, setColor] = useState(product?.colors?.find(color => color.id === product.id))
  const [selectedSize, setSize] = useState(null)

  const delay = ms => new Promise(res => setTimeout(res, ms))

  const selectDefaultSizeFromProduct = async () => {
    setLoading(true)
    try {
      await delay(400)
      setSize(product.variants.find(({ availableForSale }) => availableForSale) || null)
      setLoading(false)
    } catch (err) {
      setSize(null)
      setLoading(false)
    }
  }

  useEffect(() => {
    selectDefaultSizeFromProduct()
  }, [product])

  const addToCart = async () => {
    setLoading(true)
    await delay(2000)
    setLoading(false)
  }
  
  return (
    <Flex
      sx={{
        alignSelf: 'stretch',
        flex: 1,
        flexDirection: ['column', 'row'],
        justifyContent: 'center',
        position: 'relative',
      }}
    >
      <NextSeo
        title={product?.title}
        description={product?.description}
        openGraph={{
          type: 'website',
          title: `The ${product?.style} in ${product?.color}`,
          description: product?.description,
          images: [
            {
              url: product?.images[0]?.src,
              width: 800,
              height: 600,
              alt: product?.title,
            },
          ],
        }}
      />
      <ProductContainer>
        {product?.images?.map((image) => (
          <Image
            key={image.id}
            src={image.src}
            alt={image.alt}
            height={image.height}
            width={image.width}
          />
        ))}
        <ProductDetailsWrapper modal>
          <Selector
            colors={product?.colors}
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
            sizes={product?.variants}
            selected={selectedSize}
            onChange={setSize}
            my={2}
          />
          <Flex
            sx={{
              alignItems: 'center',
              alignSelf: 'stretch',
              flexDirection: 'row',
              justifyContent: 'space-between',
              mt: 1,
            }}
          >
            <ProductTitle content={product?.style} />
            <ProductPrice content={selectedSize?.price || product?.variants[0]?.price } />
          </Flex>
          <ProductDetails color={selectedColor?.color} size={selectedSize?.title} />
          {product?.productType === "Made-to-order" ? (
              <ProductDeliveryNotice dates={deliveryDates} />
            ) : (
              <Box mb={4} />
            )
          }
          <Button
            as="button"
            disabled={selectedSize?.availableForSale === false}
            loading={loading}
            onClick={addToCart}
          >
            {selectedSize?.availableForSale ? "Place Order" : "Sold Out"}
          </Button>
        </ProductDetailsWrapper>
      </ProductContainer>
      <ProductContainer
        px={[5, 5, 5, 8]}
        pt={[4, 10, 10, 11]}
        pb={4}
        variant="layout.product"
      >
        <ProductDetailsWrapper>
          <ProductTitle content={product?.style} />
          <Selector
            colors={product?.colors}
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
            sizes={product?.variants}
            selected={selectedSize}
            onChange={setSize}
            mt={4}
            mb={2}
          />
          {product?.productType === "Made-to-order" ? (
              <ProductDeliveryNotice dates={deliveryDates} />
            ) : (
              <Box mb={4} />
            )
          }
          <ProductPrice content={selectedSize?.price || product?.variants[0]?.price } />
          <ProductDetails color={selectedColor?.color} size={selectedSize?.title} />
          <Button
            as="button"
            disabled={selectedSize?.availableForSale === false || selectedSize === null}
            loading={loading}
            onClick={addToCart}
          >
            {selectedSize?.availableForSale ? "Place Order" : "Sold Out"}
          </Button>
        </ProductDetailsWrapper>
        <TabList
          variant="layout.product.description"
          sx={{
            maxWidth: '440px',
          }}
        >
          {product?.description && (
            <div id="product-details" label="Details">
              {parse(product?.description)}
            </div>
          )}
          {product?.details && (
            <div id="product-materials" label="Materials">
              {parse(product?.details)}
            </div>
          )}
          <div id="product-care" label="Care">
            <Text as="p">
              Our shoes are made using only the highest quality materials and expert
              labor. Please handle with a similar level of care to ensure a longer
              life for your shoes.
            </Text>
            <Text as="ul">
              <li>
                If your HRS shoes should get wet, dry them off as quickly as you can.
              </li>
              <li>
                Protect your shoes from extreme weather and prolonged direct sun.
              </li>
              <li>Clean them when you see fit with a soft, dry cloth or brush.</li>
              <li>
                When not in use, store your shoes in the provided dust bag and box.
              </li>
            </Text>
          </div>
          <div id="product-shipping" label="Shipping">
            <Text as="p">
              Standard shipping: Free in the US
            </Text>
            <Text as="p">
              Estimated delivery within 90 days unless otherwise specified. Processing
              and delivery times may be delayed. Contact us to learn more.
            </Text>
          </div>
          <div id="product-payment" label="Payment">
            <Text as="p">
              HRS accepts the following forms of payment for online purchases:
            </Text>
            <Text as="ul">
              <li>Visa</li>
              <li>MasterCard</li>
              <li>American Express</li>
              <li>PayPal</li>
              <li>JCB</li>
              <li>Discover</li>
              <li>Affirm (on selected products)</li>
            </Text>
            <Text as="p">
              When placing an order, your billing address must match the information
              on your credit card statement. If your payment is declined, please
              contact your bank or financial institution for assistance.
            </Text>
          </div>
        </TabList>
      </ProductContainer>
    </Flex>
  )
}

ProductView.propTypes = propTypes

export default ProductView