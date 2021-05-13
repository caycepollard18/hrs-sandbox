/** @jsxImportSource theme-ui */
import {
  Button,
  Hero
} from '../components/ui/'
import {
  ProductCard,
  ProductImageCard
} from '../components/product'
import {
  Box,
  Flex,
  Grid
} from 'theme-ui'

const placeholderProducts = [
  {
    name: 'Belmont',
    slug: 'belmont-bone-black',
    description: 'Inspired by the legendary Los Angeles skate spot, the Belmont is a skate take on a classic apron front derby. Woven, waxed, gold-tipped laces tie it all together with a louche elegance.',
    images: [
      {
        url: 'https://cdn.shopify.com/s/files/1/2172/7963/products/Belmont-BoneBlack-LeftShoeLeftSide.jpg?v=1593729840',
      },
    ],
    variants: [
      {
        name: 'Bone Croc / Black Snake',
        color: '#191714',
        price: '695.00',
      },
      {
        name: 'Blue Croc / Bone Snake',
        color: '#76A9AD',
        price: '695.00',
      }
    ] 
  },
  {
    name: 'Mongoose',
    slug: 'mongoose-bone-wine',
    description: 'Our spin on the classic sneaker featuring striking combinations of richly textured Italian calfskin leathers adorned with our signature goldplated dog tags.',
    images: [
      {
        url: 'https://cdn.shopify.com/s/files/1/2172/7963/products/Belmont-BoneBlack-LeftShoeLeftSide.jpg?v=1593729840',
      },
    ],
    variants: [
      {
        name: 'Bone / Black / Red',
        color: '#DE1E00',
        secondaryColor: '#FFF5E5',
        price: '695.00',
      },
      {
        name: 'Bone / Black / Blue',
        color: '#52A2E8',
        secondaryColor: '#FFF5E5',
        price: '695.00',
      },
      {
        name: 'Black Croc',
        color: '#161616',
        price: '695.00',
      },
      {
        name: 'Bone / Black',
        color: '#161616',
        secondaryColor: '#FFF5E5',
        price: '695.00',
      },
      {
        name: 'Bone / Wine',
        color: '#480000',
        secondaryColor: '#FFF5E5',
        price: '695.00',
      },
    ] 
  }
]

export default function Home() {
  return (
    <>
      <Hero
        title="A Dream Escape"
        subtitle="Discover Chapter Two"
        image="/campaign/101.jpg"
        link="Shop The Collection"
        variant="layout.hero.homepage"
      />
      <ProductCard product={placeholderProducts[0]} />
      <Grid
        columns={2}
        gap={0}
        sx={{
          minHeight: '1185px',
          width: '100%',
        }}
      >
        <ProductImageCard
          image='/campaign/102.jpg'
          product={placeholderProducts[0]}
        />
        <Flex
          sx={{
            flexDirection: 'column',
            '& > *': {
              flexBasis: '50%',
              flexGrow: 1,
            }
          }}>
          <Box
            sx={{
              alignItems: 'center',
              bg: 'black',
              color: 'white',
              display: ['none', 'flex'],
              justifyContent: 'center',
              'p': {
                maxWidth: '465px',
                mx: 4,
                textAlign: 'center'
              }
            }}>
            <p>
              The Chapter 2 collection features loafers, slip-ons, mules, and sneakers, which are all handmade in Italy using premium materials like box calf leathers, exotic prints, pony hair, and gold-plated hardware — quality footwear made to last that reflects Ellington and Rajan’s joined aesthetic.
            </p>
          </Box>
          <ProductImageCard
            image='/campaign/103.jpg'
            layout='top right'
            product={placeholderProducts[0]}
          />
        </Flex>
      </Grid>
      <ProductCard product={placeholderProducts[1]} />
      <Hero
        title="A Dream Escape"
        subtitle="Discover Chapter Two"
        image="/campaign/104.jpg"
        backgroundPosition="center 0%"
        link="Shop The Collection"
        size="large"
        variant="layout.hero.homepage"
      />
    </>
  )
}
