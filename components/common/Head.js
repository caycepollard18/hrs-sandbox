import NextHead from 'next/head'
import { DefaultSeo } from 'next-seo'
import config from '../../next-seo.config'

// todo: add web manifest

const Head = () => (
  <>
    <DefaultSeo {...config} />
    <NextHead>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.svg" />
    </NextHead>
  </>
)

export default Head

// <link rel="manifest" href="/site.webmanifest" key="site-manifest" />