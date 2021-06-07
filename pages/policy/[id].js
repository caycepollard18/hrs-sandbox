/** @jsxImportSource theme-ui */
import {
  parseISO,
  format
} from 'date-fns'
import {
  getAllPolicyIds,
  getPolicyData
} from '@lib/policy'
import { NextSeo } from 'next-seo'
import {
  Flex,
  Heading
} from 'theme-ui'


export async function getStaticProps({ params }) {
  const policyData = await getPolicyData(params.id)
  return {
    props: {
      policyData
    }
  }
}

export async function getStaticPaths() {
  const paths = getAllPolicyIds()
  return {
    paths,
    fallback: false
  }
}

const Date = ({ dateString }) => {
  const date = parseISO(dateString)
  return <time dateTime={dateString}>{format(date, 'LLLL d, yyyy')}</time>
}

const PolicyContainer = ({ children }) => (
  <Flex
    sx={{
      alignItems: 'center',
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'center',
      p: [4, 5, 6],
    }}
  >
    {children}
  </Flex>
)

export default function Policy({ policyData }) {
  return (
    <PolicyContainer>
      <NextSeo
        title={policyData?.title}
        description="Discover the FW21 collection on the Human Recreational Services official store."
        openGraph={{
          type: 'website',
          title: policyData?.title,
          description: "Discover the FW21 collection on the Human Recreational Services official store.",
          images: [
            {
              url: "/campaign/fw21/101.jpg",
              width: 800,
              height: 600,
              alt: "A DREAM ESCAPE",
            },
          ],
        }}
      />
      <Heading
        as="h1"
        variant="styles.h2"
      >
        {policyData.title}
      </Heading>
      <span>
        As of{` `} <Date dateString={policyData.date} />
      </span>
      <div
        sx={{
          variant: 'text'
        }}
        dangerouslySetInnerHTML={{ __html: policyData.contentHtml }}
      />
    </PolicyContainer>
  )
}