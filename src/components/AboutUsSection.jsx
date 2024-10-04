import React from 'react'
import rehan from '../assets/rehan.jpg' 
const AboutUsSection = () => {
  return (
    <div>
        <div className="hero bg-[indigo]">
  <div className="hero-content flex-col lg:flex-row-reverse items-start justify-between">
    <img  
      src={rehan}
      className="max-w-sm lg:ml-20 rounded-lg shadow-2xl" />
    <div className='space-y-5 text-left'>
      <h1 className="text-4xl font-bold ">Managing Director</h1>
      <h1 className="text-3xl font-bold ">Mr. Rehan Uddin</h1>
      <h1 className="text-2xl font-bold ">Computer Engineer</h1>
      
      
      <button className="btn btn-primary"> &nbsp;&nbsp;&nbsp;&nbsp; Let's Contact</button>
    </div>
  </div>
</div>
    </div>
  )
}

export default AboutUsSection