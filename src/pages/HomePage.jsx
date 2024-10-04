import React from 'react'
import ContactUsSection from '../components/ContactUsSection'
import Banner from '../components/Banner'
import HowWorksSection from '../components/HowWorksSection'
import CollectionsImages from '../components/CollectionsImages'

const HomePage = () => {
  return (
    <div className='mt-4'>
      <Banner/>
      <HowWorksSection/>  
      <CollectionsImages/>  
      <ContactUsSection/> 
    </div>
  )
}

export default HomePage