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
                    <div className='h-36'>
                        <h2 className="card-title capitalize">{course.name}</h2>
                        <p>{course.about.length > 50 ? course.about.slice(0, 50) + '...' : '...'}</p>
                        <p>by <Link className='text-blue-500 font-semibold capitalize'>{course.instructor.name}</Link></p>
                    </div>
                    <hr />
                    <div className="flex justify-between items-center">
                        <div>
                            <div>
                                <p className='flex items-center'><FaClock className="mr-1 text-orange-600"></FaClock>{course.duration}</p>
                                </div>
                            <div className='flex items-center'>
                                <p className='flex items-center font-semibold mr-1'><FaStar className="mr-1 text-orange-600"></FaStar>{course.rating}</p>
                                <p className='flex items-center font-semibold '><FaUser className="mr-1 text-orange-600"></FaUser>{course.instructor.total_seat}</p>
                            </div>
                        </div>
                        <div><p className='font-semibold capitalize'>price: {course.price}</p></div>
                    </div>
                </div>
            </Link>
        </div >
    );
};

export default CourseCart;