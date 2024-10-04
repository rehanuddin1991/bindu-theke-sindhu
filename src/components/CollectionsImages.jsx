import React from 'react'
import a1 from '../assets/a1.avif' 
import a2 from '../assets/a2.avif' 
import a3 from '../assets/a3.avif' 
import a4 from '../assets/a4.avif' 
import a5 from '../assets/a5.avif' 
import a6 from '../assets/a6.avif' 

const CollectionsImages = () => {
  return (
    <div className='mt-6 gap-3 items-center justify-center grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2'>
          <div className=" relative card bg-base-100 w-96 shadow-xl min-h-[540px]">
              <figure>
                  <img
                      src={a1}
                      alt="Shoes" />
              </figure>
              <div className="card-body">
                  <h2 className="card-title text-xl text-[midnightblue]">Certificate Course on Software Development & Testing & Quality Assurance
                  </h2>
                   
                  <div className="card-actions justify-end">
                      <button className=" absolute bottom-10 right-10 btn btn-primary">Details</button>
                  </div>
              </div>
          </div>

          <div className="relative card bg-base-100 w-96 shadow-xl min-h-[540px]">
              <figure>
                  <img
                      src={a2}
                      alt="Shoes" />
              </figure>
              <div className="card-body">
                  <h2 className="card-title text-xl text-[midnightblue]">Certificate Course on Web Development
                  </h2>
                   
                  <div className="card-actions justify-end">
                      <button className="btn btn-primary absolute bottom-10 right-10">Details</button>
                  </div>
              </div>
          </div>


          <div className="relative card bg-base-100 w-96 shadow-xl min-h-[540px]">
              <figure>
                  <img
                      src={a3}
                      alt="Shoes" />
              </figure>
              <div className="card-body">
                  <h2 className="card-title text-xl text-[midnightblue]"> 
                  Certified Course on Master of Python for Future Professionals (A-Z)(1st batch)
                  </h2>
                   
                  <div className="absolute bottom-10 right-10 card-actions justify-end">
                      <button className="btn btn-primary">Details</button>
                  </div>
              </div>
          </div>

          <div className=" relative card bg-base-100 w-96 shadow-xl min-h-[540px]">
              <figure>
                  <img
                      src={a4}
                      alt="Shoes" />
              </figure>
              <div className="card-body">
                  <h2 className="card-title text-xl text-[midnightblue]">Certificate Course on Software Testing & Quality Assurance
                  </h2>
                   
                  <div className="card-actions justify-end">
                      <button className="btn btn-primary absolute bottom-10 right-10">Details</button>
                  </div>
              </div>
          </div>




          <div className=" relative card bg-base-100 w-96 shadow-xl min-h-[540px]">
              <figure>
                  <img
                      src={a5}
                      alt="Shoes" />
              </figure>
              <div className="card-body">
                  <h2 className="card-title text-xl text-[midnightblue]">Certificate Course on  Machine Learning
                  </h2>
                   
                  <div className="card-actions justify-end">
                      <button className="btn btn-primary absolute bottom-10 right-10">Details</button>
                  </div>
              </div>
          </div>




          <div className="relative card bg-base-100 w-96 shadow-xl min-h-[540px]">
              <figure>
                  <img
                      src={a6}
                      alt="Shoes" />
              </figure>
              <div className="card-body">
                  <h2 className="card-title text-xl text-[midnightblue]">Certificate Course on  React and Tailwind
                  </h2>
                   
                  <div className="card-actions justify-end">
                      <button className="btn btn-primary absolute bottom-10 right-10">Details</button>
                  </div>
              </div>
          </div>
    </div>
  )
}

export default CollectionsImages