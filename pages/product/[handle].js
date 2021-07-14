import { ProductView } from '@components/product'
import { getProduct, getAllProductHandles } from '@framework/product'
import Script from 'next/script'

export default function Product({ product }) {
  return (
    <>
      <ProductView product={product} />
      <Script strategy="afterInteractive">
        {`_affirm_config = {
          public_api_key:  "02FG6PMBF2F7SDK8",
          script:          "https://cdn1-sandbox.affirm.com/js/v2/affirm.js"
        };
        (function(l,g,m,e,a,f,b){var d,c=l[m]||{},h=document.createElement(f),n=document.getElementsByTagName(f)[0],k=function(a,b,c){return function(){a[b]._.push([c,arguments])}};c[e]=k(c,e,"set");d=c[e];c[a]={};c[a]._=[];d._=[];c[a][b]=k(c,a,b);a=0;for(b="set add save post open empty reset on off trigger ready setProduct".split(" ");a<b.length;a++)d[b[a]]=k(c,e,b[a]);a=0;for(b=["get","token","url","items"];a<b.length;a++)d[b[a]]=function(){};h.async=!0;h.src=g[f];n.parentNode.insertBefore(h,n);delete g[f];d(g);l[m]=c})(window,_affirm_config,"affirm","checkout","ui","script","ready");`}
      </Script>
    </>
  )
}

export async function getStaticProps({ params }) {
  const product = await getProduct(params.handle)

  if (product === undefined) {
    return {
      props: {
        product: null,
      }
    }
  }

  return {
    props: {
      product: product
    }
  }
}

export async function getStaticPaths() {
  const handles = await getAllProductHandles()

  const paths = handles.map((h) => {
    const handle = String(h.node.handle)
    return {
      params: { handle }
    }
  })

  return {
    paths,
    fallback: true
  }
}

