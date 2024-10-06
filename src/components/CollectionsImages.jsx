import React from 'react'
import a1 from '../assets/a1.png' 
import a2 from '../assets/a2.png' 
import a3 from '../assets/a3.png' 
import a4 from '../assets/a4.png' 
import a5 from '../assets/a5.png' 
import a6 from '../assets/a6.png' 

const CollectionsImages = () => {
  return (
    <div className='  mt-6 gap-8 bg-[white] items-center justify-center grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2'>
          <div className="mx-auto mt-2 mb-2 relative card bg-base-300 w-64 sm:w-96 md:w-[20rem] lg:w-[20rem] shadow-xl min-h-[540px]">
              <figure>
                  <img
                      src={a1}
                      alt="course" />
              </figure>
              <div className="card-body">
                  <h2 className="card-title text-xl text-[midnightblue]">Certificate Course on Software Development & Testing & Quality Assurance
                  </h2>
                   
                  <div className="card-actions justify-end">
                      <button className=" absolute bottom-10 right-10 btn btn-primary">Details</button>
                  </div>
              </div>
          </div>

           <div className="mx-auto mt-2 mb-2 relative card bg-base-300 w-64 
           sm:w-96 md:w-[20rem] lg:w-[20rem] shadow-xl min-h-[540px]">
              <figure>
                  <img
                      src={a2}
                      alt="course" />
              </figure>
              <div className="card-body">
                  <h2 className="card-title text-xl text-[midnightblue]">Certificate Course on Web Development
                  </h2>
                   
                  <div className="card-actions justify-end">
                      <button className="btn btn-primary absolute bottom-10 right-10">Details</button>
                  </div>
              </div>
          </div>


           <div className="mx-auto mt-2 mb-2 relative card bg-base-300 w-64 sm:w-96 md:w-[20rem] lg:w-[20rem] shadow-xl min-h-[540px]">
              <figure>
                  <img
                      src={a3}
                      alt="course" />
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

          <div className="mx-auto mt-2 mb-2 relative card bg-base-300 w-64 sm:w-96 md:w-[20rem] lg:w-[20rem] shadow-xl min-h-[540px]">
              <figure>
                  <img
                      src={a4}
                      alt="course" />
              </figure>
              <div className="card-body">
                  <h2 className="card-title text-xl text-[midnightblue]">Certificate Course on Software Testing & Quality Assurance
                  </h2>
                   
                  <div className="card-actions justify-end">
                      <button className="btn btn-primary absolute bottom-10 right-10">Details</button>
                  </div>
              </div>
          </div>




          <div className="mx-auto mt-2 mb-2 relative card bg-base-300 w-64 sm:w-96 md:w-[20rem] lg:w-[20rem] shadow-xl min-h-[540px]">
              <figure>
                  <img
                      src={a5}
                      alt="course" />
              </figure>
              <div className="card-body">
                  <h2 className="card-title text-xl text-[midnightblue]">Certificate Course on  Machine Learning
                  </h2>
                   
                  <div className="card-actions justify-end">
                      <button className="btn btn-primary absolute bottom-10 right-10">Details</button>
                  </div>
              </div>
          </div>




           <div className="mx-auto mt-2 mb-2 relative card bg-base-300 w-64 sm:w-96 md:w-[20rem] lg:w-[20rem] shadow-xl min-h-[540px]">
              <figure>
                  <img
                      src={a6}
                      alt="course" />
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