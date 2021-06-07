import {
  CollectionCard,
  CollectionMenu
} from '@components/collection'
import { Newsletter } from '@components/common'
import { Hero } from '@components/ui'
import { NextSeo } from 'next-seo'
import PropTypes from 'prop-types'
import { Flex } from 'theme-ui'

const propTypes = {
  products: PropTypes.arrayOf(PropTypes.object),
}

const defaultProps = {
  products: [],
}

const CollectionContainer = ({ children, ...props }) => (
  <Flex
    sx={{
      width: '100%',
      maxWidth: '1920px',
      flexDirection: ['column', 'row'],
      flexWrap: 'wrap',
      position: 'relative',
    }}
    {...props}
  >
    {children}
  </Flex>
)

const CollectionCardWrapper = ({ children, sx, ...props }) => (
  <Flex
    sx={{
      minHeight: ['330px', '540px'],
      maxHeight: [null, '640px'],
      width: ['auto', '50%', '33.33%'],
      maxWidth: [null, '50%', '33.33%', '640px'],
      alignItems: 'center',
      alignSelf: 'stretch',
      flexDirection: 'column',
      flexGrow: 1,
      justifyContent: 'flexStart',
      overflow: 'hidden',
      pt: [null, 5],
      pb: [7, 5],
      ...sx
    }}
    {...props}
  >
    {children}
  </Flex>
)

const NewsletterCardWrapper = ({ children, image }) => (
  <Flex
    sx={{
      minHeight: ['330px', '540px'],
      maxHeight: [null, '640px'],
      alignItems: 'center',
      backgroundImage: `url(${image})`,
      backgroundPosition: 'left center',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      flexDirection: 'column',
      flexGrow: '1',
      justifyContent: 'center',
      overflow: 'hidden',
      p: 5,
    }}
  >
    {children}
  </Flex>
)

const CollectionView = ({ products }) => {
  return (
    <CollectionContainer>
      <NextSeo
        title="A DREAM ESCAPE"
        description="Discover the FW21 collection on the Human Recreational Services official store."
        openGraph={{
          type: 'website',
          title: "A DREAM ESCAPE - Fall/Winter 2021",
          description: "Discover the FW21 collection on the Human Recreational Services official store.",
          images: [
            {
              url: "https://hrs-sandbox.vercel.app/campaign/fw21/201.jpg",
              width: 1080,
              height: 852,
              alt: "Human Recreational Services - A DREAM ESCAPE",
            },
          ],
        }}
      />
      {/* <CollectionMenu products={products} /> */}
      <Hero
        title="A Dream Escape"
        subtitle="Discover Chapter Two"
        image="/campaign/fw21/201.jpg"
        backgroundPosition="center 65%"
        justifyContent="flexStart"
        size="small"
        variant="layout.hero.collection"
      />
      {products?.map((product) => 
        <CollectionCard
          key={product.id}
          product={product}
          as={CollectionCardWrapper}
        />
      )}
      <NewsletterCardWrapper image="/campaign/fw21/202.jpg">
        <Newsletter />
      </NewsletterCardWrapper>
    </CollectionContainer>
  )
}

CollectionView.propTypes = propTypes
CollectionView.defaultProps = defaultProps

export default CollectionView