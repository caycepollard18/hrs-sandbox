/** @jsxImportSource theme-ui */
import { Arrow } from '@components/icons'
import { Swatch } from '@components/product'
import PropTypes from 'prop-types'
import { useState } from 'react'
import { Flex, Text } from 'theme-ui'

/* use for troubleshooting
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
] */

const propTypes = {
  colors: PropTypes.arrayOf(PropTypes.object),
  createLinkProps: PropTypes.func,
  onChange: PropTypes.func,
  selected: PropTypes.object,
  iconSize: PropTypes.oneOf(['small', 'large']),
  sizes: PropTypes.arrayOf(PropTypes.object),
  sx: PropTypes.object,
  variant: PropTypes.oneOf(['no-borders', 'borders']),
}

const defaultProps = {
  colors: [],
  createLinkProps: null,
  onChange: null,
  selected: {},
  iconSize: 'small',
  sizes: [],
  sx: {},
  variant: 'no-borders',
}

const Selector = ({
  colors,
  createLinkProps,
  selected,
  onChange,
  iconSize,
  sizes,
  sx,
  variant,
  ...props
}) => {
  const [selectedVariant, setVariant] = useState(selected)

  const handleOnClick = (option) => {
    setVariant(option)
    {onChange && onChange(option)}
  }
  
  const hasBorders = variant === 'borders'
  
  return colors.length > 0 ? (
    <Flex
      sx={{
        minHeight: hasBorders ? '38px' : '18px',
        width: hasBorders && '100%',
        alignItems: 'center',
        flexShrink: 1,
        gap: 2,
        justifyContent: hasBorders && 'center',
        variant: hasBorders && 'layout.selector.borders',
        ...sx
      }}
      {...props}
    >
      <Flex
        sx={{
          flexDirection: 'row',
          gap: 2,
        }}
      >
        {colors.map(color => (
          <Swatch
            key={color.id}
            color={color.swatch}
            createLinkProps={createLinkProps && createLinkProps(color)}
            onClick={() => handleOnClick(color)}
            active={selectedVariant && color.id === selectedVariant.id}
            iconSize={iconSize}
          />
        ))}
      </Flex>
    </Flex>
  ) : (
    // todo: fix selectedVariant.id === size.id bug
    // for now, hack solution: test title === title
    <Flex
      sx={{
        flexDirection: 'row',
        gap: 2,
      }}
      {...props}
    >
      {sizes?.map(size => (
        <Swatch
          key={size.id}
          size={size.title}
          createLinkProps={createLinkProps && createLinkProps(size)}
          onClick={() => handleOnClick(size)}
          active={selectedVariant.title === size.title}
          disabled={!size.availableForSale}
        />
      ))}
    </Flex>
  )
}

Selector.propTypes = propTypes
Selector.defaultProps = defaultProps

export default Selector