import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import "./Homepage.css"
import HeroSection from '../components/HeroSection'
import TopCollection from '../components/TopCollection'

const Homepage = () => {
  return (
    <>
    <Header/>
    <HeroSection/>
    <TopCollection/>
   {/* <Footer/> */}
    </>
  )
}

export default Homepage