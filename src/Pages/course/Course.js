import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import CourseCart from './CourseCart';

const Course = () => {
    const courses = useLoaderData();
    return (
        <div className='grid 2xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-1 container mx-auto my-9'>
            <div className='  2xl:col-span-3 lg:cols-span-2 grid 2xl:grid-cols-3 lg:grid-cols-2 sm:grid-cols-1 gap-2'>
                {
                    courses.map(cat => <CourseCart course={cat} key={cat._id}></CourseCart>)
                }

            </div>
            <div>
                <ul className="menu bg-base-100 w-full rounded-box">
                    {
                        courses.map(single => <li key={single._id}><Link to={`course/${single._id}`} className='underline'>{single.name}</Link></li>)
                    }

                </ul>
            </div>
        </div>
    );
};

export default Course;