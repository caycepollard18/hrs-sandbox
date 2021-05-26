/** @jsxImportSource theme-ui */
import Link from 'next/link'
import { Arrow } from '@components/icons'
import { Swatch } from '@components/product'
import PropTypes from 'prop-types'
import { useState } from 'react'
import { Flex } from 'theme-ui'

const propTypes = {
  colors: PropTypes.arrayOf(PropTypes.object),
  selected: PropTypes.object,
  setVariant: PropTypes.func,
  size: PropTypes.oneOf(['small', 'large']),
  sx: PropTypes.object,
  variant: PropTypes.oneOf(['no-borders', 'borders']),
}

const defaultColors = [
  {
    color: "Black Multi Combo",
    handle: "",
    id: "id8271398ffdsf",
    swatch: "/swatches/Belmont - Black Combo.jpg",
  },
  {
    color: "Bone Black",
    handle: "",
    id: "id8271398fsdja",
    swatch: "/swatches/Belmont - Bone Black.jpg",
  }
]

const defaultProps = {
  colors: defaultColors,
  selected: {},
  setVariant: null,
  size: 'small',
  sx: {},
  variant: 'no-borders',
}

// todo: implement isSelected
// todo: implement colors.map

const Selector = ({
  colors,
  selected,
  setVariant,
  size,
  sx,
  variant,
  ...props
}) => {
  const hasBorders = variant === 'borders'

  const [selectedColor, setColor] = useState(selected)

  const handleOnClick = (color) => {
    setColor(color)
    setVariant(color)
  }
  
  return (
    <Flex
      sx={{
        minHeight: hasBorders ? '38px' : '18px',
        width: hasBorders && '100%',
        alignItems: 'center',
        borderTop: hasBorders ? '1px solid' : 'none',
        borderBottom: hasBorders ? '1px solid' : 'none',
        borderColor: 'offBlack20',
        flexShrink: 1,
        gap: 2,
        justifyContent: hasBorders && 'space-between', 
        ...sx
      }}
      {...props}
    >
      {hasBorders && <Arrow variant="left" />}
      <Flex
        sx={{
          flexDirection: 'row',
          gap: 2,
        }}>
        {colors.map((color, i) => (
          <Swatch
            key={color.id}
            color={color.swatch}
            onClick={() => handleOnClick(color)}
            active={selectedColor ? color.id === selectedColor.id : i === 1}
            size={size}
          />
          )
        )}
      </Flex>
      {hasBorders && <Arrow variant="right" />}
    </Flex>
  )
}

Selector.propTypes = propTypes
Selector.defaultProps = defaultProps

export default Selector