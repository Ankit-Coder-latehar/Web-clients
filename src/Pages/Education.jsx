import React from 'react'
import HeroEducation from '../components/Education/HeroEducation'
import Footer from '../components/Footer'
import WhyChooseUs from '../components/WhyChoose'
import FAQSection from '../components/Faq'
import Testimonials from '../components/Testimonials'
import MatriCards from '../components/Education/EducationCards'
import EducationMarketing from '../components/Education/Educationmarket'
import Growth from '../components/Education/Growth'
import Goal from '../components/Education/Goals'
import MaximizeROI from '../components/WebDesign/Secons'
import OnlineVsOfflineMarketing from '../components/Education/OnlineEducation'
import EducationTabs from '../components/Education/EducationTabs'
import ClientsSection from '../components/Clients'

function Education() {
  return (
    <div>
        <HeroEducation/>
        <ClientsSection/>
        <MaximizeROI/>
        <Goal/>
        <OnlineVsOfflineMarketing/>
        <EducationTabs/>
        <EducationMarketing/>
        <MatriCards/>
       <Growth/>
        <Testimonials/>
        <WhyChooseUs/>
        <FAQSection/>
        <Footer/>
    </div>
  )
}

export default Education