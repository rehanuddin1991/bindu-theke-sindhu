import React, { useEffect, useState } from 'react'
import SingleCourseComponents from './SingleCourseComponents';

const AllCourses = () => {
   const [courses,setCourses]=useState([]);

   useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('https://bindu-backend.vercel.app/course');
      const json = await response.json();
      setCourses(json);
    };

    fetchData();
  }, []);
    
    
        
  return  ( 
    <div className='  mt-4 grid grid-cols-1 gap-4 justify-center items-center 
     sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 mx-auto'> 
      {
        courses.map((item,index)=>{
          return <SingleCourseComponents  key={item.course_id} props={item}></SingleCourseComponents>
            
        })
      }
         
    </div>
  )
   
}

export default AllCourses