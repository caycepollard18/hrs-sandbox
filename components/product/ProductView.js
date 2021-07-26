/** @jsxImportSource theme-ui */
import { Selector } from '@components/product'
import {
  AffirmNotice,
  Badge,
  Button,
  TabList
} from '@components/ui'
import { useCart } from '@framework/cart'
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
      position: 'relative',
    }}
    {...props}
  >
    {children}
  </Flex>
)

const ProductDetailsWrapper = ({ children, modal = false }) => (
  <Box
    sx={{
      width: ['100%', '100%', '440px'],
      maxWidth: '440px',
      backgroundColor: modal ? ['white', 'none'] : 'none',
      display: modal ? ['flex', 'none'] : [/* 'none', */ 'flex'],
      flexDirection: 'column',
      justifyContent: 'center',
      mb: [0, 5],
      p: [5, 0],
      position: modal ? 'sticky' : ['static', 'sticky'],
      top: modal ? 'unset' : [4, 10, 10, 11],
      bottom: modal ? '-1px' : 4,
      left: '0',
      zIndex: 7,
      // hacky solution to avoid duplicate content between
      // mobile & desktop layouts
      '> *:not(:last-child)': {
        display: modal ? 'flex' : ['none', 'flex'],
      },
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
    sx={{
      maxWidth: '256px',
      mb: 4,
      mt: 2,
      py: [0, '12px'],
    }}
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
    sx={{ minWidth: ['75px', 'unset'] }}
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

const PreorderBadge = ({ variant }) => (
  <Badge
    sx={{
      alignSelf: 'flex-start',
      mb: [0, 2],
    }}
    variant={variant ?? "primary"}
  >
    SS22 Preorder
  </Badge>
)

const ProductView = ({ product }) => {

  const { addToCart } = useCart()

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

  // return appropriate list of linked colorways
  // e.g. for preorder, return other preorderable colorways
  // for regular collection product page, do not link preorder colorways
  const colorList = (product?.productType === "Preorder" ? (
    product?.colors.filter(c => !(c.collections.includes("CURRENT")))
  ) : (
    product?.colors.filter(c => c.collections.includes("CURRENT"))
  ))

  const delay = ms => new Promise(res => setTimeout(res, ms))

  const selectDefaultSizeFromProduct = async () => {
    setLoading(true)
    try {
      // delay so user knows something happened
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
  
  async function handleAddToCart() {
    setLoading(true)
    await addToCart({
      title: product?.style,
      color: product?.color,
      handle: product?.handle,
      image: product?.images[1]?.src || product?.images[0]?.src,
      size: selectedSize?.title,
      price: selectedSize?.price,
      productType: product?.productType,
      variantId: selectedSize?.id,
    })
    // delay so user knows something happened
    await delay(250)
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
          <Flex
            sx={{
              alignItems: 'center',
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}
          >
            <Selector
              colors={colorList}
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
            {product?.productType === "Preorder" ? (
              <PreorderBadge variant="outline" />
            ) : null}
          </Flex>
          <Selector
            sizes={product?.variants}
            selected={selectedSize}
            onChange={setSize}
            mb={3}
            mt={3}
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
          {(product?.productType === "Made-to-order" ||
            product?.productType === "Preorder") ? (
              <ProductDeliveryNotice dates={deliveryDates} />
            ) : (
              <Box mb={4} />
            )
          }
          <Button
            as="button"
            disabled={selectedSize?.availableForSale === false || selectedSize === null}
            loading={loading}
            onClick={handleAddToCart}
          > 
            {
              selectedSize?.availableForSale ? (
                (product?.productType === "Made-to-order" ||
                product?.productType === "Preorder") ?
                  "Preorder" : "Add to bag"
              ) : (
                "Sold Out"
                )
            }
          </Button>
          {product?.style === 'Del Rey Penny Loafer' && <AffirmNotice />}
        </ProductDetailsWrapper>
      </ProductContainer>
      <ProductContainer
        px={[0, 5, 5, 8]}
        pt={[0, 10, 10, 11]}
        pb={[0, 4]}
        variant="layout.product"
      >
        <ProductDetailsWrapper>
          {product?.productType === "Preorder" ? (
            <PreorderBadge />
          ) : null}
          <ProductTitle
            content={product?.style}
            
          />
          <Selector
            colors={colorList}
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
          {(product?.productType === "Made-to-order" ||
            product?.productType === "Preorder") ? (
              <ProductDeliveryNotice dates={deliveryDates}  />
            ) : (
              <Box mb={4}  />
            )
          }
          <ProductPrice
            content={selectedSize?.price || product?.variants[0]?.price}
            
          />
          <ProductDetails
            color={selectedColor?.color}
            size={selectedSize?.title}
            
          />
          <Button
            as="button"
            disabled={selectedSize?.availableForSale === false || selectedSize === null}
            loading={loading}
            maxWidth="256px"
            onClick={handleAddToCart}
            
          >
            {
              selectedSize?.availableForSale ? (
                (product?.productType === "Made-to-order" ||
                product?.productType === "Preorder") ?
                  "Preorder" : "Add to bag"
              ) : (
                "Sold Out"
                )
            }
          </Button>
          {product?.style === 'Del Rey Penny Loafer' ?
            <AffirmNotice  /> :
            <Box mb={4}  />
          }
          <TabList
            variant="layout.product.description"
            sx={{ maxWidth: '440px', mt: [0, 3], }}
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
          </TabList>
        </ProductDetailsWrapper>
      </ProductContainer>
    </Flex>
  )
}

ProductView.propTypes = propTypes

export default ProductView