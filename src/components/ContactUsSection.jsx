import React from 'react'

const ContactUsSection = () => {
  return (
    <div>
      <div className="hero  bg-base-100 text-[indigo] ">
  <div className="hero-content gap-24  flex-col lg:flex-row-reverse md:flex-row-reverse ">
    <div className="text-center lg:text-left">
      <h1 className="text-2xl font-bold">Contact Us!</h1>
      <p className="py-6">Bindu Theke Sindhu Software ltd. <br /> Banani Dhaka <br /> bindusindhu@gmail.com
      </p>
    </div>
    <div className="card bg-base-100 w-full max-w-64 lg:max-w-sm md:max-w-sm shrink-0 shadow-2xl">
      <form className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" className=" input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Message</span>
          </label>
          <input type="text" placeholder="Message" className="input input-bordered" required />
           
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