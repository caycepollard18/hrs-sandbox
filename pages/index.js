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
  const featuredProducts = [
    products?.find(product => product.handle === 'el-dorado-black-combo'),
    products?.find(product => product.handle === 'palazzo-black-multi-combo-1'),
    products?.find(product => product.handle === 'del-rey-bone-black'),
    products?.find(product => product.handle === 'memphis-bone-leopard'),
    products?.find(product => product.handle === 'palazzo-pink-bone'),
  ]

  console.log(products)

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
      <ProductCard product={featuredProducts[0]} />
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
          product={featuredProducts[1]}
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
            product={featuredProducts[2]}
          />
        </Flex>
      </Grid>
      <ProductCard product={featuredProducts[3]} featuredImage={1} />
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
          image={featuredProducts[4]?.images[1]?.src}
          layout="top center"
          product={featuredProducts[4]}
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
        subtitle="“Sometimes you have to play a long time to be able to play like yourself.”"
        image="/campaign/fw21/104.jpg"
        backgroundPosition="center 0%"
        link="View the Campaign"
        href="/collection"
        size="default"
        variant="layout.hero.homepage"
      />
    </>
  )
}
