import { fetcher } from '@framework/api'

export const createCheckout = async (items) => {
  const formattedLineItems = items.map(item => {
    return `{
      variantId: "${item.variantId}",
      quantity: ${item.quantity},
    }`
  })
  const query = `
    mutation {
      checkoutCreate(input: {
        lineItems: [${formattedLineItems}]
      }) {
        checkout {
            id
            webUrl
            lineItems(first: 250) {
              edges {
                node {
                  id
                  title
                  quantity
                }
              }
            }
          }
          checkoutUserErrors {
            code
            field
            message
          }
        }
      }  
    `
  
  const { data } = await fetcher(query)

  const checkout = data?.checkoutCreate?.checkout || []

  return checkout
}