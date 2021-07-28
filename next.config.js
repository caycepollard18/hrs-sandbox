module.exports = {
  images: {
    domains: ['cdn.shopify.com'], // required for image optimization
  },
  async redirects() {
    return [
      {
        source: '/product/:slug',
        destination: '/products/:slug',
        permanent: true,
      },
    ]
  }
}