import React from 'react'
import HeroPart from '../components/Seo/Heropart'
import SeoExpertise from '../components/Seo/SeoExpertise'
import SeoProcess from '../components/Seo/SeoProcess'
import WhySeoServices from '../components/Seo/WhySeo'
import Testimonials from '../components/Testimonials'
import Footer from '../components/Footer'
import ContactSection from '../components/Contact/Contacts'

function Seo() {
  return (
    <div>
        <HeroPart/>
        <SeoExpertise/>
        <SeoProcess/>
        <WhySeoServices/>
        <Testimonials/>
        <ContactSection/>
        <Footer/>
    </div>
  )
}

export default Seo