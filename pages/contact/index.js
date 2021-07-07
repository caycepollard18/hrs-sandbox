import { NextSeo } from 'next-seo'
import {
  Divider,
  Flex,
  Heading,
  Text,
} from 'theme-ui'

const emailList = [
  {
    title: 'Inquiries',
    address: 'info@humanrecreationalservices.com',
    uuid: 'inquiries',
  },
  {
    title: 'Returns',
    address: 'returns@humanrecreationalservices.com',
    uuid: 'returns',
  },
  {
    title: 'Press',
    address: 'press@humanrecreationalservices.com',
    uuid: 'press',
  },
  {
    title: 'Private Clients',
    address: 'vip@humanrecreationalservices.com',
    uuid: 'private-clients',
  },
]

const socialList = [
  {
    title: 'Instagram',
    href: 'https://www.instagram.com/humanrecreationalservices/',
    username: 'humanrecreationalservices',
    uuid: 'instagram',
  },
]

const ContactContainer = ({ children }) => (
  <Flex
    sx={{
      alignSelf: 'stretch',
      alignItems: 'center',
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'flexStart',
      minHeight: 'calc(100vh - 300px)',
    }}
    variant="layout.dark"
  >
    {children}
  </Flex>
)

const InnerContainer = ({ children }) => (
  <Flex
    sx={{
      width: '100%',
      maxWidth: ['calc(100% - 48px)', '456px'],
      alignItems: 'center',
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'center',
      minHeight: ['66vh', 'calc(100vh - 300px)'],
      mx: 5,
      my: 3,
    }}
    variant="layout.dark"
  >
    {children}
  </Flex>
)

const ContactItem = ({ title, address, username, href='' }) => (
  <Flex
    sx={{
      alignItems: 'center',
      alignSelf: 'stretch',
      flexDirection: ['column', 'row'],
      gap: [0, 4],
      mb: [2, 0],
      justifyContent: 'space-between',
      variant: 'pages.contact.list',
    }}
  >
    <Text as="div">
      {title}
    </Text>
    <a
      href={address ? `mailto:${address}` : href}
      target="_blank"
      rel="noopener noreferrer"
    >
      {address ? address : `@${username}`}
    </a>
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
    <InnerContainer>
      <Heading as="h1" my={3} variant="text.subtitle">
        Contact
      </Heading>
      <Divider />
      {emailList.map(email => (
        <ContactItem
          key={email.uuid}
          title={email.title}
          address={email.address}
          variant="pages.contact.list"
        />
      ))}
      <Divider />
      {socialList.map(social => (
        <ContactItem
          key={social.uuid}
          title={social.title}
          href={social.href}
          username={social.username}
          variant="pages.contact.list"
        />
      ))}
      <Divider />
    </InnerContainer>
  </ContactContainer>
)

export default Contact