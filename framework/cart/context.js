import React, { useCallback, useEffect, useMemo, useState } from 'react'

const initialState = {
  cart: [],
  isLoading: false,
  itemCount: 0,
  totalPrice: {
    amount: 0,
    currencyCode: 'USD',
  },
  addToCart() {},
  removeFromCart() {},
  clearCart() {},
  goToCheckout() {},
}

const CartContext = React.createContext(initialState)

export function CartProvider({ children, checkout }) {
  const [cart, setCart] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  const addToCart = useCallback((newItem) => {
    setIsLoading(true)
    setCart(currentCart =>
      // check if item already exists in cart
      currentCart.find(item => item.variantId === newItem.variantId)
        ? currentCart.map(item =>
          // if so, add 1 to that item's quantity
          item.variantId === newItem.variantId
            ? {
              ...newItem,
              quantity: item.quantity + 1,
            }
            : item,
        )
        // if not, add to end of cart
        : [...currentCart, { ...newItem, quantity: 1}]
    )
    // console.log("Added to cart")
    setIsLoading(false)
  }, [])

  const removeFromCart = useCallback((variantId, quantity) => {
    setIsLoading(true)
    setCart(currentCart => {
      let item = currentCart.find(item => item.variantId === variantId)

      if (!item) {
        return currentCart
      }

      if (item.quantity <= quantity) {
        return currentCart.filter(item => item.variantId !== variantId)
      }

      return currentCart.map(item =>
        item.variantId === variantId
          ? {
            ...newItem,
            quantity: item.quantity - quantity,
          }
          : item,
      )
    })
    // console.log("Removed from cart")
    setIsLoading(false)
  }, [])

  const clearCart = useCallback(() => {
    setIsLoading(true)
    setCart([])
    // console.log("Cleared cart")
    setIsLoading(false)
  }, [])

  let itemCount = useMemo(() => {
    return cart.reduce((total, item) => total + item.quantity, 0)
  }, [cart])

  let totalPrice = useMemo(() => ({
    currencyCode: cart[0]?.price?.split(' ')[1],
    amount: cart.reduce((total, item) => {
      return (
        total + (parseInt(item.price.split(' ')[0], 10) * item.quantity)
      )
    }, 0),
  }), [cart])


  useEffect(() => {
      setCart(JSON.parse(localStorage.getItem('cart') || '[]'))
  }, [])

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart))
  }, [cart])

  return <CartContext.Provider value={{
    cart,
    isLoading,
    itemCount,
    totalPrice,
    addToCart,
    removeFromCart,
    clearCart
  }}>{children}</CartContext.Provider>
}

export const useCart = () => {
  const context = React.useContext(CartContext)
  if (context === undefined) {
    throw new Error(`useCart must be used within a CartProvider`)
  }
  return context
}