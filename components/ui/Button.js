/** @jsxImportSource theme-ui */
import React from 'react'
// import mergeRefs from 'react-merge-refs'
import { Button } from 'theme-ui'

// todo: sort out mergeRefs issues

// todo: implement loading for button

const StyledButton = React.forwardRef((props, ref) => {
  const {
    className,
    children,
    active,
    width,
    loading = false,
    disabled = false,
    style = {},
    Component = 'button',
    ...rest
  } = props

  const fallbackRef = React.useRef<typeof Component>(null)

  return (
    <Button
      as={Component}
      aria-pressed={active}
      // ref={mergeRefs([fallbackRef, ref])}
      className={className}
      disabled={disabled}
      {...rest}
    >
      {children}
    </Button>
  )
})

export default StyledButton

