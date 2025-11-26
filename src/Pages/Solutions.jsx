import React from 'react'
import HeroSolutions from '../components/Solutions/Herosolutions'
import ExpertiseSolution from '../components/Solutions/Expertise'
import WhyChooseUs from '../components/WhyChoose'
import Footer from '../components/Footer'
import MarketingSection from '../components/DigitalMarketing'
import ContactSection from '../components/Contact/Contacts'

function Solutions() {
  return (
    <div>
        <HeroSolutions/>
        <ExpertiseSolution/>
        <MarketingSection/>
        <WhyChooseUs/>
        <ContactSection/>
        <Footer/>
    </div>
  )
}

export default Solutions