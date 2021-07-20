import { CollectionView } from '@components/collection'
import { Hero } from '@components/ui'
import { getProductsByCollection } from '@framework/product'

export async function getStaticProps() {
  const products = await getProductsByCollection("current")
  const styles = Array.from(new Set(products.map(p => p.style)))
  return {
    props: {
      products: styles.map(s => products.find(p => p.style === s)),
    }
  }
}

const CollectionHero = () => (
  <Hero
    title="A Dream Escape"
    subtitle="Discover Chapter Two"
    image="/campaign/fw21/201.jpg"
    backgroundPosition="center 65%"
    justifyContent="flexStart"
    size="small"
    variant="layout.hero.collection"
  />
)

export default function Collection({ products }) {
  return (
    <CollectionView
      hero={
        <CollectionHero />
      }
      products={products}
    />
  )
}