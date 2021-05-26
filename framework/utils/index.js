export const formatPrice = ({
  currencyCode = 'USD',
  amount,
  opts = { style: 1 },
}) => {
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: currencyCode || 'USD',
  })

  if (!formatter?.formatToParts) {
    // probably unsupported by whatever browser
    return amount
  }

  const parts = formatter.formatToParts(amount)

  // style 1: 420 USD
  const style1 = `${parts
    .filter(({ type }) => !['currency', 'fraction', 'decimal'].includes(type))
    .map(({ value }) => value)
    .reduce((string, part) => string + part)} ${currencyCode}`

  // style 2: $420.00
  const style2 = formatter.format(amount)

  // style 3: 420.00 USD
  const style3 = `${parts
    .filter(({ type }) => !['currency'].includes(type))
    .map(({ value }) => value)
    .reduce((string, part) => string + part)} ${currencyCode}`
  
  switch (opts.style) {
    case 1:
      return style1
    case 2:
      return style2
    case 3:
      return style3
    default:
      return amount
  }
}

export const normalizeProduct = ({
  color,
  description,
  images,
  style,
  variants,
  ...rest
}) => {
  const _color = color.value

  const _images = images?.edges?.map(({ node: i }) => i)
    .map(({ altText, id, originalSrc, height, width, small }) => ({
      id,
      src: originalSrc,
      alt: altText,
      height,
      width,
      small,
    }))

  const shortDescription = description.split('.').slice(0,2).join('.') + '.'
  
  const _style = style.value

  // assuming product variants cover sizes only
  const _variants = variants?.edges?.map(({ node: v }) => v)
    .map(({ id, title, price }) => ({
      id,
      title,
      price: formatPrice({ amount: price }),
    }))

  return {
    ...rest,
    color: _color,
    description,
    images: _images,
    shortDescription,
    style: _style,
    variants: _variants,
  }
}
