/** @jsxImportSource theme-ui */
import Link from 'next/link'
import { Arrow } from '../icons'
import { Swatch } from '../product'
import { Flex, Text } from 'theme-ui'


// todo: implement isSelected
// todo: implement colors.map
const Selector = ({
  colors = ['#191714', '#76A9AD'],
  variant = '',
  ...props
}) => {
  return (
    <Flex
      sx={{
        minHeight: `${variant === 'borders' ? '38px' : '18px'}`,
        width: `${variant === 'borders' ? '100%' : 'auto'}`,
        alignItems: 'center',
        borderTop: `${variant === 'borders' ? '1px solid' : 'none'}`,
        borderBottom: `${variant === 'borders' ? '1px solid' : 'none'}`,
        borderColor: 'offBlack20',
        gap: 2,
        justifyContent: 'space-between',
        '& > svg': {
          display: `${variant === '' ? 'none' : 'block'}`,
        }
      }}
      {...props}
    >
      <Arrow variant="left" />
      <Flex
        sx={{
          flexDirection: 'row',
          gap: 2,
        }}>
        {colors.map((color, i) => (
          <Swatch
            key={color.substring(1).concat(i)}
            color={color}
            active={i === 1}
          />
          )
        )}
      </Flex>
      <Arrow variant="right" />
    </Flex>
  )
}

export default Selector