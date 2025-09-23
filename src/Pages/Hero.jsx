import React from 'react'

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-green-50 to-green-100 py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Fresh Fruits,
            <span className="text-green-600 block">Healthy Living</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Discover nature's finest organic fruits delivered fresh to your doorstep. 
            Join thousands of health-conscious families who trust Fruitopia for premium quality produce.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => {
                const plansSection = document.getElementById('plans')
                if (plansSection) {
                  plansSection.scrollIntoView({ 
                    behavior: 'smooth',
                    block: 'start'
                  })
                }
              }}
              className="bg-green-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-green-700 transition-colors duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Explore Plans
            </button>
            <button
              onClick={() => {
                const detailsSection = document.getElementById('details')
                if (detailsSection) {
                  detailsSection.scrollIntoView({ 
                    behavior: 'smooth',
                    block: 'start'
                  })
                }
              }}
              className="border-2 border-green-600 text-green-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-green-600 hover:text-white transition-colors duration-200"
            >
              View Products
            </button>
          </div>
        </div>
        
        {/* Feature highlights */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">100% Organic</h3>
            <p className="text-gray-600">Certified organic fruits sourced from trusted farms</p>
          </div>
          
          <div className="text-center">
            <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Fresh Daily</h3>
            <p className="text-gray-600">Hand-picked and delivered within 24 hours</p>
          </div>
          
          <div className="text-center">
            <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Sustainable</h3>
            <p className="text-gray-600">Eco-friendly packaging and carbon-neutral delivery</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero