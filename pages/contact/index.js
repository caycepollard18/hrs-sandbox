import Link from 'next/link'
import { NextSeo } from 'next-seo'
import {
  Divider,
  Flex,
  Heading,
  Text,
} from 'theme-ui'

const emailList = [
  {
    title: 'Customer Inquiries',
    address: 'info@humanrecreationalservices.com',
    uuid: 'customer-inquiries',
  },
  {
    title: 'General Info',
    address: 'info@humanrecreationalservices.com',
    uuid: 'general-info',
  },
  {
    title: 'Return Requests',
    address: 'returns@humanrecreationalservices.com',
    uuid: 'return-requests',
  },
  {
    title: 'Press Inquiries',
    address: 'press@humanrecreationalservices.com',
    uuid: 'press-inquiries',
  },
  {
    title: 'VIP & Stylist Inquiries',
    address: 'vip@humanrecreationalservices.com',
    uuid: 'private-inquiries',
  },
]

const socialList = [
  {
    title: 'Instagram',
    href: 'https://www.instagram.com/humanrecreationalservices/',
    username: 'humanrecreationalservices',
    uuid: 'instagram',
  },
  {
    title: 'Facebook',
    href: 'https://www.facebook.com/humanrecreationalservices',
    username: 'humanrecreationalservices',
    uuid: 'facebook',
  },
]

const ContactContainer = ({ children }) => (
  <Flex
    sx={{
      alignSelf: 'stretch',
      alignItems: 'center',
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'center',
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
      maxWidth: '456px',
      alignItems: 'center',
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'center',
      minHeight: 'calc(100vh - 300px)',
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
      flexDirection: 'row',
      gap: 4,
      justifyContent: 'space-between',
      variant: 'layout.contact.list',
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
      <Heading as="h1" mb={3} variant="text.subtitle">
        Contact
      </Heading>
      <Divider />
      {emailList.map(email => (
        <ContactItem
          key={email.uuid}
          title={email.title}
          address={email.address}
          variant="theme.layout.contact.list"
        />
      ))}
      <Divider />
      {socialList.map(social => (
        <ContactItem
          key={social.uuid}
          title={social.title}
          href={social.href}
          username={social.username}
          variant="theme.layout.contact.list"
        />
      ))}
      <Divider />
    </InnerContainer>
  </ContactContainer>
)

export default Contact