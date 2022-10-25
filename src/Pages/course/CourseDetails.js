import React from 'react';
import { FaStar, FaUser } from 'react-icons/fa';
import { Link, useLoaderData } from 'react-router-dom';

const CourseDetails = () => {
    const details = useLoaderData();
    const { name, about, picture, rating, instructor, duration, price } = details;
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content ">
                    <div className="w-7/12">
                        <img className='w-full h-5/6' src={picture} alt="" />
                        <h1 className="text-5xl font-bold capitalize">{name}</h1>
                        <p className="py-6">{about}</p>
                        <div className='flex justify-between items-center'>
                            <div>
                                <p>Instructor: {instructor.name}</p>
                                <div>
                                    <p className='flex items-center font-semibold mr-1'>Rating : <FaStar className="mr-1 text-orange-600"></FaStar>{rating}</p>
                                    <p className='flex items-center font-semibold '>Total-Seat: <FaUser className="mr-1 text-orange-600"></FaUser>{instructor.total_seat}</p>
                                    <p>duration  : {duration}</p>
                                </div>

                            </div>
                            <button className="btn btn-primary"><Link to={`/checkout/${details._id}`}>Enroll Now</Link></button>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default CourseDetails;