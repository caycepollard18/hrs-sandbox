import { NextSeo } from 'next-seo'
import {
  Flex,
  Heading,
  Text
} from 'theme-ui'

const Custom404Container = ({ children }) => (
  <Flex
    sx={{
      minHeight: 'calc(100vh - 150px)',
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center'
    }}
  >
    {children}
  </Flex>
)

export default function Custom404() {
  return (
    <Custom404Container>
      <NextSeo
        title="Page Not Found"
        openGraph={{
          title: "Page Not Found - HRS",
        }}
      />
      <Heading as="h1" mb={2} variant="text.subtitle">
        404
      </Heading>
      <Text as="div">
        This page could not be found.
      </Text>
    </Custom404Container>
  )
}