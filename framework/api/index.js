
// todo: add variables to accommodate other types of fetch
//  see -- https://github.com/vercel/commerce/blob/d838f34c73dc1fb6a44965750024d2cb934907be/framework/shopify/fetcher.ts
// todo: add handleFetchResponse (see link above)

export async function fetcher(query) {
  const domain = process.env.NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN
  const storefrontAccessToken = process.env.NEXT_PUBLIC_SHOPIFY_STOREFRONT_ACCESS_TOKEN
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