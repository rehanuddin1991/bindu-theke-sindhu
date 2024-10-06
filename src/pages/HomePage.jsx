import React from 'react'
import ContactUsSection from '../components/ContactUsSection'
import Banner from '../components/Banner'
import HowWorksSection from '../components/HowWorksSection'
import CollectionsImages from '../components/CollectionsImages'
import AboutUsSection from '../components/AboutUsSection'

const HomePage = () => {
  return (
    <div className='' >
      <Banner/>
      <HowWorksSection/>  
       <CollectionsImages/>  
      <ContactUsSection/> 
      <AboutUsSection/> 
    </div>
  )
}

export default HomePage