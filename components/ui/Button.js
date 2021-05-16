/** @jsxImportSource theme-ui */
import React from 'react'
// import mergeRefs from 'react-merge-refs'
import {
  Button as ThemeButton
} from 'theme-ui'

// todo: sort out mergeRefs issues

// todo: implement loading for button

const Button = React.forwardRef((props, ref) => {
  const {
    className,
    children,
    active,
    width,
    onClick,
    href,
    loading = false,
    disabled = false,
    style = {},
    Component = 'button',
    ...rest
  } = props

  const fallbackRef = React.useRef<typeof Component>(null)

  return (
    <ThemeButton
      as={Component}
      aria-pressed={active}
      className={className}
      href={href}
      disabled={disabled}
      onClick={onClick}
      ref={ref}
      // ref={mergeRefs([fallbackRef, ref])}
      sx={{
        height: '40px',
        minWidth: ['175px', '250px'],
        border: 0,
        borderRadius: 0,
        cursor: 'pointer',
        display: 'inline-block',
        px: '30px',
      }}
      {...rest}
    >
      {children}
    </ThemeButton>
  )
})

export default Button

