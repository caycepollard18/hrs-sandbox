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
  return (
    <>
      <Hero
        title="A Dream Escape"
        subtitle="Discover Chapter Two"
        image="/campaign/fw21/101.jpg"
        link="Shop The Collection"
        href="/collection"
        size="default"
        variant="layout.hero.homepage"
      />
      <ProductCard product={products[4]} />
      <Grid
        columns={[1, 1, 2]}
        gap={0}
        sx={{
          minHeight: '1185px',
          width: '100%',
        }}
      >
        <ImageCard
          backgroundStyles={{
            backgroundPosition: ['bottom 40% left 0%', null, 'top 25% left 0%'],
            backgroundRepeat: 'no-repeat',
            backgroundSize:  'cover',
          }}
          color="offBlack"
          layout="bottom right"
          image='/campaign/fw21/102.jpg'
          product={products[1]}
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
            layout='bottom right'
            product={products[3]}
          />
        </Flex>
      </Grid>
      <ProductCard product={products[9]} featuredImage={1} />
      <Grid
        columns={[1, 1, 2]}
        gap={0}
        sx={{
          minHeight: '988px',
          width: '100%',
        }}
      >
        <ImageCard
          backgroundStyles={{
            backgroundColor: '#D2CECB',
            backgroundPosition: ['top 200px right -10px', null, 'bottom 10px right -10px'],
            backgroundRepeat: 'no-repeat',
            backgroundSize:  '105%',
          }}
          image={products[8].images[1].src}
          layout="top center"
          product={products[8]}
        />
        <Box
          sx={{
            backgroundImage: 'url("/campaign/fw21/105.jpg")',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            display: ['none', 'none', 'block'],
          }}
        />
      </Grid>
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
