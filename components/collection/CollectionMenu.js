import Image from 'next/image'
import { Box, Flex } from 'theme-ui'


const CollectionMenuWrapper = ({ children }) => (
  <Box
    sx={{
      width: '100%',
      height: ['92px', '92px', '92px', '128px'],
      alignItems: 'stretch',
      display: ['none', 'flex'],
      flexDirection: 'row',
      gap: 4,
      justifyContent: ['space-between', 'center'],
      overflow: 'hidden',
    }}
  >
    {children}
  </Box>
)

const CollectionMenuItem = ({ children }) => (
  <Flex
    sx={{
      minWidth: '64px',
      alignItems: 'center',
      flexDirection: 'column',
      gap: 2,
      justifyContent: 'flex-end',
      overflowX: 'hidden',
      pb: 3,
      textOverflow: 'hidden',
    }}
  >
    <Box
      sx={{
        display: 'block',
        alignSelf: 'stretch',
        flexGrow: 1,
        backgroundBlendMode: 'multiply',
        backgroundColor: theme => theme.colors.background,
        backgroundImage: 'url("/products/outlines/Outline - Belmont.jpg")',
        backgroundPosition: 'bottom center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: '64px auto',
      }}
    />
    {children}
  </Flex>
)

const CollectionMenu = ({ products }) => {
  return (
    <CollectionMenuWrapper>
      {products.map(product => (
        <CollectionMenuItem>
          {product.style}
        </CollectionMenuItem>
      ))}
    </CollectionMenuWrapper>
  )
}

export default CollectionMenu