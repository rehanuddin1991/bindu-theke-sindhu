import React from 'react'
import bannerImage from '../assets/bannerImg.jpg' 
const Banner = () => {
  return (
    <div className=''>
        <div
  className="hero  "
  style={{
    backgroundImage: `url(${bannerImage}) `,
  }}>
  <div className="hero-overlay bg-opacity-40"></div>
  <div className="hero-content text-neutral-content text-center">
    <div className="max-w-md">
      <h1 className="mb-5 text-3xl text-[midnightblue] font-bold">300+ Regular Program</h1>
      <h1 className="mb-5 text-3xl text-[seashell] font-bold">100+ Trainers</h1>
      <h1 className="mb-5 text-3xl text-[seashell] font-bold">50000+ Trainees</h1>
      <h1 className="mb-5 text-4xl text-[khaki] font-bold">200+ Clients</h1>
       
      <button className="btn btn-primary">Let's Join With Us</button>
    </div>
  </div>
</div>
    </div>
  )
}

export default Banner