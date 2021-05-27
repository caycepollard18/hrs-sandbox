/** @jsxImportSource theme-ui */
import Link from 'next/link'
import PropTypes from 'prop-types'
import React from 'react'
// import mergeRefs from 'react-merge-refs'
import { Button as ThemeButton } from 'theme-ui'

// todo: sort out mergeRefs issues

// todo: implement loading for button

const propTypes = {
  as: PropTypes.string,
  href: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
  ]),
  loading: PropTypes.bool,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  sx: PropTypes.object,
}

const defaultProps = {
  as: 'button',
  href: '',
  loading: false,
  disabled: false,
  onClick: null,
  sx: {},
}

const Button = React.forwardRef((props, ref) => {
  const {
    children,
    onClick,
    href,
    loading,
    disabled,
    sx,
    as = 'button',
    ...rest
  } = props

  const fallbackRef = React.useRef<typeof Component>(null)

  return (
    <Link href={href} passHref>
      <ThemeButton
        as={as}
        href={href}
        disabled={disabled}
        onClick={onClick}
        ref={ref}
        // ref={mergeRefs([fallbackRef, ref])}
        sx={{
          height: '40px',
          minWidth: ['176px', '256px'],
          border: 0,
          borderRadius: 0,
          cursor: 'pointer',
          display: 'inline-block',
          px: '30px',
          ...sx
        }}
        {...rest}
      >
        {children}
      </ThemeButton>
    </Link>
  )
})

Button.propTypes = propTypes
Button.defaultProps = defaultProps

export default Button

