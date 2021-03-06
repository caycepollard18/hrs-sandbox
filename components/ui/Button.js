/** @jsxImportSource theme-ui */
import Link from 'next/link'
import PropTypes from 'prop-types'
import React from 'react'
// import mergeRefs from 'react-merge-refs'
import { Button as ThemeButton, Spinner } from 'theme-ui'

// todo: sort out mergeRefs issues

// todo: implement loading for button

const propTypes = {
  as: PropTypes.string,
  disabled: PropTypes.bool,
  href: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
  ]),
  loading: PropTypes.bool,
  maxWidth: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array,
  ]),
  onClick: PropTypes.func,
  size: PropTypes.oneOf([
    'small',
    'medium',
  ]),
  sx: PropTypes.object,
  variant: PropTypes.oneOf([
    'primary',
    'accent',
    'transparent',
  ]),
  width: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array,
  ]),
}

const defaultProps = {
  as: 'button',
  disabled: false,
  href: '',
  loading: false,
  maxWidth: null,
  onClick: null,
  size: 'medium',
  sx: {},
  variant: 'primary',
  width: ['176px', '256px'],
}

const LinkWrapper = ({ children, href }) => (
  href ? (<Link href={href} passHref>{children}</Link>) : children
)

const Button = React.forwardRef((props, ref) => {
  const {
    as,
    children,
    disabled,
    href,
    loading,
    maxWidth,
    onClick,
    size,
    sx,
    variant,
    width,
    ...rest
  } = props

  const fallbackRef = React.useRef<typeof Component>(null)

  return (
    <LinkWrapper href={href}>
      <ThemeButton
        as={as}
        disabled={disabled}
        onClick={onClick}
        ref={ref}
        // ref={mergeRefs([fallbackRef, ref])}
        sx={{
          height: size === 'small' ? '30px' : '40px',
          minWidth: size === 'small' ? '160px' : width,
          maxWidth: maxWidth ? maxWidth : 'unset',
          alignItems: 'center',
          cursor: disabled ? 'unset' : 'pointer',
          display: 'inline-flex',
          flexDirection: 'column',
          justifyContent: 'center',
          px: '30px',
          variant: disabled ? `buttons.${variant}.disabled` : `buttons.${variant}`,
          ...sx
        }}
        {...rest}
      >
        {loading ? (
          <Spinner
            size={24}
            strokeWidth={3}
            sx={{ color: 'white' }}
          />
        ) : children}
      </ThemeButton>
    </LinkWrapper>
  )
})

Button.propTypes = propTypes
Button.defaultProps = defaultProps

export default Button

