import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { useCart } from './CartContext'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const navigate = useNavigate()
  const location = useLocation()
  const { itemCount } = useCart()

  const navigation = [
    { name: 'Home', href: 'home' },
    { name: 'Plans', href: 'plans' },
    { name: 'Contact', href: 'contact' },
  ]

  const handleScrollTo = (elementId) => {
    const performScroll = () => {
      const element = document.getElementById(elementId)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
    }

    if (location.pathname !== '/') {
      navigate('/')
      // Wait for Home to mount before scrolling
      requestAnimationFrame(() => {
        setTimeout(performScroll, 50)
      })
    } else {
      performScroll()
    }

    setIsMenuOpen(false)
  }

  const handleGoToCart = () => {
    navigate('/cart')
    setIsMenuOpen(false)
  }

  return (
    <header className="bg-white/90 backdrop-blur supports-[backdrop-filter]:bg-white/70 border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <button 
              onClick={() => {
                if (location.pathname !== '/') {
                  navigate('/')
                } else {
                  window.scrollTo({ top: 0, behavior: 'smooth' })
                }
                setIsMenuOpen(false)
              }}
              className="flex items-center"
            >
              <span className="text-2xl font-bold text-green-600">Fruitopia</span>
            </button>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navigation.map((item) => (
              <button
                key={item.name}
                onClick={() => handleScrollTo(item.href)}
                className="px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 text-gray-700 hover:text-green-600 hover:bg-gray-50"
              >
                {item.name}
              </button>
            ))}
          </nav>

          {/* Action Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <button
              onClick={handleGoToCart}
              className="p-2 text-gray-700 hover:text-green-600 transition-colors duration-200 relative"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13l2.5 5m6-5v6a2 2 0 01-2 2H9a2 2 0 01-2-2v-6m8 0V9a2 2 0 00-2-2H9a2 2 0 00-2 2v4.01" />
              </svg>
              <span className="absolute -top-1 -right-1 bg-green-600 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">{itemCount}</span>
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-md text-gray-700 hover:text-green-600 hover:bg-gray-100"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-gray-200">
              {navigation.map((item) => (
                <button
                  key={item.name}
                  onClick={() => handleScrollTo(item.href)}
                  className="block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 text-gray-700 hover:text-green-600 hover:bg-gray-50 w-full text-left"
                >
                  {item.name}
                </button>
              ))}
              <div className="flex items-center space-x-4 pt-2">
                <button
                  onClick={handleGoToCart}
                  className="flex items-center px-3 py-2 text-gray-700 hover:text-green-600"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13l2.5 5m6-5v6a2 2 0 01-2 2H9a2 2 0 01-2-2v-6m8 0V9a2 2 0 00-2-2H9a2 2 0 00-2 2v4.01" />
                  </svg>
                  Cart ({itemCount})
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header