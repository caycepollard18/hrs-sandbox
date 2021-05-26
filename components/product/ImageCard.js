/** @jsxImportSource theme-ui */
import { ProductCardDescription } from '@components/product'

const ProductImageCard = ({
  color = '',
  image,
  layout = 'top left',
  product,
  ...props
}) => {
  return (
    <div
      sx={{
        backgroundImage: `url(${image})`,
        backgroundPosition: 'left center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        alignItems: layout.includes('left') ? 'flex-start' : 'flex-end',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: layout.includes('top') ? 'flex-start' : 'flex-end',
        p: [5, 5, 6],
      }}
      {...props}
    >
      <ProductCardDescription
        color={color}
        layout={layout}
        product={product}
        variant="lifestyle-image"
      />
    </div>
  )
}

export default ProductImageCard