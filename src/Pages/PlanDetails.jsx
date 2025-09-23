import React, { useMemo, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useCart } from '../components/CartContext'

const PlanDetails = () => {
  const navigate = useNavigate()
  const { planId } = useParams()
  const { cartItems, addItem } = useCart()

  const cartItem = useMemo(() => cartItems.find(x => x.id === planId || x.details?.planId === planId), [cartItems, planId])

  // Catalog data used when navigating directly without a cart item
  const catalog = {
    trial: {
      name: 'Trial', subtitle: 'Try Before You Commit 🍉🥝', duration: 'Monday-Saturday', price: 1599, period: '/ 2 weeks',
      features: ['5 Variety of fruits', '1 Vegetable', '1 Nut / Sprouts', '600-700 grams'], activeTab: 'regular',
      fruits: ['Banana', 'Apple', 'Papaya', 'Pomegranate', 'Seasonal mix'],
      nutrition: { calories: 220, fiber: '8g', vitaminC: '90% DV', potassium: '15% DV', protein: '6g' }
    },
    standard: {
      name: 'Standard', subtitle: 'Fresh & Nutritious, Every Day 🍎🥭', duration: 'Monday-Saturday', price: 2799, period: '/ 1 month',
      features: ['5 Variety of fruits', '1 Vegetable', '1 Nut / Sprouts', '600-700 grams'], activeTab: 'regular',
      fruits: ['Apple', 'Orange', 'Banana', 'Papaya', 'Grapes'],
      nutrition: { calories: 250, fiber: '10g', vitaminC: '120% DV', potassium: '20% DV', protein: '7g' }
    },
    corporate: {
      name: 'Corporate', subtitle: 'Fuel Your Workday 🍇🍊', duration: 'Monday-Friday', price: 2299, period: '/ 1 month',
      features: ['5 Variety of fruits', '1 Vegetable', '1 Nut / Sprouts', '600-700 grams'], activeTab: 'regular',
      fruits: ['Grapes', 'Pear', 'Kiwi', 'Orange', 'Banana'],
      nutrition: { calories: 230, fiber: '9g', vitaminC: '100% DV', potassium: '18% DV', protein: '6g' }
    },
    'mini-standard': {
      name: 'Mini Bowl - Standard Plan', subtitle: '🥣 Mini Bowl – Fresh & Light, Every Day 🍇🍌', duration: 'Monday-Saturday', price: 1799, period: '/ 1 month',
      features: ['3 Variety of fruits', '1 Vegetable', '1 Nut / Sprouts', '250 - 350 grams'], activeTab: 'mini',
      fruits: ['Banana', 'Apple', 'Seasonal mix'],
      nutrition: { calories: 170, fiber: '6g', vitaminC: '70% DV', potassium: '12% DV', protein: '4g' }
    },
    'mini-corporate': {
      name: 'Mini Bowl - Corporate Plan', subtitle: '🥣 Mini Bowl – Fresh & Light, Weekdays Only 🍇🍌', duration: 'Monday-Friday', price: 1599, period: '/ 1 month',
      features: ['3 Variety of fruits', '1 Vegetable', '1 Nut / Sprouts', '250 - 350 grams'], activeTab: 'mini',
      fruits: ['Orange', 'Pomegranate', 'Banana'],
      nutrition: { calories: 160, fiber: '5g', vitaminC: '80% DV', potassium: '10% DV', protein: '4g' }
    }
  }

  const basePlanId = (cartItem?.details?.planId) || planId
  const fallback = catalog[basePlanId]
  const name = cartItem?.name || fallback?.name || 'Plan'
  const price = cartItem?.price || fallback?.price || 0
  const currencySymbol = cartItem?.currencySymbol || '₹'
  const details = cartItem?.details || (fallback ? {
    planId: basePlanId,
    subtitle: fallback.subtitle,
    duration: fallback.duration,
    features: fallback.features,
    period: fallback.period,
    popular: false,
    activeTab: fallback.activeTab
  } : undefined)

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

  const images = planImagesById[basePlanId] || []
  const [activeImageIdx, setActiveImageIdx] = useState(0)

  const handleAddToCart = () => {
    if (cartItem) {
      addItem({ ...cartItem, quantity: 1 })
      navigate('/cart')
      return
    }
    const fallbackItem = fallback && {
      id: `${basePlanId}-${fallback.activeTab || 'regular'}`,
      name,
      price,
      quantity: 1,
      image: '🥣',
      description: details?.subtitle || 'Subscription plan',
      details: {
        planId: basePlanId,
        subtitle: details?.subtitle,
        duration: details?.duration,
        features: details?.features,
        period: details?.period,
        popular: false,
        activeTab: details?.activeTab
      },
      currencySymbol: '₹'
    }
    if (fallbackItem) {
      addItem(fallbackItem)
      navigate('/cart')
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <section className="py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <button onClick={() => navigate(-1)} className="text-sm text-gray-600 hover:text-gray-800">← Back</button>
            <nav className="hidden md:block text-sm text-gray-500" aria-label="Breadcrumb">
              <ol className="flex items-center gap-2">
                <li><button onClick={() => navigate('/', { state: { scrollTo: 'home' } })} className="hover:text-gray-700">Home</button></li>
                <li className="text-gray-300">/</li>
                <li><button onClick={() => navigate('/', { state: { scrollTo: 'plans' } })} className="hover:text-gray-700">Plans</button></li>
                <li className="text-gray-300">/</li>
                <li aria-current="page" className="text-gray-700 font-medium">{name}</li>
              </ol>
            </nav>
          </div>
          <div className="mt-6 bg-white rounded-2xl shadow-sm ring-1 ring-gray-200 p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Gallery */}
              <div>
                <div className="aspect-[4/3] w-full overflow-hidden rounded-xl border border-gray-200">
                  {images[activeImageIdx] ? (
                    <img src={images[activeImageIdx]} alt={`${name} image ${activeImageIdx + 1}`} className="w-full h-full object-cover" />
                  ) : (
                    <div className="w-full h-full bg-gray-100" />
                  )}
                </div>
                {images.length > 1 && (
                  <div className="mt-3 grid grid-cols-5 gap-2">
                    {images.map((src, idx) => (
                      <button key={idx} onClick={() => setActiveImageIdx(idx)} className={`aspect-square overflow-hidden rounded-lg border ${idx === activeImageIdx ? 'border-green-600' : 'border-gray-200'}`}>
                        <img src={src} alt={`thumb ${idx + 1}`} className="w-full h-full object-cover" />
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Summary */}
              <div className="flex flex-col justify-between lg:sticky lg:top-24 lg:self-start">
                <div className="flex items-start justify-between">
                  <div>
                    <h1 className="text-3xl font-bold text-gray-900">{name}</h1>
                    {details?.subtitle && <p className="text-gray-600 mt-2">{details.subtitle}</p>}
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-semibold text-gray-900">{currencySymbol === '₹' ? '₹' : '$'}{price.toFixed(2)}</div>
                    {details?.period && <div className="text-gray-600">{details.period}</div>}
                  </div>
                </div>
                {details?.popular && (
                  <div className="mt-3">
                    <span className="inline-block text-xs font-semibold bg-green-100 text-green-700 px-3 py-1 rounded-full">Most Popular</span>
                  </div>
                )}

                <div className="mt-2 grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div className="space-y-2">
                    <div className="text-sm text-gray-500">Duration</div>
                    <div className="text-gray-900 font-medium">{details?.duration || '—'}</div>
                  </div>
                  <div className="space-y-2">
                    <div className="text-sm text-gray-500">Type</div>
                    <div className="text-gray-900 font-medium">{details?.activeTab === 'mini' ? 'Mini Bowls' : 'Regular Bowls'}</div>
                  </div>
                </div>

                {(() => {
                  const hasFeatures = Array.isArray(details?.features) && details.features.length > 0
                  const fruitsList = details?.fruits || fallback?.fruits || []
                  const showFruitsOrFeatures = hasFeatures || fruitsList.length > 0
                  return showFruitsOrFeatures ? (
                    <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-6">
                      {hasFeatures && (
                        <div>
                          <h2 className="text-lg font-semibold text-gray-900 mb-3">What's included</h2>
                          <ul className="space-y-2">
                            {details.features.map((f, i) => (
                              <li key={i} className="flex items-center text-gray-700">
                                <svg className="w-5 h-5 text-green-600 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                                {f}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                      {fruitsList.length > 0 && (
                        <div>
                          <h3 className="text-lg font-semibold text-gray-900 mb-3">Fruits you may get</h3>
                          <ul className="list-disc pl-5 text-gray-700 space-y-1">
                            {fruitsList.map((f, i) => (
                              <li key={i}>{f}</li>
                            ))}
                          </ul>
                          <p className="text-xs text-gray-500 mt-2">Rotates seasonally and may vary by day.</p>
                        </div>
                      )}
                    </div>
                  ) : null
                })()}

                {(details?.nutrition || fallback?.nutrition) && (
                  <div className="mt-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Approx. nutrition per bowl</h3>
                    {(() => {
                      const n = details?.nutrition || fallback?.nutrition
                      if (!n) return null
                      return (
                        <div className="grid grid-cols-2 gap-3 text-sm">
                          <div className="p-3 rounded-lg bg-gray-50"><div className="text-gray-500">Calories</div><div className="font-semibold text-gray-900">{n.calories}</div></div>
                          <div className="p-3 rounded-lg bg-gray-50"><div className="text-gray-500">Fiber</div><div className="font-semibold text-gray-900">{n.fiber}</div></div>
                          <div className="p-3 rounded-lg bg-gray-50"><div className="text-gray-500">Vitamin C</div><div className="font-semibold text-gray-900">{n.vitaminC}</div></div>
                          <div className="p-3 rounded-lg bg-gray-50"><div className="text-gray-500">Potassium</div><div className="font-semibold text-gray-900">{n.potassium}</div></div>
                          <div className="p-3 rounded-lg bg-gray-50"><div className="text-gray-500">Protein</div><div className="font-semibold text-gray-900">{n.protein}</div></div>
                        </div>
                      )
                    })()}
                    <p className="text-xs text-gray-500 mt-2">Values are indicative and can vary with seasonal selection.</p>
                  </div>
                )}

                <div className="mt-8 flex flex-wrap gap-3">
                  <button onClick={handleAddToCart} className="px-5 py-3 rounded-lg bg-green-600 text-white hover:bg-green-700">Add to cart</button>
                  <button onClick={() => navigate('/cart')} className="px-5 py-3 rounded-lg border border-gray-300 hover:bg-gray-50">Go to cart</button>
                  <button onClick={() => navigate(-1)} className="px-5 py-3 rounded-lg text-gray-700 hover:text-gray-900">Back</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* More Plans */}
      <section className="pb-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Explore more plans</h2>
          {(() => {
            const names = {
              trial: 'Trial',
              standard: 'Standard',
              corporate: 'Corporate',
              'mini-standard': 'Mini Bowl - Standard Plan',
              'mini-corporate': 'Mini Bowl - Corporate Plan'
            }
            const others = Object.keys(planImagesById).filter((id) => id !== basePlanId)
            return (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {others.map((id) => (
                  <div key={id} className="bg-white rounded-xl shadow-sm ring-1 ring-gray-200 overflow-hidden">
                    <div className="aspect-[4/3] w-full overflow-hidden">
                      <button onClick={() => navigate(`/plan/${encodeURIComponent(id)}`)} className="block w-full h-full text-left">
                        <img src={(planImagesById[id] && planImagesById[id][0]) || ''} alt={names[id] || id} className="w-full h-full object-cover" />
                      </button>
                    </div>
                    <div className="p-4">
                      <button onClick={() => navigate(`/plan/${encodeURIComponent(id)}`)} className="font-semibold text-gray-900 hover:text-green-700">
                        {names[id] || id}
                      </button>
                      <p className="text-sm text-gray-600 mt-1">Healthy, curated fruit bowls</p>
                      <div className="mt-4 flex gap-2">
                        <button onClick={() => navigate(`/plan/${encodeURIComponent(id)}`)} className="px-3 py-2 text-sm rounded-lg border border-gray-300 hover:bg-gray-50">View details</button>
                        <button onClick={() => navigate('/cart')} className="px-3 py-2 text-sm rounded-lg bg-green-600 text-white hover:bg-green-700">Go to Cart</button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )
          })()}
        </div>
      </section>
    </div>
  )
}

export default PlanDetails


