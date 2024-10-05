import React, { useContext } from 'react'
import { authContext } from '../Provider/AuthProvider'
import { Navigate, Outlet } from 'react-router-dom';
import AllCourses from '../components/AllCourses';

const Course = () => {
  const {user}=useContext(authContext);
 if(!user?.email) return <Navigate to="/login"/> 
 return (
  <div className='bg-[whitesmoke] mt-6'> 
    <AllCourses/>
  </div>
 )
   
}

export default Course