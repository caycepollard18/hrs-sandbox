import PropTypes from 'prop-types'
import React, { useLayoutEffect } from 'react'
import { Flex } from 'theme-ui'

const propTypes = {
  price: PropTypes.string,
  variant: PropTypes.string,
}

const defaultProps = {
  price: '490 USD',
  variant: 'affirm.primary',
}

const priceToAffirmFormat = (price) => {
  // convert price to integer & cents per Affirm reqs
  const dollars = price.split(' ')[0]
  return parseInt(dollars, 10) * 100
}

const AffirmNotice = ({ price, variant, ...props }) => {
  const amount = priceToAffirmFormat(price)

  useLayoutEffect(() => {
    global.affirm?.ui?.refresh?.()
  }, [price])

  return (
    <Flex
      sx={{
        alignItems: 'flex-end',
        flexDirection: 'row',
      }}
      variant={variant}
      {...props}
    >
      <p
        className="affirm-as-low-as"
        data-page-type="product"
        data-amount={amount}
      ></p>
    </Flex>
  )
}

AffirmNotice.propTypes = propTypes
AffirmNotice.defaultProps = defaultProps

export default AffirmNotice