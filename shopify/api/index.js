import {  
  API_URL,
  API_TOKEN,
  SHOPIFY_CHECKOUT_ID_COOKIE,
  SHOPIFY_CUSTOMER_TOKEN_COOKIE,
  STORE_DOMAIN
} from '../const'
import Client from 'shopify-buy'


if (!API_URL) {
  throw new Error(
    `The environment variable NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN is missing and it's required to access your store`
  )
}

if (!API_TOKEN) {
  throw new Error(
    `The environment variable NEXT_PUBLIC_SHOPIFY_STOREFRONT_ACCESS_TOKEN is missing and it's required to access your store`
  )
}

const client = Client.buildClient({
  domain: STORE_DOMAIN,
  storefrontAccessToken: API_TOKEN
})

export default client