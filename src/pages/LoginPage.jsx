import React, { useContext } from 'react'
import { authContext } from '../Provider/AuthProvider'
import { Navigate } from 'react-router-dom'
const LoginPage = () => {
  const {signInWithGoogle,setUser}=useContext(authContext)

  const handleGoogleSignIn = () => {
    signInWithGoogle().then((res) => {
      //console.log(res.user)
      setUser(res.user)
      if(res.user)
      {
        Navigate("/")
      }
      
    })
    .catch((err)=> {console.error(err)})
  }

  return (
    <div>
      <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse">
     
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <form className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
          <button onClick={handleGoogleSignIn} className="btn btn-primary">Login with Google</button>
          <button className="btn btn-primary">Login</button>
        </div>
      </form>
    </div>
  </div>
</div>
    </div>
  )
}

export default LoginPage