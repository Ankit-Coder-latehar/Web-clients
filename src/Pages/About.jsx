import React from 'react'
import AboutHero from '../components/About/AboutHero'
import AboutHeader from '../components/About/AboutHeader'
import WhyChooseUs from '../components/WhyChoose'
import Footer from '../components/Footer'

function About() {
  return (
    <div>
        <AboutHeader/>
        <AboutHero/>
        <WhyChooseUs/>
        <Footer/>
    </div>
  )
}

export default About