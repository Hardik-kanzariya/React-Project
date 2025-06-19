import { useState } from 'react'
import FaqComp from './Components/FAQ/FaqComp'
import OuerMenu2 from './Components/OuerMenu/OuerMenu2'
import HeroSection from './Components/HeroSection/HeroSection'
import Header from './Components/Header/Header'
import HeroSectionOuerMenu from './Components/HeroSectionOuerMenu/HeroSectionOuerMenu'
import ErrorSection from './Components/Erro/Error'
import Footer from './Components/Footer/Footer'
function App() {
  

  return (
    <>
      < Header />
      <HeroSection  />
      <FaqComp />
      <HeroSectionOuerMenu />
      <OuerMenu2 />
      <ErrorSection />
      <Footer />
    </>
  )
}

export default App
