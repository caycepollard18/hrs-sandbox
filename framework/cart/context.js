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
  const [cart, setCart] = useState(initialState.cart)
  const [isLoading, setIsLoading] = useState(false)

  const addToCart = useCallback(() => {
    setIsLoading(true)
    setCart(currentCart => [...currentCart, { id: "Z2lkOi8vc2hvcGlmeS9DaGVja291dExpbmVJdGVtLzQwMjE4NjE3NTQ0ODUzMD9jaGVja291dD1jMTg1ZjhhMzU3Yzk0NjdhMTg5YmJjNjA5ZDBiZDk3OQ==", quantity: 1 }])
    console.log("Added to cart")
    setIsLoading(false)
  })

  const clearCart = useCallback(() => {
    setIsLoading(true)
    setCart([])
    console.log("Cleared cart")
    setIsLoading(false)
  }, [])

  let itemCount = useMemo(() => {
    return cart.reduce((total, item) => total + item.quantity, 0)
  }, [cart])

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
    addToCart,
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