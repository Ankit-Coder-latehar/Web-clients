import React from 'react'
import HeroAgencies from '../components/agency/HeroAgency'
import AgencyCardsUI from '../components/agency/AgencyCards'
import Footer from '../components/Footer'

function Agency() {
  return (
    <div>
        <HeroAgencies/>
        <AgencyCardsUI/>
        <Footer/>
    </div>
  )
}

export default Agency