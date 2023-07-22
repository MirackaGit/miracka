import React from 'react'
import HeroBannerHP from './HeroBannerHP'
import OurServicesHp from './OurServicesHp'
import AboutusHP from './AboutusHP'
import ServicesAnimationHP from './ServicesAnimationHP'

const Home = () => {
  return (
    <div>
      <HeroBannerHP />
      <OurServicesHp />
      <AboutusHP />
      <ServicesAnimationHP />
      <div className='mt-96'></div>
    </div>
  )
}

export default Home
