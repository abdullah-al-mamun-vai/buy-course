import React, { useContext } from 'react';
import { FaBars } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../Auth/Authcontext';

const Header = () => {
    const { handleLogOut } = useContext(UserContext);
    return (
        <div className="navbar bg-gradient-to-r from-sky-500 to-indigo-500">
            <div className="flex-1">
                <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
            </div>


            {/* <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost btn-circle">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-compact mt-3 p-2 shadow bg-base-100 rounded-box w-52">
        <li><a>Homepage</a></li>
        <li><a>Portfolio</a></li>
        <li><a>About</a></li>
      </ul>
    </div> */}


            <div className="flex-none">

                <div className="md:dropdown">
                    <ul tabIndex={0} className="menu lg:menu-horizontal sm:menu-compact p-0 text-white uppercase font-semibold sm:dropdown-content">
                        <li><Link to={'/home'}>home</Link></li>
                        <li><Link to={'/courses'}>courses</Link></li>
                        <li><Link to={'/'}>Blog</Link></li>
                        <li className='bg-base-100 text-black rounded-sm'><Link to={'/login'}>Login</Link></li>
                        <li><Link to={'/sign'}>Sign up</Link></li>
                        <li onClick={handleLogOut}><Link to={'/'}>Log out</Link></li>

                    </ul>
                    <label tabIndex={0} className="btn btn-ghost btn-circle">
                        <FaBars className="h-5 w-5" ></FaBars>
                    </label>
                </div>
                <div className="">
                    <label className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <img src="https://placeimg.com/80/80/people" />
                        </div>
                    </label>
                </div>
            </div>
        </div>
    );
};

export default Header;