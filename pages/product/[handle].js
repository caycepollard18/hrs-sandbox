import {
  ProductView
} from '@components/product'
import {
  createCheckout
} from '@framework/cart/api'
import {
  getProduct,
  getAllProductHandles
} from '@framework/product'

export default function Product({ checkout, product }) {
  console.log("Checkout:")
  console.log(checkout)
  console.log(product)
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

  const checkout = await createCheckout(product.variants[0].id)

  if (checkout === undefined) {
    return {
      props: {
        checkout: null,
        product: product
      }
    }
  }

  return {
    props: {
      checkout: checkout,
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

