import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { authContext } from '../Provider/AuthProvider'
import toast from 'react-hot-toast'

const RegisterPage = () => {
  const {createUser}=useContext(authContext)
  const navigate=useNavigate();
  const handleRegister= 
  (event) => {
     

    event.preventDefault();
    /*const name=event.target.name.value;
    const email=event.target.email.value;
    const password=event.target.s.value; 
    console.log(name)
    */
   const form=new FormData(event.currentTarget);
   const name=form.get("name");
   const email=form.get("email");
   const password=form.get("password");
   if(password.length<6) {
    alert("password must be at least 6 characters") ;
    return null ;
   }
   //console.log(email)
   createUser(email, password)
   .then((res) => {
    toast.success('Successfully Registered!');
    event.target.name.value="";
    event.target.email.value="";
    event.target.password.value="";
    navigate("/");

     

   })
   .catch((err) => {toast.success("something wrong!! please try again");})
     
     
  }
  return (
    <div  className='mt-6'>  
      <div className="hero bg-white   ">
        <div className="   hero-content flex-col lg:flex-row-reverse">
           
          <div className="card bg-base-100 text-[green] text-2xl  w-[16rem] md:w-[400px] sm:w-[400px] lg:w-[500px]   shrink-0 shadow-2xl">
            <form className=" " onSubmit={handleRegister}>
              <fieldset>
                <legend>Register Here</legend>
              </fieldset>
            
            <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input type="text" name="name" placeholder="type name" className="input  input-bordered input-info w-full max-w-xs" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email"  name="email" placeholder="email" className="input input-bordered input-info w-full max-w-xs" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" name="password" placeholder="password" required className="input input-bordered
                 input-info w-full max-w-xs"  />
                 
              </div>

              <div className="form-control mt-6">
                <input className="btn btn-primary" type="submit" value="Register" />
               
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Already have an account?</span>
                </label>
               <Link to="/login"> <button   className="btn btn-info">Login</button>
               </Link>
                 
              </div>


             
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RegisterPage