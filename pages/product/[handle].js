/** @jsxImportSource theme-ui */

export async function getStaticProps({ params }) {
  const { product } = await getProduct(params.handle)

  if (!product) {
    throw new Error(`Product with handle '${params.handle}' not found`)
  }

  return {
    props: {
      product
    }
  }
}

export async function getStaticPaths() {
  const { products } = await getAllProductPaths()
  return {
    paths,
    fallback: false
  }
}

export default function Product({ product }) {
  return (
    <div>This is a product page</div>
  )
}