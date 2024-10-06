import React from 'react'
import rehan from '../assets/rehan.jpg' 
const AboutUsSection = () => {
  return (
    <div>
      <div className="hero bg-[whitesmoke]  ">
  <div className="hero-content bg-white flex-col lg:flex-row md:flex-row">
    <img
      src={rehan}
      className="max-w-52 lg:max-w-sm md:max-w-sm rounded-lg shadow-2xl" />
    <div className='text-[indigo]'>
    <h1 className="text-xl font-bold ">Managing Director</h1>
      <h1 className="text-2xl font-bold text-[orange] ">Mr. Rehan Uddin</h1>
      <h1 className="text-xl font-bold ">Computer Engineer</h1>
      <p className="py-6 text-[darkcyan] text-xl">
        I am an optimistic person and also a good planer. I have vast experience at IT industry. I want to share my knowledge and experience with you
      </p>
      <button className="btn btn-info ">Let's Connect</button>
    </div>
  </div>
</div>
    </div>
  )
}

export default AboutUsSection