
import React, { useState } from 'react'

const Plans = () => {
  const [selectedPlan, setSelectedPlan] = useState('standard')

  const plans = [
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
    },
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
      badge: '',
      popular: false
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

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-50 to-green-100 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Choose Your Perfect
              <span className="text-green-600 block">Fruit Plan</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Fresh, nutritious fruit bowls delivered to your doorstep. 
              Start your healthy journey with our flexible subscription plans.
            </p>
          </div>
        </div>
      </section>

      {/* Plans Section */}
      <section className="py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {plans.map((plan) => (
              <div
                key={plan.id}
                className={`relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 ${
                  plan.popular ? 'ring-2 ring-green-500 scale-105' : ''
                }`}
              >
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
                    onClick={() => setSelectedPlan(plan.id)}
                  >
                    {selectedPlan === plan.id ? 'Selected' : 'Choose Plan'}
                  </button>
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

      {/* CTA Section */}
      <section className="py-16 bg-green-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Start Your Healthy Journey?
          </h2>
          <p className="text-xl text-green-100 mb-8">
            Join thousands of satisfied customers who trust Fruitopia for their daily nutrition needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-green-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors duration-200">
              Start Your Trial
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-green-600 transition-colors duration-200">
              Contact Us
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Plans