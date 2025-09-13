import React from 'react'
import Hero from './components/Hero'
import Features from './components/Features'
import Architecture from './components/Architecture'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-dark-bg text-white">
      <Hero />
      <Features />
      <Architecture />
      <Footer />
    </div>
  )
}

export default App
