/** @jsxImportSource theme-ui */
import {
  parseISO,
  format
} from 'date-fns'
import {
  getAllPolicyIds,
  getPolicyData
} from '@lib/policy'
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