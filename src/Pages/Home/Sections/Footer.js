import React from 'react';
import { FaFacebook, FaTwitter, FaYoutube } from 'react-icons/fa';

const Footer = () => {
    const logo = require('./../../../assest/Skills-400px.png');
    return (
        <footer className="footer items-center px-4 py-20 bg-neutral text-neutral-content">
            <div className="items-center grid-flow-col">
                <img className='w-8' src={logo} alt="" />
                <p>Copyright © 2022 - All right reserved</p>
            </div>
            <div className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
                <a>
                    <FaTwitter className='text-3xl'></FaTwitter>
                </a>
                <a><FaYoutube className='text-3xl'></FaYoutube></a>
                <a><FaFacebook className='text-3xl'></FaFacebook></a>
            </div>
        </footer>
    );
};

export default Footer;