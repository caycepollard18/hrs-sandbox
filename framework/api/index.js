const domain = process.env.NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN
const storefrontAccessToken = process.env.NEXT_PUBLIC_SHOPIFY_STOREFRONT_ACCESS_TOKEN
const collection = process.env.SHOPIFY_COLLECTION


// todo: add variables to accommodate other types of fetch
//  see -- https://github.com/vercel/commerce/blob/d838f34c73dc1fb6a44965750024d2cb934907be/framework/shopify/fetcher.ts
// todo: add handleFetchResponse (see link above)
async function fetcher(query) {
  const url = `https://${domain}/api/2021-01/graphql.json`;

  const options = {
    endpoint: url,
    method: "POST",
    headers: {
      "X-Shopify-Storefront-Access-Token": storefrontAccessToken,
      "Accept": "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ query }),
  }

  try {
    const data = await fetch(url, options).then((res) =>
      res.json(),
    )
    return data
  } catch (error) {
    throw new Error("Error occurred while attempting to fetch from Shopify")
  }
}

export async function getProductsByCollection() {
  const query = `
    {
      collectionByHandle(handle: "${collection}") {
        id
        title
        products(first: 250) {
          edges {
            node {
              id
              title
              description
              handle
              images(first: 250) {
                edges {
                  node {
                    id
                    originalSrc
                    height
                    width     
                    altText             
                  }
                }
              }
              variants(first: 250) {
                edges {
                  node {
                    id
                    title
                    price                
                  }
                }
              }
            }
          }
        }
      }
    }
  `

  const { data } = await fetcher(query)

  const products = data.collectionByHandle?.products?.edges?.map(
      ({ node: p }) => p
    ) ?? []

  return products
}

export async function getAllProductHandles() {
  const query = `
    query getAllProductPaths($first: Int = 250) {
      products(first: $first, query:"status:active") {
        edges {
          node {
            handle
          }
        }
      }
    }
  `

  const { data } = await fetcher(query)

  const handles = data.products.edges || []

  return handles
}

export async function getProduct(handle) {
  const query = `
    {
      productByHandle(handle: "${handle}") {
        id
        title
        handle
        description
        productType
        images(first: 250) {
          edges {
            node {
              id
              originalSrc
              height
              width     
              altText             
            }
          }
        }
        variants(first: 250) {
          edges {
            node {
              id
              title
              price                
            }
          }
        }
      }
    }
  `
  const { data } = await fetcher(query)

  const product = data.productByHandle
    ? data.productByHandle
    : []

  return product
}