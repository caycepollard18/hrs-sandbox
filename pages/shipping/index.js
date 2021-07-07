import { NextSeo } from 'next-seo'
import {
  Divider,
  Flex,
  Heading,
  Text,
} from 'theme-ui'

const shipList = [
  {
    title: 'Standard (3–5 days)',
    price: 'Free',
    uuid: 'standard',
  },
  {
    title: 'Express (2 day)',
    price: '$25',
    uuid: 'express',
  },
]

const ShippingContainer = ({ children }) => (
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
      wordWrap: 'break-word',
      'p': {
        my: 2,
        variant: 'pages.contact.list',
        wordWrap: 'break-word',
      }
    }}
    variant="layout.dark"
  >
    {children}
  </Flex>
)

const ShipItem = ({ title, price, username, href='' }) => (
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
    <Text as="div">
      {price}
    </Text>
  </Flex>
)

const Shipping = () => (
  <ShippingContainer>
    <NextSeo
      title="SHIPPING & RETURNS"
      openGraph={{
        title: "Shipping & Returns - HRS",
      }}
    />
    <InnerContainer>
      <Heading as="h1" my={3} variant="text.subtitle">
        Shipping & Returns
      </Heading>
      <Divider />
      {shipList.map(item => (
        <ShipItem
          key={item.uuid}
          title={item.title}
          price={item.price}
          variant="pages.contact.list"
        />
      ))}
      <Divider />
      <p>
        Please allow 2–3 business days once your order is placed
        for your order to be shipped. Please note we do not ship on
        weekends or holidays. 
      </p>
      <p>
        <strong>We do not ship to PO boxes.</strong>
      </p>
      <Divider />
      <ShipItem
        title="International shipping"
        price="$35 flat rate"
        variant="pages.contact.list"
      />
      <Divider />
      <p>
        The flat rate excludes taxes and duties. International
        customers are responsible for all taxes and duties upon
        delivery.
      </p>
      <Divider />
      <Heading as="h1" my={3} variant="text.subtitle">
        Returns
      </Heading>
      <Divider />
      <p>
        We accept returns on all full price items within 14 days
        of delivery date. The merchandise must be returned in the 
        exact condition in which it was shipped in order to receive 
        a refund. Shipping charges for returns/exchanges are not 
        credited unless the merchandise has a defect. For U.S. orders,
        complimentary return shipping is provided for eligible items.
      </p>
      <p>
        Please email
        &nbsp;<a
          href="mailto:returns@humanrecreationalservices.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          returns@humanrecreationalservices.com
        </a> to initiate the return or exchange process.
      </p>
      <p>
        <strong>
          International orders are final sale only and may not be
          returned or exchanged. Human Recreational Services is not
          responsible for international shipments lost in transit.
        </strong>
      </p>
      <p>
        Items marked "final sale" cannot be returned or exchanged.
        Orders placed during sales/promotions are final sale.
      </p>
      <Divider />
    </InnerContainer>
  </ShippingContainer>
)

export default Shipping