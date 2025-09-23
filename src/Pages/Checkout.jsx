import React, { useState } from 'react'
import { useCart } from '../components/CartContext'

const Checkout = () => {
  const { cartItems, clearCart } = useCart()
  const [formData, setFormData] = useState({
    fullName: '', phone: '', state: '', city: '', area: '', pin: '',
    address: '', plan: '', months: '', slot: '', startDate: '', endDate: '',
    subscriptions: '', coupon: '', couponCode: ''
  })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const total = cartItems.reduce((sum, x) => sum + x.price * x.quantity, 0)

  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Order placed successfully!')
    clearCart()
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <section className="py-10 lg:py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900">Checkout</h1>
            <p className="text-gray-600 mt-2">Complete your information to start your subscription</p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-sm ring-1 ring-gray-200 p-6 space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
                    <input name="fullName" value={formData.fullName} onChange={handleChange} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent" placeholder="John Doe" required />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number *</label>
                    <input name="phone" value={formData.phone} onChange={handleChange} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent" placeholder="1234567890" required />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">State *</label>
                    <input name="state" value={formData.state} onChange={handleChange} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent" placeholder="Select State" required />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">City *</label>
                    <input name="city" value={formData.city} onChange={handleChange} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent" placeholder="Select City" required />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Area *</label>
                    <input name="area" value={formData.area} onChange={handleChange} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent" placeholder="Downtown" required />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Pin Code *</label>
                    <input name="pin" value={formData.pin} onChange={handleChange} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent" placeholder="123456" required />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Full Address *</label>
                  <textarea name="address" value={formData.address} onChange={handleChange} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent" placeholder="123, Example Street" required />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Slot *</label>
                    <input name="slot" value={formData.slot} onChange={handleChange} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent" placeholder="Select Slot" required />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Subscription Start Date *</label>
                    <input type="date" name="startDate" value={formData.startDate} onChange={handleChange} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent" required />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Subscription End Date</label>
                    <input type="date" name="endDate" value={formData.endDate} onChange={handleChange} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">No of Subscriptions *</label>
                    <input name="subscriptions" value={formData.subscriptions} onChange={handleChange} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent" placeholder="1" required />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Select a coupon</label>
                    <input name="coupon" value={formData.coupon} onChange={handleChange} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent" placeholder="Select a coupon" />
                  </div>
                  <div className="flex items-end space-x-2">
                    <input name="couponCode" value={formData.couponCode} onChange={handleChange} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent" placeholder="Enter coupon code" />
                    <button type="button" className="bg-green-600 text-white px-4 py-3 rounded-lg hover:bg-green-700">Apply</button>
                  </div>
                </div>

                <button type="submit" className="w-full bg-green-600 text-white py-4 rounded-lg font-semibold hover:bg-green-700 transition-colors">Place Order</button>
              </form>
            </div>

            <div>
              <div className="bg-white rounded-2xl shadow-sm ring-1 ring-gray-200 p-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">Order Summary</h2>
                <div className="space-y-3">
                  {cartItems.map((x) => (
                    <div key={x.id} className="flex justify-between text-sm">
                      <span>{x.name} × {x.quantity}</span>
                      <span>₹{(x.price * x.quantity).toFixed(2)}</span>
                    </div>
                  ))}
                </div>
                <div className="border-t border-gray-200 mt-4 pt-4 flex justify-between">
                  <span className="font-semibold text-gray-900">Total</span>
                  <span className="font-semibold text-gray-900">₹{total.toFixed(2)}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Checkout


