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
  hero: PropTypes.node,
  products: PropTypes.arrayOf(PropTypes.object),
}

const defaultProps = {
  hero: [],
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
      maxHeight: [null, '720px'],
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
      maxHeight: [null, '720px'],
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

const CollectionView = ({ hero, products }) => {
  return (
    <CollectionContainer>
      <NextSeo
        title="A DREAM ESCAPE | HRS CHAPTER 2"
        description="Get away into HRS' escapist fantasy and a hope wish for the times to come."
        openGraph={{
          type: 'website',
          title: "A DREAM ESCAPE | HRS CHAPTER 2",
          description: "Get away into HRS' escapist fantasy and a hope wish for the times to come.",
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
      {hero}
      {products?.filter((product) => product?.style != 'Belmont')
        .map((product, i) =>
          <CollectionCard
            key={product.id.concat(i)}
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