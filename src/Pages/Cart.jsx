import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useCart } from '../components/CartContext'

const Cart = () => {
  const { cartItems, updateQuantity, removeItem, clearCart } = useCart()
  const navigate = useNavigate()

  const subtotal = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0)
  const shipping = subtotal > 50 ? 0 : 5.99
  const total = subtotal + shipping

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-white py-10 lg:py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900">Shopping Cart</h1>
          <p className="text-gray-600 mt-2">Review your items and proceed to checkout</p>
        </div>
      </section>

      {/* Cart Content */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {cartItems.length === 0 ? (
            <div className="text-center py-16">
              <div className="text-6xl mb-4">🛒</div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Your cart is empty</h2>
              <p className="text-gray-600 mb-8">Add some delicious fruits to get started!</p>
              <button onClick={() => navigate('/', { state: { scrollTo: 'plans' } })} className="bg-green-600 text-white px-8 py-3 rounded-lg hover:bg-green-700 transition-colors">
                Continue Shopping
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Cart Items */}
              <div className="lg:col-span-2">
                <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                  <div className="p-6 border-b border-gray-200">
                    <h2 className="text-xl font-semibold text-gray-900">Cart Items ({cartItems.length})</h2>
                  </div>
                  <div className="divide-y divide-gray-200">
                    {cartItems.map((item) => (
                      <div key={item.id} className="p-6 flex items-center space-x-4">
                        <div className="text-4xl">{item.image}</div>
                        <div className="flex-1">
                          <h3 className="text-lg font-semibold text-gray-900">{item.name}</h3>
                          <p className="text-gray-600 text-sm">{item.description}</p>
                          <div className="flex items-center mt-2">
                            <button
                              onClick={() => updateQuantity(item.id, item.quantity - 1)}
                              className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100"
                            >
                              -
                            </button>
                            <span className="mx-4 font-medium">{item.quantity}</span>
                            <button
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                              className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100"
                            >
                              +
                            </button>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="text-lg font-semibold text-gray-900">{item.currencySymbol === '₹' ? '₹' : '$'}{(item.price * item.quantity).toFixed(2)}</p>
                          <p className="text-sm text-gray-600">{item.currencySymbol === '₹' ? '₹' : '$'}{item.price} each</p>
                          <div className="flex gap-3 justify-end mt-2">
                            <button onClick={() => navigate(`/plan/${encodeURIComponent(item.id)}`)} className="text-green-700 hover:text-green-800 text-sm">View details</button>
                            <button onClick={() => removeItem(item.id)} className="text-red-600 hover:text-red-700 text-sm">Remove</button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Order Summary */}
              <div className="lg:col-span-1">
                <div className="bg-white rounded-2xl shadow-sm ring-1 ring-gray-200 p-6 sticky top-24">
                  <h2 className="text-xl font-semibold text-gray-900 mb-6">Order Summary</h2>
                  <div className="space-y-4">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Subtotal</span>
                      <span className="font-medium">₹{subtotal.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Shipping</span>
                      <span className="font-medium">
                        {shipping === 0 ? 'Free' : `₹${shipping.toFixed(2)}`}
                      </span>
                    </div>
                    <div className="border-t border-gray-200 pt-4">
                      <div className="flex justify-between">
                        <span className="text-lg font-semibold text-gray-900">Total</span>
                        <span className="text-lg font-semibold text-gray-900">₹{total.toFixed(2)}</span>
                      </div>
                    </div>
                  </div>
                  <button onClick={() => navigate('/checkout')} className="w-full bg-green-600 text-white py-4 rounded-lg font-semibold hover:bg-green-700 transition-colors mt-6">
                    Proceed to Checkout
                  </button>
                  <div className="mt-4 text-center">
                    <p className="text-sm text-gray-600">Free shipping on orders over $50</p>
                  </div>
                  {cartItems.length > 0 && (
                    <button onClick={clearCart} className="w-full mt-4 text-sm text-gray-600 underline hover:text-gray-800">Clear Cart</button>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}

export default Cart