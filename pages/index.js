/** @jsxImportSource theme-ui */
import {
  ProductCard,
  ImageCard
} from '@components/product'
import { Hero } from '@components/ui'
import { getProductsByCollection } from '@framework/product'
import {
  Box,
  Flex,
  Grid
} from 'theme-ui'

export async function getStaticProps() {
  const products = await getProductsByCollection()
  return {
    props: {
      products,
    }
  }
}

export default function Home({ products }) {
  console.log(products[31])
  return (
    <>
      <Hero
        title="A Dream Escape"
        subtitle="Discover Chapter Two"
        image="/campaign/fw21/101.jpg"
        link="Shop The Collection"
        href="/collection"
        variant="layout.hero.homepage"
      />
      <ProductCard product={products[5]} />
      <Grid
        columns={[1, 1, 2]}
        gap={0}
        sx={{
          minHeight: '1185px',
          width: '100%',
        }}
      >
        <ImageCard
          color="offBlack"
          image='/campaign/fw20/102.jpg'
          product={products[2]}
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
                mx: [5, 5, 6],
                textAlign: 'center'
              }
            }}>
            <p>
              The Chapter 2 collection features loafers, slip-ons, mules, and sneakers, which are all handmade in Italy using premium materials like box calf leathers, exotic prints, pony hair, and gold-plated hardware — quality footwear made to last that reflects Ellington and Rajan’s joined aesthetic.
            </p>
          </Box>
          <ImageCard
            color='white'
            image='/campaign/fw21/103.jpg'
            layout='top right'
            product={products[31]}
          />
        </Flex>
      </Grid>
      <ProductCard product={products[25]} featuredImage={1} />
      <Hero
        title="A Dream Escape"
        subtitle="Discover Chapter Two"
        image="/campaign/fw21/104.jpg"
        backgroundPosition="center 0%"
        link="Shop The Collection"
        href="/collection"
        size="large"
        variant="layout.hero.homepage"
      />
    </>
  )
}
