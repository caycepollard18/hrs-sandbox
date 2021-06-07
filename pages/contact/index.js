import { NextSeo } from 'next-seo'
import {
  Flex,
  Heading,
  Text
} from 'theme-ui'

const ContactContainer = ({ children }) => (
  <Flex
    sx={{
      alignSelf: 'stretch',
      alignItems: 'center',
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'center',
      minHeight: 'calc(100vh - 300px)',
      px: 5,
      py: 3,
    }}
    variant="layout.dark"
  >
    {children}
  </Flex>
)

const Contact = () => (
  <ContactContainer>
    <NextSeo
      title="CONTACT US"
      openGraph={{
        title: "Contact Us - HRS",
      }}
    />
    <Heading as="h1" mb={2} variant="text.subtitle">
      Contact
    </Heading>
    <Text as="div">
      Lorem ipsum 
    </Text>
  </ContactContainer>
)

export default Contact