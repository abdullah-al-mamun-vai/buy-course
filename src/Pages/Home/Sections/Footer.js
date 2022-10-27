import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
    const logo = require('./../../../assest/Skills-400px.png');
    return (
        <footer className="px-4 bg-gradient-to-r from-slate-600 to-zinc-700 text-gray-100">
            <div className="container flex flex-col justify-between py-10 mx-auto space-y-8 2xl:flex-row lg:flex-row 2xl:space-y-0 lg:space-y-0">
                <div className="2xl:w-1/3 lg:w-1/3">
                    <Link rel="noopener noreferrer" href="#" className="flex justify-center space-x-3 2xl:justify-start lg:justify-start">
                        <div className="flex items-center justify-center w-12 h-12 rounded-full bg-violet-400">

                            <img src={logo} alt="" />
                        </div>
                        <span className="self-center text-2xl font-semibold">Build Skill</span>
                    </Link>
                </div>
                <div className="grid grid-cols-2 text-sm gap-x-3 gap-y-8 2xl:w-2/3 lg:w-2/3 sm:grid-cols-2">
                    <div className="space-y-3">
                        <h3 className="tracking-wide uppercase text-gray-50">Product</h3>
                        <ul className="space-y-1">
                            <li>
                                <Link rel="noopener noreferrer" href="#">Features</Link>
                            </li>
                            <li>
                                <Link rel="noopener noreferrer" href="#">Integrations</Link>
                            </li>
                            <li>
                                <Link rel="noopener noreferrer" href="#">Pricing</Link>
                            </li>
                            <li>
                                <Link rel="noopener noreferrer" href="#">FAQ</Link>
                            </li>
                        </ul>
                    </div>


                    <div className="space-y-3">
                        <div className="uppercase text-gray-50">Social media</div>
                        <div className="flex justify-start space-x-3">
                            <Link title="Facebook" className="flex items-center p-1">
                                <FaFacebook></FaFacebook>
                            </Link>
                            <Link title="Twitter" className="flex items-center p-1">
                                <FaTwitter></FaTwitter>
                            </Link>
                            <Link title="Instagram" className="flex items-center p-1">
                                <FaInstagram></FaInstagram>
                            </Link>
                        </div>
                    </div>
                </div>
            </div >
            <div className="py-6 text-sm text-center text-gray-400">© Build Skill Company Co. All rights reserved.</div>
        </footer >
    );
};

export default Footer;