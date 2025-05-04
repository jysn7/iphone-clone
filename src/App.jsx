import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Highlights from './components/Highlights'
import VideoCarousel from './components/VideoCarousel'
import Model from './components/Model'
import Features from './components/Features'
import Footer from './components/Footer'
import Chip from './components/Chip'


const App = () => {
  return (
    <main className='bg-black'>
      <Navbar />
      <Hero />
      <Highlights />
      <VideoCarousel />
      <Model />
      <Features />
      <Chip />
      <Footer />
    </main>
  )
}

export default App
