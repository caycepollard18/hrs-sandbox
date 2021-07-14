import { ProductView } from '@components/product'
import { getProduct, getAllProductHandles } from '@framework/product'

export default function Product({ product }) {
  return (
    <ProductView product={product} />
  )
}

export async function getStaticProps({ params }) {
  const product = await getProduct(params.handle)

  if (product === undefined) {
    return {
      props: {
        product: null,
      }
    }
  }

  return {
    props: {
      product: product
    }
  }
}

export async function getStaticPaths() {
  const handles = await getAllProductHandles()

  const paths = handles.map((h) => {
    const handle = String(h.node.handle)
    return {
      params: { handle }
    }
  })

  return {
    paths,
    fallback: true
  }
}

