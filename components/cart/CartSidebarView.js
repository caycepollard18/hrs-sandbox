import { Close } from '@components/icons'
import { Button } from '@components/ui'
import { useCart } from '@framework/cart'
import Image from 'next/image'
import PropTypes from 'prop-types'
import {
  Box,
  Flex,
  Heading,
  Text,
} from 'theme-ui'

const propTypes = {
  onClose: PropTypes.func.isRequired,
}

const SidebarHeader = ({ itemCount, onClose, totalPrice }) => (
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
        {itemCount || '0'} {itemCount === 1 ? "Item" : "Items"}
      </Text>
      <Text
        as="span"
        sx={{ display: ['none', 'block'], }}
        variant="text.small"
      >
        {totalPrice.amount} {totalPrice.currencyCode || 'USD'}
      </Text>
      <Close
        onClick={onClose}
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

const SidebarFooter = ({ checkoutUrl, itemCount, onClick, totalPrice }) => (
  <Flex
    as="footer"
    sx={{
      minHeight: ['160px', '80px'],
      alignItems: ['flex-start', 'center'],
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
          alignItems: ['center', 'flex-end'],
          flexDirection: ['column', 'row'],
          gap: [1, 2],
          mb: ['19px', 0],
          px: [2, 0],
        }}
      >
        <Text as="span" variant="text.caption">Total</Text>
        <Heading as="div" variant="styles.h4">
          {totalPrice.amount} {totalPrice.currencyCode || 'USD'}
        </Heading>
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
      <Button as="a" disabled={itemCount === 0 || !(onClick)} href={onClick} width="184px">
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

const CartItem = ({ item, onRemove }) => {
  return (
    <Flex
      as="div"
      sx={{
        alignSelf: 'stretch',
        flexDirection: 'row',
        mb: '2px',
        position: 'relative',
      }}
    >
      <Box as="div" sx={{
        backgroundColor: 'bone',
        width: ['175px', '250px'],
        height: '100%',
        position: 'relative'
      }}>
        <Image
          src={item.image}
          layout={'fill'}
          objectFit={'contain'}
        />
      </Box>
      <Flex
        as="div"
        sx={{
          flexDirection: 'column',
          maxWidth: ['calc(100% - 214px)', 'calc(100% - 250px)'],
          p: [3, 4],
        }}
      >
        <Heading as="div" variant="styles.h5">
          {item.title}
        </Heading>
        <Heading as="div" variant="text.micro">
          {item.color}
        </Heading>
        <Flex
          as="span"
          sx={{
            flexDirection: 'row',
            gap: '12px',
            mt: [2, 3],
            variant: 'layout.sidebar.cart.content.light'
          }}
        >
          <Text>Size</Text>
          <Text><strong>{item.size}</strong></Text>
        </Flex>
        <Flex
          as="span"
          sx={{
            flexDirection: 'row',
            gap: '12px',
            variant: 'layout.sidebar.cart.content.light'
          }}
        >
          <Text>Quantity</Text>
          <Text><strong>{item.quantity}</strong></Text>
        </Flex>
        {item.productType === 'Made-to-order' ? (
          <Text as="div" my={[2, 3]} variant="layout.sidebar.cart.content.note">
            NOTE: The {item.title} is made to order in Italy. Please check product page to confirm expected shipping dates.
          </Text>
        ) : (
          <Text as="div" my={3}></Text>
        )
        }
        <Flex
          as="span"
          sx={{
            alignItems: 'flex-end',
            flexDirection: 'row',
            gap: 4,
          }}
        >
          <Text as="div" variant="layout.sidebar.cart.content.light">
            <strong>{item.price}</strong>
          </Text>
          <Text as="span" mb="1px" variant="layout.sidebar.cart.content.note"><a onClick={onRemove}>Remove</a></Text>
        </Flex>
      </Flex>
    </Flex>
  )
}

const CartSidebarView = ({ onClose }) => {
  const {
    cart,
    checkoutUrl,
    totalPrice,
    itemCount,
    removeFromCart,
    clearCart,
  } = useCart()
  // console.log("cart")
  // console.log(cart)
  // console.log(totalPrice)
  return (
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
      <SidebarHeader itemCount={itemCount} totalPrice={totalPrice} onClose={onClose} />
      <Flex
        as="div"
        sx={{
          alignItems: 'center',
          flexDirection: 'column',
          flexGrow: 1,
          justifyContent: 'flex-start',
          overflowY: cart.length === 0 ? 'hidden' : 'auto',
          p: cart.length === 0 ? 5 : 0,
          variant: cart.length === 0 ? 'layout.sidebar.cart.empty' : 'layout.sidebar.cart.content',
        }}
      >
        {cart.length === 0 ? (
            <Text as="div">
              Your shopping bag is currently empty
            </Text>
        ) : (
            cart.map((item, i) => <CartItem key={i} item={item} onRemove={() => removeFromCart(item.variantId, item.quantity)} />)
        )}
      </Flex>
      <SidebarFooter
        itemCount={itemCount}
        onClick={checkoutUrl}
        totalPrice={totalPrice}
      />
    </Flex>
  )
}

CartSidebarView.propTypes = propTypes

export default CartSidebarView