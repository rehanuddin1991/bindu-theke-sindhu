import React from 'react'

const ContactUsSection = () => {
  return (
    <div>


<div className="hero bg-[darkcyan]    mt-4">
  <div className="hero-content flex-col lg:flex-row-reverse ">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Contact Us </h1>
      <p className="py-6">Bindu Theke Sindhu Software ltd. <br /> Banani Dhaka <br /> bindusindhu@gmail.com
      </p>
    </div>
    <div className="card bg-base-100    shrink-0 shadow-2xl">
      <form className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text font-bold">Your Email</span>
          </label>
          <input type="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text font-bold">Subject</span>
          </label>
          <textarea cols="30" placeholder='Put some text here..' rows="10" name=""  id="" className="input input-bordered" ></textarea>
           
           
          
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Submit</button>
        </div>
      </form>
    </div>
  </div>
</div>



        <div className="container hero  mt-4  ">
   
</div>
    </div>
  )
}

export default ContactUsSection