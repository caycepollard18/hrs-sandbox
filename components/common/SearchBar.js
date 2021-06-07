import {
  Arrow,
  Search as SearchLogo,
} from '@components/icons'
import {
  Box,
  Flex,
  Input
} from 'theme-ui'

const SearchBar = () => (
  <Flex
    sx={{
      alignSelf: 'stretch',
      alignItems: 'center',
      height: '32px',
      flexDirection: 'row',
      mb: 3,
      position: 'relative',
    }}
  >
    <Box
      sx={{
        left: 3,
        opacity: '0.5',
        position: 'absolute',
        top: '10px',
      }}
    >
      <SearchLogo
        height="12px"
        width="12px"
      />
    </Box>
    <Input
      placeholder="Search HRS"
      sx={{
        width: '100%',
        height: '100%',
        px: '40px',
      }}
      variant="forms.input.search"
    />
    <Flex
      sx={{
        height: '100%',
        flexDirection: 'column',
        justifyContent: 'center',
        position: 'absolute',
        right: 3,
        top: 0,
      }}
    >
      <Arrow
        color="white"
        height="11px"
        width="11px"
        variant="right"
      />
    </Flex>
  </Flex>
)

export default SearchBar