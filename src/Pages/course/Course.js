import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import CourseCart from './CourseCart';

const Course = () => {
    const courses = useLoaderData();
    return (
        <div className='container mx-auto grid 2xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-1 my-9'>
            <div className=' grid 2xl:col-span-3 2xl:grid-cols-3  lg:col-span-2  lg:grid-cols-2 sm:grid-cols-1'>
                {
                    courses.map(cat => <CourseCart course={cat} key={cat._id}></CourseCart>)
                }

            </div>
            <div>
                <ul className="menu bg-base-600 w-full rounded-box">
                    {
                        courses.map(single => <li className='border border-orange-400' key={single._id}><Link to={`course/${single._id}`} className='underline'>{single.name}</Link></li>)
                    }

                </ul>
            </div>
        </div>
    );
};

export default Course;