import { client } from '@framework/api'

export default async function getProduct(handle) {
  const productHandle = handle || {}

  console.log("Reached here")
  const productByHandle = client.product.fetchByHandle(productHandle)
  return {
    props: {
      product: productByHandle
    }
  }
}