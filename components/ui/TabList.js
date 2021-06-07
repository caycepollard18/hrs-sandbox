import PropTypes from 'prop-types'
import { Children, useState } from 'react'
import {
  Box,
  Flex,
  Text
} from 'theme-ui'

// todo: update to better reflect WAI-ARIA standards
// see https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/Tab_Role

const propTypes = {
  children: PropTypes.node.isRequired,
}

const TabTitle = ({ active = false, title, ...props }) => (
  <Box
    as="div"
    sx={{
      cursor: 'pointer',
      display: 'block',
      variant: active ? 'links.tabs.active' : 'links.tabs',
    }}
    {...props}
  >
    {title}
  </Box>
)

const TabList = ({ children, ...props }) => {
  const items = Children.map(children, (child) => child)
  
  const [selectedItem, setItem] = useState(items[0])

  return (
    <Flex
      sx={{
        flexDirection: 'column',
        justifyContent: 'stretch',
      }}
      {...props}
    >
      <Flex
        sx={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          mb: [3, 3, 5],
        }}
      >
        {items.map(item => (
          <TabTitle
            active={item.props.id === selectedItem.props.id}
            key={item.props.id}
            onClick={() => setItem(item)}
            title={item.props.label}
          />
        ))}
      </Flex>
      <Text as="div">
        {selectedItem.props.children}
      </Text>
    </Flex>
  )
}

TabList.propTypes = propTypes

export default TabList