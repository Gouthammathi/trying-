import React, { useEffect, useState } from 'react'
import Hero from './Hero'
import Contact from './Contact'
import { useCart } from '../components/CartContext'
import { useLocation, useNavigate } from 'react-router-dom'

const Home = () => {
  const [selectedPlan, setSelectedPlan] = useState('standard')
  const { addItem } = useCart()
  const navigate = useNavigate()
  const location = useLocation()
  const [carouselIndexByPlan, setCarouselIndexByPlan] = useState({})
  const [activeTab, setActiveTab] = useState('regular')

  const featuredProducts = [
    {
      id: 1,
      name: 'Organic Strawberries',
      price: '$12.99',
      image: '🍓',
      description: 'Sweet, juicy strawberries packed with vitamin C'
    },
    {
      id: 2,
      name: 'Fresh Avocados',
      price: '$8.99',
      image: '🥑',
      description: 'Creamy avocados perfect for healthy meals'
    },
    {
      id: 3,
      name: 'Mixed Berry Pack',
      price: '$15.99',
      image: '🫐',
      description: 'A delightful mix of blueberries, raspberries, and blackberries'
    },
    {
      id: 4,
      name: 'Citrus Collection',
      price: '$11.99',
      image: '🍊',
      description: 'Fresh oranges, lemons, and grapefruits'
    }
  ]

  const regularPlans = [
    {
      id: 'trial',
      name: 'Trial',
      subtitle: 'Try Before You Commit 🍉🥝',
      duration: 'Monday-Saturday',
      price: '₹1,599',
      period: '/ 2 weeks',
      description: 'Not ready for a full-month plan? The Trail Plan is perfect for a 2-week taste of fresh, handpicked fruit bowls, Ideal for testing a healthy habit or enjoying a flexible option—nourish your body with nature\'s best, hassle-free 🌿✨',
      features: [
        '5 Variety of fruits',
        '1 Vegetable',
        '1 Nut / Sprouts',
        '600-700 grams'
      ],
      badge: '',
      popular: false
    },
    {
      id: 'standard',
      name: 'Standard',
      subtitle: 'Fresh & Nutritious, Every Day 🍎🥭',
      duration: 'Monday-Saturday',
      price: '₹2,799',
      period: '/ 1 month',
      description: 'New to fruit bowls? Our Standard Plan delivers a curated mix of fresh, flavorful fruits from Monday to Saturday—perfect for building or maintaining a healthy habit. A simple, delicious way to enjoy nature\'s best. 🌿✨',
      features: [
        '5 Variety of fruits',
        '1 Vegetable',
        '1 Nut / Sprouts',
        '600-700 grams'
      ],
      badge: 'Most Popular',
      popular: true
    },
    {
      id: 'corporate',
      name: 'Corporate',
      subtitle: 'Fuel Your Workday 🍇🍊',
      duration: 'Monday-Friday',
      price: '₹2,299',
      period: '/ 1 month',
      description: 'Our Corporate Plan keeps professionals energized & productive with fresh, curated fruit bowls—a hassle-free way to enjoy healthy breaks at work. Perfect for individuals & teams, delivered right to your office. 🚀✨',
      features: [
        '5 Variety of fruits',
        '1 Vegetable',
        '1 Nut / Sprouts',
        '600-700 grams'
      ],
      badge: '',
      popular: false
    }
  ]

  const miniPlans = [
    {
      id: 'mini-standard',
      name: 'Mini Bowl - Standard Plan',
      subtitle: '🥣 Mini Bowl – Fresh & Light, Every Day 🍇🍌',
      duration: 'Monday-Saturday',
      price: '₹1,799',
      period: '/ 1 month',
      description: 'New to fruit bowls or prefer smaller portions? Our Mini Bowl is perfect for a quick, healthy boost—fresh fruits, just the right size, delivered Monday to Saturday. 🥗💚 Perfect For: Kids, light eaters, or anyone craving a quick, healthy snack. A fresh and fun way to add fruits to your day — light, tasty, and just enough! 🍓💚',
      features: [
        '3 Variety of fruits',
        '1 Vegetable',
        '1 Nut / Sprouts',
        '250 - 350 grams'
      ],
      badge: 'Most Popular',
      popular: true
    },
    {
      id: 'mini-corporate',
      name: 'Mini Bowl - Corporate Plan',
      subtitle: '🥣 Mini Bowl – Fresh & Light, Weekdays Only 🍇🍌',
      duration: 'Monday-Friday',
      price: '₹1,599',
      period: '/ 1 month',
      description: 'New to fruit bowls or prefer smaller portions? Our Mini Bowl (Corporate Plan) is perfect for a quick, healthy boost — fresh fruits, just the right size, delivered Monday to Friday. 🥗💼 Perfect For: Kids, light eaters, or anyone craving a quick, healthy snack during busy weekdays. A fresh and fun way to stay energized — light, tasty, and just enough! 🍓💚',
      features: [
        '3 Variety of fruits',
        '1 Vegetable',
        '1 Nut / Sprouts',
        '250 - 350 grams'
      ],
      badge: '',
      popular: false
    }
  ]

  // Get current plans based on active tab
  const currentPlans = activeTab === 'regular' ? regularPlans : miniPlans

  const planImagesById = {
    trial: [
      'https://images.unsplash.com/photo-1569870492215-9b847a5fd74b?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1502741338009-cac2772e18bc?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=1200&auto=format&fit=crop'
    ],
    standard: [
      'https://images.unsplash.com/photo-1547514701-42782101795e?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1490474418585-ba9bad8fd0ea?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1457296898342-cdd24585d095?q=80&w=1200&auto=format&fit=crop'
    ],
    corporate: [
      'https://images.unsplash.com/photo-1498550744921-75f79806b8a7?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=1200&auto=format&fit=crop'
    ],
    'mini-standard': [
      'https://images.unsplash.com/photo-1547514701-9d73f1e4a63c?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1601004890684-d8cbf643f5f2?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1546069901-eacef0df6022?q=80&w=1200&auto=format&fit=crop'
    ],
    'mini-corporate': [
      'https://images.unsplash.com/photo-1490818387583-1baba5e638af?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1576402187878-974f70cbafa2?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1200&auto=format&fit=crop'
    ]
  }

  const goToPrev = (planId) => {
    const images = planImagesById[planId] || []
    if (images.length === 0) return
    setCarouselIndexByPlan((prev) => {
      const current = prev[planId] ?? 0
      const next = (current - 1 + images.length) % images.length
      return { ...prev, [planId]: next }
    })
  }

  const goToNext = (planId) => {
    const images = planImagesById[planId] || []
    if (images.length === 0) return
    setCarouselIndexByPlan((prev) => {
      const current = prev[planId] ?? 0
      const next = (current + 1) % images.length
      return { ...prev, [planId]: next }
    })
  }

  useEffect(() => {
    const target = location.state && location.state.scrollTo
    if (target) {
      const el = document.getElementById(target)
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }, 50)
      }
    }
  }, [location.state])

  const parsePriceToNumber = (priceString) => {
    if (typeof priceString === 'number') return priceString
    const digits = String(priceString).replace(/[^0-9.]/g, '').replace(/\.(?=.*\.)/g, '')
    return Number(digits)
  }

  const handleSubscribe = (plan) => {
    const priceNumber = parsePriceToNumber(plan.price)
    addItem({
      id: `${plan.id}-${activeTab}`,
      name: plan.name,
      price: priceNumber,
      quantity: 1,
      image: '🥣',
      description: plan.subtitle || 'Subscription plan',
      details: {
        planId: plan.id,
        subtitle: plan.subtitle,
        duration: plan.duration,
        features: plan.features,
        period: plan.period,
        popular: plan.popular,
        activeTab
      },
      currencySymbol: '₹'
    })
    navigate('/cart')
  }

  return (
    <div id="home">
      <Hero />
      
      

      {/* Plans Section */}
      <section id="plans" className="py-16 lg:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Choose Your Perfect
              <span className="text-green-600 block">Fruit Plan</span>
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Fresh, nutritious fruit bowls delivered to your doorstep. 
              Start your healthy journey with our flexible subscription plans.
            </p>
          </div>

          {/* Tab Navigation */}
          <div className="flex flex-col items-center mb-12">
            <div className="bg-white rounded-lg p-1 shadow-lg mb-4">
              <button
                onClick={() => setActiveTab('regular')}
                className={`px-8 py-3 rounded-md font-semibold transition-all duration-200 ${
                  activeTab === 'regular'
                    ? 'bg-green-600 text-white shadow-lg'
                    : 'text-gray-700 hover:text-green-600 hover:bg-gray-50'
                }`}
              >
                Regular Bowls
              </button>
              <button
                onClick={() => setActiveTab('mini')}
                className={`px-8 py-3 rounded-md font-semibold transition-all duration-200 ${
                  activeTab === 'mini'
                    ? 'bg-green-600 text-white shadow-lg'
                    : 'text-gray-700 hover:text-green-600 hover:bg-gray-50'
                }`}
              >
                Mini Bowls
              </button>
            </div>
            
            {/* Tab Description */}
            <div className="text-center max-w-2xl">
              {activeTab === 'regular' ? (
                <p className="text-gray-600">
                  <span className="font-semibold text-green-600">Regular Bowls</span> - Full-sized nutritious fruit bowls perfect for adults and families. 
                  Contains 5 varieties of fruits, vegetables, nuts/sprouts with 600-700 grams of fresh produce.
                </p>
              ) : (
                <p className="text-gray-600">
                  <span className="font-semibold text-green-600">Mini Bowls</span> - Smaller portions perfect for kids, light eaters, or quick healthy snacks. 
                  Contains 3 varieties of fruits, vegetables, nuts/sprouts with 250-350 grams of fresh produce.
                </p>
              )}
            </div>
          </div>

          <div key={activeTab} className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 transition-all duration-500 ease-in-out">
            {currentPlans.map((plan) => (
              <div
                key={plan.id}
                className={`relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 ${
                  plan.popular ? 'ring-2 ring-green-500 scale-105' : ''
                }`}
              >
                {/* Images Carousel */}
                <div className="relative h-40 md:h-48 lg:h-52 w-full overflow-hidden rounded-t-2xl">
                  {(() => {
                    const images = planImagesById[plan.id] || []
                    const currentIndex = carouselIndexByPlan[plan.id] ?? 0
                    const currentSrc = images[currentIndex]
                    return (
                      <>
                        {currentSrc && (
                          <img src={currentSrc} alt={`${plan.name} image ${currentIndex + 1}`} className="h-full w-full object-cover" />
                        )}
                        {images.length > 1 && (
                          <>
                            <button onClick={() => goToPrev(plan.id)} className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-700 rounded-full w-8 h-8 flex items-center justify-center shadow">
                              <span className="sr-only">Previous</span>
                              ‹
                            </button>
                            <button onClick={() => goToNext(plan.id)} className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-700 rounded-full w-8 h-8 flex items-center justify-center shadow">
                              <span className="sr-only">Next</span>
                              ›
                            </button>
                            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5">
                              {images.map((_, idx) => (
                                <span key={idx} className={`h-1.5 w-1.5 rounded-full ${idx === currentIndex ? 'bg-green-600' : 'bg-white/70'}`}></span>
                              ))}
                            </div>
                          </>
                        )}
                      </>
                    )
                  })()}
                </div>
                {/* Popular Badge */}
                {plan.badge && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-green-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      {plan.badge}
                    </span>
                  </div>
                )}

                <div className="p-8">
                  {/* Plan Header */}
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                    <p className="text-green-600 font-medium mb-3">{plan.duration}</p>
                    <div className="flex items-center justify-center mb-4">
                      <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                      <span className="text-lg text-gray-600 ml-1">{plan.period}</span>
                    </div>
                  </div>

                  {/* Plan Description */}
                  <div className="mb-6">
                    <p className="text-gray-600 text-sm leading-relaxed">{plan.description}</p>
                  </div>

                  {/* Features */}
                  <div className="mb-8">
                    <h4 className="font-semibold text-gray-900 mb-4">What's Included:</h4>
                    <ul className="space-y-3">
                      {plan.features.map((feature, index) => (
                        <li key={index} className="flex items-center">
                          <svg className="w-5 h-5 text-green-600 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* CTA Button */}
                  <button
                    className={`w-full py-4 rounded-xl font-semibold text-lg transition-all duration-200 ${
                      plan.popular
                        ? 'bg-green-600 text-white hover:bg-green-700 shadow-lg hover:shadow-xl'
                        : 'bg-gray-100 text-gray-900 hover:bg-green-600 hover:text-white'
                    }`}
                    onClick={() => handleSubscribe(plan)}
                  >
                    Subscribe
                  </button>
                  <div className="mt-3 text-center">
                    <button
                      onClick={() => navigate(`/plan/${encodeURIComponent(plan.id)}`)}
                      className="text-sm font-medium text-green-700 hover:text-green-800"
                    >
                      View more
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Fruitopia Plans?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Experience the benefits of our carefully curated fruit subscription service
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Fresh Daily Delivery</h3>
              <p className="text-gray-600">Hand-picked fruits delivered fresh to your doorstep every day</p>
            </div>

            <div className="text-center">
              <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Quality Guaranteed</h3>
              <p className="text-gray-600">100% organic, pesticide-free fruits from certified farms</p>
            </div>

            <div className="text-center">
              <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Flexible Plans</h3>
              <p className="text-gray-600">Choose from various plans that fit your lifestyle and preferences</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Why Choose Fruitopia?
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                We're passionate about bringing you the freshest, highest-quality organic fruits 
                from trusted farms around the world. Our commitment to sustainability and health 
                drives everything we do.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-green-100 p-2 rounded-full mr-4 mt-1">
                    <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Farm-to-Door Delivery</h3>
                    <p className="text-gray-600">Direct from certified organic farms to your doorstep in 24 hours</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-green-100 p-2 rounded-full mr-4 mt-1">
                    <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Quality Guarantee</h3>
                    <p className="text-gray-600">100% satisfaction guarantee or your money back</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-green-100 p-2 rounded-full mr-4 mt-1">
                    <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Sustainable Practices</h3>
                    <p className="text-gray-600">Eco-friendly packaging and carbon-neutral delivery methods</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-green-100 to-green-200 rounded-2xl p-8 text-center">
              <div className="text-8xl mb-4">🌱</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Join the Movement</h3>
              <p className="text-gray-700 mb-6">
                Be part of the sustainable living revolution. Choose organic, 
                choose health, choose Fruitopia.
              </p>
              <button className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors duration-200">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-green-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Stay Fresh & Healthy
          </h2>
          <p className="text-xl text-green-100 mb-8">
            Subscribe to our newsletter for weekly fruit tips, seasonal offers, and health insights.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg border-0 focus:ring-2 focus:ring-green-300 focus:outline-none"
            />
            <button className="bg-white text-green-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200">
              Subscribe
            </button>
          </div>
        </div>
      </section>

      {/* Contact Section (embedded) */}
      <section id="contact">
        <Contact />
      </section>
    </div>
  )
}

export default Home