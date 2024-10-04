import React from 'react'

const ContactUsSection = () => {
  return (
    <div>
        <div className="container hero  mt-4 min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse">
     
    <div className="card bg-base-100 w-full   shrink-0 shadow-2xl">
      <form className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Your Email</span>
          </label>
          <input type="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Subject</span>
          </label>
          <textarea name="" id="" className="input input-bordered" ></textarea>
           
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Submit</button>
        </div>
      </form>
    </div>
  </div>
</div>
    </div>
  )
}

export default ContactUsSection