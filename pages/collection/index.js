import { CollectionView } from '@components/product'
import { getAllProducts } from '@framework/product'

export async function getStaticProps() {
  const products = await getAllProducts()
  const styles = Array.from(new Set(products.map(p => p.style)))
  return {
    props: {
      products: styles.map(s => products.find(p => p.style === s)),
    }
  }
}

export default function Collection({ products }) {
  console.log(products[0])
  return (<CollectionView products={products} />)
}

/* styles.map(s => products.filter(p => p.style === s).map(p => p.color)) */