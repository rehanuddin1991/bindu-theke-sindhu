import React, { useContext, useEffect, useState } from 'react'
import { Link, Navigate, useParams } from 'react-router-dom'
import { authContext } from '../Provider/AuthProvider';

const CourseDetailsPage = () => {
  const { user } = useContext(authContext);
  if (!user?.email) return <Navigate to="/login" />
  const [courses, setCourses] = useState([]);
  const { courseId } = useParams();
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`https://bindu-backend.vercel.app/course/${courseId}`);
      const data = await response.json();
      if (data) {
        setCourses(data);
      }
      else {
        setCourses(null);
      }
    };

    fetchData();
  }, []);


  return (
    <div>
      <div className="card bg-base-100 w-full shadow-xl text-xl  ">
        <figure>
          <img
            src={courses?.img_url}
            alt="course" />
        </figure>
        <div className="card-body text-center text-[indigo]">
          <h2 className="card-title  text-left">
           
             Course Title: {courses?.title}! <br /> Price: {courses?.price} <br /> Duration: {courses?.duration} 
             <br /> Lesson: {courses?.lession} 
             <br /> Level: {courses?.level}
             <br /> Ratings: {courses?.ratings}  
          </h2>
          <p className='text-justify text-[darkcyan]'>{courses?.details}</p>
          <br />
          <div className="card-actions justify-center">
            <button className='btn btn-success text-[white]'>Let's Enroll</button>
           <Link to="/"> <button className='btn btn-info text-[white]'>Any Query?</button></Link>
             
          </div>
        </div>
      </div>
 
       </div>
  )
}

export default CourseDetailsPage