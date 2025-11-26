import React from 'react'
import WebDesignHero from '../components/WebDesign/Herosect'
import MaximizeROI from '../components/WebDesign/Secons'
import WebDesignServices from '../components/WebDesign/WhyWebDesign'
import Testimonials from '../components/Testimonials'
import WhyChooseUs from '../components/WhyChoose'
import Footer from '../components/Footer'
import WhatSetsApart from '../components/WebDesign/WhatSetsApart'
import ContactSection from '../components/Contact/Contacts'

function Web() {
  return (
    <div>
        <WebDesignHero/>
        <MaximizeROI/>
        <WebDesignServices/>
        <WhatSetsApart/>
        <Testimonials/>
        <WhyChooseUs/>
        <ContactSection/>
        <Footer/>
    </div>
  )
}

export default Web