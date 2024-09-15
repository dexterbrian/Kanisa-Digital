import { useState } from 'react'
import './App.css'
import NavBar from './components/NavBar'
import HeroSection from './components/home/HeroSection'
import HomeContent from './components/home/HomeContent'

function App() {

  return (
    <>
      <NavBar />
      <HeroSection />
      <HomeContent />
    </>
  )
}

export default App
