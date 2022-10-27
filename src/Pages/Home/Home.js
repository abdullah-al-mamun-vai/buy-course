import React from 'react';
import Lottie from "lottie-react";
import homePic from './../../assest/home-pic.json'
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className='2xl:py-24 lg:py-24 sm:py-16'>
            <section className="dark:bg-gray-800 dark:text-gray-100">
                <div className="container flex justify-center p-6 mx-auto sm:py-12 lg:py-24  2xl:flex-row lg:flex-col md:flex-col">
                    <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
                        <Lottie className=" object-contain 2xl:w-max h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128" animationData={homePic}></Lottie>
                    </div>
                    <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:text-left">
                        <h1 className="text-5xl font-bold leading-none sm:text-6xl">
                            Build your skill advance
                        </h1>
                        <p className="mt-6 mb-8 text-lg sm:mb-12">A new online resource store offering high quality, on-screen and paperless educational resources to support business & IT courses in secondary schools and colleges.We have a great training facility in Perthshire ready to train you or your team in our facilitator led courses. The facility is also available for meeting room hire at very competitive rates.
                        </p>
                        <div className="flex md:flex-col xl:flex-row mx-auto sm:items-center sm:justify-center sm:space-y-0  lg:justify-start">
                            <Link to={'/courses'} className="ring ring-blue-500 hover:bg-blue-600 hover:text-white transition ring-offset-0 2xl:mr-2 px-3 lg:mr-2 md:w-full sm:w-full mx-auto md:mb-3 py-3 text-lg font-semibold border rounded dark:bg-violet-400 dark:text-gray-900 dark:border-gray-100">Get Started</Link>
                            <Link to={'/'} className="ring ring-blue-500 hover:bg-blue-600 hover:text-white transition px-3 py-3 md:w-full sm:w-full  mx-auto text-lg font-semibold border rounded dark:border-gray-100">Some Questions</Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;