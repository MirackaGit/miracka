import React from 'react'
import HeroBannerHP from './HeroBannerHP'
import OurServicesHp from './OurServicesHp'
import AboutusHP from './AboutusHP'
import ServicesAnimationHP from './ServicesAnimationHP'
import TeamHP from './TeamHP'
import ClientsHP from './ClientsHP'
import HearfromourclientsHP from './HearfromourclientsHP'

const Home = () => {
  return (
    <div>
      <HeroBannerHP />
      <OurServicesHp />
      <AboutusHP />
      <ServicesAnimationHP />
      <TeamHP />
      <ClientsHP />
      <HearfromourclientsHP />
      <div className='mt-96'></div>
    </div>
  )
}

export default Home
