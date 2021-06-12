import { Close } from '@components/icons'
import { Button } from '@components/ui'
import {
  Flex,
  Heading,
  Text,
} from 'theme-ui'

const SidebarHeader = ({ onClick }) => (
  <Flex
    as="header"
    sx={{
      height: '80px',
      alignItems: 'center',
      flexDirection: 'row',
      justifyContent: 'space-between',
      px: [5, 7],
    }}
  >
    <Heading as="div" variant="styles.h4">Shopping Bag</Heading>
    <Flex
      sx={{
        alignItems: 'center',
        flexDirection: 'row',
        gap: 5,
      }}
    >
      <Text as="span" variant="text.small">
        0 Items
      </Text>
      <Text
        as="span"
        sx={{ display: ['none', 'block'], }}
        variant="text.small"
      >
        0 USD
      </Text>
      <Close
        onClick={onClick}
        sx={{
          height: '10px',
          mt: '6px',
          mb: '4px',
          p: 0,
        }}
      />
    </Flex>
  </Flex>
)

const SidebarFooter = () => (
  <Flex
    as="footer"
    sx={{
      minHeight: '80px',
      alignItems: ['center'],
      flexDirection: 'row',
      justifyContent: 'space-between',
      px: [5, 5],
      pt: [3, 0],
      pb: [2, 0],
    }}
  >
    <Flex
      sx={{
        alignItems: 'flex-start',
        flexDirection: 'column',
      }}
    >
      <Flex
        sx={{
          alignItems: 'flex-end',
          flexDirection: 'row',
          gap: 2,
          mb: ['19px', 0],
        }}
      >
        <Text as="span" variant="text.caption">Total</Text>
        <Heading as="div" variant="styles.h4">0 USD</Heading>
      </Flex>
      <Text
        as="span"
        sx={{ display: ['none', 'block'], }}
        variant="text.tinyLight">
        Complimentary shipping on all orders
      </Text>
    </Flex>
    <Flex
      sx={{
        alignItems: 'center',
        flexDirection: 'column',
      }}
    >
      <Button width="184px">
        Check Out
      </Button>
      <Text
        as="span"
        sx={{
          display: ['block', 'none'],
          mt: 2,
        }}
        variant="text.tinyLight">
        Complimentary shipping on all orders
      </Text>
    </Flex>
  </Flex>
)

const InnerContainer = ({ children }) => (
  <Flex sx={{
    alignItems: 'center',
    backgroundImage: "url('/campaign/fw21/301.jpg')",
    backgroundPosition: 'top center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    flexDirection: 'column',
    flexGrow: 1,
    justifyContent: 'flex-start',
    p: 5,
    variant: 'layout.sidebar.cart.content',
  }}
  >
    {children}
  </Flex>
)

const CartSidebarView = ({ onClose }) => (
  <Flex
    sx={{
      width: ['100%', '512px'],
      height: '100%',
      maxHeight: '100vh',
      alignItems: 'stretch',
      flexDirection: 'column',
      variant: 'layout.sidebar.cart',
    }}
  >
    <SidebarHeader onClick={onClose} />
    <InnerContainer>
      <Text as="div">
        Your shopping bag is currently empty
      </Text>
    </InnerContainer>
    <SidebarFooter />
  </Flex>
)

export default CartSidebarView