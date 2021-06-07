import { Close as CloseLogo } from '@components/icons'
import { Button } from '@components/ui'
import PropTypes from 'prop-types'
import { useState } from 'react'
import {
  Box,
  Flex,
  Input,
  Heading,
  Label,
  Text
} from 'theme-ui'

// todo: add way to track what page / product a user subscribed on

const propTypes = {
  modal: PropTypes.bool,
}

const defaultProps = {
  modal: false,
}

const Close = ({ onClick }) => (
  <Box
    sx={{
      cursor: 'pointer',
      m: 3,
      p: 2,
      position: 'absolute',
      top: 0, right: 0,
    }}
    onClick={onClick}
  >
    <CloseLogo />
  </Box>
)

const ModalWrapper = ({
  condition,
  children,
  onClick,
  open,
}) => (
  condition ? (
    <Box
      sx={{
        minHeight: '240px',
        minWidth: ['100%', '100%', '720px', '960px'],
        alignItems: 'center',
        display: 'flex',
        justifyContent: 'center',
        position: 'fixed',
        bottom: ['64px', '64px', 0],
        right: 0,
        transform: open ? 'translateX(0%)' : 'translateX(100%)',
        transition: '0.25s transform ease-in-out',
        zIndex: '7',
      }}
      variant="forms.newsletter.modal"
    >
      {children}
      <Close onClick={onClick} />
    </Box>
  ) : children
)

const Newsletter = ({ modal }) => {
  
  const [isOpen, setIsOpen] = useState(true)

  const handleOnClick = () => {
    setIsOpen(!isOpen)
  }

  const [message, setMessage] = useState('')

  const subscribeUser = async (event) => {
    event.preventDefault()

    const res = await fetch('/api/subscribe', {
      body: JSON.stringify({
        email: event.target?.email?.value
      }),
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'POST'
    })

    const { error } = await res.json()

    if (error) {
      console.log(error)
      setMessage('Something went wrong')
      return
    }

    setMessage('Thank you!')
  }

  return (
    <ModalWrapper condition={modal} onClick={() => handleOnClick()} open={isOpen}>
      <Flex
        as="form"
        onSubmit={subscribeUser}
        sx={{
          alignItems: 'center',
          flexDirection: 'column',
          justifyContent: 'center',
          mb: 6,
          mt: 4,
          px: 4,
        }}
        variant="forms.newsletter"
      >
        <Heading as="div" variant="styles.h2" mb={1}>
          Newsletter
        </Heading>
        <Heading as="div" variant="forms.newsletter.subtitle" mb={2}>
          Sign up for new product availability and receive $100 off.
        </Heading>
        <Label htmlFor="email">Email</Label>
        <Input
          aria-label="Email"
          id="email"
          mb={5}
          name="email"
          placeholder="Enter your email address"
          type="email"
          variant="forms.newsletter.input"
          required
        />
        { message ? (
          <Text
            as="div"
            sx={{
              height: '30px',
              alignItems: 'center',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center'
            }}
          >
            {message}
          </Text>
        ) : (    
          <Button
            size="small"
            type="submit"
            variant={modal ? "buttons.transparent" : "buttons.accent"}
          >
            Sign up
          </Button>
        )}
      </Flex>
    </ModalWrapper>
  )
}

Newsletter.propTypes = propTypes
Newsletter.defaultProps = defaultProps

export default Newsletter