import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/shared/Navbar'
import Footer from '../components/shared/Footer'

const MainLayout = () => {
  return (
    <div className='bg-[#166176] text-white'>  <Navbar /> <Outlet/>  <Footer/></div>
  )
}

export default MainLayout