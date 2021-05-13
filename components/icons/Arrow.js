/** @jsxImportSource theme-ui */

const Arrow = ({
  color,
  variant = 'left',
  ...props
}) => {
  return (
    <svg
      width="13"
      height="13"
      viewBox="0 0 13 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      transform={ 'right' === variant ? 'rotate(180)' : 'rotate(0)' }
      {...props}
    >
      <path
        d="M6.65685 0.999884L1 6.65674L6.65685 12.3136"
        sx={(theme) => ({
            stroke: color || theme.colors?.softSecondary
          })
        }
      />
    </svg>
  )
}

export default Arrow