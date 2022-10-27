import React, { useRef } from 'react';
import { FaClock, FaDownload, FaStar, FaTimes, FaUser } from 'react-icons/fa';
import { Link, useLoaderData } from 'react-router-dom';
import ReactToPrint from 'react-to-print';

const CourseDetails = () => {
    const ref = useRef();
    const details = useLoaderData();
    const { name, about, picture, rating, instructor, duration, price } = details;
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content ">
                    <div className="w-7/12 sm:11/12" >
                        <div ref={ref}>
                            <div className='p-2 shadow-md shadow-slate-600 rounded-lg'>
                                <img className='w-full h-5/6' src={picture} alt="" />
                            </div>
                            <h1 className="text-5xl sm:text-3xl font-bold capitalize">{name}</h1>
                            <p className="py-6 border">{about}</p>
                        </div>
                        <div className='flex justify-between items-center sm:flex-col'>
                            <div >
                                <p className='font-semibold capitalize'>Instructor: {instructor.name}</p>
                                <div>
                                    <p className='flex items-center font-semibold mr-1'>Rating : <FaStar className="mr-1 text-orange-600"></FaStar>{rating}</p>
                                    <p className='flex items-center font-semibold '>Total-Seat: <FaUser className="mr-1 text-orange-600"></FaUser>{instructor.total_seat}</p>
                                    <p className='flex items-center font-semibold '>duration  :<FaClock></FaClock> {duration}</p>
                                </div>

                            </div>
                            <div className='flex flex-col'>
                                <button className="btn btn-primary"><Link to={`/checkout/${details._id}`}>Enroll Now</Link></button>
                                <ReactToPrint trigger={() => <button className='btn btn-primary mt-4'><FaDownload className='mr-1' />Download Summary</button>} content={() => ref.current} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default CourseDetails;