import React from 'react'
import { Link } from 'react-router-dom';

const SingleCourseComponents = ({ props }) => {
    const { title,author,course_id,details,img_url,price } = props;
    return (
         
            <div className="relative mt-2 mb-2 sm:min-h-[624px] md:min-h-[624px] lg:min-h-[624px] card bg-neutral text-neutral-content 
            w-64 md:w-80 lg:w-80 sm:w-80 mx-auto ">

                <figure className="px-1 pt-1">
                    <img
                        src={img_url}
                        alt="course"
                        className="rounded-xl " />
                </figure>
                <div className="card-body text-left  ">
                    <h2 className=" card-title">{title } </h2>
                    <p className='text-[chartreuse]'>{details.slice(0,100)}..</p>
                    <h2 className="card-title">${price}</h2>
                    <div className="card-actions justify-end">
                       <Link to={ `/course/${course_id}`}>  <button className="btn absolute bottom-4 right-4">Details</button> </Link>
                    </div>
                </div>
            </div>
         
    )
}

export default SingleCourseComponents