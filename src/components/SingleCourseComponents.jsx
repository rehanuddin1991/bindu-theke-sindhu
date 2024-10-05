import React from 'react'
import { Link } from 'react-router-dom';

const SingleCourseComponents = ({ props }) => {
    const { title,author,course_id,details,img_url,price } = props;
    return (
         
            <div className="relative mt-2 mb-2 min-h-[500px] card bg-neutral text-neutral-content w-80">

                <figure className="px-10 pt-10">
                    <img
                        src={img_url}
                        alt="Shoes"
                        className="rounded-xl" />
                </figure>
                <div className="card-body">
                    <h2 className=" card-title">{title} </h2>
                    <p>{details.slice(0,90)}..</p>
                    <h2 className="card-title">${price}</h2>
                    <div className="card-actions justify-end">
                       <Link to={ `/course/${course_id}`}>  <button className="btn absolute bottom-4 right-4">Details</button> </Link>
                    </div>
                </div>
            </div>
         
    )
}

export default SingleCourseComponents