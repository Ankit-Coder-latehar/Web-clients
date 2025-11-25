import React from 'react'
import WebDesignHero from '../components/WebDesign/Herosect'
import MaximizeROI from '../components/WebDesign/Secons'
import WebDesignServices from '../components/WebDesign/WhyWebDesign'
import Testimonials from '../components/Testimonials'
import WhyChooseUs from '../components/WhyChoose'
import Footer from '../components/Footer'
import WhatSetsApart from '../components/WebDesign/WhatSetsApart'

function Web() {
  return (
    <div>
        <WebDesignHero/>
        <MaximizeROI/>
        <WebDesignServices/>
        <WhatSetsApart/>
        <Testimonials/>
        <WhyChooseUs/>
        <Footer/>
    </div>
  )
}

export default Web