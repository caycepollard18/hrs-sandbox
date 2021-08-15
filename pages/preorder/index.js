import { CollectionView } from '@components/collection'
import { Hero } from '@components/ui'
import { getProductsByCollection } from '@framework/product'

export async function getStaticProps() {
  const products = await getProductsByCollection("ss2022")
  const styles = Array.from(new Set(products.map(p => p.style)))
  return {
    props: {
      products: styles.map(s => products.find(p => p.style === s)),
    }
  }
}

const PreorderHero = () => (
  <Hero
    title="Preorder Chapter 3"
    subtitle="Return to Arcadia"
    image="/campaign/ss22/101.jpg"
    backgroundPosition={["0% 35%"]}
    backgroundSize={["cover", "120%"]}
    justifyContent="center"
    size="small"
    variant="layout.hero.collection"
  />
)

export default function Preorder({ products }) {
  return (
    <CollectionView
      hero={
        <PreorderHero />
      }
      products={products}
    />
  )
}