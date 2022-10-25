import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import CourseCart from './CourseCart';

const Course = () => {
    const courses = useLoaderData();
    return (
        <div className='grid grid-cols-4 container mx-auto'>
            <div className='col-span-3 grid grid-cols-3 gap-2'>
                {
                    courses.map(cat => <CourseCart course={cat} key={cat._id}></CourseCart>)
                }

            </div>

        </div>
    );
};

export default Course;