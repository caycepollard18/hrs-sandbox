import {
  Flex,
  Heading
} from 'theme-ui'

const Custom404Container = ({ children, ...props }) => (
  <Flex
    sx={{
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center'
    }}
    {...props}
  >
    {children}
  </Flex>
)

export default function Custom404() {
  return (
    <Custom404Container>
      <Heading
        as="h1"
        variant="styles.h1"
      >
        404 - Page Not Found
      </Heading>
    </Custom404Container>
  )
}