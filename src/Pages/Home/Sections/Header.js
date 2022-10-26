import React, { useContext, useEffect, useState } from 'react';
import { FaBars, FaCross, FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../Auth/Authcontext';
const Header = () => {
    const { user, handleLogout } = useContext(UserContext);

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const logo = require('./../../../assest/Skills-400px.png');

    return (
        <div className="bg-gradient-to-r from-violet-500 to-fuchsia-500">
            <div className="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
                <div className="relative flex items-center justify-between">
                    <Link
                        to={'/home'}
                        aria-label="Company"
                        title="Company"
                        className="inline-flex items-center"
                    >
                        <img className='w-8' src={logo} alt="" />
                        <span className="ml-2 text-xl font-bold tracking-wide text-gray-100 uppercase">
                            Build Skill
                        </span>
                    </Link>
                    <div className='flex justify-between'>
                        <ul className="flex items-center md:hidden space-x-8 lg:flex 2xl:mr-3">
                            <li>
                                <Link to={'/home'}
                                    aria-label="Home"
                                    title="Home"
                                    className="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400"
                                >
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link to={'/courses'}
                                    aria-label="Courses"
                                    title="Courses"
                                    className="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400"
                                >
                                    courses
                                </Link>
                            </li>
                            <li>
                                <Link to={'/'}
                                    aria-label="Blog"
                                    title="Blog"
                                    className="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400"
                                >
                                    blog
                                </Link>
                            </li>
                            {!user?.email ?
                                <>
                                    <li>
                                        <Link to={'/login'}
                                            aria-label="Login"
                                            title="Login"
                                            className="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400"
                                        >
                                            login
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            href="/sign"
                                            to={'/sign'}
                                            className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
                                            aria-label="Sign up"
                                            title="Sign up"
                                        >
                                            Sign up
                                        </Link>
                                    </li>
                                </>
                                :
                                <>
                                    <li>
                                        <button onClick={handleLogout}
                                            className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
                                        >
                                            Log Out
                                        </button>
                                    </li>

                                </>
                            }
                        </ul>
                        <div className='md:hidden'>
                            {
                                user?.photoURL ? <button className="tooltip tooltip-warning" data-tip={user?.displayName}>
                                    <img className=' w-12 h-12 rounded-full' src={user?.photoURL} alt="" />
                                </button> : <div className="tooltip tooltip-warning" data-tip={user?.displayName}>
                                    <button className="btn btn-warning"><FaUser /></button>
                                </div>

                            }
                        </div>
                    </div>
                    <div className="2xl:hidden lg:hidden md:block sm:block">
                        <div className='flex'>
                            <button
                                aria-label="Open Menu"
                                title="Open Menu"
                                className="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline"
                                onClick={() => setIsMenuOpen(true)}
                            >
                                <FaBars></FaBars>

                            </button>
                            <div className='md:display'>
                                {
                                    user?.photoURL ? <button className="tooltip tooltip-warning" data-tip={user?.displayName}>
                                        <img className=' w-12 h-12 rounded-full' src={user?.photoURL} alt="" />
                                    </button> : <div className="tooltip tooltip-warning" data-tip={user?.displayName}>
                                        <button className="btn btn-warning"><FaUser /></button>
                                    </div>

                                }
                            </div>
                        </div>
                        {isMenuOpen && (
                            <div className="absolute top-0 left-0 w-full">
                                <div className="p-5 bg-white border rounded shadow-sm">
                                    <div className="flex items-center justify-between mb-4">
                                        <div>
                                            <Link
                                                to={'/home'}
                                                aria-label="Company"
                                                title="Company"
                                                className="inline-flex items-center"
                                            >

                                                <span className="ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase">
                                                    Company
                                                </span>
                                            </Link>
                                        </div>
                                        <div>
                                            <button
                                                aria-label="Close Menu"
                                                title="Close Menu"
                                                className="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                                                onClick={() => setIsMenuOpen(false)}
                                            >
                                                <FaCross></FaCross>
                                            </button>
                                        </div>
                                    </div>
                                    <nav>
                                        <ul className="space-y-4">
                                            <li>
                                                <Link to={'/home'}
                                                    aria-label="home"
                                                    title="home"
                                                    className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                                                >
                                                    home
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to={'/courses'}
                                                    aria-label="courses"
                                                    title="courses"
                                                    className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                                                >
                                                    courses
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to={'/'}
                                                    aria-label="blog"
                                                    title="blog"
                                                    className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                                                >
                                                    blog
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to={'/login'}
                                                    aria-label="login"
                                                    title="Login"
                                                    className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                                                >
                                                    Login
                                                </Link>
                                            </li>

                                            <li>
                                                <Link
                                                    to={'/sign'}
                                                    className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
                                                    aria-label="Sign up"
                                                    title="Sign up"
                                                >
                                                    sign up
                                                </Link>
                                            </li>
                                            <li>


                                            </li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Header;
// {/* <div className='sm:hidden md:hidden lg:block'>
// <ul className="menu menu-horizontal  p-0 text-white uppercase font-semibold ">
//     <li><Link to={'/home'}>home</Link></li>
//     <li><Link to={'/courses'}>courses</Link></li>
//     <li><Link to={'/'}>Blog</Link></li>
//     <li className='bg-base-100 text-black rounded-sm'><Link to={'/login'}>Login</Link></li>
//     <li><Link to={'/sign'}>Sign up</Link></li>
//     <li onClick={handleLogOut}><Link to={'/'}>Log out</Link></li>

// </ul>
// </div>

// <div className="">
// <label className="btn btn-ghost btn-circle avatar">
//     <div className="w-10 rounded-full">
//         <img src="https://placeimg.com/80/80/people" />
//     </div>
// </label>
// </div> */}