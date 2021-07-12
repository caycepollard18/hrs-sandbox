/** @jsxImportSource theme-ui */
import {
  ProductCard,
  ImageCard
} from '@components/product'
import { Hero } from '@components/ui'
import Video from '@components/video'
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
    products?.find(product => product.handle === 'del-rey-penny-pink'),
    products?.find(product => product.handle === 'luther-boot-black-gold'),
    products?.find(product => product.handle === 'del-rey-rattlesnake-black'),
    products?.find(product => product.handle === 'el-dorado-gold-black'),
    products?.find(product => product.handle === 'mongoose-low-bone-blue-black'),
  ]

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
        video={
          <Video />
        }
      />
      <ProductCard product={featuredProducts[0]} />
      <Grid
        columns={[1, 1, 2]}
        gap={0}
        sx={{
          minHeight: '975px',
          width: '100%',
        }}
      >
        <ImageCard
          backgroundStyles={{
            backgroundPosition: ['bottom 20% center', null, 'bottom 20% left 30%'],
            backgroundRepeat: 'no-repeat',
            backgroundSize: ['auto 125%', 'contain'],
            '@media screen and (min-width: 500px)': {
              backgroundSize: ['cover'],
            }
          }}
          color='white'
          image='/campaign/fw21/107.jpg'
          layout='top right'
          product={featuredProducts[2]}
          sx={{ minHeight: ['640px', '420px', 'unset'], }}
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
              flexBasis: '25%',
              justifyContent: 'center',
              minHeight: '340px',
              'p': {
                maxWidth: '465px',
                mx: [5, 5, 6],
                my: 6,
                textAlign: 'center'
              }
            }}>
            <p>
              Inspired by the decadent spirit of music and tennis legends of the sixties, seventies and eighties, Human Recreational Services’ sophomore collection, A Dream Escape, conjures up a dreamy, effervescent party. The collection takes a nonchalant approach to glam influenced by the likes of Miles Davis, Johnny Thunders, John McEnroe, and Björn Borg. A palette of rich pastels mixed on materials of contrasting textures make for an elegant yet down to earth collection filled with tasseled loafers, chained moccasins, high top sneakers, and two-tone saddle shoes. With its vibrant colours and playful spirit, HRS’ second collection is an escapist fantasy and a hope wish for the times to come.
            </p>
          </Box>
          <ImageCard
            backgroundStyles={{
              backgroundPosition: [
                'bottom 0% center',
                'bottom 50% right 20%',
                'top 35% left 25%'
              ],
              backgroundRepeat: 'no-repeat',
              backgroundSize:  ['auto 125%', 'cover'],
              '@media screen and (min-width: 500px) and (max-width: 648px)': {
                backgroundPosition: ['bottom 15% left 20%'],
                backgroundSize: ['cover'],
              }
            }}
            color="white"
            layout="bottom left"
            image='/campaign/fw21/106.jpg'
            product={featuredProducts[1]}
            sx={{ minHeight: ['640px', '420px', 'unset'], }}
          />
        </Flex>
      </Grid>
      <ProductCard product={featuredProducts[3]} featuredImage={0} />
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
            backgroundPosition: ['top 200px right 0px', null, 'top 200px right -15%'],
            backgroundRepeat: 'no-repeat',
            backgroundSize:  '122%',
          }}
          image={featuredProducts[4]?.images[1]?.src}
          layout="top center"
          product={featuredProducts[4]}
        />
        <Box
          sx={{
            backgroundImage: 'url("/campaign/fw21/105.jpg")',
            backgroundPosition: 'top center',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            display: ['none', 'none', 'block'],
          }}
        />
      </Grid>
      <Hero
        subtitle="“Sometimes you have to play a long time to be able to play like yourself.”"
        image="/campaign/fw21/104.jpg"
        backgroundPosition="center 25%"
        link="View the Collection"
        href="/collection"
        size="large"
        variant="layout.hero.homepage"
      />
    </>
  )
}
