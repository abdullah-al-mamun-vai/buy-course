import React from 'react';
import { Link } from 'react-router-dom';
import { FaClock, FaStar, FaTimes, FaUser } from 'react-icons/fa'
const CourseCart = ({ course }) => {
    return (
        <div className="card w-full bg-base-100 shadow-xl">
            <Link to={`/course/${course._id}`}>
                <figure className="">
                    <img src={course.thumbnail} alt="Shoes" className="rounded-xl h-32 w-11/12 mx-auto" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{course.name}</h2>
                    <p>{course.about.length > 50 ? course.about.slice(0, 50) + '...' : '...'}</p>
                    <p>by {course.instructor.name}</p>
                    <hr />
                    <div className="flex justify-between items-center">
                        <div>

                        </div>
                        <div><p className='font-semibold capitalize'>price: {course.price}</p></div>
                    </div>
                </div>
            </Link>
        </div >
    );
};

export default CourseCart;