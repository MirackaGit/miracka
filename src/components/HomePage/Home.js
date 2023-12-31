import React from 'react'
import HeroBannerHP from './HeroBannerHP'
import OurServicesHp from './OurServicesHp'
import AboutusHP from './AboutusHP'
import ServicesAnimationHP from './ServicesAnimationHP'
import TeamHP from './TeamHP'
import ClientsHP from './ClientsHP'
import HearfromourclientsHP from './HearfromourclientsHP'
import HeaderPage from '../HeaderFooter/HeaderPage'

const Home = () => {
  return (
    <div>
      <HeaderPage title={"Home"}/>
      <HeroBannerHP />
      <OurServicesHp />
      <AboutusHP />
      <ServicesAnimationHP />
      <TeamHP />
      <ClientsHP />
      <HearfromourclientsHP />
    </div>
  )
}

export default Home
