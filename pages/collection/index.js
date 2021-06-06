import { CollectionView } from '@components/collection'
import { getProductsByCollection } from '@framework/product'

export async function getStaticProps() {
  const products = await getProductsByCollection()
  const styles = Array.from(new Set(products.map(p => p.style)))
  return {
    props: {
      products: styles.map(s => products.find(p => p.style === s)),
    }
  }
}

export default function Collection({ products }) {
  return (<CollectionView products={products} />)
}