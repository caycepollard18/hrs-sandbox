import { Button } from '@components/ui'
import { useState } from 'react'
import {
  Flex,
  Input,
  Heading,
  Label,
  Text
} from 'theme-ui'

// todo: add way to track what page / product a user subscribed on

const Newsletter = () => {

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
    <Flex
      as="form"
      onSubmit={subscribeUser}
      sx={{
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'center',
      }}
      variant="forms.newsletter.dark"
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
          variant="buttons.accent"
        >
          Sign up
        </Button>
      )}
    </Flex>
  )
}

export default Newsletter