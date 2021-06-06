import { fetcher } from '@framework/api'
import { normalizeProduct } from '@framework/utils'

const defaultCollection = process.env.SHOPIFY_COLLECTION

export async function getAllProducts() {
  const query = `
    query getAllProducts($first: Int = 75) {
      products(first: $first, query:"status:active") {
        edges {
          node {
            id
            title
            handle
            description
            color:metafield(namespace: "global", key: "color") {
              value
            }
            style:metafield(namespace: "global", key: "style") {
              value
            }
            images(first: 15, maxWidth: 500, scale: 2) {
              edges {
                node {
                  id
                  originalSrc
                  height
                  width     
                  altText
                  small: transformedSrc(maxWidth: 400, scale: 2)           
                }
              }
            }
            variants(first: 15) {
              edges {
                node {
                  id
                  availableForSale
                  title
                  price                
                }
              }
            }        
          }
        }
      }
    }
  `

  const { data } = await fetcher(query)

  const products = data?.products?.edges?.map(
      ({ node: p }) => normalizeProduct(p)
    ) ?? []

  return getColorsByStyle(products)
}

export async function getAllProductHandles() {
  const query = `
    query getAllProductHandles($first: Int = 100) {
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

  const handles = data?.products?.edges || []

  return handles
}

export async function getProductsByCollection(collection) {
  const query = `
    {
      collectionByHandle(handle: "${collection || defaultCollection}") {
        id
        title
        products(first: 75) {
          edges {
            node {
              id
              title
              handle
              description
              color:metafield(namespace: "global", key: "color") {
                value
              }
              style:metafield(namespace: "global", key: "style") {
                value
              }
              images(first: 15, maxWidth: 500, scale: 2) {
                edges {
                  node {
                    id
                    originalSrc
                    height
                    width     
                    altText
                    small: transformedSrc(maxWidth: 400, scale: 2)             
                  }
                }
              }
              variants(first: 15) {
                edges {
                  node {
                    id
                    availableForSale
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

  const products = data?.collectionByHandle?.products?.edges?.map(
      ({ node: p }) => normalizeProduct(p)
    ) ?? []

  return getColorsByStyle(products)
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
        color:metafield(namespace: "global", key: "color") {
          value
        }
        style:metafield(namespace: "global", key: "style") {
          value
        }
        details:metafield(namespace: "global", key: "details") {
          value
        }
        images(first: 15, maxWidth: 500, scale: 2) {
          edges {
            node {
              id
              originalSrc
              height
              width     
              altText
              small: transformedSrc(maxWidth: 400, scale: 2)             
            }
          }
        }
        variants(first: 15) {
          edges {
            node {
              id
              availableForSale
              title
              price                
            }
          }
        }
      }
    }
  `
  const { data } = await fetcher(query)

  const product = data?.productByHandle
    ? normalizeProduct(data.productByHandle)
    : []

  return getColorsByStyle(product)
}

export async function getColorsByStyle(products) {
  // only run getAllProducts() if a lone product is passed
  if (Array.isArray(products) === false && typeof (products) === 'object') {
    const product = products
    const allProducts = await getAllProducts()
    
    const _colors = allProducts?.filter(p => p.style === product.style)
      .map(p => ({
        id: p?.id,
        color: p?.color,
        handle: p?.handle,
        swatch: p?.color && ('/swatches/'
          + p?.style
          + ' - '
          + p?.color.replace(/\//g, ' ').replace(/\s\s+/g, ' ')
          + '.jpg'),
      }))
   
    return ({
      ...product,
      colors: _colors,
    })
  }

  // if more than one product, use the set of products
  const productsWithColors = products.map((product) => {
    const _colors = products.filter(p => p.style === product.style)
      .map(p => ({
        id: p?.id,
        color: p?.color,
        handle: p?.handle,
        images: p?.images,
        swatch: p?.color && ('/swatches/'
          + p.style
          + ' - '
          + p.color.replace(/\s\/\s/g, ' ').replace(/\//g, ' ')
          + '.jpg'),
      }))
    
    return ({
      ...product,
      colors: _colors,
    }) 
    }
  )

  return productsWithColors
}