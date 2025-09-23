import React, { createContext, useContext, useEffect, useMemo, useState } from 'react'

const CartContext = createContext(null)

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(() => {
    try {
      const stored = localStorage.getItem('cart')
      return stored ? JSON.parse(stored) : []
    } catch {
      return []
    }
  })

  useEffect(() => {
    try {
      localStorage.setItem('cart', JSON.stringify(cartItems))
    } catch {
      // ignore write errors
    }
  }, [cartItems])

  const addItem = (item) => {
    setCartItems((prev) => {
      const existing = prev.find((x) => x.id === item.id)
      if (existing) {
        return prev.map((x) => x.id === item.id ? { ...x, quantity: x.quantity + (item.quantity || 1) } : x)
      }
      return [...prev, { ...item, quantity: item.quantity || 1 }]
    })
  }

  const removeItem = (id) => {
    setCartItems((prev) => prev.filter((x) => x.id !== id))
  }

  const updateQuantity = (id, quantity) => {
    setCartItems((prev) => prev.map((x) => x.id === id ? { ...x, quantity: Math.max(1, quantity) } : x))
  }

  const clearCart = () => setCartItems([])

  const itemCount = useMemo(() => cartItems.reduce((sum, x) => sum + x.quantity, 0), [cartItems])

  const value = useMemo(() => ({ cartItems, addItem, removeItem, updateQuantity, clearCart, itemCount }), [cartItems])

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  )
}

export const useCart = () => {
  const ctx = useContext(CartContext)
  if (!ctx) throw new Error('useCart must be used within a CartProvider')
  return ctx
}


