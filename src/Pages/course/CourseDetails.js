import React from 'react';
import { useLoaderData } from 'react-router-dom';

const CourseDetails = () => {
    const details = useLoaderData();
    const { name, about, picture, rating, instructor, duration, price } = details;
    console.log(details)
    return (
        <div>

        </div>
    );
};

export default CourseDetails;