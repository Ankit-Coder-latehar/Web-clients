import React from 'react'
import HeroIndustries from '../components/Industries/HeroIndustries'
import EducationMarketingSection from '../components/Industries/Marketing'
import EducationCards from '../components/Industries/Card'
import Footer from '../components/Footer'

function Industry() {
  return (
    <div>
        <HeroIndustries/>
        <EducationMarketingSection/>
        <EducationCards/>
        <Footer/>
    </div>
  )
}

export default Industry