import React from 'react';
import { useLoaderData } from 'react-router-dom';

const CourseDetails = () => {
    const details = useLoaderData();
    const { name, about, picture, rating, instructor, duration, price } = details;
    console.log(details)
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content ">
                    <div className="w-7/12">
                        <img className='w-full h-5/6' src={picture} alt="" />
                        <h1 className="text-5xl font-bold capitalize">{name}</h1>
                        <p className="py-6">{about}</p>
                        <button className="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CourseDetails;