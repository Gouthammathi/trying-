import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './Pages/Home'
import Cart from './Pages/Cart'
import Wishlist from './Pages/Wishlist'
import Checkout from './Pages/Checkout'
import ScrollToTop from './components/ScrollToTop'
import PlanDetails from './Pages/PlanDetails'

const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/wishlist" element={<Wishlist />} />
          {/* Details and Contact routes removed; Contact is a section in Home */}
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/plan/:planId" element={<PlanDetails />} />
        </Routes>
      </Layout>
    </Router>
  )
}

export default App
