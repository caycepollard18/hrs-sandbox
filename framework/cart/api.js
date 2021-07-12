import { fetcher } from '@framework/api'

export const createCheckout = async (id, quantity = 1) => {
  // can leave quantity = 1 as site only allows customers
  // to add one of a specific shoe at a time
  const query = `
    mutation {
      checkoutCreate(input: {
        lineItems: [{ variantId: "${id}", quantity: ${quantity} }]
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

export const updateCheckout = async (checkoutId, lineItems) => {
  const formattedLineItems = lineItems.map(item => {
    return `{
      variantId: "${item.variantId}",
      quantity: ${item.quantity}
    }`
  })

  const query = `
    mutation {
      checkoutLineItemsReplace(
        lineItems: [${formattedLineItems}], 
        checkoutId: "${checkoutId}"
      ) {
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
  
  const data = await fetcher(query)

  const checkout = data.checkoutLineItemsReplace?.checkout ?? []

  return checkout  
}